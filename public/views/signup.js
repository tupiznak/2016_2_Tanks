(function () {
	'use strict';

	const View = window.View;
	const Form = window.Form;

	class SignUpView extends View {
		constructor(options = {}) {
			super(options);
			let signUpPage = document.createElement('div');
			signUpPage.classList.add('js-signup');
			this._el = signUpPage;

			let allPages = document.querySelector('.js-allforms');
			allPages.appendChild(signUpPage);

			this.hide();
		}

		init(options = {}) {
//signUpForm
			let signUpForm = new Form({
				el: document.createElement('div'),
				data: {
					// title: 'Hi! Please signup',
					fields: [
						{
							name: 'login',
							type: 'text',
							autofocus: true,
							placeholder: 'Login',
							required: true
						},
						{
							name: 'email',
							type: 'email',
							placeholder: 'E-mail',
							required: true
						},
						{
							name: 'password',
							type: 'password',
							placeholder: 'Password',
							required: true
						}
					],
					controls: [
						{
							data: {
								text: 'sign up',
								type: 'submit'
							}
						}
					]
				}
			});
			signUpForm.on('submit', event => {
				event.preventDefault();

				let isGoodSingUp = initSignup(signUpForm.getFormData());
				if(isGoodSingUp){
					window.user.online = true;
					this.router.go('/login');
				}
				else {
					alert("this login is zanet");
				}
			});
			this._el.appendChild(signUpForm._get());
////

//backButton
			let backButton = new Button({
				data: {
					text: 'back',
					type: 'click'
				}
			});
			backButton.on('click', event => {
				event.preventDefault();
				this.router.back();
			});
			this._el.appendChild(backButton._el);
////
			this.show();
		}

		resume(options = {}) {
			this.show();
		}
	}


	// export
	window.SignUpView = SignUpView;

})();
