(function () {
	'use strict';

	const View = window.View;

	class MainView extends View {
		constructor(options = {}) {
			super(options);

			let allPages = document.querySelector('.js-allforms');

			let startPage = document.createElement('div');
			startPage.classList.add('js-start');

			allPages.appendChild(startPage);

			this._el = document.querySelector('.js-allforms').querySelector(".js-start");
			this.hide();

			let playButton = new Button({
				className: 'play_button',
				text: 'play',
				attrs: {
					type: 'click'
				}
			}).render();

			let signInButton = new Button({
				text: 'sign in',
				attrs: {
					type: 'click'
				}
			}).render();

			let signUpButton = new Button({
				text: 'sign up',
				attrs: {
					type: 'click'
				}
			}).render();

			startPage.appendChild(playButton.el);
			startPage.appendChild(signInButton.el);
			startPage.appendChild(signUpButton.el);

			allPages.playButton = playButton;
			allPages.signInButton = signInButton;
			allPages.signUpButton = signUpButton;
			allPages.startPage = startPage;

			playButton.on('click', event => {
				event.preventDefault();
				//Warning
			});
			signInButton.on('click', event => {
				event.preventDefault();
				this.router.go('/signin');
			});
			signUpButton.on('click', event => {
				event.preventDefault();
				this.router.go('/signup');
			});
		}

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
