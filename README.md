
## Instrucciones Basicas    

    * abrir powershell 

    * si no tienes choco instalado, abrir powershell con permiso de administrador
      Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))

    * si no tienes git instalado
      choco install -y git
     
    git clone https://github.com/cuchorapido/cv.git
    cd cv

    * si no tienes node js instalado
      choco install -y nodejs  --version=18.9.0

    npm install
    npm start

    * esto te abrira una url en el http://localhost:3000 con tu resume!!!

    * para parar el localhost desde powershell CTRL+C (3 veces)

Si quieren cambiar algo en el resume solamente editen esto src\fixtures\resume.json con sus datos.
