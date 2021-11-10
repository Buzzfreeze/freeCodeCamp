---
id: 5d822fd413a79914d39e98cc
title: Part 4
challengeType: 0
dashedName: part-4
---

# --description--

จงเพิ่ม `title` element ให้กับ `head`, และจงกำหนดให้โปรเจคของคุณมีหัวข้อเป็น `freeCodeCamp Skyline Project`
นอกจากนี้ จงเก็บ self-closing `link` element ไว้ใน `head` element
จงกำหนดให้มันมี `rel` attribute เป็น `stylesheet`, `type` attribute เป็น `text/css`, และ `href` attribute เป็น `styles.css`.

# --hints--

โค้ดของคุณควรมี `title` element 1 อัน

```js
const title = document.querySelector('title');
assert.exists(title);
```

The `title` element should be within the `head` element.

```js
const head = document.querySelector('head');
// TODO: head does not contain title...body contains title
```

Your project should have a title of `freeCodeCamp Skyline Project`.

```js
const title = document.querySelector('title');
assert.equal(title.text.toLowerCase(), 'freecodecamp skyline project')
```

Remember, the casing and spelling matters for the title.

```js
const title = document.querySelector('title');
assert.equal(title.text, 'freeCodeCamp Skyline Project');
```

Your code should have a `link` element.

```js
assert.match(code, /<link/)
```

You should not change your existing `head` tags. Make sure you did not delete the closing tag.

```js
const heads = document.querySelectorAll('head');
assert.equal(heads?.length, 1);
```

Your `link` element should be a self-closing element.

```js
assert(code.match(/<link[\w\W\s]+\/>/i));
```

Your `link` element should be within your `head` element.

```js
assert(code.match(/<head>[\w\W\s]*<link[\w\W\s]*\/>[\w\W\s]*<\/head>/i))
```

Your `link` element should have a `rel` attribute with the value `stylesheet`.

```js
assert.match(code, /<link[\s\S]*?rel=('|"|`)stylesheet\1/)
```

Your `link` element should have a `type` attribute with the value `text/css`.

```js
assert.match(code, /<link[\s\S]*?type=('|"|`)text\/css\1/)

```

Your `link` element should have an `href` attribute with the value `styles.css`.

```js
assert.match(code, /<link[\s\S]*?href=('|"|`)(\.\/)?styles\.css\1/)
```

# --seed--

## --seed-contents--

```html
<!DOCTYPE html>
<html>
--fcc-editable-region--
  <head>
    
  </head>
--fcc-editable-region--
  <body>
  </body>
</html>
```
