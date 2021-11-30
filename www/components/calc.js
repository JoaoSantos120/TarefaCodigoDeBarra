// This is a JavaScript file

window.onload = function(){
  document.querySelector('#exibir').addEventListener('click', function(){

    cordova.plugins.barcodeScanner.scan(
      function (result) {
        if(result.text = '280720550'){
          document.querySelector('#texto').innerHTML = "<h2>Informações</h2>";
          document.querySelector('#info').textContent = "Nome do Produto: iPad Mini Wi-Fi 64Gb - Cinza Espacial";
          document.querySelector('#img').src = 'lib/img/imagem1.jpg';
           document.querySelector('#info').textContent = "Valor: R$ 3.499,00 
           Descrição:
          Processador A12 Bionic com arquitetura de 64 bits Neural Engine Coprocessador M12 integrado
          Sistema operacional iOS Tamanho da tela 7.9" Tecnologia Wi-Fi
          Resolução da câmera - Câmera traseira: 8MP; - Câmera frontal: 7MP 
          GPS Sim
          Grava vídeos Sim
          Câmera traseira Sim
          Câmera frontal Sim
          Memória Flash 64 GB
          Funciona como celular: Não";
        }

      },
      function (error) {
          alert("Scanning failed: " + error);
      },
      {
          preferFrontCamera : true, // iOS and Android
          showFlipCameraButton : true, // iOS and Android
          showTorchButton : true, // iOS and Android
          torchOn: true, // Android, launch with the torch switched on (if available)
          saveHistory: true, // Android, save scan history (default false)
          prompt : "Place a barcode inside the scan area", // Android
          resultDisplayDuration: 500, // Android, display scanned text for X ms. 0 suppresses it entirely, default 1500
          formats : "QR_CODE,PDF_417", // default: all but PDF_417 and RSS_EXPANDED
          orientation : "landscape", // Android only (portrait|landscape), default unset so it rotates with the device
          disableAnimations : true, // iOS
          disableSuccessBeep: false // iOS and Android
      }
   );
  });
}
