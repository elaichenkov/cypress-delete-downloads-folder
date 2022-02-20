# cypress-delete-downloads-folder ![tests](https://github.com/elaichenkov/cypress-delete-downloads-folder/actions/workflows/test.yml/badge.svg) [![Total npm downloads](https://img.shields.io/npm/dt/cypress-delete-downloads-folder.svg)](https://www.npmjs.com/package/cypress-delete-downloads-folder)

Cypress custom commands and hooks to delete `Cypress.config('downloadsFolder')` folder

## Installation

```shell
npm i -D cypress-delete-downloads-folder
```

## Usage

cypress-delete-downloads-folder extends Cypress' cy command.

So, if you want to use custom `cy.deleteDownloadsFolder()` command then you need to add this line to your project's `cypress/support/commands.js`:

```javascript
require('cypress-delete-downloads-folder').addCustomCommand();
```

And add the following lines to your project's `cypress/plugins/index.js`:

```javascript
const { removeDirectory } = require('cypress-delete-downloads-folder');

module.exports = (on, config) => {
  on('task', { removeDirectory })
}
```

Then, in your test, you can use it like this:

```javascript
cy.deleteDownloadsFolder();
```

Also, you can use custom hooks to delete downloads folder before or after tests execution:

```javascript
const { deleteDownloadsFolderBeforeAll } = require('cypress-delete-downloads-folder');

describe('delete downloads folder before all', () => {
  deleteDownloadsFolderBeforeAll()

  it('should work', () => {})
})
```

```javascript
const { deleteDownloadsFolderBeforeEach } = require('cypress-delete-downloads-folder');

describe('delete downloads folder before each', () => {
  deleteDownloadsFolderBeforeEach()

  it('should work', () => {})
})
```

```javascript
const { deleteDownloadsFolderAfterAll } = require('cypress-delete-downloads-folder');

describe('delete downloads folder after all', () => {
  deleteDownloadsFolderAfterAll()

  it('should work', () => {})
})
```

```javascript
const { deleteDownloadsFolderAfterEach } = require('cypress-delete-downloads-folder');

describe('delete downloads folder after each', () => {
  deleteDownloadsFolderAfterEach()

  it('should work', () => {})
})
```

## Types

To enable IntelliSense information and autocomplete you have to include types in the `tsconfig.json` file:

```json
{
  "compilerOptions": {
    "types": ["cypress", "cypress-delete-downloads-folder"]
  }
}
```

## Author

Yevhen Laichenkov <elaichenkov@gmail.com>

## License

[MIT](LICENSE)
