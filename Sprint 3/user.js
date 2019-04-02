(function(){
    var user = firebase.auth().currentUser;
    var firebase = firebase-app;

    // for the current user
    // create this user node in the datebase

    firebase.auth().onAuthStateChanged(function(user){
        firebase.database().ref("Users/").update(
		{
        "name":user.displayName, 
         "email":user.email,
            
        });
    });
})()