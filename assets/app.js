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
        $(".form2").append(result.response.docs[0].headline.main)
        console.log(result.response.docs[0]);
        }).fail(function(err) {
        throw err;
        });

});
