(function () {
	'use strict';

	const Block = window.Block;
//TODO a lot of <><><><><><> in DOM
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

	//export
	window.Button = Button;

})();
