import {popupPicture, popupPlace} from "../utils/constants";

export default class Section {
    constructor({items, renderer}, containerSelector) {
        this._renderedItems = items;
        this._renderer = renderer;
        this._container = document.querySelector(containerSelector);
    }

    addItem(item) {
        this._container.prepend(this._renderer(item));
    }

    renderItems() {
        this._renderedItems.forEach(item => {
            this.addItem(item)
        });
    }
}