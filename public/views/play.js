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


            let image1 = new Image(screen.width, screen.height-150);
            image1.src = '../images/back_play1.jpg';
            image1.className='presentplay1';
            document.body.appendChild(image1);
            let image2 = new Image(screen.width, screen.height-150);
            image2.src = '../images/back_play2.jpg';
            image2.className='presentplay2';
            document.body.appendChild(image2);

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
            document.querySelector('.presentplay1').hidden=true;
            document.querySelector('.presentplay2').hidden=true;
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
                document.querySelector('.presentplay1').hidden=false;
                document.querySelector('.presentplay2').hidden=false;
                this.show();
            }
        }
    }


    // export
    window.PlayView = PlayView;

})();
