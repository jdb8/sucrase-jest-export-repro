# sucrase-jest-export-repro

Attempting to reproduce [an inconsistency between Babel and Sucrase](https://github.com/alangpierce/sucrase/issues/715) when dealing with transitive mocked exports.

This may or may not be an actual bug, but I wanted to find a minimal repro for the weird behaviour I was seeing.

To repro:

* `yarn` to set up all deps
* `yarn test` to run jest twice, once with babel and once with sucrase
* note that the babel-transformed case succeeds, while the sucrase case does not

The test is attempting to spy on a function (`getValue`) from a fake library `some-lib`. The test spies on it _via the default export of `some-lib/some-lib.js`_, while the code under test uses the named export from `some-lib/index.js` instead.

Under babel, this somehow works - likely due to some weird export shenanigans taking place?

Under sucrase, the spied function is never called, so the test fails.
