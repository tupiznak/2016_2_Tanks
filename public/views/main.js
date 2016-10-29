(function () {
	'use strict';

	const View = window.View;
	const Button = window.Button;

	class MainView extends View {
		constructor(options = {}) {
			super(options);
			let startPage = document.createElement('div');
			startPage.classList.add('js-start');
			this._el = startPage;

			let allPages = document.querySelector('.js-allforms');
			allPages.appendChild(startPage);

			this.hide();

//playButton
			let playButton = new Button({
				className: 'play_button',
				text: 'play',
				attrs: {
					type: 'click'
				}
			});
			playButton.on('click', event => {
				event.preventDefault();
				//Warning
			});
			startPage.appendChild(playButton._el);
////

//signInButton
			let signInButton = new Button({
				text: 'sign in',
				attrs: {
					type: 'click'
				}
			});
			signInButton.on('click', event => {
				event.preventDefault();
				this.router.go('/signin');
			});
			startPage.appendChild(signInButton._el);
////

//signUpButton
			let signUpButton = new Button({
				text: 'sign up',
				attrs: {
					type: 'click'
				}
			});
			signUpButton.on('click', event => {
				event.preventDefault();
				this.router.go('/signup');
			});
			startPage.appendChild(signUpButton._el);
		}
//

		init(options = {}) {
			this.show();
		}
		resume(options = {}) {
			this.show();
		}
	}


	// export
	window.MainView = MainView;

})();
