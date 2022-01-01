---
id: 587d78a5367417b2b2512ad6
title: Create a Gradual CSS Linear Gradient
challengeType: 0
videoUrl: 'https://scrimba.com/c/cg4dpt9'
forumTopicId: 301047
dashedName: create-a-gradual-css-linear-gradient
---

# --description--

การใช้สีกับ HTML elements นั้นไม่ได้ถูกจำกัดที่ flat hue สีเดียว
CSS ได้มีการเพิ่มความสามารถในการไล่สีให้กับ element โดยเราจะเรียกมันว่า gradient
เราสามารถเข้าถึงมันได้ผ่าน `linear-gradient()` function ของ `background` property
นี่คือตัวอย่างของการใช้ gradient:

```css
background: linear-gradient(gradient_direction, color 1, color 2, color 3, ...);
```

argument อันแรกจะบอกทิศทางที่การไล่สีจะเริ่ม โดยเราสามารถบอกในหน่วยองศาได้ โดย `90deg` จะทำให้เกิด gradient ในแนวนอน (จากซ้ายไปขวา)
และ `45deg` จะทำให้เกิด gradient ในแนวทแยง (จะล่างซ้ายไปบนขวา)
argument ดังต่อไปนี้จะระบุลำดับของสีที่ใช้ใน gradient

Example:

```css
background: linear-gradient(90deg, red, yellow, rgb(204, 204, 255));
```

# --instructions--

จงใช้ `linear-gradient()` กับ `background` ของ `div` element และจงกำหนดให้มันเริ่มจากทิศที่มีค่า 35 องศาเพื่อเปลี่ยนสีจาก`#CCFFFF` ไป `#FFCCCC`

# --hints--

`div` element ควรมี `linear-gradient` `background` ที่มาพร้อมกับทิศทางและสี

```js
assert(
  $('div')
    .css('background-image')
    .match(/linear-gradient\(35deg, rgb\(204, 255, 255\), rgb\(255, 204, 204\)\)/gi),
);
```

# --seed--

## --seed-contents--

```html
<style>
  div {
    border-radius: 20px;
    width: 70%;
    height: 400px;
    margin: 50px auto;
  }
</style>

<div></div>
```

# --solutions--

```html
<style>
  div {
    border-radius: 20px;
    width: 70%;
    height: 400px;
    margin: 50px auto;
    background: linear-gradient(35deg, #ccffff, #ffcccc);
  }
</style>
<div></div>
```
