class CustomMetroReporter {
  constructor(terminal) {
    this.terminal = terminal;
  }

  update(event) {
    if (event.type === 'log' && event.data.type === 'warn') {
      // Filter out specific Metro validation warnings
      const skipWarnings = [
        'server.forwardClientLogs',
        'watcher.unstable_lazySha1',
        'watcher.unstable_workerThreads',
        'watcher.unstable_autoSaveCache',
      ];
      
      if (!skipWarnings.some(warning => event.data.message.includes(warning))) {
        this.terminal.log(event.data.message);
      }
      return;
    }
    
    // Pass through all other events
    if (event.type === 'update') {
      this.terminal.log(event.data.message);
    }
  }
}

module.exports = CustomMetroReporter;
