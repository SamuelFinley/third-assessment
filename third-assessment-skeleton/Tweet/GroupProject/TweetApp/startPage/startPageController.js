angular.module('tweetModule')
.controller('startPageController', ['startPageService', 'profileService', 'tweetService', function(startService, profileService, tweetService) {
  this.startPageService = startService
  this.profileService = profileService
  this.tweetService = tweetService

  this.newTweet = {
    content: '',
    credentials: {
      password: '',
      username: ''
    }
  }

}])
