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
  $("#add-train-btn").in("click", function (event){ 
      event.preventDefault();

      //grab user input
      var trainName = $("#train-name-input").val().trim();
      var destination = $("#destination-input").val().trim();
      var firstTrain = 
      var frequency
  })
