$("document").ready(function(){
    $('main div').hover(inside,outside)
});
function inside()
{
   $(this).css("color","black").css("height","+=10px").animate({'marginLeft' : "+=20px"});
}
function outside()
{
   $(this).css("color","white").css("height","-=10px").animate({'marginLeft' : "-=20px"});
}
$("document").ready(function(){
   $('div a').hover(insideab,outsideab)
});
function insideab()
{
  $(this).css("color","black").css("height","+=20px");
}
function outsideab()
{
  $(this).css("color","white").css("height","-=20px");
}