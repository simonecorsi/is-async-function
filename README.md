# is-async-function

This package check if function provided is an AsyncFunction returning true/false.

<!-- toc -->

- [is-async-function](#is-async-function)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [License](#license)
  - [Contact](#contact)

<!-- tocstop -->


<!-- GETTING STARTED -->

## Installation

```sh
npm i --save @scdev/is-async-function
# OR
yarn add @scdev/is-async-function
```

<!-- USAGE EXAMPLES -->

## Usage

```javascript
const isAsyncFunction = require('@scdev/is-async-function');
isAsyncFunction(() => {}) // false
isAsyncFunction(async () => {}) // true
```

<!-- CONTRIBUTING -->

## Contributing

Project is pretty simple and straight forward for what is my needs, but if you have any idea you're welcome.

This projects uses [commitizen](https://github.com/commitizen/cz-cli) so be sure to use standard commit format or PR won't be accepted

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'feat(scope): some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE` for more information.

<!-- CONTACT -->

## Contact

Simone Corsi - [@im_simonecorsi](https://twitter.com/im_simonecorsi)
