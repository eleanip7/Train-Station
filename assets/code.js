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

  //button for adding employees
  $("#add-train-btn").on("click", function (event){ 
      console.log(function1)
      event.preventDefault();

      //grab user input
      var trainName = $("#train-name-input").val().trim();
      var destination = $("#destination-input").val().trim();
      var firstTrain = moment($("#first-train-input").val().trim(), "MM:HH").format("X");
      var frequency = $("#frequency-input").val().trim();

      var newTrain = {
        name: trainName,
        destination: destination,
        firstTrain: firstTrain,
        frequency: frequency,
      }
  });
