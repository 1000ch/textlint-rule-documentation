# textlint-rule-documentation

## Install

```bash
$ npm install --save textlint-rule-documentation
```

## Usage

```javascript
const getRuleURI = require('textlint-rule-documentation');

// find url for core rules
getRuleURI('no-todo');
// => { found: true, url: 'https://github.com/azu/textlint-rule-no-todo' }
```

## Contributing

If you find a plugin that you use is not in the [list of supported plugins](./plugins.json), please consider adding it to the project by sending a pull request.

## License

[MIT](https://1000ch.mit-license.org) © [Shogo Sensui](https://github.com/1000ch)
