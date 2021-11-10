---
id: 587d781b367417b2b2512aba
title: Use the s Tag to Strikethrough Text
challengeType: 0
videoUrl: ''
forumTopicId: 301079
dashedName: use-the-s-tag-to-strikethrough-text
---

# --description--

เพื่อที่จะขีดฆ่าข้อความหรือก็คือการทำให้มีเส้นนอนตัดผ่านตัวอักษร คุณสามารถใช้`s` tag
มันจะแสดงให้เห็นว่าข้อความส่วนนั้นใช้ไม่ได้แล้ว
เมื่อใช้ `s` tag browser จะใช้ CSS ที่เป็น `text-decoration: line-through;` กับ element

# --instructions--

จงใส่ `s` tag รอบ `Google` ที่อยู่ใน `h4` tag และจงเพิ่มคำว่าa `Alphabet` ข้าง ๆ มันโดยไม่ต้องขีดฆ่า

# --hints--

คุณควรเพิ่ม`s` tag ให้กับ markup.

```js
assert($('s').length == 1);
```

A `s` tag should wrap around the `Google` text in the `h4` tag. It should not contain the word `Alphabet`.

```js
assert(
  $('h4 > s')
    .text()
    .match(/Google/gi) &&
    !$('h4 > s')
      .text()
      .match(/Alphabet/gi)
);
```

You should include the word `Alphabet` in the `h4` tag, without strikethrough formatting.

```js
assert(
  $('h4')
    .html()
    .match(/Alphabet/gi)
);
```

# --seed--

## --seed-contents--

```html
<style>
  h4 {
    text-align: center;
    height: 25px;
  }
  p {
    text-align: justify;
  }
  .links {
    text-align: left;
    color: black;
  }
  .fullCard {
    width: 245px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin: 10px 5px;
    padding: 4px;
  }
  .cardContent {
    padding: 10px;
  }
  .cardText {
    margin-bottom: 30px;
  }
</style>
<div class="fullCard">
  <div class="cardContent">
    <div class="cardText">
      <h4>Google</h4>
      <p><em>Google was founded by Larry Page and Sergey Brin while they were <u>Ph.D. students</u> at <strong>Stanford University</strong>.</em></p>
    </div>
    <div class="cardLinks">
      <a href="https://en.wikipedia.org/wiki/Larry_Page" target="_blank" class="links">Larry Page</a><br><br>
      <a href="https://en.wikipedia.org/wiki/Sergey_Brin" target="_blank" class="links">Sergey Brin</a>
    </div>
  </div>
</div>
```

# --solutions--

```html
<style>
  h4 {
    text-align: center;
    height: 25px;
  }
  p {
    text-align: justify;
  }
  .links {
    text-align: left;
    color: black;
  }
  .fullCard {
    width: 245px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin: 10px 5px;
    padding: 4px;
  }
  .cardContent {
    padding: 10px;
  }
  .cardText {
    margin-bottom: 30px;
  }
</style>
<div class="fullCard">
  <div class="cardContent">
    <div class="cardText">
      <h4><s>Google</s> Alphabet</h4>
      <p><em>Google was founded by Larry Page and Sergey Brin while they were <u>Ph.D. students</u> at <strong>Stanford University</strong>.</em></p>
    </div>
    <div class="cardLinks">
      <a href="https://en.wikipedia.org/wiki/Larry_Page" target="_blank" class="links">Larry Page</a><br><br>
      <a href="https://en.wikipedia.org/wiki/Sergey_Brin" target="_blank" class="links">Sergey Brin</a>
    </div>
  </div>
</div>
```
