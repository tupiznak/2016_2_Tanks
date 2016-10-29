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


            let image = new Image(screen.width, screen.height-150);
            image.src = '../images/back_leaderboard.jpg';
            image.className='present';
            document.body.appendChild(image);

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


        pause(options = {}) {
            document.querySelector('.present').hidden=true;
            document.querySelector('.logo').hidden=false;
            this.hide();
        }
        init(options = {}) {
            this.show();
        }

        resume(options = {}) {
            if (!window.user.online) {
                this.router.go('/');
            }
            else {
                document.querySelector('.logo').hidden=true;
                document.querySelector('.present').hidden=false;
                this.show();
            }
        }
    }


    // export
    window.LeaderView = LeaderView;

})();
