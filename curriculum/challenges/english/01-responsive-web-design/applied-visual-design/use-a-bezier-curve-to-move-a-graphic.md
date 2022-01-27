---
id: 587d78a9367417b2b2512ae9
title: Use a Bezier Curve to Move a Graphic
challengeType: 0
videoUrl: "https://scrimba.com/c/c6bnRCK"
forumTopicId: 301071
dashedName: use-a-bezier-curve-to-move-a-graphic
---

# --description--

ในแบบฝึดหัดที่ผ่านมา เราได้คุยกันเรื่องคีย์เวิร์ด `ease-out` ที่จะเร่งความเร็วของ animation ในตอนแรก และชะลอในตอนหลัง
คราวนี้ ให้ดูในตัวอย่างด้านขวา เพื่อดูความแตกต่างระหว่าง `ease-out` (กลมๆสีน้ำเงิน) และ `linear` (กลมๆสีแดง)
เราสามารถสร้างรูปแบบของ animation ที่คล้ายกับ `ease-out` ได้ โดยการใช้ฟังก์ชัน cubic Bezier curve ที่ทำขึ้นมาเอง

โดยทั่วไป การเปลี่ยนตำแหน่งของ `p1` และ `p2` จะทำให้สร้าง Bezier curves ใหม่ขึ้นมา ที่จะเอาไปใช้ควบคุมความเร็วในการเกิด animation

ลองดูตัวอย่าง Bezier curve ที่เลียนแบบการ ease-out:

```css
animation-timing-function: cubic-bezier(0, 0, 0.58, 1);
```

อย่าลืมว่าฟังก์ชัน `cubic-bezier` จะมีตำแหน่งของ `p0` เป็น (0, 0) และตำแหน่งของ `p3` เป็น (1, 1) เสมอ

ให้ลองดูโค้ดในตัวอย่างด้านบน แล้วนึกภาพตาม

ในตัวอย่างนี้ curve จะมีความเร็วในแนวแกน Y (เริ่มที่ 0 ขยับไปที่ `p1` ก็ยังเป็น 0 และก็ขยับไปที่ `p2` ที่มีค่าเป็น 1 เลย) มากกว่าในแนวแกน X (เริ่มที่ 0 ขยับไปที่ `p1` ก็ยังเป็น 0 และก็ขยับไปที่ `p2` ที่มีค่าเป็น 0.58 เลย)
ซึ่งผลลัพธ์ก็คือ ในการเคลื่อนที่ช่วงแรก เราจะได้ animation ที่เปลี่ยนแปลงมาก ในช่วงเวลาสั้นๆ

แต่ในช่วงท้าย การเคลื่อนที่ในแนวแกน x และ y จะสลับกันแล้ว
เพราะค่า y จะเปลี่ยนจาก 1 เป็น 1 (ไม่มีการเปลี่ยนแปลง) และค่า x จะเปลี่ยนจาก 0.58 เป็น 1
ซึ่งผลลัพธ์ก็คือ ในการเคลื่อนที่ช่วงท้าย เราจะได้ animation ที่เปลี่ยนแปลงน้อย ในช่วงเวลาที่ยาว

# --instructions--

เพื่อจะได้เห็นภาพของ Bezier curve นี้ชัดขึ้น
ให้เปลี่ยน `animation-timing-function` ของ element ที่มี id เป็น `red` ให้เป็นฟังก์ชัน `cubic-bezier` ที่มีค่า x1, y1, x2, y2 เป็น 0, 0, 0.58, 1 ตามลำดับ
โดย Bezier curve ตัวนี้ จะทำให้ element ทั้งสองมีการเคลื่อนไหวที่คล้ายกัน

# --hints--

`animation-timing-function` ของ element ที่มี id เป็น `red` ต้องเป็นฟังก์ชัน `cubic-bezier` ที่มีค่า x1, y1, x2, y2 เป็น 0, 0, 0.58, 1 ตามลำดับ

```js
assert(
  $("#red").css("animation-timing-function") == "cubic-bezier(0, 0, 0.58, 1)"
);
```

`animation-timing-function` ของ element ที่มี id เป็น `red` ต้องไม่ใช่ `linear` แล้ว

```js
assert($("#red").css("animation-timing-function") !== "linear");
```

`animation-timing-function` ของ element ที่มี id เป็น `blue` ต้องเป็นค่าเดิม

```js
const blueBallAnimation = __helpers.removeWhiteSpace(
  $("#blue").css("animation-timing-function")
);
assert(
  blueBallAnimation == "ease-out" ||
    blueBallAnimation == "cubic-bezier(0,0,0.58,1)"
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
    margin-top: 50px;
    animation-name: bounce;
    animation-duration: 2s;
    animation-iteration-count: infinite;
  }
  #red {
    background: red;
    left: 27%;
    animation-timing-function: linear;
  }
  #blue {
    background: blue;
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
<div class="balls" id="red"></div>
<div class="balls" id="blue"></div>
```

# --solutions--

```html
<style>
  .balls {
    border-radius: 50%;
    position: fixed;
    width: 50px;
    height: 50px;
    margin-top: 50px;
    animation-name: bounce;
    animation-duration: 2s;
    animation-iteration-count: infinite;
  }
  #red {
    background: red;
    left: 27%;
    animation-timing-function: cubic-bezier(0, 0, 0.58, 1);
  }
  #blue {
    background: blue;
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
<div class="balls" id="red"></div>
<div class="balls" id="blue"></div>
```
