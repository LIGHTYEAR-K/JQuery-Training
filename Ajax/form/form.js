$("h1").css("color","red")
$(".btn").click(()=>{
    let username=$("input[type=text]").val()
    let password=$("input[type=password]").val()
    if (username===password){
        $(".container").hide()
        $(document).load("index.html",()=>{
            console.log("executed")
        })

    }
    else{
          console.log("its Wrong")
    }
    
})