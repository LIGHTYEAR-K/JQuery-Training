$(document).ready(()=>{
    $("h1").animate({fontSize: '3.0rem'}, 1500);
})


 //---- without keyvalue pairs----
 
$(document).ready(function () {
    $('#d').DataTable({
        ajax: 'api/sets.txt',
    });
});


$(document).ready( function(){
    $("#d").DataTable( {
         ajax:'api/3col.txt',
         columns: [
            { 'data': 'name' },
            { 'data': 'gender' },
            { 'data': 'designation',
             'render':((designation)=>{
                return "<a href=https://en.wikipedia.org/wiki/" +designation+">" +designation+"</a>"
             })
              
            }
         
        ]
    } );
});


$(document).ready(function () {
    $('#dt').DataTable({
         ajax: './api/objects.txt',
         select: {
            style: 'multi'
        },
        //dom: '<"top"i>rt<"bottom"flp><"clear">',  // to Push length & search to bottom of the table
        dom:'Bfrtip',
        fixedHeader: {
            header: true
        },
        buttons: {
            buttons: [
                { extend: 'copy', className: 'btn btn-primary' },
                { extend: 'excel', className: 'btn btn-success' }
                
            ]
        },
        //buttons:['createState', 'savedStates'],
        colReorder: true,
        columns: [
            { data: 'name' },
            { data: 'position' },
            { data: 'office' },
            { data: 'extn' },
            { data: 'start_date' },
            { data: 'salary' },
        ],
    });
});


//----Nested files---with Options


$(document).ready(function () {
    $('#d').DataTable({
        ajax: 'api/nested.txt',
        scrollY: 350,
        paging:true,
        searching: true,
        ordering:  true,
       serverSide: false,
       stateSave:true,
       stateDuration: 60 * 60 * 24,
       displayStart: 0,
       lengthMenu: [ 10,20,26 ],
       pagingType: "full_numbers", ///full first , last and  previous buttons
       /* renderer: {
        header: "jqueryui",
        pageButton: "bootstrap"
    }, */
       scrollCollapse: false,
       Search:{
             regex: false, //matching patterns
             return: true,
       },
       searchCols: [
        null,
        { "search": "My filter" },
        null,
        { "search": "^[0-9]", "regex": true }
      ],
      searchDelay: 400,
      columnDefs: [
        { targets: 0, visible: true}    
    ],
       
       
        columns: [
            { data: 'name' },
            { data: 'hr.position' },
            { data: 'contact.0' },
            { data: 'contact.1' },
            { data: 'hr.start_date' ,
              render:((datas)=>{
                    let date= new Date((datas));
                    let month=date.getMonth()+1;
                    return date.getDate()+"/"+ month+"/"+ date.getFullYear();
              })
        },
            { data: 'hr.salary' ,
            render:((salary)=>{
                   return "("+salary+")"
            })
        },
        ],

    });
});




 
/// data passing directly... without Ajax 


$('#d').dataTable( {
    "data": [
        {
            "name":       "Tiger Nixon",
            "position":   "System Architect",
            "salary":     "$3,120",
            "start_date": "2011/04/25",
            "office":     "Edinburgh",
            "extn":       "5421"
        },
        {
            "name": "Garrett Winters",
            "position": "Director",
            "salary": "5300",
            "start_date": "2011/07/25",
            "office": "Apple.co",
            "extn": "8422"
        },
        
    ],
    "columns": [
        { "data": "name" },
        { "data": "position" },
        { "data": "office" },
        { "data": "extn" },
        { "data": "start_date" },
        { "data": "salary" }
    ],
} );




// data instance method


function Professional ( name, gender,designation ) {
    this.name = name;
    this.gender= gender;
    this.designation=designation;
};
 
$('#d').DataTable( {
    data: [
        new Professional( "Tiger Nixon", "m","Manager"),
        new Professional( "Garrett Winters", "m","student")
    ],
    columns: [
        { data: 'name' },
        { data: 'gender' },
          { data: 'designation' },

    ]
} );






