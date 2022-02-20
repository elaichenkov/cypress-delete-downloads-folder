const {
  deleteDownloadsFolderBeforeAll,
  deleteDownloadsFolderBeforeEach,
  deleteDownloadsFolderAfterAll,
  deleteDownloadsFolderAfterEach,
} = require('../../src/index');

const downloadsFolder = Cypress.config('downloadsFolder');
const filename = `${downloadsFolder}/lorem.txt`;

function createData() {
  cy.task('createDirectory', downloadsFolder);
  cy.task('createFile', filename);
  cy.task('isDirectoryExist', downloadsFolder).should('be.true');
}

describe('methods to remove downloads folder', () => {
  beforeEach(() => createData());

  describe('removeDirectory', () => {
    it('should verify that directory does not exist', () => {
      cy.task('removeDirectory', downloadsFolder);
      cy.task('isDirectoryExist', downloadsFolder).should('be.false');
    });
  });

  describe('deleteDownloadsFolder', () => {
    it('should verify that directory does not exist', () => {
      cy.deleteDownloadsFolder();
      cy.task('isDirectoryExist', downloadsFolder).should('be.false');
    });
  });
});

describe('hooks to remove downloads folder', () => {
  describe('deleteDownloadsFolderBeforeAll', () => {
    before(() => createData());
    deleteDownloadsFolderBeforeAll();

    it('should verify that directory does not exist', () => {
      cy.task('isDirectoryExist', downloadsFolder).should('be.false');
    });
  });

  describe('deleteDownloadsFolderBeforeEach', () => {
    beforeEach(() => createData());
    deleteDownloadsFolderBeforeEach();

    it('should verify that directory does not exist', () => {
      cy.task('isDirectoryExist', downloadsFolder).should('be.false');
    });
  });

  describe('deleteDownloadsFolderAfterAll', () => {
    before(() => createData());
    deleteDownloadsFolderAfterAll();
    after(() => cy.task('isDirectoryExist', downloadsFolder).should('be.false'));

    it('should verify that directory does not exist', () => {
      cy.task('isDirectoryExist', downloadsFolder).should('be.true');
    });
  });

  describe('deleteDownloadsFolderAfterEach', () => {
    beforeEach(() => createData());
    deleteDownloadsFolderAfterEach();
    afterEach(() => cy.task('isDirectoryExist', downloadsFolder).should('be.false'));

    it('should verify that directory does not exist', () => {
      cy.task('isDirectoryExist', downloadsFolder).should('be.true');
    });
  });
});
