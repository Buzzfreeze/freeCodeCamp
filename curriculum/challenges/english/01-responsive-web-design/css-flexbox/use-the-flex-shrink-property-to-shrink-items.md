---
id: 587d78ad367417b2b2512afb
title: Use the flex-shrink Property to Shrink Items
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVaDAv/cd3PBfr'
forumTopicId: 301113
dashedName: use-the-flex-shrink-property-to-shrink-items
---

# --description--

จนถึงตอนนี้  property ทั้งหมดใน challenge ได้ถูกใช้กับ (parent ของ flex items)
อย่างไรก็ตาม ยังมีอีกหลาย property ที่มีประโยชน์สำหรับ flex items

อันแรกก็คือ `flex-shrink` property
เมื่อมันถูกเรียกใช้ มันจะช่วยให้ item มีขนาดเล็กลงถ้า flex container มีขนาดเล็กเกินไป
Item จะย่อเล็กลงเมื่อความกว้างของ parent container นั้นเล็กกว่าความกว้างรวมของ flex item ที่อยู่ข้างในมันทั้งหมด

`flex-shrink` property จะรับค่าเป็นตัวเลข อีกค่ามัน ยิ่งทำให้ item นั้นหดเยอะกว่า item อื่น ๆ ใน container
ยกตัวอย่างเช่น ถ้า item หนึ่งมี `flex-shrink` ที่มีค่าเป็น `1` และอีก item มี `flex-shrink` มีค่าป็น `3`, item ที่มีค่าเท่ากับ `3` จะหดเล็กลง 3 เท่าของอีกอันหนึ่ง

# --instructions--

จงเพิ่ม CSS property `flex-shrink` ให้กับทั้ง `#box-1` และ `#box-2`
จงกำหนดให้ `#box-1` มีค่า `1` และ `#box-2` มีค่าเป็น `2`

# --hints--

`#box-1` element ควรมี `flex-shrink` property เท่ากับ `1`

```js
assert($('#box-1').css('flex-shrink') == '1');
```

The `#box-2` element should have the `flex-shrink` property set to a value of `2`.

```js
assert($('#box-2').css('flex-shrink') == '2');
```

# --seed--

## --seed-contents--

```html
<style>
  #box-container {
    display: flex;
    height: 500px;
  }
  #box-1 {
    background-color: dodgerblue;
    width: 100%;
    height: 200px;

  }

  #box-2 {
    background-color: orangered;
    width: 100%;
    height: 200px;

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
    display: flex;
    height: 500px;
  }
  #box-1 {
    background-color: dodgerblue;
    width: 100%;
    height: 200px;
    flex-shrink: 1;
  }

  #box-2 {
    background-color: orangered;
    width: 100%;
    height: 200px;
    flex-shrink: 2;
  }
</style>

<div id="box-container">
  <div id="box-1"></div>
  <div id="box-2"></div>
</div>
```
