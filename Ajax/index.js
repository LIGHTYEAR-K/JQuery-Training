
$(document).ready(()=>{
    $("h1:eq(0)").animate({fontSize:"3.5em"},2000)
})



//Ajax GetJson method
$(document).ready(()=>{
    $.getJSON("format.json",((data)=>{
          $.each(data,(i,info)=>{
             $("ul").append("<li> name:"+info.name+"</li>")
             $("ul").append("<li> age: "+info.age+"</li>")
          })
    }))
})

        // ------------------Ajax ajax() Get method-----------------------------

        $(document).ready(()=>{
            $.ajax({
                "method":"GET",
                "url":"https://jsonplaceholder.typicode.com/posts",
                "dataType":"json"
            }).done((data)=>{
                $.each(data,(i,datas)=>{
                    $("tbody").append("<tr><td>"+ datas.id+"</td><td>"+datas.title+"</td><td>"+datas.body+"</td></tr>")
                })
            })
        })


            // --------------Ajax() Post Method---------------------

            $(".sub").click(()=>{
                let files={
                      content:$("input").val()
                };
   
            $.ajax({
                "method":"POST",
                "url":"https://jsonplaceholder.typicode.com/posts",
                "data":files,
                "success":(data)=>{
                    $("ol").append("<li>" + data.content+"</li>");
                },
                "error":()=>{
                    alert("ERROR");
                }
            })
        })
        })


                                        // Ajax getScript() Method
$(".sub").click(()=>{
     $.getScript("ajax.js",()=>{
        console.log(" it was Sucessfully imported")
     })
})


                                        // Ajax get() Method
 $(".sub").click(()=>{
      $.get('emty.json',(data,status)=>{
         console.log("Name:: "+data.title+"\nhis life:: "+data.status +"\nstatus:: "+status)

      })
    })

                                        // Ajax post() Method
                                        //??Failed to load resource: the server responded with a status of 405 (Method Not Allowed)
 $(".sub").click(()=>{
        $.post('emty.json',{
            "id":2,
            "title":"Mohan",
            "status":"Single"
        },(data,status)=>{
           console.log("Name:: "+data.title+"\nhis life:: "+data.status +"\nstatus:: "+status)
  
        })
      })

$(document).ready(()=>{
    $(".inputss").load("section.html",()=>{
        console.log("external html is Executed")
    })
})

//--------- form-validate------



$(".error_err").hide();
$(document).ready(()=>{
    $("input[type=text]").focusin(()=>{
        $(".error-name").hide()
    })
    $("input[type=text]").focusout(()=>{
        if(  $("input[type=text]").val()=="")
        $(".error-name").show()
        else{
            $(".error-name").hide()
        }
    })

})

$(document).ready(()=>{
    $("input[type=password]").focusin(()=>{
        $(".error-pass").hide()
    })
    $("input[type=text]").focusout(()=>{
        if(  $("input[type=password]").val()=="")
        $(".error-pass").show()
        else{
            $(".error-pass").hide()
        }
    })

})



$(".sub").click((event)=>{
    let name=$("input[type=text]").val();
    let password=$("input[type=password]").val();
    const patt="admin";
    if(name & password===patt){
        $("h1:eq(1)").text("Login Success");
        $("input[type=text]").val('');
        $("input[type=password]").val('');
    }
    else{
        $(".error_err").show()
    }
})
