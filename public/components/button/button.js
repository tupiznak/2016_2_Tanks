(function () {
	'use strict';

	const Block = window.Block;
	class Button  extends Block {
		constructor (_options={data:""}) {
			super('div', _options);
			this.template = window.fest['button/button.tmpl'];
			this.data = _options.data;

			this.render();
		}

		render () {
			this._updateHtml();
		}

		_updateHtml (){
			this._el.innerHTML = this.template(this.data);
		}
	}

	window.Button = Button;

})();
