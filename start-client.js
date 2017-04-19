const args = [ 'run', 'build' ];
const opts = { stdio: 'inherit', cwd: 'front', shell: true };

require('child_process').spawn('yarn', [], opts);
require('child_process').spawn('npm', args, opts);
