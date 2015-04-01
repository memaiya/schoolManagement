function getStaffDetails(){
   // $('#dtStaffDetails').datatable();
    $.ajax({
        url : '/staffDetails',
        dataType : "html",
        success : function(response) {
            $(".panel-body").html(response);
        }
    });

    $( document ).ready(function(){
        console.log("hello ");
        $('#dtStaffDetails').datatable();
        /*{
         "sPaginationType" : "full_numbers",
         "sScrollY" : "200px",
         'bAutoWidth' : false,
         "sAjaxSource" : "/staffs",
         "aoColumns" : [
         {
         "sDefaultContent" : "",
         "mDataProp" : "id"
         },

         {
         "sDefaultContent" : "",
         "mDataProp" : "first_name"
         },
         {
         "sDefaultContent" : "",
         "mDataProp" : "middle_name"
         },
         {
         "sDefaultContent" : "",
         "mDataProp" : "last_name"
         },
         {
         "sDefaultContent" : "",
         "mDataProp" : "address"
         },
         {
         "sDefaultContent" : "",
         "mDataProp" : "phone"
         },
         {
         "sDefaultContent" : "",
         "mDataProp" : "mobile"
         },
         {
         "sDefaultContent" : "",
         "mDataProp" : "department"
         }
         ]
         })*/
    })
}
/*
('#staff').onclick(function(){
   alert("hello maiya");
})*/