(function(){

    var firebase = app_firebase;

    // for the current user
    // create this user node in the datebase

    firebase.auth().onAuthStateChanged(function(user){
        firebase.database().ref("Users/" + user.displayName).set(
		{
         email: user.email, 
         uid: user.uid,
         point: 0
        });
    });
})()