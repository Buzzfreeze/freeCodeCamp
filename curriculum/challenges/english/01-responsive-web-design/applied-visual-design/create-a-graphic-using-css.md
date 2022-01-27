---
id: 587d78a6367417b2b2512add
title: Create a Graphic Using CSS
challengeType: 0
videoUrl: "https://scrimba.com/c/cEDWPs6"
forumTopicId: 301048
dashedName: create-a-graphic-using-css
---

# --description--

คุณสามารถสร้างรูปทรงสวยๆขึ้นมาได้โดยใช้ selector และ property

เราจะลองให้คุณสร้างรูปพระจันทร์เสี้ยวดู
โดยในแบบฝึกหัดนี้ คุณจำเป็นต้องใช้ property `box-shadow` เพื่อกำหนดเงาของ element ร่วมกับ property `border-radius` ที่จะควมคุมความโค้งของมุมของ element

คุณจะต้องสร้างวงกลม ที่ไม่มีสี โดยมีเงาที่ offset ไปด้านข้างเล็กน้อย
โดยเงาที่สร้างขึ้นมานี้จะเป็นพระจันทร์ของคุณ (เพราะว่าวงกลมที่สร้างเป็นสีใส)

ในการสร้างวงกลม คุณต้องกำหนด property `border-radius` ให้มีค่าเป็น 50%

คุณคงจำได้ว่า property `box-shadow` จะรับค่า `offset-x`, `offset-y`, `blur-radius`, `spread-radius` และค่าสีตามลำดับ
โดย `blur-radius` และ `spread-radius` เป็นค่าที่จะมีหรือไม่มีก็ได้

# --instructions--

ให้ใช้ element สี่เหลี่ยมใน editor เพื่อสร้างรูปพระจันทร์เสี้ยว

ขั้นแรก ให้เปลี่ยน `background-color` ให้เป็น `transparent`
หลังจากนั้น ให้เปลี่ยนค่าของ property `border-radius` เป็น 50% เพื่อทำให้กลายเป็นวงกลม
สุดท้าย ให้เปลี่ยน property `box-shadow` โดยกำหนดให้ `offset-x` มีค่าเป็น 25px, `offset-y` มีค่าเป็น 10px, `blur-radius` มีค่าเป็น 0, `spread-radius` มีค่าเป็น 0, และมีสีเป็น `blue`

Syntax : text-shadow: [offset-x] [offset-y] [blur-radius] [spread-radius] [color];

# --hints--

ค่าของ property `background-color` ต้องเป็น `transparent`

```js
assert(code.match(/background-color:\s*?transparent;/gi));
```

ค่าของ property `border-radius` ต้องเป็น `50%`

```js
assert(code.match(/border-radius:\s*?50%;/gi));
```

property `box-shadow` ต้องกำหนดให้ `offset-x` มีค่าเป็น 25px, `offset-y` มีค่าเป็น 10px, `blur-radius` มีค่าเป็น 0, `spread-radius` มีค่าเป็น 0, และมีสีเป็น `blue`

```js
assert(
  code.match(/box-shadow:\s*?25px\s+?10px\s+?0(px)?\s+?0(px)?\s+?blue\s*?;/gi)
);
```

# --seed--

## --seed-contents--

```html
<style>
  .center {
    position: absolute;
    margin: auto;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100px;
    height: 100px;
    background-color: blue;
    border-radius: 0px;
    box-shadow: 25px 10px 10px 10px green;
  }
</style>
<div class="center"></div>
```

# --solutions--

```html
<style>
  .center {
    position: absolute;
    margin: auto;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100px;
    height: 100px;
    background-color: transparent;
    border-radius: 50%;
    box-shadow: 25px 10px 0 0 blue;
  }
</style>
<div class="center"></div>
```
