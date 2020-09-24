var url = 'https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=bf62adb6d74645ffa96d3782160b7982'
var req = new Request(url);

fetch(req)
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    $('#sourceName').text(myJson.articles[3].source.name);
    $('#title').text(myJson.articles[3].title);
    $('#image').attr('src',myJson.articles[3].urlToImage);
    $('#description').text(myJson.articles[3].description);
    $('#content').text(myJson.articles[3].content);
    $('#learnMore').attr('href',myJson.articles[3].url)
    $('#pub').append(myJson.articles[3].publishedAt);
  });