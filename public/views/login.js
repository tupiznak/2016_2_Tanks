(function () {
    'use strict';

    const View = window.View;
    const Form = window.Form;

    class LoginView extends View {
        constructor(options = {}) {
            super(options);
            let loginPage = document.createElement('div');
            loginPage.classList.add('js-login');
            this._el = loginPage;

            let allPages = document.querySelector('.js-allforms');
            allPages.appendChild(loginPage);

            this.hide();
       }

        init(){
            //loginForm
            let loginForm = new Form({
                el: document.createElement('div'),
                data: {}
            });
            this._el.appendChild(loginForm._get());

//playButton
            let playButton = new Button({
                data: {
                    className: 'play_button',
                    text: 'play',
                    type: 'click'
                }
            });
            playButton.on('click', event => {
                event.preventDefault();
                this.router.go('/play');
            });
            this._el.appendChild(playButton._get());
////

//playWithFreindsButton
            let playWithFreindsButton = new Button({
                data: {
                    text: 'party',
                    type: 'click'
                }
            });
            this._el.appendChild(playWithFreindsButton._get());
////

//leaderBoardButton
            let leaderBoardButton = new Button({
                data: {
                    text: 'leaders',
                    type: 'click'
                }
            });
            leaderBoardButton.on('click', event => {
                event.preventDefault();
                this.router.go('/leaderboard');
            });
            this._el.appendChild(leaderBoardButton._get());
////

//logOutButton
            let logOutButton = new Button({
                data: {
                    text: 'logout',
                    type: 'click'
                }
            });
            logOutButton.on('click', event => {
                event.preventDefault();
                let isGoodLogaut = initLogout();
                if (isGoodLogaut) {
                    window.user.online = false;
                    alert(`bye, ${window.user.login}`);
                    this.router.go('/');
                }
            });
            this._el.appendChild(logOutButton._get());
////
            this._el.loginForm = loginForm;

            this.show();
        }
        resume(options = {}) {
            //TODO need to kill back
            if (!window.user.online) {
                this.router.go('/');
            }
            else {
                this._el.loginForm.reFill({
                    data: {
                        title: `Hi, ${window.user.login} your email ${window.user.email}`
                    }
                });
                this.show();
            }
        }
    }


    // export
    window.LoginView = LoginView;

})();
