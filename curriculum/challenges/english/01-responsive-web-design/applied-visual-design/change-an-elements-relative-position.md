---
id: 587d781e367417b2b2512ac9
title: Change an Element's Relative Position
challengeType: 0
videoUrl: "https://scrimba.com/c/czVmMtZ"
forumTopicId: 301044
dashedName: change-an-elements-relative-position
---

# --description--

CSS จะมองว่า HTML element แต่ละตัวเป็นกล่องๆหนึ่ง ซึ่งเราจะเรียกว่า <dfn>CSS Box Model</dfn>
เมื่อเราสร้าง element ที่เป็น Block-level แล้ว element นั้นจะขึ้นบรรทัดใหม่โดยอัตโนมัติ (ให้นึกถึง heading, paragraph, และ div)
แต่ถ้าเราสร้าง element แบบ inline แล้ว element จะอยู่ในบรรทัดเดียวกับ element ตัวอื่นที่อยู่ในระดับเดียวกัน (ให้นึกถึง image หรือ span)

layout พื้นฐานของ element ในรูปแบบนี้จะเรียกว่า <dfn>normal flow</dfn>
แต่ CSS ก็มี property ชื่อ `position` ที่จะใช้เพื่อให้ทำงานแทน normal flow ได้

ถ้า `position` ของ element ถูกกำหนดให้เป็น `relative`
จะทำให้คุณสามารถย้ายตำแหน่งของ element นั้นได้โดยอ้างอิงตามตำแหน่งปัจจุบันของ element ใน normal flow

โดย `position` จะใช้คู่กับ CSS offset property ตัวอื่น อย่าง `left` หรือ `right`, และ `top` หรือ `bottom`
โดยในการขยับ element เราจะระบุค่าให้ property พวกนี้ได้โดยใช้หน่วย pixel, เปอร์เซ็นต์(%), หรือ ems

ตัวอย่างด้านล่างเป็นการขยับ `p` element ขึ้น 10 pixel จากด้านล่าง (bottom):

```css
p {
  position: relative;
  bottom: 10px;
}
```

การเปลี่ยน `position` ของ element ไปเป็น `relative` ไม่ได้ทำให้ element หลุดออกจาก normal flow เพราะงี้น element อื่นที่อยู่รอบ ๆ ก็จะยังมีพฤติกรรมเหมือนกับตอนที่ element นั้นยังอยู่ในตำแหน่งเดิม

**Note:** การจัดตำแหน่ง element จะทำให้คุณควบคุมการแสดงผลได้เป็นอิสระมากขึ้น แต่อย่าลืมว่าไม่ว่า element นั้นจะแสดงผลที่ตรงไหน คุณจะต้องเขียนโค้ด HTML ให้เป็นระเบียบ และอ่านรู้เรื่องถ้าอ่านจากบนลงล่าง
เพราะว่าการที่โค้ดคุณเป็นระเบียบ จะทำให้คนที่ใช้ screen reader (เช่น คนตาบอด) ใช้งานหน้าเว็บของคุณได้

# --instructions--

เปลี่ยน `position` ของ `h2` ให้เป็น `relative`
และใช้ CSS offset เพื่อขยับ `h2` จากด้านบน 15 pixel
จะเห็นว่าการขยับ `h2` จะไม่กระทบกับ h1 และ p element

# --hints--

property `position` ของ `h2` element ต้องมีค่าเป็น `relative`

```js
assert($("h2").css("position") == "relative");
```

ต้องใช้ CSS offset เพื่อกำหนดตำแหน่งใหม่ให้ `h2` โดยให้มีค่า `top` เป็น 15 pixel

```js
assert($("h2").css("top") == "15px");
```

# --seed--

## --seed-contents--

```html
<style>
  h2 {
  }
</style>
<body>
  <h1>On Being Well-Positioned</h1>
  <h2>Move me!</h2>
  <p>I still think the h2 is where it normally sits.</p>
</body>
```

# --solutions--

```html
<style>
  h2 {
    position: relative;
    top: 15px;
  }
</style>
<body>
  <h1>On Being Well-Positioned</h1>
  <h2>Move me!</h2>
  <p>I still think the h2 is where it normally sits.</p>
</body>
```
