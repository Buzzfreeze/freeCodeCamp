---
id: 587d78a7367417b2b2512ae1
title: Create Movement Using CSS Animation
challengeType: 0
videoUrl: "https://scrimba.com/c/c7amZfW"
forumTopicId: 301051
dashedName: create-movement-using-css-animation
---

# --description--

เมื่อเราระบุ `position` ของ element ไว้แล้ว เช่น `fixed` หรือ `relative`
เราสามารถใช้ CSS offset properties `right`, `left`, `top`, และ `bottom` กับ animation rule เพื่อสร้างการเคลื่อนไหวได้

ในตัวอย่างด้านล่าง จะเห็นว่าเราจะดัน element ลงไปข้างล่าง และผลักกลับมาที่ด้านบนได้
โดยการกำหนดให้ property `top` เป็น 50px ที่ `50%` และกำหนดให้ `top` เป็น 0px ที่ keyframe แรก (`0%`) และ keyframe สุดท้าย (`100%`)

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

ให้เพิ่มการเคลื่อนที่ในแนวนอนให้กับ `div` โดยใช้ property `left`

ให้เพิ่ม `@keyframes` rule โดยกำหนด `left` เป็น 0 pixel ที่ `0%` จากนั้นขยับเป็น 25 pixel ที่ `50%` และจบเป็น -25 pixel ที่ `100%`
อย่าเปลี่ยนค่าของ property `top` ใน editor เพราะ animation นี้จะต้องเคลื่อนที่ทั้งในแนวนอนและแนวตั้ง

# --hints--

`@keyframes` rule ที่ `0%` ต้องมี `left` offset เป็น 0px

```js
assert(code.match(/[^50]0%\s*?{[\s\S]*?left:\s*?0px(;[\s\S]*?|\s*?)}/gi));
```

`@keyframes` rule ที่ `50%` ต้องมี `left` offset เป็น 25px

```js
assert(code.match(/50%\s*?{[\s\S]*?left:\s*?25px(;[\s\S]*?|\s*?)}/gi));
```

`@keyframes` rule ที่ `100%` ต้องมี `left` offset เป็น -25px

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
