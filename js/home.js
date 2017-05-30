// var config = {
//     apiKey: "AIzaSyBS-_ltv2Ba09OWG5xlr-8jZvEXfexnnJk",
//     authDomain: "pulo-934f2.firebaseapp.com",
//     databaseURL: "https://pulo-934f2.firebaseio.com",
//     projectId: "pulo-934f2",
//     storageBucket: "pulo-934f2.appspot.com",
//     messagingSenderId: "97969479543"
// };
// firebase.initializeApp(config);

var input;
$(function() {
    input = localStorage.getItem('schoolName');
    if (input != null) {
        localStorage.removeItem('schoolName');
    }
    d3.csv("./data/Oct1_SchoolLevel_20170118.csv", function(data) {
        // var schools = new Map();
        var schools = {};
        // console.log(data[0]["District Name"]);
        // firebase.database().ref();

        // var school = firebase.database().ref('school');
        
        
        // subject.push({
        //     name: 'Algebra I',
        //     students: null,
        //     questions: null
        // })
        // subject.push({
        //     name: 'AP English',
        //     students: null,
        //     questions: null
        // })
        // subject.push({
        //     name: 'AP Psychology',
        //     students: null,
        //     questions: null
        // })
        // subject.push({
        //     name: 'Geometry',
        //     students: null,
        //     questions: null
        // })
        // subject.push({
        //     name: 'Spanish II',
        //     students: null,
        //     questions: null
        // })

        
        $.each(data, function(index, value) {
            // var newRef = school.push({
            //     name: value["School Name"],
            //     subjects: null
            // });
            // console.log(newRef.key)
            // var subject = firebase.database().ref('school/' + newRef.key + '/subject');

            // subject.push({
            //     name: 'Algebra I',
            //     students: null,
            //     questions: null
            // })
            // subject.push({
            //     name: 'AP English',
            //     students: null,
            //     questions: null
            // })
            // subject.push({
            //     name: 'AP Psychology',
            //     students: null,
            //     questions: null
            // })
            // subject.push({
            //     name: 'Geometry',
            //     students: null,
            //     questions: null
            // })
            // subject.push({
            //     name: 'Spanish II',
            //     students: null,
            //     questions: null
            // })
            schools[value["School Name"]] = null;
            // schools.push(value["School Name"], null);
            // schools.set(value["School Name"], null);
            // console.log(value["School Name"])
            
        });
        // $('input.autocomplete').autocomplete({
        //         source: schools,
        //         limit: 20, // The max amount of results that can be shown at once. Default: Infinity.
        //         onAutocomplete: function(val) {
        //         // Callback function when value is autcompleted.
        //         console.log("kk")
        //         },
        //         minLength: 1, // The minimum length of the input for the autocomplete to start. Default: 1.
        //     });
        $('input.autocomplete').autocomplete({
            data: schools,
            limit: 20, // The max amount of results that can be shown at once. Default: Infinity.
            onAutocomplete: function(val) {
            // Callback function when value is autcompleted.
            },
            minLength: 1, // The minimum length of the input for the autocomplete to start. Default: 1.
        });
    });

    $("#homeSubmit").click(function() {
        input = $("#autocomplete-input").val();
        localStorage.setItem('schoolName', input);
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function(result) {
            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = result.credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            localStorage.setItem('user', user);
            window.location.replace("http://localhost:5000/subjects.html")
        }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
        });
        console.log(input)
    })
})