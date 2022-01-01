---
id: 5a90375238fddaf9a66b5d3b
title: Align an Item Vertically using align-self
challengeType: 0
videoUrl: 'https://scrimba.com/p/pByETK/cmzd4fz'
forumTopicId: 301123
dashedName: align-an-item-vertically-using-align-self
---

# --description--

อย่างที่คุณสามารถจัดให้มันตรงกันในแนวนอนได้, มันก็มีวิธีที่ทำให้คุณสามารถจัดเรียง item ให้ตรงกันในแนวตั้งได้เช่นกัน
เพื่อที่จะทำเช่นนี้, คุณต้องใช้ `align-self` property กับ item อันหนึ่ง
property อันนี้จะรับค่าเดียวกับ `justify-self` ที่อยู่ใน challenge ที่แล้ว

# --instructions--

จงจัดเรียงให้ item ที่มี Class `item3` อยู่กลางในแนวตั้งที่ `end`

# --hints--

`item3` class ควรมี `align-self` property อันหนึ่งที่มีค่าเป็น `end`

```js
assert(code.match(/.item3\s*?{[\s\S]*align-self\s*?:\s*?end\s*?;[\s\S]*}/gi));
```

# --seed--

## --seed-contents--

```html
<style>
  .item1 {
    background: LightSkyBlue;
  }
  .item2 {
    background: LightSalmon;
  }

  .item3 {
    background: PaleTurquoise;
    /* Only change code below this line */

    /* Only change code above this line */
  }

  .item4 {
    background: LightPink;
  }
  .item5 {
    background: PaleGreen;
  }

  .container {
    font-size: 40px;
    min-height: 300px;
    width: 100%;
    background: LightGray;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-gap: 10px;
  }
</style>

<div class="container">
  <div class="item1">1</div>
  <div class="item2">2</div>
  <div class="item3">3</div>
  <div class="item4">4</div>
  <div class="item5">5</div>
</div>
```

# --solutions--

```html
<style>
  .item3 {
    align-self: end;
  }
</style>
```
