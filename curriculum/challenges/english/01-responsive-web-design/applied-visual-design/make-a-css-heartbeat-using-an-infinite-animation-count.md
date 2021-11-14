---
id: 587d78a8367417b2b2512ae4
title: Make a CSS Heartbeat using an Infinite Animation Count
challengeType: 0
videoUrl: 'https://scrimba.com/c/cDZpDUr'
forumTopicId: 301062
dashedName: make-a-css-heartbeat-using-an-infinite-animation-count
---

# --description--

นี่คืออีกตัวอย่างของการทำให้ animation วนไม่หยุดด้วย `animation-iteration-count` property โดยจะใช้รูปหัวใจที่คุณสร้างขึ้นมาก่อนหน้านี้

การเต้นของหัวใจที่มีความยาว 11 วินาทีนั้นจะประกอบไปด้วย animated piece 2 ชิ้น
`heart` elements (รวมถึง `:before` และ `:after` pieces) จะถูก animate เพื่อเปลี่ยนขนาดโดยใช้ `transform` property, และพื้นหลัง  `div` จะถูก animate เพื่อเปลี่ยนสีของมันโดยใช้`background` property.

# --instructions--

จงทำให้หัวใจเต้นโดยการเพิ่ม `animation-iteration-count` property ให้กับทั้ง `back` class และ `heart` class และกำหนดให้ค่าเป็น `infinite`
`heart:before` และ `heart:after` selectors จะไม่ต้องการ animation properties ใด ๆ

# --hints--

`animation-iteration-count` property สำหรับ `heart` class ควรมีค่าเป็น `infinite`.

```js
assert($('.heart').css('animation-iteration-count') == 'infinite');
```

`animation-iteration-count` property สำหรับ `back` class ควรมีค่าเป็น `infinite`

```js
assert($('.back').css('animation-iteration-count') == 'infinite');
```

# --seed--

## --seed-contents--

```html
<style>
  .back {
    position: fixed;
    padding: 0;
    margin: 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: white;
    animation-name: backdiv;
    animation-duration: 1s;

  }

  .heart {
    position: absolute;
    margin: auto;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: pink;
    height: 50px;
    width: 50px;
    transform: rotate(-45deg);
    animation-name: beat;
    animation-duration: 1s;

  }
  .heart:after {
    background-color: pink;
    content: "";
    border-radius: 50%;
    position: absolute;
    width: 50px;
    height: 50px;
    top: 0px;
    left: 25px;
  }
  .heart:before {
    background-color: pink;
    content: "";
    border-radius: 50%;
    position: absolute;
    width: 50px;
    height: 50px;
    top: -25px;
    left: 0px;
  }

  @keyframes backdiv {
    50% {
      background: #ffe6f2;
    }
  }

  @keyframes beat {
    0% {
      transform: scale(1) rotate(-45deg);
    }
    50% {
      transform: scale(0.6) rotate(-45deg);
    }
  }

</style>
<div class="back"></div>
<div class="heart"></div>
```

# --solutions--

```html
<style>
  .back {
    position: fixed;
    padding: 0;
    margin: 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: white;
    animation-name: backdiv;
    animation-duration: 1s;
    animation-iteration-count: infinite;
  }

  .heart {
    position: absolute;
    margin: auto;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: pink;
    height: 50px;
    width: 50px;
    transform: rotate(-45deg);
    animation-name: beat;
    animation-duration: 1s;
    animation-iteration-count: infinite;
  }
  .heart:after {
    background-color: pink;
    content: "";
    border-radius: 50%;
    position: absolute;
    width: 50px;
    height: 50px;
    top: 0px;
    left: 25px;
  }
  .heart:before {
    background-color: pink;
    content: "";
    border-radius: 50%;
    position: absolute;
    width: 50px;
    height: 50px;
    top: -25px;
    left: 0px;
  }

  @keyframes backdiv {
    50% {
      background: #ffe6f2;
    }
  }

  @keyframes beat {
    0% {
      transform: scale(1) rotate(-45deg);
    }
    50% {
      transform: scale(0.6) rotate(-45deg);
    }
  }
</style>
<div class="back"></div>
<div class="heart"></div>
```
