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

//loginForm
            let loginForm = new Form({
                el: document.createElement('div'),
                data: {}
            });
            loginPage.appendChild(loginForm._get());

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
                this.router.go('/play');
            });
            loginPage.appendChild(playButton._get());
////

//playWithFreindsButton
            let playWithFreindsButton = new Button({
                text: 'party',
                attrs: {
                    type: 'click'
                }
            });
            loginPage.appendChild(playWithFreindsButton._get());
////

//leaderBoardButton
            let leaderBoardButton = new Button({
                text: 'leaders',
                attrs: {
                    type: 'click'
                }
            });
            leaderBoardButton.on('click', event => {
                event.preventDefault();
                this.router.go('/leaderboard');
            });
            loginPage.appendChild(leaderBoardButton._get());
////

//logOutButton
            let logOutButton = new Button({
                text: 'logout',
                attrs: {
                    type: 'click'
                }
            });
            logOutButton.on('click', event => {
                event.preventDefault();
                let isGoodLogaut = initLogout();
                if (isGoodLogaut) {
                    window.user.online = false;
                    alert(`by, ${window.user.login}`);
                    this.router.go('/');
                }
            });
            loginPage.appendChild(logOutButton._get());
////
            loginPage.loginForm = loginForm;
        }

        resume(options = {}) {
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
