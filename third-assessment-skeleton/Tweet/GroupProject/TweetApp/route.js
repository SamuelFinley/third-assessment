angular.module('tweetModule')
.config(function($stateProvider, $urlRouterProvider) {

let startPageState = {
   name: 'start',
   url: '/',
   component: 'startPageComponent',
   resolve: {
       function(startPageService, $transition$) {
         return startPageService.getTweets($transition$.params());
       }
 }}

let profileState ={
     name: 'profile',
      url: '/@{username}/profile',
      component: 'profileComponent',
      resolve: {
        theUser: function(profileService, $transition$) {
       return profileService.getProfile($transition$.params().username)
     },
         selectedUser: function(profileService, $transition$) {
         return profileService.getUserAllTweets($transition$.params().username)
       },
         user: function(profileService, $transition$) {
         return profileService.getFollowing($transition$.params().username)
       },
         newUser: function(profileService, $transition$) {
         return profileService.getFollowers($transition$.params().username)
     }
     }}

let registrationState = {
  name: 'registration',
  url: '/registration',
  component: 'registrationComponent'
}
let feedState = {
  name: 'userFeed',
  url: '/@{username}/feed',
  component: 'feedComponent',
      resolve: {
        selectedUser: function(feedService, $transition$) {
        return feedService.getFeed($transition$.params().username)
      }
    }
}

let loginState = {
  name: 'login',
  url: '/login',
  component: 'loginComponent'
}

$stateProvider.state(startPageState)
              .state(profileState)
              .state(registrationState)
              .state(feedState)
              .state(loginState)

 $urlRouterProvider.otherwise('/')

 })
