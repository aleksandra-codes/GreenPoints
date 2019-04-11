function clickFunction() {
    
    var firebase = app_firebase;

    // for the current user
    // create this user node in the datebase

    firebase.auth().onAuthStateChanged(function(user){
        console.log("Button Pressed");
        firebase.database().ref("Users/" + user.uid).update(
		{
         point: 60
        });
    });
};
