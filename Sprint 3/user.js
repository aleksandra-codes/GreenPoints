(function(){
<<<<<<< HEAD

    var firebase =;
=======
    var user = firebase.auth().currentUser;
    var firebase = firebase-app;
>>>>>>> e39c0f14dc14bd1e33fdc93dd9c3ce98a6161793

    // for the current user
    // create this user node in the datebase

    firebase.auth().onAuthStateChanged(function(user){
<<<<<<< HEAD
        firebase.database().ref("Users/"+user.uid).update(
		{
        "name":user.displayName, 
         "email":user.email
=======
        firebase.database().ref("Users/").update(
		{
        "name":user.displayName, 
         "email":user.email,
            
>>>>>>> e39c0f14dc14bd1e33fdc93dd9c3ce98a6161793
        });
    });
})()