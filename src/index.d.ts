// load type definitions that come with Cypress module
/// <reference types="cypress" />
declare namespace Cypress {
  interface Chainable {
    /**
     * Custom command to delete Cypress.config('downloadsFolder') folder
     * @example
     *  cy.deleteDownloadsFolder()
     */
    deleteDownloadsFolder(): Chainable<null>
  }
}

/**
 * Method to remove directory
 * @param {string} path Path to the directory
 * @returns {null}
 */
declare function removeDirectory(path: string): null;

/**
 * Method to delete Cypress.config('downloadsFolder') folder
 * @example
 *  describe('Remove downloads folder', () => {
 *   it('should work', () => {
 *    deleteDownloadsFolder();
 *   })
 *  })
 */
declare function deleteDownloadsFolder(): void;

/**
 * Hook before all tests to delete Cypress.config('downloadsFolder') folder
 * @example
 *  describe('Remove downloads folder', () => {
 *   deleteDownloadsFolderBeforeAll()
 * 
 *   it('should work', () => {})
 *  })
 */
declare function deleteDownloadsFolderBeforeAll(): void;

/**
 * Hook before each test to delete Cypress.config('downloadsFolder') folder
 * @example
 *  describe('Remove downloads folder', () => {
 *   deleteDownloadsFolderBeforeEach()
 * 
 *   it('should work', () => {})
 *  })
 */
declare function deleteDownloadsFolderBeforeEach(): void;

/**
 * Hook after all tests to delete Cypress.config('downloadsFolder') folder
 * @example
 *  describe('Remove downloads folder', () => {
 *   deleteDownloadsFolderAfterAll()
 * 
 *   it('should work', () => {})
 *  })
 */
declare function deleteDownloadsFolderAfterAll(): void;

/**
 * Hook after each test to delete Cypress.config('downloadsFolder') folder
 * @example
 *  describe('Remove downloads folder', () => {
 *   deleteDownloadsFolderAfterEach()
 * 
 *   it('should work', () => {})
 *  })
 */
declare function deleteDownloadsFolderAfterEach(): void;