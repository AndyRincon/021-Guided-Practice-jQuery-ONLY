//Guided Practice

$('.chinese').click(function() {
  let inputtedName =  $('.name').val();
  $('.message').html('Nǐ hǎo,' + ' ' + inputtedName + '!');
});

$('.spanish').click(function() {
  let inputtedName =  $('.name').val();
  $('.message').html('Hola,' + ' ' + inputtedName + '!');
});

$('.french').click(function() {
  let inputtedName =  $('.name').val();
  $('.message').html('Bonjour,' + ' ' + inputtedName + '!');
});

$('.english').click(function() {
  let inputtedName =  $('.english').val();
  $('.message').html('Hello,' + ' ' + inputtedName + '!');
});
//Independent Practice