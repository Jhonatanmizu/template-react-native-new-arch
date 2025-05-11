const { spawn } = require('child_process');
const path = require('path');

// Create a function to filter Metro warnings
const filterMetroOutput = (data) => {
  const output = data.toString();
  const skipWarnings = [
    'server.forwardClientLogs',
    'watcher.unstable_lazySha1',
    'watcher.unstable_workerThreads',
    'watcher.unstable_autoSaveCache'
  ];

  // Only print lines that don't contain our specific warnings
  if (!skipWarnings.some(warning => output.includes(warning))) {
    process.stdout.write(output);
  }
};

// Start Metro with the reset cache flag
const metro = spawn('node', [
  path.join(__dirname, '../node_modules/react-native/cli.js'),
  'start',
  '--reset-cache'
], {
  stdio: ['inherit', 'pipe', 'pipe']
});

// Filter the output
metro.stdout.on('data', filterMetroOutput);
metro.stderr.on('data', filterMetroOutput);

// Handle process exit
metro.on('exit', (code) => {
  process.exit(code);
});

// Handle process signals
process.on('SIGTERM', () => metro.kill('SIGTERM'));
process.on('SIGINT', () => metro.kill('SIGINT'));
