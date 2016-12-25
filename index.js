'use strict';

const plugins = require('./plugins.json');

module.exports = ruleId => {
  const url = plugins[ruleId];

  if (!url) {
    return {
      found: false,
      url: 'https://github.com/1000ch/textlint-rule-documentation#Contributing'
    };
  }

  return {
    found: true,
    url: url
  };
};
