angular.module('tweetModule')
.component('followComponent', {
  templateUrl: 'TweetApp/followStuff/followTemplate.html',
  controller: 'feedController',
  controllerAs: 'feedCtrl',
  bindings: {
    'username': '='
  }
})
