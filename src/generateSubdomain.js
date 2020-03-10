const path = require('path');

function generateSubdomain({ prefix, suffix, project = '.' } = {}) {
  const cwd = process.cwd();
  console.log(cwd);
  // const pkgPath = path.join(cwd, '../', '../', 'package.json');
  const pkgPath = path.join(cwd, 'package.json');
  console.log(pkgPath);
  const pkg = require(pkgPath);
  console.log(pkg);
  return `https://${prefix}${pkg.name}-${pkg.version}${suffix}.surge.sh`;
}

module.exports = generateSubdomain;
