---
id: bad87fee1348bd9aedf08826
title: Use Clockwise Notation to Specify the Padding of an Element
challengeType: 0
videoUrl: 'https://scrimba.com/c/cB7mBS9'
forumTopicId: 18346
dashedName: use-clockwise-notation-to-specify-the-padding-of-an-element
---

# --description--

แทนที่จะระบุ `padding-top`, `padding-right`, `padding-bottom`, และ `padding-left` properties ของ element ทีละตัว
คุณสามารถระบุค่าให้พวกมันทั้งหมดได้ในบรรทัดเดียว แบบนี้:

```css
padding: 10px 20px 10px 20px;
```

ค่าทั้ง 4 ค่านี้จะเรียงตามเข็มนาฬิกา: บน, ขวา, ล่าง, ซ้าย, และจะให้ผลลัพธ์เหมือนกับการใช้คำสั่งที่เป็น side-specific padding 
# --instructions--

จงใช้การเขียนตามเข็มนาฬกา (Clockwise Notation) เพื่อกำหนดให้ `.blue-box` class มี `padding` ขนาด `40px` ที่ด้านบนและซ้าย และ `20px` ที่ด้านล่างและขวา

# --hints--

`blue-box` class ควรกำหนดให้ด้านบนของ element มี `padding` เท่ากับ `40px` 

```js
assert($('.blue-box').css('padding-top') === '40px');
```

`blue-box` class ควรกำหนดให้ด้านขวาของ element มี `padding` เท่ากับ `20px` 

```js
assert($('.blue-box').css('padding-right') === '20px');
```

`blue-box` class ควรกำหนดให้ด้านล่างของ element มี `padding` เท่ากับ `20px` 

```js
assert($('.blue-box').css('padding-bottom') === '20px');
```

`blue-box` class ควรกำหนดให้ด้านซ้ายของ element มี `padding` เท่ากับ `40px` 

```js
assert($('.blue-box').css('padding-left') === '40px');
```

คุณควรใช้การเขียนตามเข็มนาฬิกาเพื่อกำหนด padding ของ `blue-box` class

```js
assert(
  /\.blue-box\s*{[\s\S]*padding[\s]*:\s*\d+px\s+\d+px\s+\d+px\s+\d+px(;\s*[^}]+\s*}|;?\s*})/.test(
    __helpers.removeCssComments($('style').text())
  )
);
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
    padding: 20px 40px 20px 40px;
  }

  .red-box {
    background-color: crimson;
    color: #fff;
    padding: 20px 40px 20px 40px;
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
    padding: 20px 40px 20px 40px;
  }

  .red-box {
    background-color: crimson;
    color: #fff;
    padding: 20px 40px 20px 40px;
  }

  .blue-box {
    background-color: blue;
    color: #fff;
    padding: 40px 20px 20px 40px;
  }
</style>
<h5 class="injected-text">margin</h5>

<div class="box yellow-box">
  <h5 class="box red-box">padding</h5>
  <h5 class="box blue-box">padding</h5>
</div>
```
