$(function() {
    var signIn = function() {
        var provider = new firebase.auth.GoogleAuthProvider();
        this.auth.signInWithPopUp(provider);
    }

    var signOut = function() {
        this.auth.signOut;
    }

    
})