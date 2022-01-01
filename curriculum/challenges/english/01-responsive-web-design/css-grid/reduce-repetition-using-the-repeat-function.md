---
id: 5a94fe3669fb03452672e45f
title: Reduce Repetition Using the repeat Function
challengeType: 0
videoUrl: 'https://scrimba.com/p/pByETK/cQvqyHR'
forumTopicId: 301133
dashedName: reduce-repetition-using-the-repeat-function
---

# --description--

เมื่อคุณใช้ `grid-template-columns` และ `grid-template-rows` เพื่อกำหนดโครงสร้างของกริด คุณได้ใส่ค่าของแต่ละแถวหรือคอลั่มน์ที่คุณสร้างขึ้น

สมมุติว่าคุณต้องการกริดอันหนึ่งที่มี 100 แถวที่มีความสูงเท่า ๆ กัน มันไม่ค่อยจะสมเหตุสมผลเท่าไหร่ที่จะใส่ค่า 100 ทีละอัน
โชคดีที่มันมีวิธีที่ดีกว่านั้น วิธีนั้นก็คือการใช้ `repeat` function เพื่อระบุจำนวนครั้งที่คุณต้องการให้แถวหรือคอลั่มน์ถูกสร้างซ้ำ และก็ตามด้วย comma (,) และค่าที่คุณอยากทำซ้ำ

นี่คือตัวอย่างที่จะเป็นการสร้างกริดที่มี 100 แถวโดยแต่ละแถวมีความสูง 50px

```css
grid-template-rows: repeat(100, 50px);
```

คุณก็สามารถเรียกค่าเดิมซ้ำ ๆ ด้วย repeat function และใส่ function เข้าไปท่ามกลางค่าอื่น ๆ เมื่อคุณกำหนดโครงสร้างของกริด
นี่คือหน้าตาของมัน:

```css
grid-template-columns: repeat(2, 1fr 50px) 20px;
```

ซึ่งนี่สามารถเปลี่ยนเป็น:

```css
grid-template-columns: 1fr 50px 1fr 50px 20px;
```

**Note:** `1fr 50px` ถูกเรียกใช้ 2 ครั้งและตามด้วย 20px.

# --instructions--

จงใช้ `repeat` เพื่อเอาการเชียนซ้ำ ๆ ออกจาก `grid-template-columns` property.

# --hints--

`container` class ควรมี `grid-template-columns` property อันหนึ่งที่ถูกกำหนดให้สร้างคอลั่มน์ที่มีความกว้างเป็น `1fr` ซ้ำ 3 อัน

```js
assert(
  code.match(/.container\s*?{[\s\S]*grid-template-columns\s*?:\s*?repeat\s*?\(\s*?3\s*?,\s*?1fr\s*?\)\s*?;[\s\S]*}/gi),
);
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
    /* Only change code below this line */

    grid-template-columns: 1fr 1fr 1fr;

    /* Only change code above this line */
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
  .container {
    grid-template-columns: repeat(3, 1fr);
  }
</style>
```
