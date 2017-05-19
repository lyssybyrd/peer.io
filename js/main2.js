// var config = {
//     apiKey: "AIzaSyBS-_ltv2Ba09OWG5xlr-8jZvEXfexnnJk",
//     authDomain: "pulo-934f2.firebaseapp.com",
//     databaseURL: "https://pulo-934f2.firebaseio.com",
//     projectId: "pulo-934f2",
//     storageBucket: "pulo-934f2.appspot.com",
//     messagingSenderId: "97969479543"
// };
// firebase.initializeApp(config);
'use strict';

$(document).ready(function () {

    // shortcuts for DOM elements
    this.signupButton = document.getElementById("sign-in-button");
    this.backButton = document.getElementById('back-button');
    this.signoutButton = document.getElementById("sign-out");

    // add event listeners
    if (this.signupButton != null) {
        this.signupButton.addEventListener("click", function() {
            window.location.replace('/dash.html');
        });
    }
    if (this.backButton != null) {
        this.backButton.addEventListener("click", function() {
            window.location.replace('/dash.html');
        })
    }
    if(this.signoutButton != null) {
        this.signoutButton.addEventListener("click", function() {
            window.location.replace('/signin.html')
        })
    }

});