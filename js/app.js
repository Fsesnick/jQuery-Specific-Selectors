const $odd = $('a:odd');
//odd.hide();

const $secureLinks = $('a[href^="https://"]');
//secureLinks.hide();

const $pdfs = $('a[href$=".pdf"]');
//$pdfs.hide();

$secureLinks.attr('target', '_blank');
$pdfs.attr('download', true);