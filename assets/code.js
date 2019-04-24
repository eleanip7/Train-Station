// Initialize Firebase
var config = {
    apiKey: "AIzaSyD9Y-rCQdBBPsSS8DPU3alY7vTXy9eLpi0",
    authDomain: "train-station-67695.firebaseapp.com",
    databaseURL: "https://train-station-67695.firebaseio.com",
    projectId: "train-station-67695",
    storageBucket: "train-station-67695.appspot.com",
    messagingSenderId: "1033753470572"
};
firebase.initializeApp(config);

var database = firebase.database();

//initial values

var nextArrival = 0;
var minsAway = 0;

//button for adding employees
$("#add-train-btn").on("click", function (event) {
    console.log("HI")
    event.preventDefault();

    //grab user input
    var trainName = $("#train-name-input").val().trim();
    var destination = $("#destination-input").val().trim();
    var firstTrain = $("#first-train-input").val().trim();
    var frequency = parseInt($("#frequency-input").val().trim());

// object that holds temporary data
    var newTrain = {
        name: trainName,
        destination: destination,
        frequency: frequency,
        dataMins: minsAway,
        dataArriv: nextArrival
    };

    //Uploads to table train data
    database.ref().push(newTrain);

    console.log(newTrain.name);
    console.log(newTrain.destination);
    console.log(newTrain.firstTrain);
    console.log(newTrain.frequency);

    // Clears all of the text-boxes
    $("#train-name-input").val("");
    $("#destination-input").val("");
    $("#first-train-input").val("");
    $("#frequency-input").val("");
});

