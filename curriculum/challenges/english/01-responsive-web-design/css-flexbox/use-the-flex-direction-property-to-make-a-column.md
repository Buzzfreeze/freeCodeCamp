---
id: 587d78ac367417b2b2512af4
title: Use the flex-direction Property to Make a Column
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVaDAv/cZmWeA4'
forumTopicId: 301109
dashedName: use-the-flex-direction-property-to-make-a-column
---

# --description--

challenge 2 อันสุดท้ายจะใช้ `flex-direction` property ที่มีค่าเป็น `row`
property อันนี้สามารถสร้าง column อันหนึ่งได้เช่นกันโดยการซ้อน children ของ flex container เป็นชั้น ๆ 

# --instructions--

จงเพิ่ม CSS property `flex-direction` ให้กับ `#box-container` element
และจงกำหนดให้มันมีค่าเป็น `column`

# --hints--

`#box-container` element ควรมี `flex-direction` property ที่มีค่าเป็น `column`

```js
assert($('#box-container').css('flex-direction') == 'column');
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
    display: flex;
    height: 500px;
    flex-direction: column;
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
