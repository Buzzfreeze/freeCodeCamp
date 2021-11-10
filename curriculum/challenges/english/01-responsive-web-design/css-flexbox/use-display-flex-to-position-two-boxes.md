---
id: 587d78ab367417b2b2512af0
title: 'Use display: flex to Position Two Boxes'
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVaDAv/cgz3QS7'
forumTopicId: 301105
dashedName: use-display-flex-to-position-two-boxes
---

# --description--

ในส่วนนี้จะใช้ styles ของอีก challengeเพื่อแสดงให้เห็นวิธีการใช้ CSS เพื่อจัดวาง elements ในรูปแบบที่ยืดหยุ่นขึ้น
ในตอนแรก challenge จะอธิบายทฤษฎี แล้วหลังจากนั้นจะมี challenge ที่มีตัวอย่างการใช้งาน tweet component อย่างง่ายให้ลองทำดู

การวาง CSS property `display: flex;` ใน element หนึ่งช่วยให้คุณสามารถใช้ flex properties แบบอื่นเพื่อสร้างหน้าที่ responsive ได้

# --instructions--

จงเพิ่ม CSS property `display` ให้กับ `#box-container` และจงกำหนดค่าให้มันเป็น `flex`.

# --hints--

`#box-container` ควรมี `display` property ที่ถูกกำหนดค่าให้เป็น `flex`

```js
assert($('#box-container').css('display') == 'flex');
```

# --seed--

## --seed-contents--

```html
<style>
  #box-container {
    height: 500px;

  }

  #box-1 {
    background-color: dodgerblue;
    width: 50%;
    height: 50%;
  }

  #box-2 {
    background-color: orangered;
    width: 50%;
    height: 50%;
  }
</style>
<div id="box-container">
  <div id="box-1"></div>
  <div id="box-2"></div>
</div>
```

# --solutions--

```html
<style>
  #box-container {
    height: 500px;
    display: flex;
  }

  #box-1 {
    background-color: dodgerblue;
    width: 50%;
    height: 50%;
  }

  #box-2 {
    background-color: orangered;
    width: 50%;
    height: 50%;
  }
</style>
<div id="box-container">
  <div id="box-1"></div>
  <div id="box-2"></div>
</div>
```
