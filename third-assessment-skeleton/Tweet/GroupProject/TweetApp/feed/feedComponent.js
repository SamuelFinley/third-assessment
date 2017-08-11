angular.module('tweetModule')
.component('feedComponent', {
  templateUrl: 'TweetApp/feed/feedTemplate.html',
  controller: 'feedController',
  controllerAs: 'feedCtrl',
  bindings: {
    'username': '=',
    'tweet': '='
  }
})
