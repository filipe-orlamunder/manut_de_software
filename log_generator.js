const fs = require('fs');
const path = require('path');

const logFilePath = path.join(__dirname, 'logs.txt');

function generateLog() {
    const logMessage = `${new Date().toISOString()} INFO Exemplo de log\n`;
    fs.appendFile(logFilePath, logMessage, (err) => {
        if (err) throw err;
        console.log('Log registrado:', logMessage.trim());
    });
}

setInterval(generateLog, 5000);

console.log('Gerador de logs iniciado. Logs serão salvos em logs.txt');

// gera um log a cada 5 segundos
// executar com o comando: node log_generator.js