var authKey = 'fD4ptPwfR9rtStvwyy6WH58iD4tTq3Jg';
var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=" + authKey;

var searchItem = "";
var startYear = "0";
var endYear = "0";
var recordNum = "0";

$.ajax({
    url: queryURL,
    method: "GET"
})
    .then(function (response) {
    console.log(response);

    });
