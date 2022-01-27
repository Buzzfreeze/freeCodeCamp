---
id: 587d78ad367417b2b2512afa
title: Use the flex-wrap Property to Wrap a Row or Column
challengeType: 0
videoUrl: "https://scrimba.com/p/pVaDAv/cQv9ZtG"
forumTopicId: 301114
dashedName: use-the-flex-wrap-property-to-wrap-a-row-or-column
---

# --description--

เราสามารถใช้ CSS flexbox เพื่อแบ่ง flex item เป็นแถวหลาย ๆ แถว (หรือคอลัมน์) ได้
ค่าเริ่มต้นของ flex container จะรวม flex item ทุกอันไว้ด้วยกัน
ทำให้ถ้าเรียง flex item แบบ row จะทำให้ทุก item อยู่ในบรรทัดเดียวกัน

แต่เราก็สามารใช้ property `flex-wrap` เพื่อ wrap item ได้
การ wrap item จะเป็นการทำให้ item ที่เกินมาไปขึ้นบรรทัดใหม่ หรือคอลัมน์ใหม่
โดยจุดที่จะใช้ขึ้นบรรทัดใหม่ (break point) จะขึ้นอยู่กับขนาดของ item และขนาดของ container

`flex-wrap` จะรับค่าได้ตามนี้:

<ul><li><code>nowrap</code>: เป็นค่าเริ่มต้น item จะไม่ถูก wrap</li><li><code>wrap</code>: ถ้าใช้ใน row จะ wrap item เป็นบรรทัดจากบนลงล่าง และถ้าใช้ใน column จะ wrap item จากซ้ายไปขวา</li><li><code>wrap-reverse</code>: ถ้าใช้ใน row จะ wrap item เป็นบรรทัดจากล่างขึ้นบน และถ้าใช้ใน column จะ wrap item จากขวาไปซ้าย</li></ul>

# --instructions--

layout ในตอนนี้มี box หลายอันเกินไปใน 1 แถว

ให้เพิ่ม CSS property `flex-wrap` ให้กับ `#box-container` และกำหนดค่าให้เป็น `wrap`

# --hints--

`#box-container` ต้องมีค่าของ property `flex-wrap` เป็น `wrap`

```js
assert($("#box-container").css("flex-wrap") == "wrap");
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
