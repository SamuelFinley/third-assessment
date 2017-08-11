angular.module('tweetModule')

.controller('feedController', ['feedService','tweetService',function(feedService,tweetService) {

 this.feedService = feedService
 this.tweetService = tweetService

 this.newTweet = {
   content: '',
   credentials: {
     password: '',
     username: ''
   }
 }

}])
