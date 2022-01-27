---
id: 587d78a9367417b2b2512ae8
title: Learn How Bezier Curves Work
challengeType: 0
videoUrl: "https://scrimba.com/c/c9bDrs8"
forumTopicId: 301058
dashedName: learn-how-bezier-curves-work
---

# --description--

ในแบบฝึกหัดที่ผ่านมาเราได้สอนเรื่อง `animation-timing-function` และคีย์เวิร์ดที่ใช้เปลี่ยนความเร็วของ animation ไปแล้ว

และ CSS ก็มีตัวเลือกอีกอันให้ใช้นอกเหนือจากคีย์เวิร์ดที่ได้เรียนไป
ตัวเลือกนี้เรียกว่า Bezier curve ซึ่งจะทำให้เราควบคุมการทำงานของ animation ได้ละเอียดยิ่งขึ้นมากๆ

Bezier curve จะใช้กับฟังก์ชัน `cubic-bezier`
โดยรูปร่างของ curve จะแสดงถึงวิธีที่ animation จะแสดงผล

curve จะใช้ระบบกริดขนาด 1x1
โดยแกน X เป็นระยะเวลาของ animation และแกน Y เป็นการเปลี่ยนแปลงของ animation

ฟังก์ชัน `cubic-bezier` ประกอบด้วยจุดหลัก 4 จุดที่อยู่ในกริด 1x1: `p0`, `p1`, `p2`, และ `p3`
โดย `p0` และ `p3` นั้นได้ถูกกำหนดให้คุณแล้ว สองจุดนี้คือจุดเริ่มต้นและจุดสิ้นสุด ซึ่งจะอยู่ที่ตำแหน่ง (0, 0) และ (1, 1) ตามลำดับ
คุณต้องกำหนดค่า x และ y ให้กับอีกสองจุดที่เหลือ โดยตำแหน่งของ `p1` และ `p2` ที่คุณวางไว้บนกริด จะเป็นตัวกำหนดรูปร่างของ curve ที่ใช้ใน animation

คุณสามารถระบุตำแหน่งจุด x และ y ของ `p1` และ `p2` ได้ในรูปแบบนี้: `(x1, y1, x2, y2)`

ลองดูตัวอย่างการใช้ Bezier curve ใน CSS code:

```css
animation-timing-function: cubic-bezier(0.25, 0.25, 0.75, 0.75);
```

ในตัวอย่างด้านบน ค่า x และ y จะเท่ากันในแต่ละจุด (x1 = 0.25 = y1 และ x2 = 0.75 = y2)
ถ้าคุณจำวิชาเรขาคณิตได้ คุณจะนึกภาพออกว่าตอนนี้กราฟของเราจะเป็นเส้นตรง ที่ลากจากจุด (0,0) ไปที่จุด (1,1) เลย
ถ้าเราใช้ Bezier curve ตัวนี้กับ animation ก็จะทำให้ animation มีการเปลี่ยนแปลงแบบคงที่ และเหมือนกับการใช้คีย์เวิร์ด `linear` เลย

# --instructions--

ให้เปลี่ยนค่า `animation-timing-function` ของ element ที่มี id เป็น `ball1`
โดยให้เปลี่ยนค่าจาก `linear` ไปใช้ฟังก์ชัน `cubic-bezier` ที่มีค่าเทียบเท่ากับ `linear`
ให้ใช้ตำแหน่งของจุดตามที่กำหนดให้ในตัวอย่างด้านบน

# --hints--

ค่าของ `animation-timing-function` ของ element ที่มี id เป็น `ball1` ต้องเป็นฟังก์ชัน `cubic-bezier` ที่ทำให้ค่าเป็นแบบ linear

```js
assert(
  $("#ball1").css("animation-timing-function") ==
    "cubic-bezier(0.25, 0.25, 0.75, 0.75)"
);
```

ค่าของ `animation-timing-function` ของ element ที่มี id เป็น `ball2` ต้องเป็นค่าเดิม

```js
const ball2Animation = __helpers.removeWhiteSpace(
  $("#ball2").css("animation-timing-function")
);
assert(
  ball2Animation == "ease-out" || ball2Animation == "cubic-bezier(0,0,0.58,1)"
);
```

# --seed--

## --seed-contents--

```html
<style>
  .balls {
    border-radius: 50%;
    background: linear-gradient(35deg, #ccffff, #ffcccc);
    position: fixed;
    width: 50px;
    height: 50px;
    margin-top: 50px;
    animation-name: bounce;
    animation-duration: 2s;
    animation-iteration-count: infinite;
  }
  #ball1 {
    left: 27%;
    animation-timing-function: linear;
  }
  #ball2 {
    left: 56%;
    animation-timing-function: ease-out;
  }

  @keyframes bounce {
    0% {
      top: 0px;
    }
    100% {
      top: 249px;
    }
  }
</style>

<div class="balls" id="ball1"></div>
<div class="balls" id="ball2"></div>
```

# --solutions--

```html
<style>
  .balls {
    border-radius: 50%;
    background: linear-gradient(35deg, #ccffff, #ffcccc);
    position: fixed;
    width: 50px;
    height: 50px;
    margin-top: 50px;
    animation-name: bounce;
    animation-duration: 2s;
    animation-iteration-count: infinite;
  }
  #ball1 {
    left: 27%;
    animation-timing-function: cubic-bezier(0.25, 0.25, 0.75, 0.75);
  }
  #ball2 {
    left: 56%;
    animation-timing-function: ease-out;
  }

  @keyframes bounce {
    0% {
      top: 0px;
    }
    100% {
      top: 249px;
    }
  }
</style>
<div class="balls" id="ball1"></div>
<div class="balls" id="ball2"></div>
```
