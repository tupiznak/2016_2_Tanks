(function () {
    'use strict';

    if (typeof window === 'object') {

        const Router = window.Router;
        const PlayView = window.PlayView;
        const LeaderView = window.LeaderView;
        const SignInView = window.SignInView;
        const SignUpView = window.SignUpView;
        const LoginView = window.LoginView;
        const MainView = window.MainView;

        let router = new Router();

        let user = new User('login', 'email', 'password', 'id');
        window.user = user;
        user.detectSession().then(
            result=>{
                if (result.status === 200) {
                    let responseDataFields = JSON.parse(result.response);
                    user.attributes['login'] = responseDataFields['login'];
                    user.attributes['email'] = responseDataFields['email'];
                    user.attributes['id'] = 1;//TODO id

                    //TODO if router faster then net - it's fail... (async)
                    if (user.attributes['id']!==-1 && (window.location.pathname)!==('/leaderboard/')){
                        router.go('/login')
                    }
                }
            },
            error=> {
                alert("WTF??!!");
            }
        );

        var backgroundImage = new Image();
        backgroundImage.src = '/images/back_main.jpg';

        document.querySelector('body').style.backgroundImage=backgroundImage;
        document.querySelector('body').style.backgroundImage="url('/images/back_main.jpg')";
        document.querySelector('body').style.transition = 'background-position 1s cubic-bezier(.32,.11,.86,1.18)';

        router
            .addRoute('/play', PlayView)
            .addRoute('/leaderboard', LeaderView)
            .addRoute('/login', LoginView)
            .addRoute('/signup', SignUpView)
            .addRoute('/signin', SignInView)
            .addRoute('/', MainView)
            .start();
    }
})();

