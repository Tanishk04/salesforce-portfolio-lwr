import { LightningElement } from 'lwc';
import { profile, about as bio, approach, philosophy, experience, achievements, problemExamples, navLinks } from 'portfolio/data';
import { applyDocumentShell, initRevealElements, setDocumentTitle } from 'portfolio/utils';

export default class About extends LightningElement {
  profile = profile;
  bio = bio;
  approach = approach;
  philosophy = philosophy;
  experience = experience;
  achievements = achievements;
  problemExamples = problemExamples;
  currentPage = 'about';

  _revCleanup = () => {};

  get navRendered() {
    return navLinks.map((l) => ({
      ...l,
      itemClass: this.currentPage === l.key ? 'nav-link is-active' : 'nav-link',
    }));
  }

  connectedCallback() {
    applyDocumentShell();
    setDocumentTitle(`About · Tanishk Raikwar · Salesforce Developer`);
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
