

export function changePageContent (){
    let hashTag = window.location.hash;
    let pageID = hashTag.replace("#", "");

    if (pageID != ""){
        $.get(`pages/${pageID}/${pageID}.html`, function (data) {
            // console.log("data " + data);
            $("#app").html(data);
        }); 
    }
    else {
        $.get(`pages/home/home.html`, function (data) {
            // console.log("data " + data);
            $("#app").html(data);
        }); 
    }

    $(".button-view").click(function(e){
        console.log("clicked");
    });

    
    // event listiners buttons
    $.get(`pages/browse/browse.html`, function () {
        
        $(".button-view").click(function(e){
            console.log("clicked view more ");
        });

        $(".button").click(function(e){
            console.log("lower button");
        });
    });
};
