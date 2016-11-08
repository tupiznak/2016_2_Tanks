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
        }

        init(options = {}) {
            let el = document.createElement('text');
            el.innerHTML = 'Warning!!!';
            el.hidden = true;
            this._el.appendChild(el);

//playButton
            let playButton = new Button({
                data: {
                    class: 'play_button',
                    text: 'play',
                    type: 'click'
                }
            });
            playButton.on('click', event => {
                event.preventDefault();
                el.hidden = false;
            });
            this._el.appendChild(playButton._get());
////

//signInButton
            let signInButton = new Button({
                data: {
                    text: 'sign in',
                    type: 'click'
                }
            });
            signInButton.on('click', event => {
                event.preventDefault();
                this.router.go('/signin');
            });
            this._el.appendChild(signInButton._get());
////

//signUpButton
            let signUpButton = new Button({
                data: {
                    text: 'sign up',
                    type: 'click'
                }
            });
            signUpButton.on('click', event => {
                event.preventDefault();
                this.router.go('/signup');
            });
            this._el.appendChild(signUpButton._get());
////
            this.show();
        }

        resume(options = {}) {
            document.querySelector('body').style.backgroundPosition = '-10px';
            this.show();
        }
    }

    window.MainView = MainView;
})();
