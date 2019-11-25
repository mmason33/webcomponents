import BaseClass from '../../system/BaseClass.js';
import style from './style';

class HeroSection extends BaseClass {
    connectedCallback() {
        console.log('HeroSection connectedCallback');
        this.render(`
            ${style}
            <section style="${this.dataset.backgroundimage ? `background-image: url(${this.dataset.backgroundimage});` : `background-color: grey;`}">
                <h1 style="color: ${this.dataset.textcolor};">Hero Section</h1>
            </section>
        `);
    }
}

window.customElements.define('hero-section', HeroSection);

export default HeroSection;