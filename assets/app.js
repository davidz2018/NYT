// api key: eb34671b691c4ff98e986ec16ee16beb
$("#findOne").on("click", function(){

    var q = $("#searchTerm").val().trim();
    var begin = $("#startYear").val().trim();
    var end = $("#endYear").val().trim();

    var input = {
        'api-key': "eb34671b691c4ff98e986ec16ee16beb",
        'q': q,
        'begin_date': begin + '0101',
        'end_date': end + '1231'
    };

    var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    url += '?' + $.param(input);
    $.ajax({
        url: url,
        method: 'GET',
    }).done(function(result) {
        var form = $(".form2");
        var table = $('<table></table>');
        if($('#numrecord').val().trim() === ''){
          var numberOfArticles = result.response.docs.length;
        }else{
          var numberOfArticles = Number($('#numrecord').val().trim()) || -1;
        }
        if(numberOfArticles < 0){
          return alert('Invalid input for Number displayed')
        }
        table.append('<tr><th>Headline</th><th>Publication Date</th><th>Link</th></tr>')
        for(var i = 0; i<numberOfArticles; i++){
          var row = $("<tr></tr>")
          row.append('<td><a href=" '+ result.response.docs[i].web_url + '">'  + result.response.docs[i].headline.main + '</a></td>')
          row.append('<td>' + result.response.docs[i].pub_date.slice(0,10) + '</td>')
          table.append(row)
        }

        $(".form2").append(table)

        }).fail(function(err) {
          throw err;
        });

});
$("#clearOne").on("click", function(){
  $("#searchTerm").val('');
  $("#startYear").val('');
  $("#endYear").val('');
  $(".form2").empty();
})
