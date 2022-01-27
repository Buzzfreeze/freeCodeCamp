---
id: 587d78a9367417b2b2512aea
title: Make Motion More Natural Using a Bezier Curve
challengeType: 0
videoUrl: 'https://scrimba.com/c/c7akWUv'
forumTopicId: 301063
dashedName: make-motion-more-natural-using-a-bezier-curve
---

# --description--

แบบฝึกหัดนี้จะจำลองการเคลื่อไหวของ element ให้เหมือนลูกบอลที่ถูกโยนไปมา
เราได้ดูเรื่อง `linear` และ `ease-out` ในแบบฝึกหัดที่ผ่านมาไปแล้ว
แต่คุณจะเห็นว่าลูกบอลนั้นเคลื่อนที่อย่างไม่เป็นธรรมชาติเลย เราเลยจำเป็นต้องใช้ Bezier curve เพื่อการนี้

`animation-timing-function` จะวนทำงานอัตโนมัติเมื่อ `animation-iteration-count` ถูกกำหนดให้เป็น `infinite`
และตอนนี้เรามี keyframe rule อยู่ตรงกลางของ animation เลย (ที่ `50%`) ซึ่งจะทำให้รูปแบบการเคลื่อนที่ขึ้นและลง ของลูกบอลเหมือนกัน

โค้ดด้านล่างเป็นการใช้ cubic Bezier curve จำลองการโยนลูกบอล:

```css
cubic-bezier(0.3, 0.4, 0.5, 1.6);
```

คุณจะเห็ฯว่าค่าของ y2 นั้นมากกว่า 1
ถึงแม้ว่า cubic Bezier curve จะใช้กริดขนาด 1x1 และสามารถรับค่า x ที่อยู่ระหว่าง 0 ถึง 1 ได้เท่านั้น 
แต่ cubic Bezier curve ก็สามารถรับค่า y ที่มากกว่า 1 ได้ด้วย
ซึ่งจะทำให้เกิดการเคลื่อนที่เหมือนการโยนลูกบอล 

# --instructions--

ให้เปลี่ยนค่าของ `animation-timing-function` ของ element ที่มี id เป็น `green` ให้มีค่าเป็นฟังก์ชัน `cubic-bezier` โดยระบุค่า x1, y1, x2, y2 เป็น 0.311, 0.441, 0.444, 1.649 ตามลำดับ

# --hints--

ค่าของ `animation-timing-function` ของ element ที่มี id เป็น `green` ต้องเป็นฟังก์ชัน `cubic-bezier` โดยระบุค่า x1, y1, x2, y2 เป็นค่าที่เราระบุไว้ให้

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