// col target


$("#d").DataTable( {
    ajax:'api/3col.txt',
    columnDefs: [ {
        "targets": [0,1],
        "searchable": false,
        "visible":false,
      } ],
    columns: [
       { 'data': 'name' },
       { 'data': 'gender' },
       { 'data': 'designation',
        'render':((designation)=>{
           return "<a href=https://en.wikipedia.org/wiki/" +designation+">" +designation+"</a>"
        })
         
       }
    
   ]
} );


// rending

  function Office ( name, gender,designation ) {
    this.name = name;
    this.gender= gender;
    this.designation=designation;
};
 
$('#d').DataTable( {
    dom: 'Bfrtip',
    buttons: [
        'print',
        {text: 'Reload',
        action: function ( e, dt, node, config ) {
            dt.ajax.reload();
        }}
    ],
    data: [
        new Office( "Tiger Nixon", "m","Manager"),
        new Office( "Sefton Hollis", "fem","Student"),
        new Office( "Garre Winters", "m","Student"),
        new Office( "Linda", "fem","Student"),
        new Office( "John Wick", "m","Student"),
        new Office( "lucifer", "m","Student"),
        new Office( "Taylor", "m","Student"),
        new Office( "Natasha", "fem","Student"),
        new Office( "Jimmy", "m","Student"),
        new Office( "Tony Stark", "m","Student"),
        new Office( "Emma", "fem","Student"),
        new Office( "Daniles", "m","Student"),
        new Office( "Jessica", "fem","Student"),
        new Office( "Ben stokes", "m","Student"),

    
    ],
    // columnDefs: [
    //     {
    //         targets: 0,
    //         className: 'dt-body-center'
    //     }
    //   ],
    columns: [
        { data: 'name' ,
           render:((data,type,row)=>{
                return data +'*'
           })},
        { data: 'gender',
        render:((data,type,row)=>{
            return data +"ale"
       }),
    },
          { data: 'designation',
          render:((data,type,row)=>{
            return " --" + data 
       }) },

    ]
} );

  

// rendering number


  function Numberhelp ( name, age,designation ) {
    this.name = name;
    this.age= age;
    this.designation=designation;
};
$('#d').DataTable( {
    autoFill: true,
    data: [
        new Numberhelp( "Tiger Nixon", "45","Manager"),
        new Numberhelp( "John Cenna", "58","CEO"),
        new Numberhelp( "Garrett Winters", "34","Student"),


    
    ],
    columns: [
        { data: 'name',
        render: DataTable.render.number( null, null, 2, '$' )},
        { data: 'age' ,
        render: DataTable.render.number( null, null, 0, 'Age: ' )},
        { data: 'designation' ,
        render: DataTable.render.number( null, null, 2, '$' )},
    ]
} )


// Computing Values

    function Bmi ( weight,height,bmi){
    this.weight = weight;
    this.height = height;
    this.bmi = bmi;
};
 
$('#d').DataTable( {
    data: [
        new Bmi("49","6","0"),
         new Bmi("98","5","0"),
    ],
    columns: [
        {data: 'weight',},
        { data: 'height' },
        { 
    data: null,
    render: function ( data, type, row ) {
        return Math.round( ( row.weight - row.height ))+'%';
    }
} ,
    ]
} );


// date Format


    function Fdate ( dob,age){
    this.dob = dob;
    this.age = age;
};
$('#d').DataTable( {
    data: [
        new Fdate( "04-03-2001",
        "21" ),
    ],
    columns: [
        { data: 'dob',
        render: function ( data, type, row ) {
        var dateSplit = data.split('-');
        return type === "display" || type === "filter" ?
            dateSplit[2] +'-'+ dateSplit[1] +'-'+ dateSplit[0] :
            data;}},
        {data: 'age'}
    ]
} )

// Adding First + last Names

