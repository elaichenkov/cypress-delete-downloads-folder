const { mkdirSync, existsSync, closeSync, openSync } = require('fs');

const createDirectory = (path) => {
  try {
    mkdirSync(path);
  } finally {
    return null;
  }
};
const createFile = (path) => {
  try {
    closeSync(openSync(path, 'w'));
  } finally {
    return null;
  }
};
const isDirectoryExist = (path) => existsSync(path);

module.exports = {
  createDirectory,
  createFile,
  isDirectoryExist,
};
