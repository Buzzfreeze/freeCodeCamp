---
id: 587d78a8367417b2b2512ae4
title: Make a CSS Heartbeat using an Infinite Animation Count
challengeType: 0
videoUrl: "https://scrimba.com/c/cDZpDUr"
forumTopicId: 301062
dashedName: make-a-css-heartbeat-using-an-infinite-animation-count
---

# --description--

มาลองทำให้ animation วนไปเรื่อยๆโดยใช้ `animation-iteration-count` อีกครั้งกันดีกว่า
คราวนี้เราจะใช้รูปหัวใจที่คุณสร้างขึ้นมาก่อนหน้านี้

animation การเต้นของหัวใจ จะมีความยาว 1 วินาที
โดยจะมีส่วนที่เราต้องขยับสองส่วนคือ
ส่วนแรก คือ `heart` element (รวมถึง `:before` และ `:after`) จะถูก animate เพื่อเปลี่ยนขนาดโดยใช้ property `transform` และ
ส่วนที่สอง คือพื้นหลังของ `div` จะถูก animate เพื่อเปลี่ยนสีโดยใช้ property `background`

# --instructions--

จงทำให้หัวใจเต้น โดยการเพิ่ม property `animation-iteration-count` ให้กับทั้งคลาส `back` และ `heart` และให้กำหนดค่าเป็น `infinite`
และเราไม่ต้องระบุ animation property ให้กับ `heart:before` และ `heart:after` selector

# --hints--

property `animation-iteration-count` ของคลาส `heart` ต้องมีค่าเป็น `infinite`

```js
assert($(".heart").css("animation-iteration-count") == "infinite");
```

property `animation-iteration-count` ของคลาส `back` ต้องมีค่าเป็น `infinite`

```js
assert($(".back").css("animation-iteration-count") == "infinite");
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
