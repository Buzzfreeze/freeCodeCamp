---
id: 587d78ad367417b2b2512afa
title: Use the flex-wrap Property to Wrap a Row or Column
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVaDAv/cQv9ZtG'
forumTopicId: 301114
dashedName: use-the-flex-wrap-property-to-wrap-a-row-or-column
---

# --description--

CSS flexbox มีฟีเจอร์ที่ใช้แบ่ง flex item เป็นแถวหลาย ๆ แถว แนวตั้ง(หรือคอลัมน์)
โดยค่าเริ่มต้นแล้ว flex container จะยัด flex item ทุกอันรวมกัน ทำให้เมือ่มีการเปลี่ยนแปลงขนาดหน้าจอจะบีบ item ให้ขึ้นบรรทัดใหม่
ยกตัวอย่างเช่น, หนึ่งแถวจะอยู่อยู่รวมเป็น 1 เส้น

อย่างไรก็ตาม การใช้ `flex-wrap` property จะบอกให้ CSS รวม item พวกนั้นไว้ด้วยกัน
นี่หมายความว่า item ที่เกินมาจะได้อยู่ที่แถวหรือคอมลั่มน์ใหม่
break point ของตำแหน่งที่จะถูกรวมนะขึ้นกับขนาดของ item และขนาดของ container.

CSS ก็มีตัวเลือกสำหรับทิศทางในการรวม item ตามนี้:

<ul><li><code>nowrap</code>: this is the default setting, and does not wrap items.</li><li><code>wrap</code>: wraps items onto multiple lines from top-to-bottom if they are in rows and left-to-right if they are in columns.</li><li><code>wrap-reverse</code>: wraps items onto multiple lines from bottom-to-top if they are in rows and right-to-left if they are in columns.</li></ul>

# --instructions--

layout ในตอนนี้มีกล่องหลายอันเกินไปใน 1 แถว
จงเพิ่ม CSS property `flex-wrap` ให้กับ `#box-container` element
และจงกำหนดให้มันมีค่าเป็น `wrap`

# --hints--

`#box-container` element ควรมี `flex-wrap` property เป็น `wrap`

```js
assert($('#box-container').css('flex-wrap') == 'wrap');
```

# --seed--

## --seed-contents--

```html
<style>
  #box-container {
    background: gray;
    display: flex;
    height: 100%;
  }
  #box-1 {
    background-color: dodgerblue;
    width: 25%;
    height: 50%;
  }

  #box-2 {
    background-color: orangered;
    width: 25%;
    height: 50%;
  }
  #box-3 {
    background-color: violet;
    width: 25%;
    height: 50%;
  }
  #box-4 {
    background-color: yellow;
    width: 25%;
    height: 50%;
  }
  #box-5 {
    background-color: green;
    width: 25%;
    height: 50%;
  }
  #box-6 {
    background-color: black;
    width: 25%;
    height: 50%;
  }
</style>

<div id="box-container">
  <div id="box-1"></div>
  <div id="box-2"></div>
  <div id="box-3"></div>
  <div id="box-4"></div>
  <div id="box-5"></div>
  <div id="box-6"></div>
</div>
```

# --solutions--

```html
<style>
  #box-container {
    background: gray;
    display: flex;
    height: 100%;
    flex-wrap: wrap;
  }
  #box-1 {
    background-color: dodgerblue;
    width: 25%;
    height: 50%;
  }

  #box-2 {
    background-color: orangered;
    width: 25%;
    height: 50%;
  }
  #box-3 {
    background-color: violet;
    width: 25%;
    height: 50%;
  }
  #box-4 {
    background-color: yellow;
    width: 25%;
    height: 50%;
  }
  #box-5 {
    background-color: green;
    width: 25%;
    height: 50%;
  }
  #box-6 {
    background-color: black;
    width: 25%;
    height: 50%;
  }
</style>

<div id="box-container">
  <div id="box-1"></div>
  <div id="box-2"></div>
  <div id="box-3"></div>
  <div id="box-4"></div>
  <div id="box-5"></div>
  <div id="box-6"></div>
</div>
```
