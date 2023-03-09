const { spawn } = require('child_process');
const path = require('path');

function startBot() {
  const botProcess = spawn('node', [path.join(__dirname, 'index.js')]);

  botProcess.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);
  });

  botProcess.stderr.on('data', (data) => {
    console.error(`stderr: ${data}`);
  });

  botProcess.on('close', (code) => {
    console.log(`Bot process exited with code ${code}`);
  });
}

setInterval(startBot, 60000); // setiap 1 menit

