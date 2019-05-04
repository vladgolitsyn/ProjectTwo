// import { request } from "http";

// $(document).ready(function() {
//   // Adding references to event container and the table body
//   var eventList = $("tbody");
//   var eventContainer = $(".event-container");

//   // Getting the initial list of Events
getEvents();

//   // Function for creating a new list row for authors
function createEventRow(eventData) {
  console.log(eventData);
  var newTB = $("#event-body");
  var newTr = $("<tr>");
  newTr.append(
    "<td>" + eventData.event_category + "</td>",
    "<td>" + eventData.event_name + "</td>",
    "<td>" + eventData.event_date + "</td>",
    "<td>" + eventData.event_location + "</td>",
    "<td>" + eventData.num_participants + "</td>",
    "<td>" + eventData.event_description + "</td>",
    "<td>" + eventData.UserEmail + "</td>"
  );

  newTB.append(newTr);
}

//   // Function for retrieving events and getting them ready to be rendered to the page
function getEvents() {
  $.get("/api/events", function(data) {
    console.log(data[0]);
    for (var i = 0; i < data.length; i++) {
      createEventRow(data[i]);
    }
  });
}

//   // A function for rendering the list of events to the page
//   function renderEventList(rows) {
//     EventList.children()
//       .not(":last")
//       .remove();
//     eventContainer.children(".alert").remove();
//     if (rows.length) {
//       console.log(rows);
//       authorList.prepend(rows);
//     } else {
//       renderEmpty();
//     }
//   }

//   // Function for handling what to render when there are no events
//   function renderEmpty() {
//     var alertDiv = $("<div>");
//     // alertDiv.addClass("alert alert-danger");
//     alertDiv.text("There are no Events currently available");
//     eventContainer.append(alertDiv);
//   }
// });

$("#exampleModal").on("show.bs.modal", function(event) {
  var button = $(event.relatedTarget); // Button that triggered the modal
  var recipient = button.data("whatever"); // Extract info from data-* attributes
  // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
  // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
  var modal = $(this);
});

$("#add-btn").on("click", function() {
  var userEmail = window.location.search.split("=");
  console.log(userEmail);

  var newEvent = {
    event_name: $("#event-name").val(),
    event_date: $("#event-date").val(),
    event_location: $("#event-location").val(),
    event_category: $("#categories option:selected").text(),
    event_description: $("#event-description").val(),
    UserEmail: userEmail[1]
  };

  $.ajax("/api/events", {
    type: "POST",
    data: newEvent
  }).then(function(outcome) {
    // Reload the page to get the updated list
    console.log(outcome);
    createEventRow(outcome);
  });

  // console.log(newEvent);
});
