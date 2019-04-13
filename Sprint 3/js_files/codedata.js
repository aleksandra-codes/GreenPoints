//input code section
var guessme = document.getElementById("textBox");
guessme.click(function helpme() {

    var firebase = app_firebase;

    firebase.auth().onAuthStateChanged(function (user) {

        console.log("Am I In?");
        var dbF = firebase.database().ref('CodeChart/').child("apple");
        dbF.on("value", function (snap) {
            let help = document.getElementById("total");
            pointy = snap.val();
            summer = pointy + 1930;
            var texter = document.createTextNode(summer);
            help.appendChild(texter);
        });


    });
}());
