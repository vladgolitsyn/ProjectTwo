$(document).ready(function() {
  // Adding references to event container and the table body
  var eventList = $("tbody");
  var eventContainer = $(".event-container");

  // Getting the initial list of Events
  getEvents();

  // Function for creating a new list row for authors
  function createEventRow(eventData) {
    console.log(eventData);
    var newTr = $("<tr>");
    newTr.append(
      "<td>" + eventData.category + "</td>",
      "<td>" + eventData.eventName + "</td>"
    ),
      "<td>" + eventData.eventDateTime + "</td>",
      "<td>" + eventData.eventDateTime + "</td>",
      "<td>" + eventData.eventLocation + "</td>",
      "<td>" + eventData.numberOfParticipants + "</td>";
    return newTr;
  }

  // Function for retrieving events and getting them ready to be rendered to the page
  function getEvents() {
    $.get("/api/events", function(data) {
      var rowsToAdd = [];
      for (var i = 0; i < data.length; i++) {
        rowsToAdd.push(createEventRow(data[i]));
      }
      renderEventList(rowsToAdd);
      nameInput.val("");
    });
  }

  // A function for rendering the list of events to the page
  function renderEventList(rows) {
    EventList.children()
      .not(":last")
      .remove();
    eventContainer.children(".alert").remove();
    if (rows.length) {
      console.log(rows);
      authorList.prepend(rows);
    } else {
      renderEmpty();
    }
  }

  // Function for handling what to render when there are no events
  function renderEmpty() {
    var alertDiv = $("<div>");
    // alertDiv.addClass("alert alert-danger");
    alertDiv.text("There are no Events currently available");
    eventContainer.append(alertDiv);
  }
});
