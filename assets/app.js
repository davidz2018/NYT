// api key: eb34671b691c4ff98e986ec16ee16beb 

var input = {
    'api-key': "eb34671b691c4ff98e986ec16ee16beb",
  'q': 'obama',
  'begin_date': "20100601",
  'end_date': "20100801"
};



var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
url += '?' + $.param(input);
$.ajax({
  url: url,
  method: 'GET',
}).done(function(result) {

  console.log(result.response.docs[0]);
}).fail(function(err) {
  throw err;
});