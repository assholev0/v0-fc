const fs = require('fs-extra');
const SDK = require('./lib/sdk');
const { select } = require('./lib/prompt');
const { handler } = require('./lib/common');

module.exports = async (fn = '') => {
  const FunctionName = fn || await select();
  const sdk = SDK();
  await sdk.DeleteFunction({
    FunctionName
  }).then(handler('删除'));
  fs.removeSync(fn);
};
