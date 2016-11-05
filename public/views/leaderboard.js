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
        }

        init(options = {}) {
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
            if (!window.user.attributes['id']===-1) {
                this.router.go('/');
            }
            else {
                this.show();
            }
        }
    }

    window.LeaderView = LeaderView;

})();
