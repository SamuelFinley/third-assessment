angular.module('tweetModule')

.component('profileComponent', {
  templateUrl: 'TweetApp/profile/profileTemplate.html',
  controller: 'profileController',
  controllerAs: 'profileCtrl',
  bindings: {
    'profile': '=',
    'username': '=',
    'tweet': '=',
    'following': '=',
    'follower': '='
  }

})