function Firstlast ( firstname,lastname,add){
    this.firstname = firstname;
    this.lastname = lastname;
    this.add = add;
};
$('#d').DataTable( {
    

    data: [
        new Firstlast( "Light","Year" ),
    ],
    columns: [
        { data: 'firstname'},
        {data: 'lastname'},
        {data:null,
        render: function ( data, type, row ) {
        return data.firstname +' '+ data.lastname;}}
    ]
} );
   
// pagging,search,order

  $('#d').DataTable( {
    paging: false,
    scrollY: 400,
    searching: false,
    ordering: false,
} );

// non jquery 
    new DataTable( '#d', {
    paging: true,
    scrollY: 400
} );

// chaining

// let  table = $('#d').DataTable();
 
// table.search( 'lica' );
// table.draw();


// table.on( 'draw', function () {
//     alert( 'Table redrawn' );
// } );


 


// $('#datatable').on( 'click', function () {
//     table.destroy();
// } );

 
// table.on( 'draw', function () {
//     console.log( 'Redraw occurred at: '+new Date().getTime() );
// } );

// table.on( 'length.dt', function ( e, settings, len ) {
//     console.log( 'New page length: '+len );
// } );



// style Align Center

$('#d').DataTable( {
    columnDefs: [
      {
          targets: 1,
          className: 'dt-body-center'
      }
    ]
  } );


  $('#d').on( 'draw.dt', function () {
    alert( 'Table' );
} );

//Buttons

$("#d").Datatable({
    dom: 'Bfrtip',
    buttons: [
        'copyHtml5',
        'excelHtml5',
        'csvHtml5',
        'pdfHtml5',
        'print'

    ]
  });

//Button  text Customise
$('#d').DataTable( {
    dom: 'Bfrtip',
    buttons: [
        
        {
          extend: 'copy',
          text: 'Click to Copy'
        },
        {
          extend:'csv',
          text:'Convert to Csv'
        },
        {
          extend:'excel',
          text:"Convert to ExCel"
        },
        {
          extend:'pdf',
          text:"Convert to PDF"
        }
    ]
  } );

// Customising buttons & USing KeyAccess

  $('#d').DataTable( {
    dom: 'Bfrtip',
    buttons: [
        {
            extend: 'copy',
            text: '<u>C</u>opy',
            key: {
                key: 'c',
                // altKey: true,
                ctrlKey:true,
                shiftKey:true
            }
        }
    ]
} );


  //reload Ajax data

$('#d').DataTable( {
dom: 'Bfrtip',
buttons: [
    'print',
    {text: 'Reload',
    action: function ( e, dt, node, config ) {
        dt.ajax.reload();
    }}
]
})


 // Button Collection
$('#d').DataTable( {
    dom: 'Bfrtip',
  
      buttons: [
          {
              extend: 'collection',
              text: 'Export',
              buttons: [ 'csv', 'excel', 'pdf' ,'copy','print']
          }
      ]
  } );


   // Adding Classes to Button

  $('#d').DataTable( {
        dom: 'Bfrtip',
        buttons: {
            buttons: [
                { extend: 'copy', className: 'btn btn-primary' },
                { extend: 'excel', className: 'btn btn-success' }
            ]
        }
  } );

  // Excel-Bold text

    $('#d').DataTable( {
        dom: 'Bfrtip',
        buttons: [ {
            extend: 'excelHtml5',
            customize: function( xlsx ) {
                var sheet = xlsx.xl.worksheets['sheet1.xml'];
 
                $('row c[r^="C"]', sheet).attr( 's', '2' );
            }
        } ]
    } );

  // Excell-cell Background

$('#d').DataTable( {
dom: 'Bfrtip',
buttons: [{
    extend: 'excelHtml5',
    customize: function(xlsx) {
        var sheet = xlsx.xl.worksheets['sheet1.xml'];

        
        $('row c[r^="C"]', sheet).each( function () {
            
            if ( $('is t', this).text() =='London') {
                $(this).attr( 's', '20' );
            }
        });
    }
}]
} );

  // Basic column visibility

    $('#d').DataTable( {
        dom: 'Bfrtip',
        buttons: [
            'colvis'
        ]
    } );

  // Customisation of column button text

