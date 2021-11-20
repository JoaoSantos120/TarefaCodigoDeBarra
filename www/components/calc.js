// This is a JavaScript file

window.onload = function(){
  document.querySelector('#exibir').addEventListener('click', function(){
    document.querySelector('#texto').innerHTML = "<h2>Informações</h2>";
    document.querySelector('#info').textContent = "Motorola";
  });
}
