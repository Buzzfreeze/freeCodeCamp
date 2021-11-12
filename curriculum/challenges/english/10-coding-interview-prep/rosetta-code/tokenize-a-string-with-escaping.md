---
id: 594faaab4e2a8626833e9c3d
title: Tokenize a string with escaping
challengeType: 5
forumTopicId: 302338
dashedName: tokenize-a-string-with-escaping
---

# --description--

เขียนฟังก์ชันหรือโปรแกรมที่สามารถแยกสตริงที่อักขระตัวคั่นแต่ละตัวที่ไม่มีการ Escape เกิดขึ้น

ควรยอมรับพารามิเตอร์inputสามตัว:

<ul>
  <li>The <strong>string</strong></li>
  <li>The <strong>separator character</strong></li>
  <li>The <strong>escape character</strong></li>
</ul>

ควรแสดงรายการstring

กฎสำหรับการแยก:

<ul>
  <li>The fields that were separated by the separators, become the elements of the output list.</li>
  <li>Empty fields ควร be preserved, even at the start and end.</li>
</ul>

กฎสำหรับการแยก:

<ul>
  <li>"Escaped" means preceded by an occurrence of the escape character that is not already escaped itself.</li>
  <li>When the escape character precedes a character that has no special meaning, it still counts as an escape (but does not do anything special).</li>
  <li>Each occurrences of the escape character that was used to escape something, ควร not become part of the output.</li>
</ul>

แสดงให้เห็นว่าฟังก์ชันของคุณตรงตามกรณีทดสอบต่อไปนี้:

รับสตริง

<pre>one^|uno||three^^^^|four^^^|^cuatro|</pre>

and using `|` as a separator and `^` as escape character, your function ควร output the following array:

<pre>  ['one|uno', '', 'three^^', 'four^|cuatro', '']
</pre>

# --hints--

`tokenize` ควรเป็น function.

```js
assert(typeof tokenize === 'function');
```

`tokenize` ควร return array.

```js
assert(typeof tokenize('a', 'b', 'c') === 'object');
```

`tokenize('one^|uno||three^^^^|four^^^|^cuatro|', '|', '^')` ควร return `['one|uno', '', 'three^^', 'four^|cuatro', '']`

```js
assert.deepEqual(tokenize(testStr1, '|', '^'), res1);
```

`tokenize('a@&bcd&ef&&@@hi', '&', '@')` ควร return `['a&bcd', 'ef', '', '@hi']`

```js
assert.deepEqual(tokenize(testStr2, '&', '@'), res2);
```

# --seed--

## --after-user-code--

```js
const testStr1 = 'one^|uno||three^^^^|four^^^|^cuatro|';
const res1 = ['one|uno', '', 'three^^', 'four^|cuatro', ''];

// TODO add more tests
const testStr2 = 'a@&bcd&ef&&@@hi';
const res2 = ['a&bcd', 'ef', '', '@hi'];
```

## --seed-contents--

```js
function tokenize(str, sep, esc) {
  return true;
}
```

# --solutions--

```js
// tokenize :: String -> Character -> Character -> [String]
function tokenize(str, charDelim, charEsc) {
  const dctParse = str.split('')
    .reduce((a, x) => {
      const blnEsc = a.esc;
      const blnBreak = !blnEsc && x === charDelim;
      const blnEscChar = !blnEsc && x === charEsc;

      return {
        esc: blnEscChar,
        token: blnBreak ? '' : (
          a.token + (blnEscChar ? '' : x)
        ),
        list: a.list.concat(blnBreak ? a.token : [])
      };
    }, {
      esc: false,
      token: '',
      list: []
    });

  return dctParse.list.concat(
    dctParse.token
  );
}
```
