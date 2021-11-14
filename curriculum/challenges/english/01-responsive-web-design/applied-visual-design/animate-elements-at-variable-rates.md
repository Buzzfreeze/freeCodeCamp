---
id: 587d78a8367417b2b2512ae5
title: Animate Elements at Variable Rates
challengeType: 0
videoUrl: 'https://scrimba.com/c/cZ89WA4'
forumTopicId: 301040
dashedName: animate-elements-at-variable-rates
---

# --description--

มันมีหลายวิธีเพื่อปรับเปลี่ยน animation rate ของ element ที่มีการ animate ที่คล้ายกัน
ถึงตอนนี้ มันสามารถทำได้โดยการใช้ `animation-iteration-count` property และกำหนด `@keyframes` rule

เพื่อทำให้เห็นภาพมากขึ้น 
animation ทางด้านขวาที่ประกอบด้วยดาว 2 ดวงที่แต่ละดวงจะลดขนาดและ opacity 20% ทุก ๆ ครั้งตาม `@keyframes` rule, ซึ่งมันจะสร้าง animation ที่ทำให้ดาวกระพริบขึ้นมา
คุณสามารถเปลี่ยน `@keyframes` rule สำหรับหนึ่ง element แยกออกมาจากที่เหลือเพื่อที่ดาวจะได้กระพริบด้วย rate ที่ต่างกัน

# --instructions--

จงเปลี่ยน animation rate ของ element ที่มีคลาสชื่อ `star-1` โดยการเปลี่ยน `@keyframes` rule ของมันไปที่ 50%

# --hints--

`@keyframes` rule ของ `star-1` class ความมีค่า 50%

```js
assert(code.match(/twinkle-1\s*?{\s*?50%/g));
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
    animation-name: twinkle-1;
    animation-duration: 1s;
  }

  .star-2 {
    margin-top: 25%;
    margin-left: 25%;
    animation-name: twinkle-2;
    animation-duration: 1s;
  }

  @keyframes twinkle-1 {
    20% {
      transform: scale(0.5);
      opacity: 0.5;
    }
  }

  @keyframes twinkle-2 {
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
    animation-name: twinkle-1;
    animation-duration: 1s;
  }

  .star-2 {
    margin-top: 25%;
    margin-left: 25%;
    animation-name: twinkle-2;
    animation-duration: 1s;
  }

  @keyframes twinkle-1 {
    50% {
      transform: scale(0.5);
      opacity: 0.5;
    }
  }

  @keyframes twinkle-2 {
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
```
