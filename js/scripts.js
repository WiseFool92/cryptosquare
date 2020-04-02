// Backend Logic

// Front End UI logic
$(document).ready(function(){
  $("form#crypto").submit(function(event){
    event.preventDefault();
    var raw = $('input#raw').val();
    var encrypted = encrypt(raw);
    $("#encrypted").text(encrypted);
    $("#output").show();
  });
});