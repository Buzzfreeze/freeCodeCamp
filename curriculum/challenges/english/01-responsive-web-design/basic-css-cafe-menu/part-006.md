---
id: 5f332a88dc25a0fd25c7687a
title: Part 6
challengeType: 0
dashedName: part-6
---

# --description--

จงเพิ่ม `p` element ต่อจาก `h1` element พร้อมกับข้อความ `Est. 2020` เพื่อให้ผู้ที่มาเยี่ยมชมรู้ว่าคาเฟ่นี้ถูกสร้างในปี 2020

# --hints--

คุณควรมีแท็กเปิด `<p>` อันหนึ่ง

```js
assert(code.match(/<p>/i));
```

You should have a closing `</p>` tag.

```js
assert(code.match(/<\/p>/i));
```

You should not change your existing `h1` element. Make sure you did not delete the closing tag.

```js
assert($('h1').length === 1);
```

Your `p` element should be below your `h1` element.

```js
assert($('p')[0].previousElementSibling.tagName === 'H1');
```

Your `p` element should have the text `Est. 2020`.

```js
assert(code.match(/<p>Est. 2020<\/p>/i));
```

# --seed--

## --seed-contents--

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>Camper Cafe Menu</title>
  </head>
  <body>
--fcc-editable-region--
    <h1>CAMPER CAFE</h1>
--fcc-editable-region--
  </body>
<html>
```

