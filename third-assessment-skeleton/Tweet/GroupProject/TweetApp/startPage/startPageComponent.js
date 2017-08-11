angular.module('tweetModule')
.component('startPageComponent', {
  templateUrl: 'TweetApp/startPage/startPageTemplate.html',
  controller: 'startPageController',
  controllerAs: 'startCtrl',
  bindings: {
    'changePage': '=',
    'tweet': '=',
    'profile': '=',
    'logOut': '='
  }
})
