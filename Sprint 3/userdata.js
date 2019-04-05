(function(){

    var firebase = app_firebase;
    var out = document.getElementById("pointers");
    var userName = " ";
    var userPoints = " ";
    var numQuotes=0;
    var rand=0;

 
  
    firebase.auth().onAuthStateChanged(function(user){
    	if (user){
          	var userName = user.displayName;		
	  		var dbRef = firebase.database().ref('Users/' + userName).child("point"));
	  		dbRef.on ("value", snap => out.innerText = snap.val());
					
        
        };
    })();
})();