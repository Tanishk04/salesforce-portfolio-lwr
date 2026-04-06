  import { LightningElement } from 'lwc';
  import { profile, contact, currentWork, navLinks } from 'portfolio/data';
  import { applyDocumentShell, initRevealElements, setDocumentTitle } from 'portfolio/utils';

  export default class Home extends LightningElement {
    profile = profile;
    contact = contact;
    currentWork = currentWork;
    currentPage = 'home';

    _revCleanup = () => {};

    get navRendered() {
      return navLinks.map((l) => ({
        ...l,
        itemClass: this.currentPage === l.key ? 'nav-link is-active' : 'nav-link',
      }));
    }

    get mailtoHref() {
      return `mailto:${this.contact.email}`;
    }

    get telHref() {
      const compact = this.profile.phone.replace(/\s/g, '');
      return compact ? `tel:${compact}` : '';
    }

    connectedCallback() {
      applyDocumentShell();
      setDocumentTitle(`Home · Tanishk Raikwar · Salesforce Developer`);
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
