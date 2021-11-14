---
id: 587d78a8367417b2b2512ae6
title: Animate Multiple Elements at Variable Rates
challengeType: 0
videoUrl: 'https://scrimba.com/c/cnpWZc9'
forumTopicId: 301042
dashedName: animate-multiple-elements-at-variable-rates
---

# --description--

ในแบบฝึกหัดที่แล้ว คุณได้เปลี่ยน animation rate ของสอง element ที่ animate คล้ายกันโดยการเปลี่ยน `@keyframes` rule
คุณสามารถทำเช่นนี้ได้ด้วยการใช้ `animation-duration` ของหลาย ๆ element เช่นกัน

ตรงที่ animation ทำงานใน code editor, มันมีดาวสามดวงบนฟ้าที่กำลังกระพริบอยู่โดยมีt rate เดียวกับวนเป็นลูปต่อเนื่อง
เพื่อที่จะทำให้มันกระพริบด้วย rate ที่ต่างกัน
คุณสามารถกำหนดให้ `animation-duration` property มีค่าที่ต่างกันในแต่ละ element

# --instructions--

จงกำหนดให้ `animation-duration` ของ element ที่เป็นคลาส `star-1`, `star-2`, และ `star-3` มีค่าเท่ากับ 1s, 0.9s, และ 1.1s ตามลำดับ

# --hints--

`animation-duration` property ของดาวที่มีคลาสชื่อ `star-1` ควรจะอยู่ที่ 1s.

```js
assert($('.star-1').css('animation-duration') == '1s');
```

`animation-duration` property ของดาวที่มีคลาสชื่อ `star-2` ควรจะอยู่ที่ 0.9s.

```js
assert($('.star-2').css('animation-duration') == '0.9s');
```

`animation-duration` property ของดาวที่มีคลาสชื่อ `star-3` ควรจะอยู่ที่ 1.1s.

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
