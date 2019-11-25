import BaseClass from '../../system/BaseClass';
import style from './style';

class ImageCustom extends BaseClass {
    connectedCallback() {
        this.render(`
            ${style}
            <img src="${this.dataset.src}" style="object-fit: ${this.dataset.objectFit};" />
        `);
    }
}

window.customElements.define('image-custom', ImageCustom);

export default ImageCustom;