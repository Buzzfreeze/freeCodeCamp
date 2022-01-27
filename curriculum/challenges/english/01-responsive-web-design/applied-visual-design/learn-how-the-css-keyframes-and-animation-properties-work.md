---
id: 587d78a7367417b2b2512adf
title: Learn How the CSS @keyframes and animation Properties Work
challengeType: 0
videoUrl: "https://scrimba.com/c/cakprhv"
forumTopicId: 301059
dashedName: learn-how-the-css-keyframes-and-animation-properties-work
---

# --description--

ก่อนที่คุณจะไปทำให้ element เคลื่อนไหวได้ คุณจำเป็นต้องรู้เรื่อง animation property และ `@keyframes` rule ก่อน
โดย animation property จะควบคุมการเคลื่อนไหว
ส่วน `@keyframes` จะควบคุมว่าจะเกิดอะไรขึ้นระหว่างการเคลื่อนไหวนั้น
ซึ่งจะมี animation property อยู่ทั้งหมด 8 อัน

ในแบบฝึกหัดนี้เราจะทำ animation ง่าย ๆ ซึ่งจะใช้ animation property สองตัวที่สำคัญที่สุดก่อน:

`animation-name` จะกำหนดชื่อของ animation ซึ่งในภายหลังจะถูกใช้โดย `@keyframes` เพื่อบอก CSS ว่า rule ไหนจะใช้กับ animation ไหน

`animation-duration` จะกำหนดเวลาที่จะใช้ใน animation

`@keyframes` คือวิธีที่จะระบุว่าจะเกิดอะไรขึ้นบ้างระหว่างช่วงที่ animate element อยู่
ซึ่งสามารถทำได้โดยการกำหนด CSS property สำหรับแต่ละ "เฟรม" ระหว่าง animation
โดยจะกำหนดเป็นเปอร์เซ็น ที่ไล่ตั้งแต่ 0% ถึง 100%

ถ้าจะเปรียบกับหนัง
ที่เฟรม 0% ก็คือการแสดงผลของ element ในฉากเปิด
ส่วนที่เฟรม 100% คือการแสดงผลของ element ในตอนจบก่อนที่จะมี credit ขึ้นมา

ลองดูตัวอย่างในการใช้ `@keyframes` และ animation property:

```css
#anim {
  animation-name: colorful;
  animation-duration: 3s;
}

@keyframes colorful {
  0% {
    background-color: blue;
  }
  100% {
    background-color: yellow;
  }
}
```

ตัวอย่างโค้ดด้านบนจะกำหนดให้ element ที่มี id เป็น `anim` มีค่าของ property `animation-name` เป็น `colorful` และมีค่าของ `animation-duration` เป็น 3 วินาที
หลังจากนั้น `@keyframes` rule จะลิงก์เข้ากับ animation property ที่มีชื่อว่า `colorful`
โดยในตอนแรก (0%) element ที่มี id เป็น `anim` จะมี `background-color` เป็นสีน้ำเงิน และในตอนสุดท้าย (100%) จะเปลี่ยนไปเป็นสีเหลือง

โค้ดของคุณจะกำหนด keyframe ไว้ที่ช่วงไหนก็ได้ ระหว่าง 0% ถึง 100%

# --instructions--

ให้สร้าง animation ให้กับ element ที่มี id เป็น `rect`
โดยให้กำหนด `animation-name` เป็น `rainbow` และ `animation-duration` เป็น 4 วินาที

ถัดไปให้ประกาศ `@keyframes` rule
โดยกำหนดให้ `background-color` ตอนเริ่ม animation (`0%`) เป็นสีฟ้า
ตรงกลาง animation (`50%`) เป็นสีเขียว
และตอนจบของ animation (`100%`) เป็นสีเหลือง

# --hints--

element ที่มี id เป็น `rect` ต้องมีค่าของ `animation-name` เป็น `rainbow`

```js
assert($("#rect").css("animation-name") == "rainbow");
```

element ที่มี id เป็น `rect` ต้องมีค่าของ `animation-duration` เป็น 4 วินาที

```js
assert($("#rect").css("animation-duration") == "4s");
```

`@keyframes` rule ต้องใช้ `animation-name` ชื่อ `rainbow`

```js
assert(code.match(/@keyframes\s+?rainbow\s*?{/g));
```

`@keyframes` rule ของ `rainbow` ต้องใช้ `background-color` เป็นสี `blue` ณ ตำแหน่งที่ 0%

```js
assert(code.match(/0%\s*?{\s*?background-color:\s*?blue;\s*?}/gi));
```

`@keyframes` rule ของ `rainbow` ต้องใช้ `background-color` เป็นสี `green` ณ ตำแหน่งที่ 50%

```js
assert(code.match(/50%\s*?{\s*?background-color:\s*?green;\s*?}/gi));
```

`@keyframes` rule ของ `rainbow` ต้องใช้ `background-color` เป็นสี `yellow` ณ ตำแหน่งที่ 100%

```js
assert(code.match(/100%\s*?{\s*?background-color:\s*?yellow;\s*?}/gi));
```

# --seed--

## --seed-contents--

```html
<style>
  div {
    height: 40px;
    width: 70%;
    background: black;
    margin: 50px auto;
    border-radius: 5px;
  }

  #rect {
  }
</style>
<div id="rect"></div>
```

# --solutions--

```html
<style>
  div {
    height: 40px;
    width: 70%;
    background: black;
    margin: 50px auto;
    border-radius: 5px;
  }

  #rect {
    animation-name: rainbow;
    animation-duration: 4s;
  }

  @keyframes rainbow {
    0% {
      background-color: blue;
    }
    50% {
      background-color: green;
    }
    100% {
      background-color: yellow;
    }
  }
</style>
<div id="rect"></div>
```
