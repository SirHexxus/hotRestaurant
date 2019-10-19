function runTableQuery(){
var currentURL = window.location.origin;
$.ajax({url: currentURl + "/api/tables", method: "GET"})
.done(function)(tableData) {
    $("#tableSection").empty();
    $("#waitinglistSectoin").empty();
// This loops and shows each customer
for (var i=0; i<tableData.length && i < 5; i++){

    //
}
}




}
