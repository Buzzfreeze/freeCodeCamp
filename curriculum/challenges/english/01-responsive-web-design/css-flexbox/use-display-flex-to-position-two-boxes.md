---
id: 587d78ab367417b2b2512af0
title: "Use display: flex to Position Two Boxes"
challengeType: 0
videoUrl: "https://scrimba.com/p/pVaDAv/cgz3QS7"
forumTopicId: 301105
dashedName: use-display-flex-to-position-two-boxes
---

# --description--

ในส่วนนี้จะใช้แบบทดสอบสอบแบบสลับกันไปมา เพื่อแสดงวิธีการใช้ CSS ในการจัดวาง element ในรูปแบบที่เป็นอิสระมากขึ้น
โดยในส่วนแรกของแบบทดสอบ จะเป็นการอธิบายทฤษฎี แล้วแบบทดสอบตัวถัดมา จะใช้ตัวอย่างของ component tweet ให้ลองทำดู

การใช้ property `display: flex;` ของ CSS ใน element จะทำให้คุณใช้ property ตัวอื่นของ flex ได้ ซึ่งจะทำให้หน้าของคุณเป็นแบบ responsive ได้

**Responsive** คือการที่ทำให้หน้าเว็บของเราเปลี่ยนขนาด หรือเปลี่ยนการจัดรูปแบบได้ตามขนาดหน้าจอของผู้ใช้

# --instructions--

ให้เพิ่ม property `display` ให้กับ `#box-container` และให้กำหนดค่าเป็น `flex`

# --hints--

`#box-container` ต้องมี property `display` ที่มีค่าเป็น `flex`

```js
assert($("#box-container").css("display") == "flex");
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
