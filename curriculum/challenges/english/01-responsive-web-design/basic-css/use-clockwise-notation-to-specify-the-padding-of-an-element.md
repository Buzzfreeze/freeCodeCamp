---
id: bad87fee1348bd9aedf08826
title: Use Clockwise Notation to Specify the Padding of an Element
challengeType: 0
videoUrl: "https://scrimba.com/c/cB7mBS9"
forumTopicId: 18346
dashedName: use-clockwise-notation-to-specify-the-padding-of-an-element
---

# --description--

เรามีวิธีที่ง่ายกว่าการระบุ property `padding-top`, `padding-right`, `padding-bottom`, และ `padding-left` ทีละตัว

โดยคุณสามารถระบุค่าทั้งหมดได้ในบรรทัดเดียว แบบนี้:

```css
padding: 10px 20px 10px 20px;
```

ค่าทั้ง 4 ค่านี้จะเรียงตามเข็มนาฬิกา: บน, ขวา, ล่าง, ซ้าย, และจะให้ผลลัพธ์เหมือนกับการใช้ `padding-top` `padding-right` ฯลฯ

# --instructions--

จงใช้การเขียนตามเข็มนาฬกา (Clockwise Notation) เพื่อกำหนด `padding` ให้คลาส `.blue-box` โดยให้ด้านบนและด้านซ้ายมีค่าเป็น `40px` และ ด้านล่างและด้านขวามีค่าเป็น `20px`

# --hints--

คลาส `blue-box` ต้องมี `padding` ด้านบนเป็น `40px`

```js
assert($(".blue-box").css("padding-top") === "40px");
```

คลาส `blue-box` ต้องมี `padding` ด้านขวาเป็น `20px`

```js
assert($(".blue-box").css("padding-right") === "20px");
```

คลาส `blue-box` ต้องมี `padding` ด้านล่างเป็น `20px`

```js
assert($(".blue-box").css("padding-bottom") === "20px");
```

คลาส `blue-box` ต้องมี `padding` ด้านซ้ายเป็น `40px`

```js
assert($(".blue-box").css("padding-left") === "40px");
```

คุณควรใช้การเขียนตามเข็มนาฬิกาเพื่อกำหนด padding ของคลาส `blue-box`

```js
assert(
  /\.blue-box\s*{[\s\S]*padding[\s]*:\s*\d+px\s+\d+px\s+\d+px\s+\d+px(;\s*[^}]+\s*}|;?\s*})/.test(
    __helpers.removeCssComments($("style").text())
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
