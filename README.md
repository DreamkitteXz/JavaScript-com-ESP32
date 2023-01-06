<h2 align='center'>
  Como utilizar JavaScript com o ESP32 e outros MCU`s
</h2>
<h3>
  Visão geral 
</h3>
<p>
  <a href="https://github.com/espruino/Espruino">Espruino</a> é um interpretador JavaScript muito leve que roda no ESP32 e outros microcontroladores.
  Este tutorial destina-se a quem deseja executar JavaScript em qualquer microcontrolador ESP32.
</p>
<p>
Voce ira aprender:
<ul>
    <li>Instalar os drivers necessarios.</li>  
	<li>Como atualizar o ESP32 com o firmware mais recente do <a href="https://github.com/espruino/Espruino">Espruino</a>.</li>
	<li>Executar um JavaScript basico no ESP32.</li>
	<li>Piscar um Led usando JavaScript no ESP32.</li>
</ul>
<div>
    <h2>Começando...</h2>
      <h3>Instalando os Drivers</h3>
      <p>Antes de atualizarmos o firmware precisamos instalar o driver <a href="https://www.silabs.com/developers/usb-to-uart-bridge-vcp-drivers?tab=downloadso">CP210x VCP</a>. *Obs: Se você já possui o driver  instalado pule essa etapa..</p>
    <h3>Baixando os arquivos do Firmware</h3>
      <p>Para poder usar o <a href="https://github.com/espruino/Espruino">Espruino</a>, precisaremos atualizar nosso ESP32 com o firmware adequado. Os arquivos binários com o firmware podem ser obtidos <a href="http://www.espruino.com/Download">aqui</a>. após acessar o site faça o dowload do Espruino.</p>
      <img src="README\images\Espruino_screen.png" alt="Screen" width="950" height="300">
      <p>Um arquivo .zip será baixado, dentro desse arquivo devemos extrair a pasta referente ao ESP32, geralmente o final dessa pasta termina com _esp32, conforme vemos na Figura 3. 
      </p>
      <p><img src="README\images\Pasta2.png" alt="Screen" width="950" height="300"></p>
   <h3>Atualizando o Firmware</h3>
   <p>A maneira mais fácil de atualizar o firmware é usando o <a href="https://docs.espressif.com/projects/esptool/en/latest/esp32/">esptool</a>, uma ferramenta Python da <a href="https://www.espressif.com/en">Espressif</a> que nos permite atualizar o firmware no ESP32.</p>
   <p>Conforme indicado na documentação do <a href="https://github.com/espressif/esptool">repositório GitHub</a> do esptool , precisamos ter <a href="https://www.python.org/downloads/">Python 2.7</a>, <a href="https://www.python.org/downloads/">Python 3.4</a> ou uma versão superior instalada. Para instalar o esptool basta enviar o seguinte comando na linha de comando do Windows: </p>
   <p align='center'><code>pip install esptool</code></p>
</div>
<P>Em seguida, para realizar o flashing propriamente dito do firmware, a maneira mais fácil é abrir uma linha de comando e navegar até a pasta que extraímos do arquivo .zip. Para fazer isso execute os seguintes passos:</P>
<ol>
<li>Abra o cmd ou powershell.</li>
<li>Telefon</li>
<li>Endereço</li>
<li>País</li>
</ol>

</p>
