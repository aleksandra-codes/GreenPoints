(function(){

    var firebase = app_firebase;
    
  
    firebase.auth().onAuthStateChanged(function(user){
    
            var userId = user.uid;		
	  		var dbRef = firebase.database().ref('Users/' + userId).child("point");
	  		dbRef.on("value", function(snap){
                let out = document.getElementById("pointers");
                points = snap.val();
                
                var textnode = document.createTextNode(points);                
                out.appendChild(textnode); 
            });
					
        
       // };
        });
}());