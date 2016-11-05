(function () {
    'use strict';

    const Block = window.Block;
    let Button = window.Button;

    class Form extends Block{
        constructor(options = {data: {}}) {
            super('form',options);
            this.template = window.fest['form/form.tmpl'];
            this.data = options.data;
            this._el = options.el;
            this.render();
        }

        render() {
            this._updateDataHtml();
            this._installControls();
            this._el.classList.add('form');
        }

        reFill(options = {data: {}}) {
            this.data = options.data;

            this._updateDataHtml();
        }

        reset() {
            this._el.querySelector('form').reset();
        }

        _updateDataHtml() {
            this._el.innerHTML = this.template(this.data);

        }

        _installControls() {
            let {controls = []} = this.data;

            controls.forEach(elem => {
                let control = new Button({data: elem.data});
                this._el.querySelector('.js-controls').appendChild(control._get());
            });
        }

        getFormData() {
            let form = this._el.querySelector('form');
            let elements = form.elements;
            let fields = {};

            Object.keys(elements).forEach(element => {
                let name = elements[element].name;
                let value = elements[element].value;

                if (!name) {
                    return;
                }

                fields[name] = value;
            });

            return fields;
        }

    }

    //export
    window.Form = Form;
})();
