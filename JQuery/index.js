// eq specfic index ---& document-Ready
$(document).ready(()=>{
    $("li:eq(3)").remove();
})
//--css color property --
$("h1,h2").css("color","#083AA9");    
//click Event--
$(".btn1").click(()=>{
    $("li").each(()=>{
      alert($(this).text())
    });
 });

 //---Attributes---
let html=$("a").attr("href");
 $("p:eq(0)").html(html);

$("a:eq(1)").attr("href","https://www.yahoo.com/")

//----selecting element by id and class
$("#section").css("text-align","center")
$("input[name='firstName']").css("border","2px solid orange")

// mouse event
$(".btn2").mouseover(()=>{
     $("h2").animate({opacity:0.5})
})
$(".btn2").mouseout(()=>{
    $("h2").animate({opacity:1.5})
  });
//   $("h1").mouseleave(function(){
//     alert("welcome ComeBack");
//   });


//---chaining
$("#section").find("h3").html("<em>Skip to next </em>");

//first list element to last element

// $( ".list li:first" ).appendTo( ".list" );
//$( "#section h2" ).appendTo( "#section" );
//$( "#section h2" ).clone().appendTo( "#section" );
// let ui=$( ".List li:first" ).clone().appendTo( ".List" );


//remove and Detach
$("input[name=firstName]").detach()

//event toggle function
$(".btn2").click(()=>{
    $("h2").toggle();
})

$(".btn3").click((err)=>{
    $("p").toggleClass( "textview" );
    console.log(err)
})


// $(".btn3").mouseover(()=>{
//     $("p").addClass("textview");
// })
// $(".btn3").mouseout(()=>{
//     $("p").removeClass("textview");
//  });

//moving element
$("h3").before("<h1> </h1>")
$("h3").after("<h1> </h1>")
$("h3").append(" >>>Heading ")
$("h3").prepend(" Dont<<<")

//insert
let typer=$("<h2>Next to Button</h2>")
typer.insertAfter($(".btn2"))
typer.appendTo($("h3"))
//$("#section").append(`<a href="https://tomandjerry.com/">Visit</a>`)

//jQuery objects
let objects={
    Fname:"Devan",
    Lname:"Conway",
    favSport:"cricket"
}
$("h4").html(" Name is "+ objects.Fname+" "+objects.Lname)

//----comparing----
// let head=$("a")[0]
// console.log(head)
// alert("a[0]"==="a[1]")


//---Data()

// testObj = new Object();
// testObj.greetingMorn = "Good Morning!";
// testObj.greetingEve = "Good Evening!";
// $(".bttn").click(function(){
//   $("h5").data(testObj);
// });
// $(".btnn").click(function(){
//   $("h5").html($("h5").data("greetingEve"));
// });


let points=$.trim("     welcome to my wesitess  ")
console.log(points)

// $.each([ "foo", "bar", "baz" ], function( idx, val ) {
//     $("h4").html( "element " + idx + " is " + val );
// });

let myArray = [ 1, 2, 3, 5 ];
 
if ( $.inArray( 4, myArray ) !== -1 ) {
    console.log( "found it!" );
}

let sum=0;
let obj={
    foo:1,
    noo:3
}
$.each( obj, function( key, value ) {
    console.log(sum+=value);
});

// index()----
// $("li").click(function(){
//       alert($(this).index());
//  });

//join() method changes array to string
  