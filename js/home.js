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
        $.each(data, function(index, value) {
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
        window.location.href = "signin.html";
        console.log(input)
    })
})