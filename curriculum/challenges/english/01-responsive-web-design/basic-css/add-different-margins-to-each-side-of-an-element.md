---
id: bad87fee1248bd9aedf08824
title: Add Different Margins to Each Side of an Element
challengeType: 0
videoUrl: 'https://scrimba.com/c/cg4RWh4'
forumTopicId: 16633
dashedName: add-different-margins-to-each-side-of-an-element
---

# --description--

บางครั้งคุณอาจจะต้องการที่จะปรับแต่ง element เพื่อที่มันจะได้มี `margin` ที่ต่างกันในแต่ละด้าน

CSS ทำให้คุณสามารถควบคุม `margin` ของทั้งสี่ด้านแยกกันได้ด้วย `margin-top`, `margin-right`, `margin-bottom`, และ `margin-left` properties.

# --instructions--

จงกำหนดให้กล่องสีฟ้ามี `margin` เท่ากับ `40px` ที่ด้านบนและซ้าย แต่เท่ากับ `20px` ที่ด้านล่างและขวา

# --hints--

`blue-box` class ควรกำหนดให้ ด้านบนของ element มี `40px` เป็นค่า `margin`

```js
assert($('.blue-box').css('margin-top') === '40px');
```

Your `blue-box` class should give the right of elements `20px` of `margin`.

```js
assert($('.blue-box').css('margin-right') === '20px');
```

Your `blue-box` class should give the bottom of elements `20px` of `margin`.

```js
assert($('.blue-box').css('margin-bottom') === '20px');
```

Your `blue-box` class should give the left of elements `40px` of `margin`.

```js
assert($('.blue-box').css('margin-left') === '40px');
```

# --seed--

## --seed-contents--

```html
<style>
  .injected-text {
    margin-bottom: -25px;
    text-align: center;
  }

  .box {
    border-style: solid;
    border-color: black;
    border-width: 5px;
    text-align: center;
  }

  .yellow-box {
    background-color: yellow;
    padding: 10px;
  }

  .red-box {
    background-color: crimson;
    color: #fff;
    margin-top: 40px;
    margin-right: 20px;
    margin-bottom: 20px;
    margin-left: 40px;
  }

  .blue-box {
    background-color: blue;
    color: #fff;
  }
</style>
<h5 class="injected-text">margin</h5>

<div class="box yellow-box">
  <h5 class="box red-box">padding</h5>
  <h5 class="box blue-box">padding</h5>
</div>
```

# --solutions--

```html
<style>
  .injected-text {
    margin-bottom: -25px;
    text-align: center;
  }

  .box {
    border-style: solid;
    border-color: black;
    border-width: 5px;
    text-align: center;
  }

  .yellow-box {
    background-color: yellow;
    padding: 10px;
  }

  .red-box {
    background-color: crimson;
    color: #fff;
    margin-top: 40px;
    margin-right: 20px;
    margin-bottom: 20px;
    margin-left: 40px;
  }

  .blue-box {
    background-color: blue;
    color: #fff;
    margin-top: 40px;
    margin-right: 20px;
    margin-bottom: 20px;
    margin-left: 40px;
  }
</style>
<h5 class="injected-text">margin</h5>

<div class="box yellow-box">
  <h5 class="box red-box">padding</h5>
  <h5 class="box blue-box">padding</h5>
</div>
```
