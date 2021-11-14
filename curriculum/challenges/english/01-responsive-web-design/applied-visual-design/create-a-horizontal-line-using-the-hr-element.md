---
id: 587d781b367417b2b2512abb
title: Create a Horizontal Line Using the hr Element
challengeType: 0
videoUrl: 'https://scrimba.com/c/c3bR8t7'
forumTopicId: 301049
dashedName: create-a-horizontal-line-using-the-hr-element
---

# --description--

คุณสามารถใช้ `hr` tag เพื่อเพิ่มเส้นทางนอนที่มีความยาวเท่ากับความกว้างของ element ที่เก็บแท็กนี้ไว้
เส้นนี้ถูกใช้เพื่อบ่งบอกว่าหัวข้อมีการเปลี่ยนไปแล้วหรือเพื่อแสดงให้เห็นถึงกลุ่ม content ที่แยกจากกัน

# --instructions--

จงเพิ่ม`hr` tag ใต้ `h4` ซึ่งได้เก็บหัวข้อของการ์ดไว้

**Note:** ใน HTML `hr` เป็น self-closing tag ซึ่งทำให้มันไม่ต้องการแท็กปิด

# --hints--

คุณควรเพิ่ม `hr` tag ให้กับ markup

```js
assert($('hr').length == 1);
```

`hr` tag ควรจะอยู่ระหว่างหัวข้อ (title) และพารากราฟ

```js
assert(code.match(/<\/h4>\s*?<hr(>|\s*?\/>)\s*?<p>/gi));
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
      <h4><s>Google</s>Alphabet</h4>

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
      <h4><s>Google</s>Alphabet</h4>
      <hr>
      <p><em>Google was founded by Larry Page and Sergey Brin while they were <u>Ph.D. students</u> at <strong>Stanford University</strong>.</em></p>
    </div>
    <div class="cardLinks">
      <a href="https://en.wikipedia.org/wiki/Larry_Page" target="_blank" class="links">Larry Page</a><br><br>
      <a href="https://en.wikipedia.org/wiki/Sergey_Brin" target="_blank" class="links">Sergey Brin</a>
    </div>
  </div>
</div>
```
