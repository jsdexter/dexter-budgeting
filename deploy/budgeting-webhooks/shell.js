const http = require('http');
const createHandler = require('github-webhook-handler');
const shell = require('shelljs');


// We avoid to hardcode the secret in the code, you should provide it with an ENV variable before running this script
const { MY_SECRET } = process.env;
// You might use the same script for multiple repositories, this is only one of them
const REPO_NAME = 'dexter-budgeting';
// port is default on 6767
const PORT = process.env.PORT || 6767;

var handler = createHandler({ path: '/', secret: MY_SECRET })

console.log('Dexter Dexter');

http.createServer(function (req, res) {
  handler(req, res, function (err) {
    res.statusCode = 404
    res.end('no such location')
  })
}).listen(PORT);

handler.on('error', function (err) {
  console.error('Error:', err.message)
})

handler.on('workflow_run', function (event) {
  const repository = event.payload.repository.name;
  const action = event.payload.action;

  console.log('Received a Pull Request for %s to %s', repository, action);
  // the action of closed on pull_request event means either it is merged or declined
  if (repository === REPO_NAME && action === 'completed') {
    // we should deploy now
    // shell.cd('..');
    console.log("Jason Dexter ............")
    shell.exec('~/scripts/deploy_stage');
  }
});