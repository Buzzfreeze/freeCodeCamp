---
id: 587d78a7367417b2b2512ae1
title: Create Movement Using CSS Animation
challengeType: 0
videoUrl: 'https://scrimba.com/c/c7amZfW'
forumTopicId: 301051
dashedName: create-movement-using-css-animation
---

# --description--

เมื่อ element มี `position` ที่ถูกระบุไว้แล้วเช่น `fixed` และ `relative`
เราสามารถใช้ CSS offset properties `right`, `left`, `top`, และ `bottom` กับ animation rules เพื่อสร้างการเคลื่อนไหวได้

ตามที่ได้แสดงให้เห็นที่ตัวอย่างข้างล่าง คุุณสามารถผลัก item ลงไปข้างล่างและผลักกลับมาที่ด้านบนโดยการกำหนดให้ `top` property เท่ากับ 50px ณ `50%` keyframe  , แต่กำหนดให้มันมี 0px สำหรับ keyframe แรก (`0%`) และสุดท้าย (`100%`) 

```css
@keyframes rainbow {
  0% {
    background-color: blue;
    top: 0px;
  }
  50% {
    background-color: green;
    top: 50px;
  }
  100% {
    background-color: yellow;
    top: 0px;
  }
}
```

# --instructions--

จงเพิ่ม motion ในแนวนอนให้กับ `div` animation
โดยใช้ `left` offset property, จงเพิ่มให้ `@keyframes` rule เพื่อที่สายรุ้งจะได้เริ่มที่ 0 pixels ตรง `0%`, และขยับไปที่ 25 pixels ตรง `50%`, และจบที่ -25 pixels ตรง `100%`
อย่าแทนที่ `top` property ใน editor เพราะ animation ควรจะมีทั้ง motion ในแนวนอนและตั้ง

# --hints--

`@keyframes` rule ของ `0%` ควรตั้งให้ `left` offset เท่ากับ 0px.

```js
assert(code.match(/[^50]0%\s*?{[\s\S]*?left:\s*?0px(;[\s\S]*?|\s*?)}/gi));
```

`@keyframes` rule ของ `50%` ควรตั้งให้ `left` offset เท่ากับ 25px.

```js
assert(code.match(/50%\s*?{[\s\S]*?left:\s*?25px(;[\s\S]*?|\s*?)}/gi));
```

`@keyframes` rule ของ `100%` ควรตั้งให้ `left` offset เท่ากับ -25px.

```js
assert(code.match(/100%\s*?{[\s\S]*?left:\s*?-25px(;[\s\S]*?|\s*?)}/gi));
```

# --seed--

## --seed-contents--

```html
<style>
  div {
    height: 40px;
    width: 70%;
    background: black;
    margin: 50px auto;
    border-radius: 5px;
    position: relative;
  }

  #rect {
    animation-name: rainbow;
    animation-duration: 4s;
  }

  @keyframes rainbow {
    0% {
      background-color: blue;
      top: 0px;

    }
    50% {
      background-color: green;
      top: 50px;

    }
    100% {
      background-color: yellow;
      top: 0px;

    }
  }
</style>

<div id="rect"></div>
```

# --solutions--

```html
<style>
  div {
    height: 40px;
    width: 70%;
    background: black;
    margin: 50px auto;
    border-radius: 5px;
    position: relative;
  }

  #rect {
    animation-name: rainbow;
    animation-duration: 4s;
  }

  @keyframes rainbow {
    0% {
      background-color: blue;
      top: 0px;
      left: 0px;
    }
    50% {
      background-color: green;
      top: 50px;
      left: 25px;
    }
    100% {
      background-color: yellow;
      top: 0px;
      left: -25px;
    }
  }
</style>
<div id="rect"></div>
```
