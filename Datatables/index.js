$("h1").css("color","red");


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
    $('#d').DataTable({
        ajax: 'api/objects.txt',
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
       pagingType: "full_numbers", ///full first , last and  previous
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




 
/// data passing without Ajax directly..


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
 
$('#dt').DataTable( {
    dom: 'Bfrtip',
    buttons: [
        'copyHtml5',
        'excelHtml5',
        'csvHtml5',
        'pdfHtml5'
    ],
    data: [
        new Office( "Tiger Nixon", "m","Manager"),
        new Office( "Garre Winters", "fem","Student"),
        new Office( "Garrett Winters", "m","Student"),
        new Office( "Garrett Win", "fem","Student"),
        new Office( "john ton", "m","Student"),
        new Office( "harfvrt tyinters", "m","Student"),
        new Office( "loarrett finters", "m","Student"),
        new Office( "dfgrett dfers", "fem","Student"),
        new Office( "gbgett bgters", "m","Student"),
        new Office( "rtrrett Wrvters", "m","Student"),
        new Office( "vtGarrett Winters", "fem","Student"),
        new Office( "Gvtrrett Wtvivrers", "m","Student"),
        new Office( "Garrett vtWinters", "fem","Student"),
        new Office( "tvarrett tvinters", "m","Student"),

    
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
    data: [
        new Numberhelp( "Tiger Nixon", "45","Manager"),
        new Numberhelp( "Garre Winters", "56","Student"),
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
          'excel',
          'pdf'
      ]
  } );