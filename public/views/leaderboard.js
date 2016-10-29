(function () {
    'use strict';

    const View = window.View;
    const Button = window.Button;

    class LeaderView extends View {
        constructor(options = {}) {
            super(options);
            let leaderPage = document.createElement('div');
            leaderPage.classList.add('js-leaderboard');
            this._el = leaderPage;

            let allPages = document.querySelector('.js-allforms');
            allPages.appendChild(leaderPage);

            this.hide();

//backButton
            let backButton = new Button({
                text: 'back',
                attrs: {
                    type: 'click'
                }
            });
            backButton.on('click', event => {
                event.preventDefault();
                this.router.back();
            });
            this._el.appendChild(backButton._get());
////
        }

        init(options = {}) {
            this.show();
        }

        resume(options = {}) {
            if (!window.user.online) {
                this.router.go('/');
            }
            else {
                this.show();
            }
        }
    }

    window.LeaderView = LeaderView;

})();
