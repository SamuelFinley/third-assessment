angular.module('tweetModule')
.controller('registrationController', ['registrationService', '$state', function(registrationService, $state) {

  this.registrationService = registrationService

  this.user = {
    credentials: {
      password: 'password',
      username: 'username'
    },
    profile: {
      email: 'Email',
      firstName: '',
      lastName: '',
      phone: ''
    }
  }

  this.createUser = () => {
    this.registrationService.createUser(this.user).then(
      (success) => {
        $state.go('login')
      },
      (failure) => {
        alert('invaild information entered')
      }
    )
  }
}])
