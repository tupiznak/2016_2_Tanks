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
            this.show();
        }

        resume(options = {}) {
            if (window.user.attributes['id']===-1) {
                this.router.go('/');
            }
            else {
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
                    alert("Получены данные " + event.data);
                };

                socket.onerror = function(error) {
                    alert("Ошибка " + error.message);
                };

                this.show();
            }
        }
    }

    window.PlayView = PlayView;

})();