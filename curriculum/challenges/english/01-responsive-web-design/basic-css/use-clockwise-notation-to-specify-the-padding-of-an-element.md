---
id: bad87fee1348bd9aedf08826
title: Use Clockwise Notation to Specify the Padding of an Element
challengeType: 0
videoUrl: 'https://scrimba.com/c/cB7mBS9'
forumTopicId: 18346
dashedName: use-clockwise-notation-to-specify-the-padding-of-an-element
---

# --description--

แทนที่จะระบุ `padding-top`, `padding-right`, `padding-bottom`, และ `padding-left` properties ของ element ที่จะตัว
คุณสามารถระบุค่าให้มันได้ในบรรทัดเดียว แบบนี้:

```css
padding: 10px 20px 10px 20px;
```

ค่าทั้ง 4 ค่านี้จะเรียงตามเขียมนาฬิกา: บน, ขวา, ล่าง, ซ้าย, และจะให้ผลลัพธ์เหมือนกับการใช้คำสั่งที่เป็น side-specific padding 
# --instructions--

จงใช้ Clockwise Notation เพื่อกำหนดให้ `.blue-box` class มี `padding` ขนาด `40px` ที่ด้านบนและซ้าย และ `20px` ที่ด้านล่างและขวา

# --hints--

`blue-box` class ควรกำหนดให้ด้านบนของ element มี `40px` เป็นค่าของ `padding`

```js
assert($('.blue-box').css('padding-top') === '40px');
```

Your `blue-box` class should give the right of elements `20px` of `padding`.

```js
assert($('.blue-box').css('padding-right') === '20px');
```

Your `blue-box` class should give the bottom of elements `20px` of `padding`.

```js
assert($('.blue-box').css('padding-bottom') === '20px');
```

Your `blue-box` class should give the left of elements `40px` of `padding`.

```js
assert($('.blue-box').css('padding-left') === '40px');
```

You should use the clockwise notation to set the padding of `blue-box` class.

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
