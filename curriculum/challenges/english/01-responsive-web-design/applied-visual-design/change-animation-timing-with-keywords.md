---
id: 587d78a8367417b2b2512ae7
title: Change Animation Timing with Keywords
challengeType: 0
videoUrl: "https://scrimba.com/c/cJKvwCM"
forumTopicId: 301045
dashedName: change-animation-timing-with-keywords
---

# --description--

ในการทำ animation ของ CSS เราจะมี property ชื่อ `animation-timing-function` ที่ใช้ควบคุมความเร็วที่ element เปลี่ยนแปลงในแต่ละช่วงของ animation

ถ้า animation ของเรา เป็นรถคันหนึ่งที่กำลังวิ่งจากจุด A ไปจุด B ในเวลาที่กำหนด (`animation-duration` ของคุณ) แล้วฟังก์ชัน `animation-timing-function` จะใช้เพื่อบอกว่ารถของคุณจะเร่งเครื่องที่จุดไหน และชะลอที่จุดไหน

เรามีคีย์เวิร์ดหลายตัวมากๆที่ใช้ในการควบคุมในส่วนนี้
เช่น `ease` โดยคีย์เวิร์ดนี้แปลว่า จะเริ่มต้นช้า ๆ และค่อย ๆ เพิ่มความเร็วจนไปถึงตรงกลาง ก่อนที่จะลดความเร็วลงอีกครั้งก่อนถึงปลายทาง
อีกคีย์เวิร์ดที่ใช้ได้คือ `ease-out` ซึ่งเป็นการเริ่มต้นอย่างเร็วแล้วค่อย ๆ ลดความเร็วลงเรื่อย ๆ
ส่วน `ease-in` จะเป็นการเริ่มอย่างช้า ๆ ในตอนแรกแล้วค่อยเร่งความเร็วจนถึงปลายทาง
และ `linear` จะเป็นการใช้ความเร็วคงที่ตลอดการเคลื่อนไหว

# --instructions--

ให้เพิ่ม property `animation-timing-function` ให้กับ element ที่มี id เป็น `ball1` และ `ball2`
โดยกำหนดค่าให้ `#ball1` เป็น `linear` และ `#ball2` เป็น `ease-out`
ให้สังเกตความแตกต่างระหว่างการเคลื่อนที่ ของลูกบอลทั้งสองรูป และจะเห็นว่าถึงจะเคลื่อนที่คนละแบบ แต่ก็จะเริ่มและจบพร้อมกันอยู่ดี เพราะเราได้กำหนดให้ `animation-duration` เท่ากับ 2 วินาทีทั้งคู่

# --hints--

`animation-timing-function` ของ element ที่มี id เป็น `ball1` ต้องเป็น `linear`

```js
const ball1Animation = __helpers.removeWhiteSpace(
  $("#ball1").css("animation-timing-function")
);
assert(ball1Animation == "linear" || ball1Animation == "cubic-bezier(0,0,1,1)");
```

`animation-timing-function` ของ element ที่มี id เป็น `ball2` ต้องเป็น `ease-out`

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
  }
  #ball2 {
    left: 56%;
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
