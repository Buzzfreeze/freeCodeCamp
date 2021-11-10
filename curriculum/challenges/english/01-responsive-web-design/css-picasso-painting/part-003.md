---
id: 60b80da8676fb3227967a731
title: Part 3
challengeType: 0
dashedName: part-3
---

# --description--

จงลิงค์ไฟล์ CSS, แม้ว่าคุณจะยังไม่ได้เขียน CSS ก็ตาม

จงเพิ่ม `link` element ที่มี `rel` เป็น `stylesheet`, `type` เป็น `text/css`, `href` เป็น `styles.css`

# --hints--


คุณควรมี 1 `link` element.

```js
assert.match(code, /<link/)
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
  <head>
    <meta charset="utf-8">
    <title>freeCodeCamp Picasso Painting</title>
    --fcc-editable-region--

    --fcc-editable-region--
  </head>
  <body>
  </body>
</html>
```

```css

```
