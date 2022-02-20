const { rmdirSync } = require('fs');

const removeDirectory = (path) => {
  try {
    rmdirSync(path, { maxRetries: 10, recursive: true });
  } catch (error) {
    throw Error(`Error while deleting ${path}. Original error: ${error}`);
  } finally {
    return null;
  }
};

const deleteDownloadsFolder = () => cy.task('removeDirectory', Cypress.config('downloadsFolder'));
const deleteDownloadsFolderBeforeAll = () => before(deleteDownloadsFolder);
const deleteDownloadsFolderBeforeEach = () => beforeEach(deleteDownloadsFolder);
const deleteDownloadsFolderAfterAll = () => after(deleteDownloadsFolder);
const deleteDownloadsFolderAfterEach = () => afterEach(deleteDownloadsFolder);
const addCustomCommand = () => Cypress.Commands.add('deleteDownloadsFolder', deleteDownloadsFolder);

module.exports = {
  removeDirectory,
  deleteDownloadsFolder,
  deleteDownloadsFolderBeforeAll,
  deleteDownloadsFolderBeforeEach,
  deleteDownloadsFolderAfterAll,
  deleteDownloadsFolderAfterEach,
  addCustomCommand,
};
