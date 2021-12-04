// This is a JavaScript file

window.onload = function(){
  document.querySelector('#exibir').addEventListener('click', function(){

    cordova.plugins.barcodeScanner.scan(
      function (result) {
        if(result.text = '280720550'){
          document.querySelector('#texto').innerHTML = "<h2>Informações</h2>";

          document.querySelector('#info').InnerHTML = "Produto -> <br>Nome: iPad Mini Wi-Fi 64Gb -Cinza Espacial<br>";

          document.querySelector('#img').src = 'lib/img/imagem1.jpg';

           document.querySelector('#info').innerHTML = "Valor: R$ 3.499,00 <br> Descrição:<br> Processador A12 Bionic com arquitetura de 64 bits Neural Engine  Coprocessador M12 Integrado; <br> Sistema operacional iOS<br> Tamanho da tela 7.9;<br> Tecnologia Wi-Fi;<br>Resolução da câmera:<br><br> Câmera traseira: 8MP; <br> Câmera frontal: 7MP; <br> GPS: Sim; <br> Grava vídeos: Sim; <br> Câmera traseira: Sim; <br> Câmera frontal: Sim; <br> Memória Flash: 64 GB; <br> Funciona como celular: Não";
        }

        if(result.text = '989895555'){
          document.querySelector('#texto').innerHTML = "<h2>Informações</h2>";

          document.querySelector('#info').InnerHTML = "Produto -> <br>Nome:Samsung Galaxy J8 Dual Chip 4g 64gb Tela 6<br>";

          document.querySelector('#img').src = 'lib/img/imagem2.jpg';

           document.querySelector('#info').innerHTML = "Descrição:<br> Valor: R$ 1.888,00 <br> Velocidade do Processador: 1.8GHz; <br> Tipo de Processador: OctaCore;<br> Tamanho (Tela Principal): 153.6mm (6.0); <br> Resolução (Tela Principal):1480 x 720 (HD+);<br> Câmera Resolução - Câmera Traseira: 16.0 MP + 5.0 MP; <br> Memória RAM(GB): 4 GB; <br> Memória Total Interna (GB) - 64 GB; <br> Memória Disponível (GB)  -50.6 GB;"
        }

        if(result.text = '85236987'){
          document.querySelector('#texto').innerHTML = "<h2>Informações</h2>";

          document.querySelector('#info').InnerHTML = "Produto -> <br>Nome: Motorola One XT1941 Branco 64GB<br>";

          document.querySelector('#img').src = 'lib/img/imagem3.jpg';

           document.querySelector('#info').innerHTML = "<br>Valor: R$ 2.300,00<br><br>Sistema Operacional Android 8.1 Oreo<br><br>Processador Qualcomm Snapdragon 625 (MSM8953) Octa-Core de 2.0 GHz<br><br>RAM 4GB<br><br>Tecnologia GSM, 3G e 4G<br><br>Memória interna 64 GB Total sendo uma parte usada para o sistema operacional e aplicativos pré-instaladosCor Branco<br><br><h2>Características Gerais</h2><br><ul><li>Tela Max Vision e design ao máximo</li><li>Câmera dupla e armazenamento ilimitado</li><li>Android One: primeiro do Brasil, atualizado e seguro-Carregamento ultrarrápido TurboPower</li><li>Últimas inovações do Google incorporadas</li><li>Leitor Biométrico (Impressão Digital)</li></ul>";

        }
        if(result.text = '85369877444'){
          document.querySelector('#texto').innerHTML = "<h2>Informações</h2>";

          document.querySelector('#info').InnerHTML = "Produto -> Asus Zenfone Max Pro M1<br><br>Valor: R$ 1.199,00<br><br>";

          document.querySelector('#img').src = 'lib/img/imagem4.jpg';

           document.querySelector('#info').innerHTML = "<br>Processador: Qualcomm Snapdragon SDM636 1,8 GHz, 2 Mb Cache<br><br> Sistema Operacional: Android 8.1 Oreo<br><br> Memória Ram: 4 Gb<br><br> Memória Interna: 64 Gb<br><br> Memória Expansiva: 2TB Sd<br><br> Tela: 6,0 Led Backlight Ips panel (1080x2160)<br><br> Tipo de Chip: Nano -Dual Chip: Sim<br><br> Conectividade: 3G; 4G; Wi-fi<br><br> Câmera Frontal: 8MP<br><br> Câmera Traseira: 16+5MP"
        }else{
          alert ("Código de barras inválido!");
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
