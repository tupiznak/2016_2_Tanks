(function () {
    'use strict';

    const Block = window.Block;
    let Button = window.Button;

    class Form extends Block{
        constructor(options = {data: {}}) {
            super('form');
            this.template = window.fest['form/form.tmpl'];
            this.data = options.data;
            this._el = options.el;
            this.render();
        }

        render() {
            this._updateHtml();
            // this._updateDataHtml();
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

        _updateHtml() {
            this._el.innerHTML = this.template(this.data);
/*
            this.el.innerHTML = `
				<form>
                    <div class="js-data">
				    </div>
				    <div class="js-controls">
				    </div>
				<form>
			`;
*/
        }

        _updateDataHtml() {
            this._el.innerHTML = this.template(this.data);
/*
            this.el.querySelector('.js-data').innerHTML = `
					<h1>${this.data.title}</h1>
					<div>
						${this._getFields()}
					</div>
			`;
*/
        }

        _installControls() {
            let {controls = []} = this.data;

            controls.forEach(data => {
                let control = new Button({text: data.text, className: data.className});
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

        getFormTitle() {
            return this.el.querySelector('form').title;
        }

    }

    //export
    window.Form = Form;
})();
