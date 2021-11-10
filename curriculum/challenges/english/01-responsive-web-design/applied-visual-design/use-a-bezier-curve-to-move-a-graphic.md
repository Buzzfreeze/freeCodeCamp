---
id: 587d78a9367417b2b2512ae9
title: Use a Bezier Curve to Move a Graphic
challengeType: 0
videoUrl: 'https://scrimba.com/c/c6bnRCK'
forumTopicId: 301071
dashedName: use-a-bezier-curve-to-move-a-graphic
---

# --description--

ในแบบฝึดหัดที่แล้วได้อภิปรายเกี่ยวกับคีย์เวิร์ด `ease-out` ที่ได้บรรยายการเปลี่ยนแปลงความเร็วของ animation ไว้ว่าเร่งความเร็วในตอนแรกแล้วลดความเร็วลงในตอนหลัง 
ทางด้านขวา ความแตกต่างระหว่าง `ease-out` (สำหรับ element สีน้ำเงิน) และ `linear`  (สำหรับ element สีแดง) ได้ถูกสาธิตไว้
animation progression ที่คล้ายกับ to the `ease-out` สามารถทำได้ดดยการใช้ cubic Bezier curve function ที่ดัดแปลงเอง

โดยทั่วไป การเปลี่ยน `p1` และ `p2` anchor points จะทำให้เกิดความต่างของ Bezier curves, ซึ่งจะควบคุมการ progress ของ animation. 
นี่คือตัวอย่างของ Bezier curve ที่ใช้ค่าเพื่อเลียนแบบ ease-out style:

```css
animation-timing-function: cubic-bezier(0, 0, 0.58, 1);
```

จงไว้ว่า `cubic-bezier` function ทั้งหมดจะเริ่มด้วย `p0` ที่ (0, 0) และจบด้วย `p3` ที่ (1, 1)
ในตัวอย่างนี้ curve จะเคลื่อที่เร็วขึ้นตลอดแกน Y และมันจะเคลื่อนผ่านแกน X-axisฃ
ซึ่งผลลัพท์ที่ได้ก็คือ การเปลี่ยนแปลงของ animated element จะเกิดขึ้นเร็วกว่าตอนที่ animation สำหรับ segment นั้น
ไล่ไปจนจบ curve, ความสัมพันธ์ระหว่างความเปลี่ยนแปลงของค่า x และ y จะสวนทางกัน - ค่า y จะเปลี่ยนจาก 1 ไป 1 (ไม่มีการเปลี่ยนแปลง), และค่า x จะเปลี่ยนค่า 0.58 ไป 1, ซึ่งทำให้ animation เปลี่ยน progress ช้ากว่าเมื่อเปลี่ยนเทียบกับข่วงระหว่าง animation

# --instructions--

เพื่อจะได้เห็นผลของ Bezier curve นี้, จงเปลี่ยน `animation-timing-function` ของ element ที่มาพร้อมกับไอดี `red` ให้เป็น `cubic-bezier` function ที่มีค่า  x1, y1, x2, y2 เป็น 0, 0, 0.58, 1 ตามลำดับ
สิ่งนี้จะทำให้ element ทั้งสอง animate ไปในลำดับที่คล้ายคลึงกัน
# --hints--

ค่าของ `animation-timing-function` property ของ element ที่มีพร้อมกับ id `red` ควรมี `cubic-bezier` function ซึ่งมีค่า x1, y1, x2, y2 เป็น 0, 0, 0.58, 1 ตามลำดับ

```js
assert(
  $('#red').css('animation-timing-function') == 'cubic-bezier(0, 0, 0.58, 1)'
);
```

The element with the id `red` should no longer have the `animation-timing-function` property of `linear`.

```js
assert($('#red').css('animation-timing-function') !== 'linear');
```

The value of the `animation-timing-function` property for the element with the id `blue` should not change.

```js
const blueBallAnimation = __helpers.removeWhiteSpace(
  $('#blue').css('animation-timing-function')
);
assert(
  blueBallAnimation == 'ease-out' ||
    blueBallAnimation == 'cubic-bezier(0,0,0.58,1)'
);
```

# --seed--

## --seed-contents--

```html
<style>
  .balls{
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
<div class="balls" id= "red"></div>
<div class="balls" id= "blue"></div>
```

# --solutions--

```html
<style>
  .balls{
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
<div class="balls" id= "red"></div>
<div class="balls" id= "blue"></div>
```
