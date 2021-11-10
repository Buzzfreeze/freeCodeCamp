---
id: 60b69a66b6ddb80858c51581
title: Part 11
challengeType: 0
dashedName: part-11
---

# --description--

ต่อจาก `back-wall` element, จงสร้าง `div` อันหนึ่งที่มี `class` ชื่อ `characters`
นี่จะเป็นที่ที่สร้างตัวละครของภาพของคุณ

# --hints--

คุณควรเพิ่มเพียง 1 `div` element

```js
assert(document.querySelectorAll('div').length === 2);
```

Your new `div` element should come after your `#back-wall` element.

```js
assert(document.querySelector('#back-wall')?.nextElementSibling?.localName === 'div');
```

Your new `div` element should have the `class` set to `characters`.

```js
assert(document.querySelectorAll('div')?.[1]?.classList?.contains('characters'));
```

# --seed--

## --seed-contents--

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>freeCodeCamp Picasso Painting</title>
    <link rel="stylesheet" type="text/css" href="./styles.css" />
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css">
  </head>
  <body>
    <div id="back-wall"></div>
    --fcc-editable-region--
      
    --fcc-editable-region--
  </body>
</html>
```

```css
body {
  background-color: rgb(184, 132, 46);
}

#back-wall {
  background-color: #8B4513;
  width: 100%;
  height: 60%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
}
```
