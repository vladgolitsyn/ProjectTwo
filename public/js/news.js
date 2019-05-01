console.log("WE HAVE CONTACT");

("use strict");


//Load today's top news to start
$(document).ready(function() {
  var queryURL = `https://newsapi.org/v2/top-headlines?q=environment&apiKey=1aade184da6d4c06adbee7c4466c71ed`;
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    $("#news-view").append(
      `<h3 id=resultsTitle>Top environment headlines:</h3>`
    );
    // console.log(response.articles);
    for (var i = 0; i < response.articles.length; i++) {
      $("#news-view").append(
        `<div class="row newsResult">
            <div class="col-md-4">
            <img class="articleImg" src="${
              response.articles[i].urlToImage
            }" alt="article image">
            </div>
            <div class="col-md-8">
                <h4 class="articleTitle"><a href="${
                  response.articles[i].url
                }">${response.articles[i].title}</a></h3>
                <h5 class="articleSource">${
                  response.articles[i].source.name
                }</h5>
                  <p class="articleDescr">${
                    response.articles[i].description
                  }</p>
            </div>
        </div>`
      );
    }
  });
});

// Update news results based on user search
$("#searchBtn").on("click", function() {
  $("#news-view").empty();
  var searchTerm = $("#search-input")
    .val()
    .trim()
    .toLowerCase();
  var queryURL = `https://newsapi.org/v2/everything?q=${searchTerm}&from=2019-04-28&sortBy=relevance&apiKey=1aade184da6d4c06adbee7c4466c71ed`;


  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    $(".resultsHeader").append("<h3>Search results:");
    for (var i = 0; i < response.articles.length; i++) {
      $("#news-view").append(
        `<div class="row newsResult">
            <div class="col-md-4">
            <img class="articleImg" src="${
              response.articles[i].urlToImage
            }" alt="article image">
            </div>
            <div class="col-md-8">
                <h4 class="articleTitle"><a href="${
                  response.articles[i].url
                }">${response.articles[i].title}</a></h3>
                <h5 class="articleSource">${
                  response.articles[i].source.name
                }</h5>
                  <p class="articleDescr">${
                    response.articles[i].description
                  }</p>
            </div>
        </div>`
      );
    }
  });
});
