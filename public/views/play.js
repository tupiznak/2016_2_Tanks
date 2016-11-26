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

            this.canvas = document.createElement('canvas');
            this.context = this.canvas.getContext('2d');

            window.context = this.context;

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
                window.battle.logout();
                this.router.back();
            });
            this._el.appendChild(backButton._el);
////
            let width = window.innerWidth;
            let height = window.innerHeight;
            this.canvas.width = width;
            this.canvas.height = height;
            this._el.appendChild(this.canvas);

            this.show();
        }

        resume(options = {}) {
            if (window.user.attributes['id']===-1) {
                this.router.go('/');
            }
            else {
                 document.querySelector('body').style.backgroundImage = '';

                let battle = new Battle();
                window.battle = battle;

                let socket = battle.login();

                socket.onopen = function() {
                    alert("Соединение установлено.");
                };

                socket.onclose = function(event) {
                    if (event.wasClean) {
                        alert('Соединение закрыто чисто');
                    } else {
                        alert('Обрыв соединения'); // например, "убит" процесс сервера
                    }
                    alert('Код: ' + event.code + ' причина: ' + event.reason);
                };

                socket.onmessage = function(event) {
                    let data = JSON.parse(event.data);
                    //noinspection JSValidateTypes
                    if (data.type==="count_of_users") {
                        alert("Получены данные " + event.data);
                        window.count = +data.content;
                    }
                    else {
                        for (let i=0;i<window.count;i++) {
                            window.context.rect(data.content, 20, 30, 30);
                            window.context.stroke();
                        }
                    }
                };

                socket.onerror = function(error) {
                    alert("Ошибка " + error.message);
                };

                this.show();
            }
        }

        hide(options = {}){
            this._el.hidden = true;
            console.log("ok")
             document.querySelector('body').style.backgroundImage = window.backgroundImage;
        }
    }

    window.PlayView = PlayView;

})();