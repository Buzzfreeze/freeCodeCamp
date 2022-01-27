---
id: 587d78a8367417b2b2512ae5
title: Animate Elements at Variable Rates
challengeType: 0
videoUrl: "https://scrimba.com/c/cZ89WA4"
forumTopicId: 301040
dashedName: animate-elements-at-variable-rates
---

# --description--

เรามีวิธีที่จะควบคุมความเร็วของ animation ได้หลายวิธี
ในตอนนี้เราได้เรียนวิธีการใช้ `animation-iteration-count` และกำหนด `@keyframes` rule ไปแล้ว

ให้ลองดู animation ทางด้านขวา คุณจะเห็นดาวสองดวง ซึ่งทั้งสองดวงจะลดขนาดและ opacity ลงเป็น 20% ตาม `@keyframes` rule
ซึ่งจะทำให้เกิด animation ที่ทำให้ดาวกะพริบขึ้นมา
ถ้าคุณต้องการให้ดาวสองตัวนี้มีความเร็วในการกะพริบต่างกัน คุณก็แค่ต้องแก้ `@keyframes` rule ของ element นั้น

# --instructions--

ให้เปลี่ยนความเร็วในการทำ animation ของ element ที่มีคลาสเป็น `star-1` โดยการเปลี่ยน `@keyframes` rule เป็น 50%

# --hints--

`@keyframes` rule ของคลาส `star-1` ต้องมีค่าเป็น 50%

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
