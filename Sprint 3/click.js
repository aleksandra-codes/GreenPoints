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
    console.log("Part 2");
    var bal = document.getElementById("balance");
    bal.innerHTML = "Processing...";
    console.log("Part 3");
    setTimeout(function(){ 
        var bal2 = document.getElementById("balance");
        var noti = document.getElementById("notif2");
        noti.innerHTML = "Congratulations! You Have Successfully Redeemed Your Code!"
        bal2.innerHTML = "Total Balance: 1990 Points";
        }, 3000);
}

