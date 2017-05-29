// var config = {
//     apiKey: "AIzaSyBS-_ltv2Ba09OWG5xlr-8jZvEXfexnnJk",
//     authDomain: "pulo-934f2.firebaseapp.com",
//     databaseURL: "https://pulo-934f2.firebaseio.com",
//     projectId: "pulo-934f2",
//     storageBucket: "pulo-934f2.appspot.com",
//     messagingSenderId: "97969479543"
// };
// firebase.initializeApp(config);

$(function() {
    // firebase.initializeApp(config)
    firebase.database().ref();

    var message = firebase.database().ref('message')

    message.push({
        body: 'this is a message',
        user: 'this should be a user id'
    })
})