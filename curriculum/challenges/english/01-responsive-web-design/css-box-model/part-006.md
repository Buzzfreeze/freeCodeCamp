---
id: 60a3e3396c7b40068ad6996f
title: Part 6
challengeType: 0
dashedName: part-6
---

# --description--

จงเพิ่ม `div` element ให้กับ `body`

จงกำหนดให้ `class` attribute มีค่าเท่ากับ `canvas`. ยกตัวอย่างเช่น, `<div class="my-div">`.

นี่จะเป็นเหมือนกับผ้าใบสำหรับการระบายสี

# --hints--

คุณควรมี 1 `div` element.

```js
assert(document.querySelectorAll('div').length === 1)
```

The `div` element should have a `class` with the value `canvas`.

```js
assert(document.querySelector('div').className.split(' ').includes('canvas'))
```

# --seed--

## --seed-contents--

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Rothko</title>
  </head>
  <body>
--fcc-editable-region--

--fcc-editable-region--
  </body>
</html>
```
