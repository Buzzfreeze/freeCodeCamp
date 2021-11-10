---
id: 60a3e3396c7b40068ad69974
title: Part 11
challengeType: 0
dashedName: part-11
---

# --description--

Eทุกภาพวาดต้องการกรอบรูป

จงคลุม `.canvas` element ไว้ใน `div` อีกอันหนึ่ง
จงกำหนดให้ `div` เป็น `frame` class.
# --hints--

คุณควรเพิ่ม `div` element มาใหม่ 1 อัน

```js
assert(document.querySelectorAll('div').length === 2)
```

Your `.canvas` element should be nested in the new `div` element.

```js
assert(document.querySelector('.canvas').parentElement.tagName === 'DIV');
```

Your new `div` should have a `class` with the value `frame`.

```js
assert(document.querySelector('div').className.split(' ').includes('frame'));
```

Your new `div` should be within your `body` element.

```js
assert(document.querySelector('div').parentElement.tagName === 'BODY');
```

# --seed--

## --seed-contents--

```css
.canvas {
  width: 500px;
  height: 600px;
  background-color: #4d0f00;
}
```

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Rothko</title>
    <link href="./styles.css" rel="stylesheet">
  </head>
  <body>
--fcc-editable-region--

    <div class="canvas">
    </div>

--fcc-editable-region--
  </body>
  ```
