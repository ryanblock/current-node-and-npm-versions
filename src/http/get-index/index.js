const exec = require('child_process').execSync

let versions = (node, npm) => `
<!doctype html>
<html lang=en>
  <head>
    <meta charset=utf-8>
    <title>Current Node and NPM versions on Lambda</title>
    <link rel="stylesheet" href="https://static.begin.app/starter/default.css">
    <link href="data:image/x-icon;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=" rel="icon" type="image/x-icon">
  </head>
  <body>

    <h2 class="center-text">
      Current Node and NPM versions on Lambda (nodejs10.x):
    </h2>
    <h1 class="center-text">
      Node: ${node || 'idk'}
    </h1>
    <h1 class="center-text">
      NPM: ${npm || 'idk'}
    </h1>
    <p class="center-text">
      Made with <a href="https://begin.com" class="link" target="_blank">Begin</a>!
    </p>

  </body>
</html>
`

exports.handler = async function http() {
  let node = exec('node --version')
  let npm = exec('npm --version')
  let body = versions(node, npm)
  return {
    type: 'text/html; charset=utf8',
    body
  }
}
