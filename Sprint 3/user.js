(function(){
    var user = firebase.auth().currentUser;
    var firebase = firebase-app;

    // for the current user
    // create this user node in the datebase

    firebase.auth().onAuthStateChanged(function(user){
        firebase.database().ref("Users/" + user.uid).update(
		{
        name:user.displayName, 
         email:user.email,
        });
    });
   
})
console.log("run");