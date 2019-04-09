(function(){
    
    var firebase = app_firebase;

    // for the current user
    // create this user node in the datebase

    firebase.auth().onAuthStateChanged(function(user){
        console.log("Inside User.js");
        firebase.database().ref("Users/" + user.uid).set(
		{
         email: user.email, 
         name: user.displayName,
         point: 0
        });
    });
})()