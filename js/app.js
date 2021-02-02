const $odd = $('a:odd');
//odd.hide();

const $secureLinks = $('a[href^="https://"]');
//secureLinks.hide();

const $pdfs = $('a[href$=".pdf"]');
//$pdfs.hide();

$secureLinks.attr('target', '_blank');
$pdfs.attr('download', true);

$secureLinks.addClass('secure');
$pdfs.addClass('pdf');

$pdfs.on('click', function(event){
 // event.preventDefault();
  
  // verificar se a caixa de seleção está marcada  
  //0 checkboxes marcados, Se não estiver marcada
  if ($(':checked').length === 0){
    
    //  evitaro download do documento
     event.preventDefault();
     //  alertar o usuário
  alert('Marque a caixa para permitir downloads de PDF.');
  }     
     
  // else acionar o download
});