$('#d').DataTable( {
    dom: 'Bfrtip',
    buttons: [ {
        extend: 'colvis',
        columnText: function ( dt, idx, title ) {
            return (idx+1)+': '+title;
        }
    } ]
} );

  //Pdf Orientation & PageSizing
$('#d').DataTable( {
dom: 'Bfrtip',
buttons: [
    {
        extend: 'pdfHtml5',
        orientation: 'landscape',
        pageSize: 'LEGAL'
    }
]
} );
  
  // ColReorder-Reset 

$('#d').DataTable( {
    colReorder: {
        enable: false
    },
    buttons: [
        {
            text: "Enable",
            action: function ( e, dt ) {
                dt.colReorder.enable();
            }
        },
        {
            text: "Disable column reordering",
            action: function ( e, dt ) {
                dt.colReorder.disable();
            }
        },
        {
            text: "Reset",
            action: function ( e, dt ) {
                dt.colReorder.reset();
            }
        }
    ]
})

  //  fixedcolums left or right Column

$(document).ready(function() {
    $('#d').DataTable( {
        scrollY:        300,
        scrollX:        true,
        scrollCollapse: true,
        paging:         false,
        fixedColumns:   true   // two fix multiple column 
       // fixedColumns:   {
       //     left: 2
       //   }
    } );
} );


   // RowGroup
$(document).ready(()=>{
    $('#d').DataTable( {
    order: [[2, 'asc']],
    rowGroup: {
        dataSrc: 2
    }
})
})

  //  scroller

$(document).ready(function() {
    $('#d').DataTable({
        ajax:'api/bigfile.txt',
        deferRender:    true,
        scrollY:        200,
        scrollCollapse: true,
        scroller:       true

    });
});


  // Search Bulider

$(document).ready(()=>{
    $('#d').DataTable( {
        buttons:[
            {
                extend: 'searchBuilder',
                config: {
                    depthLimit: 2
                }
            }
        ],
        dom: 'Bfrtip',
    });
})

  // search Panels

$(document).ready(function() {
    $('#d').DataTable({
        buttons: [
            'searchPanes'
        ],
        dom: 'Bfrtip'
    });
});
  
// Editor  --but not working

let editor=""; 
 
$('#d').Datatable( {
        ajax: "./api/object.txt",

        fields: [ {
                label: "First name:",
                name: "first_name"
            }, {
                label: "Last name:",
                name: "last_name"
            }, {
                label: "Position:",
                name: "position"
            }, {
                label: "Office:",
                name: "office"
            }, {
                label: "Extension:",
                name: "extn",
                multiEditable: false
            }, {
                label: "Start date:",
                name: "start_date",
                type: "datetime"
            }, {
                label: "Salary:",
                name: "salary"
            }
        ],
        dom: "Bfrtip",
        columns: [
            { data: null, render: function ( data, type, row ) {
                return data.first_name+' '+data.last_name;
            } },
            { data: "position" },
            { data: "office" },
            { data: "extn" },
            { data: "start_date" },
            { data: "salary", render: $.fn.dataTable.render.number( ',', '.', 0, '$' ) }
        ],
        select: true,
        buttons: [
            { extend: "create", editor: editor },
            { extend: "edit",   editor: editor },
            { extend: "remove", editor: editor }
        ]
    } );

    // Select or Multi select

    $(document).ready(function() {
        $('#d').DataTable( {
            select: {
                style: 'multi'
            }
        } );
    } );
  
    //  StateRestore

    $('#d').DataTable({
        dom: 'Blfrtip',
        buttons:['createState', 'savedStates']
    });

    //Header and Footer Fixed

    $(document).ready(function() {
        var table = $('#example').DataTable( {
            fixedHeader: {
                header: true,
                footer: true
            }
        } );
    } );

    $(document).ready(function() {
        $('#test').dtDateTime();
    });