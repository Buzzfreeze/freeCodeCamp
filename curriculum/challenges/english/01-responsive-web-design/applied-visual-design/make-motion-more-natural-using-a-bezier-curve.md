---
id: 587d78a9367417b2b2512aea
title: Make Motion More Natural Using a Bezier Curve
challengeType: 0
videoUrl: 'https://scrimba.com/c/c7akWUv'
forumTopicId: 301063
dashedName: make-motion-more-natural-using-a-bezier-curve
---

# --description--

แบบฝึกหัดนี้จะ animates element เพื่อจำลองการเคลื่อนที่ของลูกบอกที่ถูกโยนไปมา
แบบฝึกหัดก่อนหน้านี้ได้พูดถึง `linear` และ `ease-out` 
อย่างไรก็ตามการเคลื่อนไหวของลูกบอลที่ถูกโยนไม่ได้จำลองออกมาอย่างถูกต้อง คุณจำเป็นต้องปรับเปลี่ยน Bezier curve เพื่อการนี้

`animation-timing-function` จะวนทำงานอัตโนมัติในทุก ๆ keyframe เมื่อ `animation-iteration-count` ถูกกำหนดให้เป็น infinite
เนื่องจากมี keyframe rule อันหนึ่งถูกกำหนดให้ตอนกึ่งกลางของ animation (ที่ `50%`) ผลของมันคือจะมี animation progression ที่เหมือนกันสองอันตอนที่ลูกบอลเคลื่อนที่ขึ้นและเคลื่อนที่ลง

โค้ดด้านล่างคือการใช้ cubic Bezier curve จำลองการเคลื่อนที่แบบ juggling:

```css
cubic-bezier(0.3, 0.4, 0.5, 1.6);
```

สังเกตว่าค่าของ y2 นั้นมากกว่า 1
แม้ว่า cubic Bezier curve จะใช้ระบบพิกัดแบบ 1 ต่อ 1 และ มันสามารถรับได้แค่ค่า x ที่อยู่ระหว่าง 0 ถึง 1, ค่า y สามารถถูกกำหนดได้ด้วยค่าที่มากกว่า 1 
ซึ่งผลของมันจะทำให้เกิดการเคลื่อนที่แบบ juggling ที่เหมือนกับที่หวังไว้เมื่อทำให้จำลองการเคลื่อนที่ของลูกบอลที่เด้งไปมาซ้ายขวา

# --instructions--

จงเปลี่ยนค่าของ `animation-timing-function` ของ element ที่มีไอดีเป็น `green` ให้มีค่าเป็น `cubic-bezier` function พร้อมกับค่า x1, y1, x2, y2 ซึ่งเท่ากับ 0.311, 0.441, 0.444, 1.649 ตามลำดับ

# --hints--

ค่าของ`animation-timing-function` property สำหรับ element ที่มีไอดีเป็น `green` ควรจะเป็น `cubic-bezier` function ที่มาพร้อมกับค่า x1, y1, x2, y2 ตามที่ระบุไว้

```js
assert(
  $('#green').css('animation-timing-function') ==
    'cubic-bezier(0.311, 0.441, 0.444, 1.649)'
);
```

# --seed--

## --seed-contents--

```html
<style>
  .balls {
    border-radius: 50%;
    position: fixed;
    width: 50px;
    height: 50px;
    top: 60%;
    animation-name: jump;
    animation-duration: 2s;
    animation-iteration-count: infinite;
  }
  #red {
    background: red;
    left: 25%;
    animation-timing-function: linear;
  }
  #blue {
    background: blue;
    left: 50%;
    animation-timing-function: ease-out;
  }
  #green {
    background: green;
    left: 75%;
    animation-timing-function: cubic-bezier(0.69, 0.1, 1, 0.1);
  }

  @keyframes jump {
    50% {
      top: 10%;
    }
  }
</style>
<div class="balls" id="red"></div>
<div class="balls" id="blue"></div>
<div class="balls" id="green"></div>
```

# --solutions--

```html
<style>
  .balls {
    border-radius: 50%;
    position: fixed;
    width: 50px;
    height: 50px;
    top: 60%;
    animation-name: jump;
    animation-duration: 2s;
    animation-iteration-count: infinite;
  }
  #red {
    background: red;
    left: 25%;
    animation-timing-function: linear;
  }
  #blue {
    background: blue;
    left: 50%;
    animation-timing-function: ease-out;
  }
  #green {
    background: green;
    left: 75%;
    animation-timing-function: cubic-bezier(0.311, 0.441, 0.444, 1.649);
  }

  @keyframes jump {
    50% {
      top: 10%;
    }
  }
</style>
<div class="balls" id="red"></div>
<div class="balls" id="blue"></div>
<div class="balls" id="green"></div>
```
