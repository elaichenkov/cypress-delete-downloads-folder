const { removeDirectory } = require('../../src/index');
const { createDirectory, createFile, isDirectoryExist } = require('../../src/utils');

module.exports = (on, config) => {
  on('task', {
    removeDirectory,
    createDirectory,
    createFile,
    isDirectoryExist,
  });
};
