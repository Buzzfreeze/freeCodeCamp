---
id: bad87fee1348bd9aedf08824
title: Add Different Padding to Each Side of an Element
challengeType: 0
videoUrl: 'https://scrimba.com/c/cB7mwUw'
forumTopicId: 16634
dashedName: add-different-padding-to-each-side-of-an-element
---

# --description--

บางครั้ง คุณอาจจะต้องการปรับแต่ง element เพื่อที่มันจะมี `padding` แตกต่างในแต่ละด้าน

CSS ทำให้คุณสามารถควบคุม `padding` ของแต่ละด้านแยกกันได้โดยใช้`padding-top`, `padding-right`, `padding-bottom`, และ `padding-left` properties.

# --instructions--

จงกำหนกให้กล่องสีฟ้ามี `padding` เท่ากับ `40px` ที่ด้านบนและซ้าย แต่เท่ากับ `20px` ที่ด้านล่างและขวา

# --hints--

Your `blue-box` class should give the top of the elements `40px` of `padding`.

```js
assert($('.blue-box').css('padding-top') === '40px');
```

Your `blue-box` class should give the right of the elements `20px` of `padding`.

```js
assert($('.blue-box').css('padding-right') === '20px');
```

Your `blue-box` class should give the bottom of the elements `20px` of `padding`.

```js
assert($('.blue-box').css('padding-bottom') === '20px');
```

Your `blue-box` class should give the left of the elements `40px` of `padding`.

```js
assert($('.blue-box').css('padding-left') === '40px');
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
    padding-top: 40px;
    padding-right: 20px;
    padding-bottom: 20px;
    padding-left: 40px;
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
    padding-top: 40px;
    padding-right: 20px;
    padding-bottom: 20px;
    padding-left: 40px;
  }

  .blue-box {
    background-color: blue;
    color: #fff;
    padding-top: 40px;
    padding-right: 20px;
    padding-bottom: 20px;
    padding-left: 40px;
  }
</style>
<h5 class="injected-text">margin</h5>

<div class="box yellow-box">
  <h5 class="box red-box">padding</h5>
  <h5 class="box blue-box">padding</h5>
</div>
```
