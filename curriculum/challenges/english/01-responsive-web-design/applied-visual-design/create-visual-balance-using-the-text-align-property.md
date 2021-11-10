---
id: 587d7791367417b2b2512ab3
title: Create Visual Balance Using the text-align Property
challengeType: 0
videoUrl: 'https://scrimba.com/c/c3b4EAp'
forumTopicId: 301053
dashedName: create-visual-balance-using-the-text-align-property
---

# --description--

ส่วนนี้ของหลักสุตรจะโฟกัสที่ Applied Visual Design
แบบฝึกหัดชุดแรกจะเกี่ยวกับ card layout เพื่อแสดงให้เห็นหลักการสำคัญ ๆ จำนวนหนึ่ง

ตัวอักษรมักจะเป็นส่วนใหญ่ ๆ ใน content
CSS มีตัวเลือกหลากหลายให้ใช้กับการจัดตัวอักษรพวกนั้นด้วย `text-align` property

`text-align: justify;` ทำให้ข้อความในแต่ละบรรทัดมีความยาวเท่ากัน

`text-align: center;` ทำให้ข้อความอยู่ตรงกลาง

`text-align: right;` ทำให้ข้อความชิดขวา
And `text-align: left;` ทำให้ข้อความชิดซ้าย ซึ่งเป็นค่าเริ่มต้นของมัน

# --instructions--

จงจัดข้อความของ `h4` tag ที่เขียนว่า "Google" ให้อยู่ตรงกลาง
และหลังจากนั้นจงทำให้ paragraph tag ที่เก็บข้อมูลเกี่ยวกับการก่อตั้ง Google มีความยาวในแต่ละบรรทัดเท่ากัน

# --hints--

คุณควรใช้ text-align property กับ `h4` tag tเพื่อกำหนดให้มันมีค่าเป็น `center`

```js
assert($('h4').css('text-align') == 'center');
```

Your code should use the text-align property on the `p` tag to set it to `justify`.

```js
assert($('p').css('text-align') == 'justify');
```

# --seed--

## --seed-contents--

```html
<style>
  h4 {

  }
  p {

  }
  .links {
    margin-right: 20px;

  }
  .fullCard {
    border: 1px solid #ccc;
    border-radius: 5px;
    margin: 10px 5px;
    padding: 4px;
  }
  .cardContent {
    padding: 10px;
  }
</style>
<div class="fullCard">
  <div class="cardContent">
    <div class="cardText">
      <h4>Google</h4>
      <p>Google was founded by Larry Page and Sergey Brin while they were Ph.D. students at Stanford University.</p>
    </div>
    <div class="cardLinks">
      <a href="https://en.wikipedia.org/wiki/Larry_Page" target="_blank" class="links">Larry Page</a>
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
  }
  p {
    text-align: justify;
  }
  .links {
    margin-right: 20px;

  }
  .fullCard {
    border: 1px solid #ccc;
    border-radius: 5px;
    margin: 10px 5px;
    padding: 4px;
  }
  .cardContent {
    padding: 10px;
  }
</style>
<div class="fullCard">
  <div class="cardContent">
    <div class="cardText">
      <h4>Google</h4>
      <p>Google was founded by Larry Page and Sergey Brin while they were Ph.D. students at Stanford University.</p>
    </div>
    <div class="cardLinks">
      <a href="https://en.wikipedia.org/wiki/Larry_Page" target="_blank" class="links">Larry Page</a>
      <a href="https://en.wikipedia.org/wiki/Sergey_Brin" target="_blank" class="links">Sergey Brin</a>
    </div>
  </div>
</div>
```
