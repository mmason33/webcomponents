import BaseClass from '../../system/BaseClass';
import routes from '../../routes/routes';
import style from './style';

class TemplatePage extends BaseClass {
    constructor(args) {
        super(args);
    }

    connectedCallback() {
        console.log('Template connectedCallback');
        routes.forEach((route) => {
            if (window.location.pathname === route.path) {

                route.content.forEach((component) => {
                    const cls = Object.keys(component)[0];
                    if (!component[cls]) return false;

                    let str = '';
                    Object.keys(component[cls]).map((item) => {
                        str += ` data-${item.toString()}="${component[cls][item]}"`;
                    });

                    this.render(`
                        <${cls}${str} />
                    `)
                });
            }
        });
    }
}

window.customElements.define('template-page', TemplatePage);

export default TemplatePage;