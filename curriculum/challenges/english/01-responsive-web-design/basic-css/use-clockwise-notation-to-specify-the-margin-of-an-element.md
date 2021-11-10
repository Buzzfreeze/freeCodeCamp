---
id: bad87fee1348bd9afdf08726
title: Use Clockwise Notation to Specify the Margin of an Element
challengeType: 0
videoUrl: 'https://scrimba.com/c/cnpybAd'
forumTopicId: 18345
dashedName: use-clockwise-notation-to-specify-the-margin-of-an-element
---

# --description--

เรามาลองกันอีกที แต่รอบนี้จะเป็นกับ `margin` 

แทนที่จะระบุ element `margin-top`, `margin-right`, `margin-bottom`, และ `margin-left` properties เป็นตัว ๆ , คุรสามารถกำหนดค่าให้พวกมันทั้งได้ในบรรทัดเดียว แบบนี้:

```css
margin: 10px 20px 10px 20px;
```

ค่าทั้ง 4 ตัวนี้จะเรียงกันตามเข็มนาฬิกา: บน, ขวา, ล่าง, ซ้าย, และจะให้ผลเช่นเดียวกับการใช้คำสั่งที่เป็น side-specific margin 

# --instructions--

จงใช้ Clockwise Notation เพื่อกำหนดให้ element ที่เป็น `blue-box` class มี margin ขนาด `40px` ที่ด้านบนและซ้ายของมัน และ `20px` ที่ด้านล่างและขวา

# --hints--

`blue-box` class ควรกำหนดให้ด้านบนของ element มี `40px` เป็นค่าของ `margin`

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

You should use the clockwise notation to set the margin of `blue-box` class.

```js
assert(
  /\.blue-box\s*{[\s\S]*margin[\s]*:\s*\d+px\s+\d+px\s+\d+px\s+\d+px(;\s*[^}]+\s*}|;?\s*})/.test(
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
    margin: 20px 40px 20px 40px;
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
    margin: 20px 40px 20px 40px;
  }

  .blue-box {
    background-color: blue;
    color: #fff;
    margin: 40px 20px 20px 40px;
  }
</style>
<h5 class="injected-text">margin</h5>

<div class="box yellow-box">
  <h5 class="box red-box">padding</h5>
  <h5 class="box blue-box">padding</h5>
</div>
```
