(function () {
    'use strict';

    const View = window.View;
    const Button = window.Button;

    class PlayView extends View {
        constructor(options = {}) {
            super(options);
            let playPage = document.createElement('div');
            playPage.classList.add('js-play');
            this._el = playPage;

            let allPages = document.querySelector('.js-allforms');
            allPages.appendChild(playPage);

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
            this._el.appendChild(backButton._el);
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


    // export
    window.PlayView = PlayView;

})();
