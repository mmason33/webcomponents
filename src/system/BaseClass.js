import render from './render.js';

export default class BaseClass extends HTMLElement {
    constructor(args) {
        super(args);
        this.root = this.attachShadow({mode: 'open'});
        this.render = render;

        if (this.init) this.init();
    }
}