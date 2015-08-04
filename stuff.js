
var showing = false;

var side_showing = true;

var tags = [
    "#TopHeader",
    "#google_image_div",
    ".centered-item",
    "#adBlock",
    ".adsense-top-bar",
    "#AdsenseTop",
    ".top-ads-top-bar",
    ".top-feature",
    "#SkyscraperSRP",
    "#SkyscraperSRP",
    "#FooterBottom",
    ".copyright",
    ".footer-top",
    "#adBlock",
    "#adBlock",
    ".ad.f.a_",
    "#AdsenseBottom",
    ".banner.sponsored",
]

function hide(){
    for (var t=0; t<tags.length; t++){
	$(tags[t]).hide();
    }
    showing=false;
}

function show(){
    for (var t=0; t<tags.length; t++){
	$(tags[t]).show();
    }
    showing=true;
}


$("#HeaderBar").prepend("<div><label><button id='jbutton'>Show</button></label></div>");

hide();

$("#jbutton").click(function(){
    if(showing){
	hide();
	$("#jbutton").text("show");
    } else{
	show();
	$("#jbutton").text("hide");
    }
});

$("#CurrentResultsPageTipTrigger").prepend("<div id='j-side-hide' style='cursor:pointer'><</div>")

$(".layout-3").prepend("<div id='j-extra-side' class='col-1' style='width:10px'><div class='container-primary srp-navigation'><header style='cursor:pointer' id='j-side-show'><</header></div></div>")

function hide_side(){
    $(".col-1").hide();
    $("#j-extra-side").show();
    $(".col-2").attr('style','padding-left:20px');
    side_showing = true;
}

function show_side(){
    $(".col-1").show();
    $("#j-extra-side").hide();
    $(".col-2").attr('style','');
    side_showing = false;
}


$("#j-side-show").click(function(){
    if(side_showing){
	hide_side();
    } else {
	show_side();
    }
})

$("#j-side-hide").click(hide_side);
$("#j-side-show").click(show_side);
