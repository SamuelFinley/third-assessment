angular.module('tweetModule')
.service('loginService', ['$http','$state', function(http, $state) {


  this.getLogin = (creds) => {
    console.log(creds.username)
    if (creds.username !== '' || creds.password !== '') {
    return http({
      method: 'GET',
      params: {password: creds.password},
      url: 'http://localhost:8080/user/validate/credentials/exists/@{' + creds.username + '}'
    }).then(
     (successResponse) => {
       console.log(successResponse.data)
       if (successResponse.data) {
         sessionStorage.setItem('username', creds.username)
         sessionStorage.setItem('password', creds.password)
         $state.go('profile', {username: creds.username})
       }
     },
     (failureResponse) => {
       console.log('fail')
     }
   )
 }}

}])
