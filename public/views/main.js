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

			let el = document.createElement('text');
			el.innerHTML='Warning!!!';
			el.hidden=true;
			startPage.appendChild(el);

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
				el.hidden=false;
			});
			startPage.appendChild(playButton._get());
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
			startPage.appendChild(signInButton._get());
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
			startPage.appendChild(signUpButton._get());
////
		}

		init(options = {}) {
			this.show();
		}
		resume(options = {}) {
			this.show();
		}
	}

	window.MainView = MainView;
})();
