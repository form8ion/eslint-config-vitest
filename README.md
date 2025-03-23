# eslint-config-vitest

shareable config for ESLint for Vitest test files

<!--status-badges start -->

[![Node CI Workflow Status][github-actions-ci-badge]][github-actions-ci-link]
![SLSA Level 2][slsa-badge]

<!--status-badges end -->

## Table of Contents

* [Usage](#usage)
  * [Installation](#installation)
  * [Example](#example)
* [Contributing](#contributing)
  * [Dependencies](#dependencies)
  * [Verification](#verification)

## Usage

<!--consumer-badges start -->

[![npm][npm-badge]][npm-link]
[![Try @form8ion/eslint-config-vitest on RunKit][runkit-badge]][runkit-link]
[![license][license-badge]][license-link]
![node][node-badge]

<!--consumer-badges end -->

### Installation

```sh
$ npm install @form8ion/eslint-config-vitest --save-dev
```

### Example

```javascript
export default {
  extends: [
    '@form8ion',
    '@form8ion/vitest'
  ]
}
```

## Contributing

<!--contribution-badges start -->

[![Commitizen friendly][commitizen-badge]][commitizen-link]
[![Conventional Commits][commit-convention-badge]][commit-convention-link]
[![Renovate][renovate-badge]][renovate-link]
[![PRs Welcome][PRs-badge]][PRs-link]
[![semantic-release: angular][semantic-release-badge]][semantic-release-link]

<!--contribution-badges end -->

### Dependencies

```sh
$ nvm install
$ npm install
```

### Verification

```sh
$ npm test
```

[github-actions-ci-link]: https://github.com/form8ion/eslint-config-vitest/actions?query=workflow%3A%22Node.js+CI%22+branch%3Amaster

[github-actions-ci-badge]: https://img.shields.io/github/actions/workflow/status/form8ion/eslint-config-vitest/node-ci.yml.svg?branch=master&logo=github

[slsa-badge]: https://slsa.dev/images/gh-badge-level2.svg

[commitizen-link]: http://commitizen.github.io/cz-cli/

[commitizen-badge]: https://img.shields.io/badge/commitizen-friendly-brightgreen.svg

[commit-convention-link]: https://conventionalcommits.org

[commit-convention-badge]: https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg

[renovate-link]: https://renovatebot.com

[renovate-badge]: https://img.shields.io/badge/renovate-enabled-brightgreen.svg?logo=renovatebot

[PRs-link]: https://makeapullrequest.com

[PRs-badge]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg

[semantic-release-link]: https://github.com/semantic-release/semantic-release

[semantic-release-badge]: https://img.shields.io/badge/semantic--release-angular-e10079?logo=semantic-release

[npm-link]: https://www.npmjs.com/package/@form8ion/eslint-config-vitest

[npm-badge]: https://img.shields.io/npm/v/@form8ion/eslint-config-vitest?logo=npm

[runkit-link]: https://npm.runkit.com/@form8ion/eslint-config-vitest

[runkit-badge]: https://badge.runkitcdn.com/@form8ion/eslint-config-vitest.svg

[license-link]: LICENSE

[license-badge]: https://img.shields.io/github/license/form8ion/eslint-config-vitest.svg?logo=opensourceinitiative

[node-badge]: https://img.shields.io/node/v/@form8ion/eslint-config-vitest?logo=node.js
