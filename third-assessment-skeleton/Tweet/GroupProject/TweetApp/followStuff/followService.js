angular.module('tweetModule')
.service('followService', ['$http',function(http) {

  this.follow = (username, checkboxElem) => {
    if (checkboxElem.checked) {
      return http.post('http://localhost:8080/user/users/@' + username + '/follow')
      .then((success) => {
        console.log('Following' + username)
      },
      (failure) => {
      }
      )
    } else {
      return http.post('http://localhost:8080/user/users/@' + username + '/unfollow')
        .then((success) => {
          console.log('Unfollowed' + username)
        },
        (failure) => {
        }
        )
    }
  }
}])
