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
    var subject = firebase.database().ref('subject');
    subject.on('value', function(snapshot) {
        var data = snapshot.val();
        console.log(data);
        Object.keys(data).forEach(function(key) {
            var value = data[key];

            console.log(value)
        })
    })
    // firebase.initializeApp(config)
    // firebase.database().ref();

    // var message = firebase.database().ref('message')

    // message.push({
    //     body: 'this is a message',
    //     user: 'this should be a user id'
    // })

    // Object.keys(subject).forEach(function(key) {
    //     console.log(key)
    // });
    // subject.push({
    //     class: 'Algebra II'
    // })
    // subject.push({
    //     class: 'AP English'
    // })
    // subject.push({
    //     class: 'AP Psychology'
    // })
    // subject.push({
    //     class: 'Honors Biology'
    // })
    // var school = firebase.database().ref('school');
    // Object.keys(school).forEach(function(key) {
        
    // })
    // $.each(school, function(index, value) {
    //     console.log(school);
    // })
})