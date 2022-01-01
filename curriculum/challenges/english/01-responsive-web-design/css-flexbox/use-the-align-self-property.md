---
id: 587d78af367417b2b2512b00
title: Use the align-self Property
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVaDAv/cMbvzfv'
forumTopicId: 301107
dashedName: use-the-align-self-property
---

# --description--

`align-self` นี่เป็น property ที่ช่วยให้คุณสามารถปรับเปลี่ยนการเรียงตัวของแต่ละ item แต่ละอันได้ แทนที่จะตั้งให้มันเป็นแบบเดียวกันทีเดียว
มันมีประโยชน์เพราะวิธีการปรับค่าอันอื่น ๆ ที่ใช้ CSS properties `float`, `clear`, และ `vertical-align` ไม่สามารถใช้ได้กับ flex items

`align-self` จะรับค่าค่าเดียวกับ accepts `align-items` และจะเขียนค่าทับค่าอื่น ๆ ที่ได้มีการกำหนดไว้โดย `align-items` property.

# --instructions--

จงเพิ่ม CSS property `align-self` ให้กับทั้ง `#box-1` และ `#box-2`
จงกำหนดให้ `#box-1` มีค่าเป็น `center` และ `#box-2` มีค่าเป็น `flex-end`.

# --hints--

`#box-1` element ควรมี `align-self` property ที่ถูกกำหนดค่าให้เป็น `center`.

```js
assert($('#box-1').css('align-self') == 'center');
```

The `#box-2` element should have the `align-self` property set to a value of `flex-end`.

```js
assert($('#box-2').css('align-self') == 'flex-end');
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

    height: 200px;
    width: 200px;
  }

  #box-2 {
    background-color: orangered;

    height: 200px;
    width: 200px;
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
    align-self: center;
    height: 200px;
    width: 200px;
  }

  #box-2 {
    background-color: orangered;
    align-self: flex-end;
    height: 200px;
    width: 200px;
  }
</style>

<div id="box-container">
  <div id="box-1"></div>
  <div id="box-2"></div>
</div>
```
