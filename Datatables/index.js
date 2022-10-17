$("h1").css("color","red");


 //---- without key pairs----
 
// $(document).ready(function () {
//     $('#datatable').DataTable({
//         ajax: 'api/sets.txt',
//     });
// });


// $(document).ready( function(){
//     $("#datatable").DataTable( {
//          ajax:'api/3col.txt',
//          columns: [
//             { 'data': 'name' },
//             { 'data': 'gender' },
//             { 'data': 'designation',
//              'render':((designation)=>{
//                 return "<a href=https://en.wikipedia.org/wiki/" +designation+">" +designation+"</a>"
//              })
              
//             }
         
//         ]
//     } );
// });

// $(document).ready(function () {
//     $('#datatable').DataTable({
//         ajax: 'api/objects.txt',
//         columns: [
//             { data: 'name' },
//             { data: 'position' },
//             { data: 'office' },
//             { data: 'extn' },
//             { data: 'start_date' },
//             { data: 'salary' },
//         ],
//     });
// });




//----Nested----with Options


// $(document).ready(function () {
//     $('#datatable').DataTable({
//         ajax: 'api/nested.txt',
//         scrollY: 1000,
//         paging:false,
//         searching: false,
//         ordering:  false,
//         columns: [
//             { data: 'name' },
//             { data: 'hr.position' },
//             { data: 'contact.0' },
//             { data: 'contact.1' },
//             { data: 'hr.start_date' ,
//               render:((datas)=>{
//                     let date= new Date((datas));
//                     let month=date.getMonth()+1;
//                     return date.getDate()+"/"+ month+"/"+ date.getFullYear();
//               })
//         },
//             { data: 'hr.salary' ,
//             render:((salary)=>{
//                    return "("+salary+")"
//             })
//         },
//         ],
//     });
// });


let  table = $('#datatable').DataTable();
 
// table.search( 'lica' );
// table.draw();


// table.on( 'draw', function () {
//     alert( 'Table redrawn' );
// } );


// table.on( 'click', 'td', function () {
//     alert( this.innerHTML );
// } );
 


// $('#datatable').on( 'click', function () {
//     table.destroy();
// } );


 
table.on( 'draw', function () {
    console.log( 'Redraw occurred at: '+new Date().getTime() );
} );

table.on( 'length.dt', function ( e, settings, len ) {
    console.log( 'New page length: '+len );
} );