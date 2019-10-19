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

  // $.post()


  $('#name').val('');
  $('#phone').val('');
  $('#email').val('');
  $('#id').val('');
});