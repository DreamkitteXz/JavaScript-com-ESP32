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
<p><b>IMPORTANTE:</b></p>
<ul>
<li>Versão do Windows utilizada: <b>Windows 11 version 21H2.</b></li>
<li>Versão do Python utilizada: <b>Python 3.9.13.</b></li>
</ul>
    <h2>Começando...</h2>
      <h3>Instalando os Drivers</h3>
      <p>Antes de atualizarmos o firmware precisamos instalar o driver <a href="https://www.silabs.com/developers/usb-to-uart-bridge-vcp-drivers?tab=downloadso">CP210x VCP</a>. *Obs: Se você já possui o driver  instalado pule essa etapa..</p>
    <h3>Baixando os arquivos do Firmware</h3>
      <p>Para poder usar o <a href="https://github.com/espruino/Espruino">Espruino</a>, precisaremos atualizar nosso ESP32 com o firmware adequado. Os arquivos binários com o firmware podem ser obtidos <a href="http://www.espruino.com/Download">aqui</a>. após acessar o site faça o dowload do Espruino.</p>
      <img src="README\images\Espruino_screen.png" alt="Screen" width="1000" height="300">
      <p>Um arquivo .zip será baixado, extraia esta pasta para área de trabalho, dentro dessa pasta devemos procurar pela pasta referente ao ESP32, geralmente o final dessa dela termina com <code>_esp32</code>, conforme vemos na Figura 3. 
      </p>
      <p><img src="README\images\Pasta3.png" alt="Screen" width="900" height="200"></p>
   <h3>Atualizando o Firmware</h3>
   <p>A maneira mais fácil de atualizar o firmware é usando o <a href="https://docs.espressif.com/projects/esptool/en/latest/esp32/">esptool</a>, uma ferramenta Python da <a href="https://www.espressif.com/en">Espressif</a> que nos permite atualizar o firmware no ESP32.</p>
   <p>Conforme indicado na documentação do <a href="https://github.com/espressif/esptool">repositório GitHub</a> do esptool , precisamos ter <a href="https://www.python.org/downloads/">Python 2.7</a>, <a href="https://www.python.org/downloads/">Python 3.4</a> ou uma versão superior instalada. Para instalar o esptool basta abrir o cmd ou powershell e enviar o seguinte comando na linha de comando do Windows: </p>
   <p align='center'><code>pip install esptool</code></p>
</div>
<P>Em seguida a maneira mais fácil para realizar o flashing do firmware é abrir uma linha de comando e navegar até a pasta que extraímos do arquivo .zip. Para fazer isso execute os seguintes passos:</P>
<ol>
<li>Abra o cmd ou powershell.</li>
<img src="README\images\cMD.png" alt="Screen" width="950" height="400">
<li>Copie o path da pasta <code>_esp32</code></li>
<img src="README\images\FIle.png" alt="Screen" width="751" height="268">
<li>Abra uma linha de comando no cmd e navegue até o diretório da pasta usando o comando <code>cd</code> + <code>nome da pasta</code>.</li>
</ol>
<img src="README\images\ezgif.com-gif-maker (1).gif" alt="Screen" width="950" height="400">
</p>
<p>Precisamos dar o comando abaixo, levando em consideração o seguinte, Você precisa trocar a <code>COM11</code> pela porta COM da sua placa no seu computador, para isso siga os seguintes passos:</p>
<ol>
<pre><code>python -m esptool --port COM11 --baud 460800 write_flash --flash_size=detect 0x1000 bootloader.bin 0x10000 espruino_esp32.bin 0x8000 partitions_espruino.bin</code></pre>
<li>Clique com o botão direito em iniciar ou pesquise gerenciador de dispositivos no seu PC.</li>
<li>Abra o gerenciador de dispositivos</li>
<li>Procure por <code>PORTAS (COM & LPT)</code></li>
</ol>
<img src="README\images\GT4.png" alt="Screen" width="700" height="400">
<p>Porta <code>COM11</code> trocada pela porta que o ESP32 esta. Agora execute o comando.</p>
<pre><code>python -m esptool --port COM5 --baud 460800 write_flash --flash_size=detect 0x1000 bootloader.bin 0x10000 espruino_esp32.bin 0x8000 partitions_espruino.bin</code></pre>
<b>**OBS: SEGURE O BOTÃO DE BOOT DO ESP32 ENQUANTO O COMANDO É EXECUTADO**</b>
<p> </p>
<p>Você pode conferir abaixo o resultado na linha de comando.</p>
<img src="README\images\Untitled.png" alt="Screen" width="900" height="600">
<p>Pronto agora seu ESP32 esta apto á ser programado com JS.</p>

<h2>
  Espruino IDE
</h2>
<p>
A maneira mais fácil de interagir com a placa após o procedimento de flashing é usando o Espruino IDE. Há duas versões de IDE para o Espruino, uma <a href="https://www.espruino.com/ide/">Versão WEB</a> e outra versão nativa do <a href="https://www.espruino.com/Web+IDE">Windows IDE</a>. As duas versões apresentaram sucesso nos testes,fica á sua escolha qual usar.
</p>
<h3>
  Espruino Web IDE
</h3>
<p>
Para poder interagir com a placa, precisamos ir ao menu Configurações, que é aberto clicando no ícone superior direito. Lá, vá para a aba de comunicações e na entrada Baud Rate altere o valor suspenso para 115200.
<img src="README\images\ES.png" alt="Screen" width="788" height="400">
</p>
<p> </p>
<p>
<img src="README\images\115200.png" alt="Screen" width="820" height="350">
</p>
<p>
Por fim, para se conectar à placa, clique no ícone superior esquerdo.
<img src="README\images\Connection.png" alt="Screen" width="788" height="350">
Ao clicar no ícone, aparecerá uma lista com as portas <code>COM</code> disponíveis. Escolha a porta COM correta para sua placa.
<img src="README\images\ports.png" alt="Screen" width="788" height="375">
</p>
<h2>Hello World</h2>
<p>Escreveremos um comando Hello World simples. Para isso, basta digitar o seguinte comando:</p>
<p align='center'><code>console.log("Hello, World!");</code></p>
<p>Basta colar este comado na IDE e clicar no botão <code>RAM.</code>
<img src="README\images\K.png" alt="Screen" width="788" height="350"></p>
