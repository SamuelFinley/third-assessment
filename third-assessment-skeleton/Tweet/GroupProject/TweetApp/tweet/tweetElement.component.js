angular.module('tweetModule')
.component('tweetElement', {
  templateUrl: 'TweetApp/tweet/tweetElement.template.html',
  bindings: {
    'username': '=',
    'tweet': '=',
    'tweets': '=',
    'newTweet': '=',
    'likeTweet': '=',
    'replyTweet': '=',
    'repostTweet': '='
  }
})
