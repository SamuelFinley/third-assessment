angular.module('tweetModule')
.component('loginComponent', {
  templateUrl: 'TweetApp/login/loginTemplate.html',
  controller: 'loginController',
  controllerAs: 'loginCtrl',
  bindings: {
    getLogin: '=',
    credentials: '='
  }
})
