---
id: 5f3326b143638ee1a09ff1e3
title: Part 4
challengeType: 0
dashedName: part-4
---

# --description--

จงเพิ่ม `body` element ต่อจาก `head` element เพื่อที่จะเตรียมพร้อมสำหรับการสร้าง content จริง ๆ บางอย่าง 

# --hints--

คุณควรมีแท็กเปิด `<body>` 1 อัน

```js
assert(code.match(/<body>/i));
```

You should have a closing `</body>` tag.

```js
assert(code.match(/<\/body>/i));
```

You should not change your `head` element. Make sure you did not delete your closing tag.

```js
assert(code.match(/<head>/i));
assert(code.match(/<\/head>/i));
```

Your `body` element should come after your `head` element.

```js
assert(code.match(/<\/head>[.\n\s]*<body>/im));
```

# --seed--

## --seed-contents--

```html
<!DOCTYPE html>
<html>
--fcc-editable-region--
  <head>
    <meta charset="utf-8" />
    <title>Camper Cafe Menu</title>
  </head>
--fcc-editable-region--
<html>
```

