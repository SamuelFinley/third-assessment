angular.module('tweetModule')
.service('registrationService', ['$http', function(http) {

  this.createUser = (user) => {
    let newUser = {
      credentials: {
        password: user.credentials.password,
        username: user.credentials.username
      },
      profile: {
        email: user.profile.email
      }
    }
    return http({
      method: 'POST',
      url: 'http://localhost:8080/user/users',
      data: newUser,
      params: {firstName: user.profile.firstName, lastName: user.profile.lastName, phone: user.profile.phone}
    }).then(
      (success) => {
        console.log('User has been created')
      },
      (failure) => {}
    )
  }
}])
