---
id: 587d78a9367417b2b2512ae8
title: Learn How Bezier Curves Work
challengeType: 0
videoUrl: 'https://scrimba.com/c/c9bDrs8'
forumTopicId: 301058
dashedName: learn-how-bezier-curves-work
---

# --description--

แบบฝึกหัดที่แล้วได้กล่าวถึง `animation-timing-function` property และคีย์เวิร์ดบางคำที่จะเปลี่ยนความเร็วของ animation ในช่วงเวลาของการเล่น
CSS ได้มีตัวเลือกอีกอันให้ใช้นอกจากคีย์เวิร์ด ซึ่งมันทำให้เราควบคุมการเล่นของ animation ได้ละเอียดยิ่งขึ้นผ่านการใช้ Bezier curves

สำหรับ CSS animations, Bezier curves นั้นถูกใช้กับ `cubic-bezier` function
รูปร่างของ curve จะแสดงถึงวิธีที่ animation จะแสดงผล
curve จะใช้ coordinate system แบบ 1 ต่อ 1
X-axis ของ coordinate system นี้คือระยะเวลาของ animation และ Y-axis เป็นความเปลี่ยนแปลงของ animation

`cubic-bezier` function ประกอบด้วยจุดหลัก 4 จุดที่อยู่บนกริด 1 ต่อ 1: `p0`, `p1`, `p2`, และ `p3`. `p0` และ `p3` นั้นได้ถูกกำหนดให้คุณแล้ว พวกมันคือจุดเริ่มต้นและจุดสิ้นสุดวึ่งมันจะอยู่ที่ตำแหน่ง (0, 0) และ (1, 1)
คุณกำหนดให้ค่า x และ y ให้กับอีกสองจุดที่เหลือ และตำแหน่งที่คุณวางมันไว้บนกริดจะบ่งบอกถึงรูปร่างขอ curve ที่ใช้ในการ animation 
มันสามารถทำได้โดยการประกาศค่า x และ y ของ `p1` และ `p2` "anchor" points ในรูปแบบนี้: `(x1, y1, x2, y2)`
นี่คือตัวอย่างของ Bezier curve ใน CSS code:

```css
animation-timing-function: cubic-bezier(0.25, 0.25, 0.75, 0.75);
```

In the example above, the x and y values are equivalent for each point (x1 = 0.25 = y1 and x2 = 0.75 = y2), which if you remember from geometry class, results in a line that extends from the origin to point (1, 1). This animation is a linear change of an element during the length of an animation, and is the same as using the `linear` keyword. In other words, it changes at a constant speed.

# --instructions--

สำหรับ element ที่มี id เป็น `ball1`, จงเปลี่ยนค่าของ `animation-timing-function` property จาก  `linear` ให้เป็นค่าของ `cubic-bezier` function ที่ทียบเท่ากัน
จงใช้ค่า point ที่กำหนดให้ในตัวอย่างด้านบน

# --hints--

ค่าของ `animation-timing-function` property สำหรับ element ที่มาพร้อมกับ id `ball1` ควรเป็น linear-equivalent `cubic-bezier` function.

```js
assert(
  $('#ball1').css('animation-timing-function') ==
    'cubic-bezier(0.25, 0.25, 0.75, 0.75)'
);
```

The value of the `animation-timing-function` property for the element with the id `ball2` should not change.

```js
const ball2Animation = __helpers.removeWhiteSpace(
  $('#ball2').css('animation-timing-function')
);
assert(
  ball2Animation == 'ease-out' || ball2Animation == 'cubic-bezier(0,0,0.58,1)'
);
```

# --seed--

## --seed-contents--

```html
<style>

  .balls{
    border-radius: 50%;
    background: linear-gradient(
      35deg,
      #ccffff,
      #ffcccc
    );
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

  .balls{
    border-radius: 50%;
    background: linear-gradient(
      35deg,
      #ccffff,
      #ffcccc
    );
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
