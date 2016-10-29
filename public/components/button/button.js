(function () {
	'use strict';

	const Block = window.Block;

	class Button  extends Block {
		constructor (options={className:"",text:""}) {
			super('button', options);
			this._el.classList.add('button');
			this._el.innerText = this._options.text || 'Press me';
/*
			this.className = options.className;
			this.text = options.text;
			this.attrs = options.attrs || [];
			this.el = document.createElement('button');
*/
		}
/*

		setAttrs (attrs) {
			Object.keys(attrs).forEach(name => {
				this.el.setAttribute(name, attrs[name]);
			})
		}

		render () {
			if(this.className!=null)
				this.el.classList.add(this.className);
			this.el.innerHTML = this.text;
			this.el.classList.add('button');
			this.setAttrs(this.attrs);
			return this;
		}

		on(type, callback) {
			//this.el.querySelector('button').addEventListener(type, callback, false);
			this.el.addEventListener(type, callback, false);
		}


		toString () {
			return this.el.outerHTML;
		}
*/
	}

	//export
	window.Button = Button;

})();
