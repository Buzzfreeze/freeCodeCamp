---
id: 587d78a6367417b2b2512add
title: Create a Graphic Using CSS
challengeType: 0
videoUrl: 'https://scrimba.com/c/cEDWPs6'
forumTopicId: 301048
dashedName: create-a-graphic-using-css
---

# --description--

โดยการใช้งาน selectors และ propertie ที่ต่างกัน คุณสามารถสร้างรูปทรงที่น่าสนใจขึ้นมาได้
หนึ่งในรูปทรงที่ง่ายที่จะลองทำคือ รูปพระจันทร์เสี้ยว
สำหรับแบบฝึกหัดนี้คุณจำเป็นต้องใช้ `box-shadow` property ที่จะกำหนดเงาของ element, ร่วมกับ `border-radius` property ที่จะควมคุมความมนของมุมของ element

คุณจะสร้างวัตตถุที่กลมและโปร่งแสงพร้อมกับเงาบาง ๆ ที่แผ่ออกมาเล็กน้อยไปด้านข้าง
เงานั้นจะเป็นไปตามรูปร่างของพระจันทร์ที่คุณเห็น

เพื่อที่จะสร้างวัตถุที่มีรูปร่างกลม  `border-radius` property นั้นควรถูกกำหนดให้มีค่า 50%.

คุณอาจจะยังจำได้จากแบบฝึกหัดที่แล้วว่า `box-shadow` property จะรับค่า `offset-x`, `offset-y`, `blur-radius`, `spread-radius` และค่าสีตามลำดับ
`blur-radius` และ `spread-radius` เป็นค่าที่จะมีหรือไม่มีก็ได้

# --instructions--

จงใช้ element สี่เหลี่ยมใน editor เพื่อสร้างรูปพระจันทร์เสี้ยง
ขั้นแรก จงเปลี่ยน  `background-color` ให้เป็น `transparent`, 
หลังจากนั้น จงกำหนดให้ `border-radius` property มีค่าเป็น 50% เพื่อทำให้มันมีรูปร่างเป็นวงกลม
สุดท้าย จงเปลี่ยน  `box-shadow` property เพื่อกำหนดให้ `offset-x` มีค่า 25px,  `offset-y` มีค่า 10px, `blur-radius` มีค่า 0, `spread-radius` มีค่า 0, และสีเป็น `blue`

# --hints--

ค่าของ `background-color` property ควรถูกกำหหนดให้เป็น `transparent`.

```js
assert(code.match(/background-color:\s*?transparent;/gi));
```

The value of the `border-radius` property should be set to `50%`.

```js
assert(code.match(/border-radius:\s*?50%;/gi));
```

The value of the `box-shadow` property should be set to 25px for `offset-x`, 10px for `offset-y`, 0 for `blur-radius`, 0 for `spread-radius`, and finally `blue` for the color.

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
