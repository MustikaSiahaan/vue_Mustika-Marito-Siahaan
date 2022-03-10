class User{
    var id;
    var username;
    var password;
}

 class UserSevice{
     user[] users = [];

     user[] getAllUsers() {
         return user;
     }

     user getUserById(userid){
         return users.filter(userid);
     }
 }

