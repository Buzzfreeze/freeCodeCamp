---
id: a6b0bb188d873cb2c8729495
title: Convert HTML Entities
challengeType: 5
forumTopicId: 16007
dashedName: convert-html-entities
---

# --description--

จงแปลงตัวอักษร `&`, `<`, `>`, `"` และ `'` ที่อยู่ใน string ให้เป็นโค้ดที่ใช้ใน HTML ได้

# --hints--

`convertHTML("Dolce & Gabbana")` ต้องคืนค่าเป็น string `Dolce &amp; Gabbana`

```js
assert.match(convertHTML('Dolce & Gabbana'), /Dolce &amp; Gabbana/);
```

`convertHTML("Hamburgers < Pizza < Tacos")` ต้องคืนค่าเป็น string `Hamburgers &lt; Pizza &lt; Tacos`

```js
assert.match(
  convertHTML('Hamburgers < Pizza < Tacos'),
  /Hamburgers &lt; Pizza &lt; Tacos/
);
```

`convertHTML("Sixty > twelve")` ต้องคืนค่าเป็น string `Sixty &gt; twelve`

```js
assert.match(convertHTML('Sixty > twelve'), /Sixty &gt; twelve/);
```

`convertHTML('Stuff in "quotation marks"')` ต้องคืนค่าเป็น string `Stuff in &quot;quotation marks&quot;`

```js
assert.match(
  convertHTML('Stuff in "quotation marks"'),
  /Stuff in &quot;quotation marks&quot;/
);
```

`convertHTML("Schindler's List")` ต้องคืนค่าเป็น string `Schindler&apos;s List`

```js
assert.match(convertHTML("Schindler's List"), /Schindler&apos;s List/);
```

`convertHTML("<>")` ต้องคืนค่าเป็น string `&lt;&gt;`

```js
assert.match(convertHTML('<>'), /&lt;&gt;/);
```

`convertHTML("abc")` ต้องคืนค่าเป็น string `abc`

```js
assert.strictEqual(convertHTML('abc'), 'abc');
```

# --seed--

## --seed-contents--

```js
function convertHTML(str) {
  return str;
}

convertHTML("Dolce & Gabbana");
```

# --solutions--

```js
var MAP = { '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&apos;'};

function convertHTML(str) {
  return str.replace(/[&<>"']/g, function(c) {
    return MAP[c];
  });
}
```
