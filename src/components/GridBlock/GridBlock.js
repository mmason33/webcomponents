import BaseClass from '../../system/BaseClass';
import style from './style';

class GridBlock extends BaseClass {

    connectedCallback() {
        console.log('GridBlock connectedCallback');
        this.render(`
            ${style}
            ${this.dataset.imageon === 'right' ? `
                <section>
                    <div style="background-color: ${this.dataset.textsectionbgcolor};">
                        <h2>Some Headline</h2>
                        <p>Some Text Block</p>
                    </div>
                    <div>
                        <image-custom data-src="${this.dataset.src}" data-object-fit="${this.dataset.objectfit}" />
                    </div>
                </section>
                ` : `
                <section>
                    <div>
                        <image-custom data-src="${this.dataset.src}" data-object-fit="${this.dataset.objectfit}" />
                    </div>
                    <div style="background-color: ${this.dataset.textsectionbgcolor};">
                        <h2>Some Headline</h2>
                        <p>Some Text Block</p>
                    </div>
                </section>
            `}
        `);
    }
}

window.customElements.define('grid-block', GridBlock);

export default GridBlock;