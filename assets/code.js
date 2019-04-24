
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

//button for adding employees
$("#add-train-btn").on("click", function (event) {
    console.log("HI")
    event.preventDefault();

    //grab user input
    var trainName = $("#train-name-input").val().trim();
    var destination = $("#destination-input").val().trim();
    var firstTrain = $("#first-train-input").val().trim();
    var frequency = parseInt($("#frequency-input").val().trim());
    var nextArrival = 0;
    var minsAway = 0;

    var timeconvert = moment(firstTrain, "HH:mm").subtract(1, "years");
    var difference = moment().diff(moment(timeconvert), "minutes");
    var remain = difference % frequency;
    minsAway = frequency - remain;
    var nextTrain = moment().add(minsAway, "mins");
    nextArrival = moment(nextTrain).format("hh:mm");

    // object that holds temporary data
    var newTrain = {
        name: trainName,
        destination: destination,
        firstTrain: firstTrain, 
        frequency: frequency,
        dataMins: minsAway,
        dataArriv: nextArrival,
    };

    //Uploads to table train data
    database.ref().push(newTrain);

    console.log(newTrain.name);
    console.log(newTrain.destination);
    console.log(newTrain.firstTrain);
    console.log(newTrain.frequency);
    console.log(newTrain.dataMins);
    console.log(newTrain.dataArriv);

    // Clears all of the text-boxes
    $("#train-name-input").val("");
    $("#destination-input").val("");
    $("#first-train-input").val("");
    $("#frequency-input").val("");
});

database.ref().on("child_added", function (childSnapshot) {
    console.log(childSnapshot.val());


    var trainName = childSnapshot.val().name;
    var destination = childSnapshot.val().destination;
    var frequency = childSnapshot.val().frequency;
    var dataArriv = childSnapshot.val().dataArriv;
    var dataMins = childSnapshot.val().dataMins;
    
    

    var newRow = $("<tr>").append(
        $("<td>").text(trainName),
        $("<td>").text(destination),
        $("<td>").text(frequency),
        $("<td>").text(dataArriv),
        $("<td>").text(dataMins),
        
        
        

    )
    $("#train-table > tbody").append(newRow);
});