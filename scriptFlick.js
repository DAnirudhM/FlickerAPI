/**
 * Created by anirudhmaanvi on 6/16/2016.
 */
$(document).ready(function(){

$('#result').click(function(){

    var text=$('#text').val();
    console.log(text);
    changed_String = encodeURI(text);


    $.ajax({

        type:"GET",
        url:"https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=d1b033e5afc22de2d3cd23a585231e0e&text="+changed_String+"&extras=owner_name%2Cdate_taken%2Cmedia%2Curl_m&format=json&nojsoncallback=1",
        datatype:"json",
        success: function(data){
            console.log("hi from the ajax");
            console.log(data);
            var flick_photos=data.photos.photo;
            var Photo_Title=[];
            var Photo_url=[];
            var htm="<table border='1' cellpadding='5'>" +
                "<th>Title</th>" +
                "<th>Link</th>";
            for(i=0;i<10;i++){
                Photo_Title.push(data.photos.photo[i].title);
                Photo_url.push(data.photos.photo[i].url_m);
                console.log(Photo_Title[i]);
                htm+="<tr><td>"+Photo_Title[i]+"</td> <td><a href='"+Photo_url[i]+"'>show Image<a/> <input type='button' value='Store'></td></tr>";
            }


            htm+="</table>";
            $("#info").html(htm);


        },
        error:function(){

            console.log("Inside the error function");


    }
})


})








})

