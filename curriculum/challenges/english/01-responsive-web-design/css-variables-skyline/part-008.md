---
id: 5d822fd413a79914d39e98d0
title: Part 8
challengeType: 0
dashedName: part-8
---

# --description--

ตอนนี้มันยากที่จะเห็นแล้ว แต่มันยังมีขอบที่ริม preview ขอบคุณ นั่นคือ`body`
จงสร้าง `div` element ใน `body` ที่มีคลาสเป็น `background-buildings`
สิ่งนี้จะเป็น container สำหรับกลุ่มของ buildings

# --hints--

คุณควรสร้าง 1 `div` element.

```js
assert.exists(document.querySelector('div'));
```

Your `div` element should be within the `body`.

```js
assert(document.querySelector('div')?.parentElement?.localName === 'body');
```

Your `div` element should have a class of `background-buildings`

```js
assert([...document.querySelector('div')?.classList]?.includes('background-buildings'));
```

# --seed--

## --seed-contents--

```html
<!DOCTYPE html>
<html>    
  <head>
    <title>freeCodeCamp Skyline Project</title>
    <link href="styles.css" rel="stylesheet" type="text/css" />
  </head>
--fcc-editable-region--
  <body>

  </body>
--fcc-editable-region--
</html>
```

```css
* {
  border: 1px solid black;
  box-sizing: border-box;
}

body {
  height: 100vh;
  margin: 0;
  overflow: hidden;
}

```

