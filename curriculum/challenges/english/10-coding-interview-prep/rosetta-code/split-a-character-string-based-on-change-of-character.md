---
id: 5a23c84252665b21eecc801d
title: Split a character string based on change of character
challengeType: 5
forumTopicId: 302322
dashedName: split-a-character-string-based-on-change-of-character
---

# --description--

แยกstring (อักขระ) ออกเป็นstringที่คั่นด้วยเครื่องหมายจุลภาค (พร้อมช่องว่าง) ตามการเปลี่ยนแปลงของอักขระ (ซ้ายไปขวา) ช่องว่างควรถือเป็นอักขระอื่น (ยกเว้นจะมีปัญหาในการแสดงอย่างชัดเจน) เช่นเดียวกับเครื่องหมายจุลภาค ตัวอย่างเช่น string:

<pre>
"gHHH5YY++///\\"
</pre>

ควร split:

<pre>
["g", "HHH", "5", "YY", "++", "///", "\\" ];
</pre>

# --hints--

`split` ควรเป็น function.

```js
assert(typeof split == 'function');
```

`split("hello")` ควร return array.

```js
assert(Array.isArray(split('hello')));
```

`split("hello")` ควร return `["h", "e", "ll", "o"]`.

```js
assert.deepEqual(split('hello'), ['h', 'e', 'll', 'o']);
```

`split("commission")` ควร return `["c", "o", "mm", "i", "ss", "i", "o", "n"]`.

```js
assert.deepEqual(split('commission'), [
  'c',
  'o',
  'mm',
  'i',
  'ss',
  'i',
  'o',
  'n'
]);
```

`split("ssss----====llloooo")` ควร return `["ssss", "----", "====", "lll", "oooo"]`.

```js
assert.deepEqual(split('ssss----====llloooo'), [
  'ssss',
  '----',
  '====',
  'lll',
  'oooo'
]);
```

`split("sssmmmaaammmaaat")` ควร return `["sss", "mmm", "aaa", "mmm", "aaa", "t"]`.

```js
assert.deepEqual(split('sssmmmaaammmaaat'), [
  'sss',
  'mmm',
  'aaa',
  'mmm',
  'aaa',
  't'
]);
```

`split("gHHH5YY++///\\")` ควร return `["g", "HHH", "5", "YY", "++", "///", "\\"]`.

```js
assert.deepEqual(split('gHHH5YY++///\\'), [
  'g',
  'HHH',
  '5',
  'YY',
  '++',
  '///',
  '\\'
]);
```

# --seed--

## --seed-contents--

```js
function split(str) {

}
```

# --solutions--

```js
function split(str) {
  const concat = xs =>
    xs.length > 0
      ? (() => {
          const unit = typeof xs[0] === 'string' ? '' : [];
          return unit.concat.apply(unit, xs);
        })()
      : [];

  const group = xs => groupBy((a, b) => a === b, xs);

  const groupBy = (f, xs) => {
    const dct = xs.slice(1).reduce(
      (a, x) => {
        const h = a.active.length > 0 ? a.active[0] : undefined,
          blnGroup = h !== undefined && f(h, x);
        return {
          active: blnGroup ? a.active.concat([x]) : [x],
          sofar: blnGroup ? a.sofar : a.sofar.concat([a.active])
        };
      },
      {
        active: xs.length > 0 ? [xs[0]] : [],
        sofar: []
      }
    );
    return dct.sofar.concat(dct.active.length > 0 ? [dct.active] : []);
  };

  const map = (f, xs) => xs.map(f);

  const stringChars = s => s.split('');

  return map(concat, group(stringChars(str)));
}
```
