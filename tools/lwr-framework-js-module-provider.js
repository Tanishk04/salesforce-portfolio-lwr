import { readFileSync } from 'node:fs';
import path from 'node:path';
import { resolveModule } from '@lwc/module-resolver';
import { hashContent, readFile } from '@lwrjs/shared-utils';

function readPackageVersion(scopeDir) {
  try {
    const pkgPath = path.join(scopeDir, 'package.json');
    return JSON.parse(readFileSync(pkgPath, 'utf8')).version || '0.0.0';
  } catch {
    return '0.0.0';
  }
}

/**
 * Serves LWR runtime modules under the `lwr/*` specifier as plain JS.
 * Must run before @lwrjs/lwc-module-provider so they are not passed through
 * the LWC compiler (which rejects dynamic import(uri) in esmLoader).
 */
export default class LwrFrameworkJsModuleProvider {
  constructor(_options, context) {
    this.name = 'lwr-framework-js-module-provider';
    this.rootDir = context.config.rootDir;
    this.modules = context.config.modules ?? [];
  }

  /** @param {string | undefined} specifier */
  isLwrRuntimeSpecifier(specifier) {
    return typeof specifier === 'string' && specifier.startsWith('lwr/');
  }

  resolveRegistryEntry(specifier, importer) {
    const dirname = process.env.SF_CLI_ROOT_DIR || importer || this.rootDir;
    return resolveModule(specifier, dirname, {
      modules: this.modules,
      rootDir: this.rootDir,
    });
  }

  async getModuleEntry(moduleId, _runtimeParams = {}) {
    const { specifier, importer } = moduleId;
    if (!this.isLwrRuntimeSpecifier(specifier)) {
      return undefined;
    }
    try {
      const registry = this.resolveRegistryEntry(specifier, importer);
      const version = readPackageVersion(registry.scope);
      const id = `${specifier}@${version}|lwr-raw|client`;
      return {
        id,
        entry: registry.entry,
        specifier: registry.specifier,
        version,
      };
    } catch {
      return undefined;
    }
  }

  async getModule(moduleId, runtimeParams = {}) {
    const moduleEntry = await this.getModuleEntry(moduleId, runtimeParams);
    if (!moduleEntry) {
      return undefined;
    }
    const { namespace, name } = moduleId;
    const { id, specifier, entry, version } = moduleEntry;
    const originalSource = readFile(entry);
    const ownHash = hashContent(originalSource);
    const moduleSource = {
      id,
      namespace,
      name: name || specifier,
      version,
      specifier,
      moduleEntry,
      ownHash,
      originalSource,
    };
    return {
      ...moduleSource,
      compiledSource: originalSource,
      compiledMetadata: {},
    };
  }
}
