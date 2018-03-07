// api key: eb34671b691c4ff98e986ec16ee16beb 
$(window).on("click", function(){

    var q = $("#searchTerm").val().trim();
    var begin = $("#startYear").val().trim();
    var end = $("#endYear").val().trim();

    var input = {
        'api-key': "eb34671b691c4ff98e986ec16ee16beb",
    'q': q,
    'begin_date': begin,
    'end_date': end
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

});
