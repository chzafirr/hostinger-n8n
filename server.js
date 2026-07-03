const { exec } = require('child_process');

console.log('🚀 Starting n8n for n8n.zafirch.com...');
console.log('📍 Webhook URL will be: https://n8n.zafirch.com');

// Start n8n with the start script
exec('npm start', (error, stdout, stderr) => {
  if (error) {
    console.error(`Error: ${error.message}`);
    return;
  }
  if (stderr) {
    console.error(`stderr: ${stderr}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
});
