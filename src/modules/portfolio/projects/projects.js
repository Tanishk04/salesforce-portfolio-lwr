import { LightningElement } from 'lwc';
import { profile, projects, navLinks } from 'portfolio/data';
import { applyDocumentShell, initRevealElements, setDocumentTitle } from 'portfolio/utils';

export default class Projects extends LightningElement {
  profile = profile;
  projects = projects;
  currentPage = 'projects';

  _revCleanup = () => {};

  get navRendered() {
    return navLinks.map((l) => ({
      ...l,
      itemClass: this.currentPage === l.key ? 'nav-link is-active' : 'nav-link',
    }));
  }

  connectedCallback() {
    applyDocumentShell();
    setDocumentTitle(`Projects · Tanishk Raikwar · Salesforce Developer`);
  }

  disconnectedCallback() {
    this._revCleanup();
  }

  renderedCallback() {
    this._revCleanup();
    const found = [...this.template.querySelectorAll('[data-reveal]')];
    this._revCleanup = initRevealElements(found);
  }
}
