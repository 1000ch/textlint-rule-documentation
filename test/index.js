import test from 'ava';
import getRuleURI from '../';

test('should return url of listed rules', t => {
  t.deepEqual(getRuleURI('a-rule-which-does-not-exist'), {
    found: false,
    url: 'https://github.com/1000ch/textlint-rule-documentation#Contributing'
  });

  t.deepEqual(getRuleURI('alex'), {
    found: true,
    url: 'https://github.com/azu/textlint-rule-alex'
  });

  t.deepEqual(getRuleURI('en-max-word-count'), {
    found: true,
    url: 'https://github.com/azu/textlint-rule-en-max-word-count'
  });

  t.deepEqual(getRuleURI('eslint'), {
    found: true,
    url: 'https://github.com/azu/textlint-rule-eslint'
  });

  t.deepEqual(getRuleURI('ginger'), {
    found: true,
    url: 'https://github.com/nodaguti/textlint-rule-ginger'
  });

  t.deepEqual(getRuleURI('git-log-to-errata'), {
    found: true,
    url: 'https://github.com/azu/textlint-rule-git-log-to-errata'
  });

  t.deepEqual(getRuleURI('javascript'), {
    found: true,
    url: 'https://github.com/azu/textlint-rule-javascript'
  });

  t.deepEqual(getRuleURI('max-comma'), {
    found: true,
    url: 'https://github.com/azu/textlint-rule-max-comma'
  });

  t.deepEqual(getRuleURI('max-number-of-lines'), {
    found: true,
    url: 'https://github.com/azu/textlint-rule-max-number-of-lines'
  });

  t.deepEqual(getRuleURI('no-double-negative-ja'), {
    found: true,
    url: 'https://github.com/azu/textlint-rule-no-double-negative-ja'
  });

  t.deepEqual(getRuleURI('no-doubled-conjunction'), {
    found: true,
    url: 'https://github.com/takahashim/textlint-rule-no-doubled-conjunction'
  });

  t.deepEqual(getRuleURI('no-doubled-joshi'), {
    found: true,
    url: 'https://github.com/azu/textlint-rule-no-doubled-joshi'
  });

  t.deepEqual(getRuleURI('no-empty-section'), {
    found: true,
    url: 'https://github.com/azu/textlint-rule-no-empty-section'
  });

  t.deepEqual(getRuleURI('no-exclamation-question-mark'), {
    found: true,
    url: 'https://github.com/azu/textlint-rule-no-exclamation-question-mark'
  });

  t.deepEqual(getRuleURI('no-hankaku-kana'), {
    found: true,
    url: 'https://github.com/azu/textlint-rule-no-hankaku-kana'
  });

  t.deepEqual(getRuleURI('no-mix-dearu-desumasu'), {
    found: true,
    url: 'https://github.com/azu/textlint-rule-no-mix-dearu-desumasu'
  });

  t.deepEqual(getRuleURI('no-nfd'), {
    found: true,
    url: 'https://github.com/azu/textlint-rule-no-nfd'
  });

  t.deepEqual(getRuleURI('no-start-duplicated-conjunction'), {
    found: true,
    url: 'https://github.com/azu/textlint-rule-no-start-duplicated-conjunction'
  });

  t.deepEqual(getRuleURI('no-todo'), {
    found: true,
    url: 'https://github.com/azu/textlint-rule-no-todo'
  });

  t.deepEqual(getRuleURI('rousseau'), {
    found: true,
    url: 'https://github.com/azu/textlint-rule-rousseau'
  });

  t.deepEqual(getRuleURI('sentence-length'), {
    found: true,
    url: 'https://github.com/azu/textlint-rule-sentence-length'
  });

  t.deepEqual(getRuleURI('sjsj'), {
    found: true,
    url: 'https://github.com/azu/textlint-rule-sjsj'
  });

  t.deepEqual(getRuleURI('spellcheck-tech-word'), {
    found: true,
    url: 'https://github.com/azu/textlint-rule-spellcheck-tech-word'
  });

  t.deepEqual(getRuleURI('unexpanded-acronym'), {
    found: true,
    url: 'https://github.com/azu/textlint-rule-unexpanded-acronym'
  });

  t.deepEqual(getRuleURI('web-plus-db'), {
    found: true,
    url: 'https://github.com/azu/textlint-rule-web-plus-db'
  });
});
