// api key: eb34671b691c4ff98e986ec16ee16beb 


var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
url += '?' + $.param({
  'api-key': "eb34671b691c4ff98e986ec16ee16beb",
  'q': "obama",
  'begin_date': "20100601",
  'end_date': "20100801"
});
$.ajax({
  url: url,
  method: 'GET',
}).done(function(result) {
  console.log(result);
}).fail(function(err) {
  throw err;
});