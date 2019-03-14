// This is a JavaScript file
$(document).on('click','#btnCalcular', function(){
  var sexoM = $("input[id='masculino']:checked").val();
  var sexoF = $("input[id='feminino']:checked").val();
  var peso = $('#peso').val();
  var altura = $('#altura').val();
  var idade = $('#idade').val();
  var txAtvd = $('#nivelAtividade').val();
  var tmb;

  if(sexoM == "masculino")
  {
    tmb = parseFloat(txAtvd) * (66 + (13.7*parseFloat(peso)) + (5*parseFloat(altura)) - (6.8*parseFloat(idade))); 
  }
  else if(sexoF == 'feminino')
  {
    tmb = parseFloat(txAtvd)*665+(9.6*parseFloat(peso))+(1.8*parseFloat(altura))-(4.7*parseFloat(idade)); 
  }
  $('#displayMetabolismo').val(tmb.toFixed(2).toString());
});