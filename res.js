// Capture form input
$('.submit').on('click', function(event) {
  event.preventDefault();

  let res = {
    customerName: $('#name').val().trim(),
    customerPhone: $('#phone').val().trim(),
    customerEmail: $('#email').val().trim(),
    customerID: $('#id').val().trim()
  };
  console.log(res);

  $.post('api/tables', res, (data) => {

    if (data) {
      alert('Congratulations, we found you a table!');
    }
     else {
       alert('We apologize, we have put you on the wait list');
     }
  });


  $('#name').val('');
  $('#phone').val('');
  $('#email').val('');
  $('#id').val('');
});