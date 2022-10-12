$(document).ready(()=>{
    $("h1").animate({fontSize: '3.0rem'}, 1000,(event)=>{console.log("<< Animated the H1 Tag >>")});
    $(".btn1").animate({left: '100px'}, 2000);
})

// $(".btn1").click(()=>{
//         $("li").each(()=>{
//             alert($(this).text());
//         })
//    })

//-------on() & off() event Handler---------

// $( ".para" ).on( "click", function() {
//     console.log( "A button with the alert class was clicked!" );
// });
// $("btn2").click(function(){
//     $("p").off("click");
//   });

// $( "button.btn1" ).on( "click", function() {
//     console.log( "A button with the alert class was clicked!" );
//  });
// $( "<button class='alert'>Alert!</button>" ).appendTo( document.body );

// $( ".para" ).on({
//     "click": function() { console.log( "clicked!" ); },
//     "mouseover": function() { console.log( "hovered!" ); }
// });

$(".para").click(()=>{
        $(".para").css("font-size","+=10px")
})
$(".btn2").click(()=>{
    $(".para").css("font-size","16px")
})

// $( ".btn2" ).one( "click", firstClick );
 
// function firstClick() {
//     console.log( "You just clicked this for the first time!" );
//     $( this ).click( function() { console.log( "You have clicked this before!" ); } );
// }

$(".para,.btn1").click(function(event){
 console.log(event.target.nodeName);
});

$(".auto").on("click","p",((event)=>{
   $(event.delegateTarget).css("background-color","red")
}))


$( ".an" ).one( "click dblclick", function( event ) {

    if (event.type==="click"){
          event.preventDefault();
    }
    else if (event.type==="dblclick"){
        $(".an").attr("href","https://www.facebook.com/")
  }
});

//----event target-----
$( ".btn3" ).on( "click", function( event ) {
    let elem = $( event.target );
    console.log( elem.text() );
})
$( "li:eq(2)" ).on( "click", ()=> {
    $( ".btn3" ).off( "click")
})

//-----Assign data to div-----
$(".data").data("dataset",{foo:"bar"});
let data=$(".data").data("dataset")
console.log(data)

$("input").change(function(){
    let aim=($("input").val());
    console.log("inPut Value:"+aim)
  });



//animate 
  $( ".btn4" ).on( "click", function( event ) {
    $( ".paran" ).fadeToggle( 800 );
})
// $( ".btn5" ).on( "click", function( event ) {
//     $( ".paran" ).slideDown( 1000);
// })

// $( ".paran" ).hide( 5000 ).delay( 1500 ).show( 5000 );


//---------custom animate----
$(".btn5").click(function(){
    // $(".qwerty").animate({
    //     left: '570px',
    //     height: '150px',
    //     width: '200px'
    //   })

    // $(".qwerty").animate({
    //     width:"toggle"
    // })

    // $(".qwerty").animate({height: '400px', opacity: '0.4'}, "slow");
    // $(".qwerty").animate({width: '400px', opacity: '0.8'}, "slow");
    // $(".qwerty").animate({height: '100px', opacity: '0.4'}, "slow");
    // $(".qwerty").animate({width: '100px', opacity: '1.5'}, "slow");

    var qwerty = $(".qwerty");  
    qwerty.animate({left: '320px'}, 2000);
    qwerty.animate({opacity: '0.8'},500);
    qwerty.animate({fontSize: '4.0rem'}, 800);
    
    })

//----Ajax load() fnc----
$(".btn").click(function(){
        $(".paras").load("test.txt");
    });

    //----timeout() fnc
// let  myTimeout = setTimeout(()=>{
//     let lod=$(".paras").load("test.txt");
//     lod.animate({fontSize: "1.1rem"},800);
// }, 2000);





