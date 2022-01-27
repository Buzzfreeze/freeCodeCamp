---
id: bad87fee1348bd9afdf08726
title: Use Clockwise Notation to Specify the Margin of an Element
challengeType: 0
videoUrl: "https://scrimba.com/c/cnpybAd"
forumTopicId: 18345
dashedName: use-clockwise-notation-to-specify-the-margin-of-an-element
---

# --description--

เรามาลองใช้ clockwise notation กับ `margin` กัน

แทนที่จะระบุ `margin-top`, `margin-right`, `margin-bottom`, และ `margin-left` ทีละตัว
คุณสามารถระบุค่าทั้งหมดได้ในบรรทัดเดียว แบบนี้:

```css
margin: 10px 20px 10px 20px;
```

ค่าทั้ง 4 ตัวนี้จะเรียงกันตามเข็มนาฬิกา: บน, ขวา, ล่าง, ซ้าย, และจะให้ผลลัพธ์แบบเดียวกับการใช้คำสั่ง `margin-top` `margin-right` ฯลฯ

# --instructions--

จงใช้การเขียนตามเข็มนาฬกา (Clockwise Notation) เพื่อกำหนด `margin` ให้คลาส `.blue-box` โดยให้ด้านบนและด้านซ้ายมีค่าเป็น `40px` และ ด้านล่างและด้านขวามีค่าเป็น `20px`

# --hints--

คลาส `blue-box` ต้องมี `margin` ด้านบนเป็น `40px`

```js
assert($(".blue-box").css("margin-top") === "40px");
```

คลาส `blue-box` ต้องมี `margin` ด้านขวาเป็น `20px`

```js
assert($(".blue-box").css("margin-right") === "20px");
```

คลาส `blue-box` ต้องมี `margin` ด้านล่างเป็น `20px`

```js
assert($(".blue-box").css("margin-bottom") === "20px");
```

คลาส `blue-box` ต้องมี `margin` ด้านซ้ายเป็น `40px`

```js
assert($(".blue-box").css("margin-left") === "40px");
```

คุณควรใช้การเขียนตามเข็มนาฬิกาเพื่อกำหนด margin ของคลาส `blue-box`

```js
assert(
  /\.blue-box\s*{[\s\S]*margin[\s]*:\s*\d+px\s+\d+px\s+\d+px\s+\d+px(;\s*[^}]+\s*}|;?\s*})/.test(
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
