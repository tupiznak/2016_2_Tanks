(function () {
    const Model = window.Model;

    class Battle extends Model {

        constructor(attributes) {
            super(attributes);
            this._socket = null;
        }

        get url() {
            return `ws://${this.baseUrl}/battle`;
        }

        get defaults() {
            return {
                id: -1
            }
        }

        login(){
            this._socket = new WebSocket(this.url);
            return this._socket;
        }

        logout(){
            this._socket.close();
            return this._socket;
        }

    }

    window.Battle = Battle;
})();