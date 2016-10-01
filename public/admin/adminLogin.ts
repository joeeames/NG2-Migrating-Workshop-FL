angular.module('app').component('adminLogin', { 
  templateUrl: '/admin/adminLogin.html',
  controller: class adminLoginCtrl {
    loggedIn: boolean;
    email: string;
    password: string;

    constructor(private $location, private currentIdentity, private auth, private toastr) {
      this.loggedIn = currentIdentity.authenticated();
      if(this.loggedIn) {
        $location.path('/home');
      }
    }

    login() {
      this.auth.login({
        username: this.email,
        password: this.password
      }).then(function() {
        this.$location.path('/home');
      }, function(err) {
        toastr.error(err);
      })
    }
  }
});