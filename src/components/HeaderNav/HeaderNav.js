import BaseClass from '../../system/BaseClass.js';
import style from './style';

class HeaderNav extends BaseClass {
    connectedCallback() {
        console.log('HeaderNav connectCallback');
        this.render(`
            ${style}
            <ul style="background-color: ${this.dataset.background};">
                <style>
                    a {
                        color: ${this.dataset.textcolor};
                    }
                </style>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
        `);
    }
}

window.customElements.define('header-nav', HeaderNav);

export default HeaderNav;