---
id: 587d78a7367417b2b2512adf
title: Learn How the CSS @keyframes and animation Properties Work
challengeType: 0
videoUrl: 'https://scrimba.com/c/cakprhv'
forumTopicId: 301059
dashedName: learn-how-the-css-keyframes-and-animation-properties-work
---

# --description--

เพื่อที่จะ animate element, คุณจำเป็นต้องรู้เกี่ยวกับ animation properties และ `@keyframes` rule
animation properties จะควบคุมพฤติกรรมที่ animation ควรเป็น ส่วน `@keyframes` rule จะควบคุมว่าจะเกิดอะไรขึ้นระหว่าง animation
ทั้งหมดแล้วมันมี animation property อยู่ 8 อัน
ในแบบฝึกหัดนี้จะทำให้มันง่ายและพูดถึงแค่ 2 อันที่สำคัญที่สุดก่อน:

`animation-name` กำหนดชื่อของ animation, ซึ่งในภายหลังจากถูกใช้โดย `@keyframes` เพื่อบอก CSS ว่า rule ไหนจะใช้กับ animation ไหน

`animation-duration` กำหนดเวลาที่จะใช้ใน animation

`@keyframes` คือวิธีที่จะระบุว่าจะเกิดอะไรขึ้นบ้างระหว่างช่วงที่ animate element อยู่
มันสามารถทำได้โดยการกำหนด CSS properties สำหรับแต่ละ "frames" ระหว่าง animation, โดยเปอร์เซ็นที่ไล่ตั้งแต่ 0% ถึง 100%
ถ้าคุณเปรียบเทียบมันกับหนัง CSS properties ที่เป็น 0% ก็คือการแสดงผลของ elementในฉากเปิด
ส่วน CSS properties ที่เป็น 100% คือการแสดงผลของ  element ในตอนจบก่ออนที่จะมี credit ขึ้นมา
นี่คือตัวอย่างในการใช้ `@keyframes` และ animation properties:

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

สำหรับ element ที่มาพร้อมกับ `anim` id, code snippet ข้างบนจะกำหนดให้ `animation-name`เป็น `colorful` และกำหนดให้ `animation-duration` มีค่า 3 วินาที
หลังจากนั้น `@keyframes` rule จะลิงค์เข้ากับ animation properties ที่มีชื่อว่า `colorful`
มันจะกำหนดให้สีกลายเป็นสีน้ำเงินในตอนแรกของ animation (0%) ซึ่งจะเปลี่ยนไปเป็นสีเหลืองในตอนสุดท้าย(100%)
คุณไม่ได้ถูกจำกัดไง้ที่การเปลี่ยนแปลงในตอนเริ่มและตอนจบเท่านั้น คุณสามารถกำหนด properties ให้กับ element ณ เปอร์เซ็นไหนระหว่าง 0% ถึง 100% ก็ได้

# --instructions--

จงสร้าง animation ให้กับ element ที่มาพร้อมกับ id `rect`, โดยการกำหนดให้ `animation-name` มีค่าเป็น `rainbow` และ `animation-duration` เป็น 4 วินาที
ถัดไป จงประกาศใช้ `@keyframes` rule, และกำหนดให้ `background-color` ณ ตอนเริ่ม animation (`0%`) เป้นสีฟ้า, และตรงกลางanimation (`50%`) เป็นสีเขียว และตอนจบของ animation (`100%`) เป็นสีเหลือง

# --hints--

element ที่มาพร้อมกับไอดี `rect` ควรมี `animation-name` propertyที่มีค่าเป็น `rainbow`.

```js
assert($('#rect').css('animation-name') == 'rainbow');
```

The element with id of `rect` should have an `animation-duration` property with a value of 4s.

```js
assert($('#rect').css('animation-duration') == '4s');
```

The `@keyframes` rule should use the `animation-name` of `rainbow`.

```js
assert(code.match(/@keyframes\s+?rainbow\s*?{/g));
```

The `@keyframes` rule for `rainbow` should use a `background-color` of `blue` at 0%.

```js
assert(code.match(/0%\s*?{\s*?background-color:\s*?blue;\s*?}/gi));
```

The `@keyframes` rule for `rainbow` should use a `background-color` of `green` at 50%.

```js
assert(code.match(/50%\s*?{\s*?background-color:\s*?green;\s*?}/gi));
```

The `@keyframes` rule for rainbow should use a `background-color` of `yellow` at 100%.

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
