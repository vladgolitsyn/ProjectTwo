console.log("WE HAVE CONTACT");

("use strict");

$("#searchBtn").on("click", function() {
  var searchTerm = $("#search-input")
    .val()
    .trim()
    .toLowerCase();
  var queryURL = `https://newsapi.org/v2/everything?q=${searchTerm}&from=2019-04-28&sortBy=relevance&apiKey=1aade184da6d4c06adbee7c4466c71ed`;
  //   console.log(searchTerm);
  //   console.log(queryURL);

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
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
                <h3 class="articleTitle"><a href="${
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
