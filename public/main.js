(function () {
    'use strict';

    if (typeof window === 'object') {

        let user = {};
        window.user = user;

        //let addressHost = "http://javaprodaction.herokuapp.com/";
//        let addressHost = "http://localhost:8080/";
//        window.addressHost = addressHost;

        const Router = window.Router;
        const PlayView = window.PlayView;
        const LeaderView = window.LeaderView;
        const SignInView = window.SignInView;
        const SignUpView = window.SignUpView;
        const LoginView = window.LoginView;
        const MainView = window.MainView;

        window.user = detectSession();
        let router = new Router();

        router
            .addRoute('/play', PlayView)
            .addRoute('/leaderboard', LeaderView)
            .addRoute('/login', LoginView)
            .addRoute('/signup', SignUpView)
            .addRoute('/signin', SignInView)
            .addRoute('/', MainView)
            .start();

        if(window.user.online
             &&(window.location.pathname)!==('/leaderboard/')
        ){
            router.go('/login')
        }
    }
})();

