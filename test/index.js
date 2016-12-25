import test from 'ava';
import getRuleURI from '../';

test('should return url of listed rules', t => {
  t.deepEqual(getRuleURI('no-todo'), {
    found: true,
    url: 'https://github.com/azu/textlint-rule-no-todo'
  });

  t.deepEqual(getRuleURI('no-nfd'), {
    found: true,
    url: 'https://github.com/azu/textlint-rule-no-nfd'
  });

  t.deepEqual(getRuleURI('no-double-negative-ja'), {
    found: true,
    url: 'https://github.com/azu/textlint-rule-no-double-negative-ja'
  });

  t.deepEqual(getRuleURI('no-empty-section'), {
    found: true,
    url: 'https://github.com/azu/textlint-rule-no-empty-section'
  });

  t.deepEqual(getRuleURI('no-hankaku-kana'), {
    found: true,
    url: 'https://github.com/azu/textlint-rule-no-hankaku-kana'
  });

  t.deepEqual(getRuleURI('no-exclamation-question-mark'), {
    found: true,
    url: 'https://github.com/azu/textlint-rule-no-exclamation-question-mark'
  });

  t.deepEqual(getRuleURI('no-start-duplicated-conjunction'), {
    found: true,
    url: 'https://github.com/azu/textlint-rule-no-start-duplicated-conjunction'
  });

  t.deepEqual(getRuleURI('no-doubled-conjunction'), {
    found: true,
    url: 'https://github.com/takahashim/textlint-rule-no-doubled-conjunction'
  });
});
