angular.module('tweetModule')
.service('tweetService', ['$http', '$state', function(http, $state) {

  this.getTweets = () => {
    http.get('http://localhost:8080/tweet/tweets').then(
      (successResponse) => {
        this.tweets = successResponse.data
      },
      (failureResponse) => {
        console.log('Abandon ship!')
      }
    )
  }

  this.getFeed = (username) => {
    this.user = sessionStorage.getItem('username')
    return http.get('http://localhost:8080/user/users/@' + username + '/feed').then(
      (failure) => {
        console.log('Could not load feed')
      },
      (success) => {
        this.tweets = success.data
      }
    )
  }

  this.replyTweet = (tweet, id) => {
    tweet.credentials.username = sessionStorage.getItem('username')
    tweet.credentials.password = sessionStorage.getItem('password')
    return http({
      method: 'POST',
      url: 'http://localhost:8080/tweet/tweets/' + id + '/reply',
      data: tweet
    }).then(
      (success) => {
        $state.go($state.current, {}, {reload: true})
      },
      (failure) => {}
    )
  }
  this.repostTweet = (id) => {
    let input = {
      credentials: {
        password: '',
        username: ''
      }
    }
    input.credentials.username = sessionStorage.getItem('username')
    input.credentials.password = sessionStorage.getItem('password')
    return http({
      method: 'POST',
      url: 'http://localhost:8080/tweet/tweets/' + id + '/repost',
      data: input
    }).then(
      (success) => {
        $state.go($state.current, {}, {reload: true})
      },
      (failure) => {
      }
    )
  }

  this.postTweet = (tweet) => {
    tweet.credentials.username = sessionStorage.getItem('username')
    tweet.credentials.password = sessionStorage.getItem('password')
    return http({
      method: 'POST',
      url: 'http://localhost:8080/tweet/tweets/',
      data: tweet
    }).then(
      (success) => {
        this.getTweets()
        $state.go($state.current, {}, {reload: true})
      },
      (failure) => {}
    )
  }

  this.likeTweet = (id) => {
    let input = {
      credentials: {
        password: '',
        username: ''
      }
    }
    input.credentials.username = sessionStorage.getItem('username')
    input.credentials.password = sessionStorage.getItem('password')
    return http({
      method: 'POST',
      url: 'http://localhost:8080/tweet/tweets/' + id + '/like',
      data: input
    }).then(
      (success) => {
      },
      (failure) => {}
    )
  }
}])
