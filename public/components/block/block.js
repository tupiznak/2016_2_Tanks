(function () {
    'use strict';

    class Block {
        constructor(name, options = {}) {
            this._el = document.createElement(name);
            this.setAttrs(options.attrs);
            this._options = options;
        }

        setAttrs(attrs = {}) {
            Object.keys(attrs).forEach(name => {
                this._el.setAttribute(name, attrs[name]);
            });
        }

        renderTo(element) {
            element.appendChild(this._el);
        }

        append(element) {
            if (element instanceof Block) {
                this._el.appendChild(element._get());
            } else {
                this._el.appendChild(element);
            }
        }

        on(type, callback) {
            this._el.addEventListener(type, callback);
        }

        stop(type, callback) {
            this._el.removeEventListener(type, callback);
        }

        toString() {
            return this._el.outerHTML;
        }

        _get() {
            return this._el;
        }
    }

    //   export
    window.Block = Block;
})();