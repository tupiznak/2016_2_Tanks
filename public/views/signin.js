(function () {
	'use strict';

	const View = window.View;
	const Form = window.Form;

	class SignInView extends View {
		constructor(options = {}) {
			super(options);
			let signInPage = document.createElement('div');
			signInPage.classList.add('js-signin');
			this._el = signInPage;

			let allPages = document.querySelector('.js-allforms');
			allPages.appendChild(signInPage);

			this.hide();
		}

		init(options = {}) {
//signInForm
			let signInForm = new Form({
				el: document.createElement('div'),
				data: {
					// title: 'Hi! Please signin',
					fields: [
						{
							name: 'login',
							type: 'text',
							autofocus: true,
							placeholder: 'Login',
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
								text: 'sign in',
								type: 'submit'
							}
						}
					]
				}
			});
			signInForm.on('submit', event => {
				event.preventDefault();

				let user = window.user;
				user.attributes['login']=signInForm.getFormData()['login'];
				user.attributes['password']=signInForm.getFormData()['password'];
				user.signin().then(
					result=> {
						if (result.status === 200) {
							let responseDataFields = JSON.parse(result.response);
							user.attributes['email'] = responseDataFields['email'];
							user.attributes['id'] = 1;//TODO need id in cookie
							this.router.go('/login');
						}
						else
							alert("this wrong password");
					},
					error=> {
						alert("WTF??!!");
					}
				);

				/*let isGoodSingIn = initSignin(signInForm.getFormData());
				if(isGoodSingIn){
					window.user.online = true;
					this.router.go('/login');
				}
				else {
					alert("this wrong password");
				}*/
			});
			this._el.appendChild(signInForm._get());
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
			this._el.appendChild(backButton._get());
////
			this.show();
		}

		resume(options = {}) {
			this.show();
		}
	}

	window.SignInView = SignInView;
})();
