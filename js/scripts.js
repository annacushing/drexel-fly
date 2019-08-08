var $burger = $("#burger-icon");
var $nav = $('nav[data-nav]');
var $navA = $('nav[data-nav] a');
// var isVisible = false;

var $topLine = $('#topLine');
var $middleLine = $('#middleLine');
var $bottomLine = $('#bottomLine');
var $burgerContainer = $('#burger-container');
var animationSpeed = 0.3;
var ifClicked = false;

function burgerClick(){
    console.log("clicks");
    if(ifClicked === false){
        TweenMax.to($topLine,animationSpeed,{rotation:45, y:20, transformOrigin: "50%, 50%"});
        TweenMax.to($middleLine,animationSpeed,{alpha:0, scaleX:0, transformOrigin: "50%, 50%"});
        TweenMax.to($bottomLine,animationSpeed,{rotation:-45, y:-20, transformOrigin: "50%, 50%"});
        $nav.show();
        ifClicked = true;

    }else{
        TweenMax.to($topLine,animationSpeed,{rotation:0, y:0});
        TweenMax.to($middleLine,animationSpeed,{alpha:1, scaleX:1});
        TweenMax.to($bottomLine,animationSpeed,{rotation:0, y:0});
        $nav.hide();
        ifClicked = false;

    }
}

//
// function mouseClick(){
//
//     console.log("click");
//     if(isVisible === false){
//         $nav.show();
//         isVisible = true;
//     }
//     else{
//         $nav.hide();
//         isVisible = false;
//     }
// }


$burgerContainer.on("click", burgerClick);

//
// $burger.on( "click", mouseClick);
// // close the mobile menu when menu link is clicked
// $navA.on( "click", mouseClick);
