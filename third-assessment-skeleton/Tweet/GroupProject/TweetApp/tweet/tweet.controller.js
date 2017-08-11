angular.module('tweetModule')
.controller('tweetController', ['tweetService', function(tweetService) {

  this.tweetService = tweetService

  this.newTweet = {
    content: '',
    credentials: {
      password: '',
      username: ''
    }
  }

  this.postTweet = () => {
    this.tweetService.postTweet(this.newTweet).then(
      (success) => {
        this.newTweet = {
          content: '',
          credentials: {
            password: '',
            username: ''
          }
        }
      },
      (failure) => {}
    )
  }
}])
