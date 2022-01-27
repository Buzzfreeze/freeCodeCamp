---
id: 587d7791367417b2b2512ab3
title: Create Visual Balance Using the text-align Property
challengeType: 0
videoUrl: 'https://scrimba.com/c/c3b4EAp'
forumTopicId: 301053
dashedName: create-visual-balance-using-the-text-align-property
---

# --description--

ส่วนนี้ของหลักสูตรจะโฟกัสไปที่การปรับการแสดงผล
โดยแบบฝึกหัดชุดแรกให้ layout แบบ card เพื่อสอนหลักการสำคัญก่อน

ปกติแล้วเนื้อส่วนใหญ่ในเว็บจะเป็นตัวอักษร
CSS มีตัวเลือกหลายแบบ ที่ใช้เพื่อจัดตัวอักษรโดยใช้ property `text-align`

`text-align: justify;` จะทำให้ข้อความในทุกบรรทัดมีความยาวเท่ากัน

`text-align: center;` จะทำให้ข้อความอยู่ตรงกลาง

`text-align: right;` จะทำให้ข้อความชิดขวา

`text-align: left;` จะทำให้ข้อความชิดซ้าย (ค่านี้จะเป็นค่าเริ่มต้นของ property นี้)

# --instructions--

ให้จัดข้อความในแท็ก `h4` ที่เขียนว่า "Google" ให้อยู่ตรงกลาง
และทำให้แท็ก `p` ที่เป็นข้อมูลเกี่ยวกับการก่อตั้ง Google มีความยาวในแต่ละบรรทัดเท่ากัน

# --hints--

ต้องกำหนดค่า property `text-align` ของแท็ก `h4` ให้มีค่าเป็น `center`

```js
assert($('h4').css('text-align') == 'center');
```

ต้องกำหนดค่า property `text-align` ของแท็ก `p` ให้มีค่าเป็น `justify`

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
