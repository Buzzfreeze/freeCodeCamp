---
id: 587d78a8367417b2b2512ae6
title: Animate Multiple Elements at Variable Rates
challengeType: 0
videoUrl: 'https://scrimba.com/c/cnpWZc9'
forumTopicId: 301042
dashedName: animate-multiple-elements-at-variable-rates
---

# --description--

ในแบบฝึกหัดที่แล้ว คุณได้เปลี่ยนความเร็วของ animation ของ element สองตัวที่คล้ายกันไปแล้ว โดยการเปลี่ยน `@keyframes` rule
คราวนี้มาลองเปลี่ยนความเร็วของ animation ของหลายๆ element โดยการใช้ `animation-duration` กัน

ในส่วนที่เป็น animation ใน code editor คุณจะเห็นว่ามีดาวสามดวงกำลังกะพริบอยู่บนฟ้า ซึ่งมีความเร็วในการกะพริบเท่ากัน
ให้เปลี่ยนค่าของ property `animation-duration` ของแต่ละ element ให้ต่างกัน เพื่อให้ดาวแต่ละดวงมีความเร็วในการกะพริบที่ต่างกัน

# --instructions--

ให้กำหนดค่า `animation-duration` ของ element ที่มีคลาสเป็น `star-1`, `star-2`, และ `star-3` มีค่าเป็น 1s, 0.9s, และ 1.1s ตามลำดับ

# --hints--

property `animation-duration` ของดาวที่มีคลาสเป็น `star-1` ต้องมีค่าเป็น 1s

```js
assert($('.star-1').css('animation-duration') == '1s');
```

property `animation-duration` ของดาวที่มีคลาสเป็น `star-2` ต้องมีค่าเป็น 0.9s

```js
assert($('.star-2').css('animation-duration') == '0.9s');
```

property `animation-duration` ของดาวที่มีคลาสเป็น `star-3` ต้องมีค่าเป็น 1.1s

```js
assert($('.star-3').css('animation-duration') == '1.1s');
```

# --seed--

## --seed-contents--

```html
<style>
  .stars {
    background-color: white;
    height: 30px;
    width: 30px;
    border-radius: 50%;
    animation-iteration-count: infinite;
  }

  .star-1 {
    margin-top: 15%;
    margin-left: 60%;
    animation-duration: 1s;
    animation-name: twinkle;
  }

  .star-2 {
    margin-top: 25%;
    margin-left: 25%;
    animation-duration: 1s;
    animation-name: twinkle;
  }

  .star-3 {
    margin-top: 10%;
    margin-left: 50%;
    animation-duration: 1s;
    animation-name: twinkle;
  }

  @keyframes twinkle {
    20% {
      transform: scale(0.5);
      opacity: 0.5;
    }
  }

  #back {
    position: fixed;
    padding: 0;
    margin: 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(black, #000099, #66c2ff, #ffcccc, #ffeee6);
  }
</style>

<div id="back"></div>
<div class="star-1 stars"></div>
<div class="star-2 stars"></div>
<div class="star-3 stars"></div>
```

# --solutions--

```html
<style>
  .stars {
    background-color: white;
    height: 30px;
    width: 30px;
    border-radius: 50%;
    animation-iteration-count: infinite;
  }

  .star-1 {
    margin-top: 15%;
    margin-left: 60%;
    animation-duration: 1s;
    animation-name: twinkle;
  }

  .star-2 {
    margin-top: 25%;
    margin-left: 25%;
    animation-duration: 0.9s;
    animation-name: twinkle;
  }

  .star-3 {
    margin-top: 10%;
    margin-left: 50%;
    animation-duration: 1.1s;
    animation-name: twinkle;
  }

  @keyframes twinkle {
    20% {
      transform: scale(0.5);
      opacity: 0.5;
    }
  }

  #back {
    position: fixed;
    padding: 0;
    margin: 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(black, #000099, #66c2ff, #ffcccc, #ffeee6);
  }
</style>
<div id="back"></div>
<div class="star-1 stars"></div>
<div class="star-2 stars"></div>
<div class="star-3 stars"></div>
```
