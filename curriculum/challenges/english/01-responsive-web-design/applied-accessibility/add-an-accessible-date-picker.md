---
id: 587d778b367417b2b2512aa8
title: Add an Accessible Date Picker
challengeType: 0
videoUrl: 'https://scrimba.com/c/cR3bRbCV'
forumTopicId: 301008
dashedName: add-an-accessible-date-picker
---

# --description--

ฟอร์มมันจะรวมช่อง`input` ที่สามารถถูกใช้เพื่อสร้าง form controls หลาย ๆ อันที่แตกต่างกันได้
`type` attribute ใน element นี้จะบอกว่า `input` element ประเภทไหนจะถูกสร้างจึ้นมา

คุณอาจจะสังเกตได้ว่า input ประเภท `text` และ `submit` ใน challenge ก่อนหน้านี้และ HTML5 ได้กล่าวถึงตัวเลือกหนึ่งที่ระบุช่อง `date` 
date picker จะแสดงในช่อง `input` เป็นมันถูก focus ตาม browser support ที่ใช้ โดยมันทำให้การกรอกฟอร์มนั้นง่ายขึ้นสำหรับผู้ใช้ทุกคน

สำหรับ browser เก่าๆ ประเภทของมันโดยค่าเริ่มต้นจะเป็น `text` ดังนั้นมันช่วยให้แสดงให้ผู้ใช้เห็น format ของ date input ที่ต้องการในข้อความ `label` หรือ `placeholder` 

นี่คือตัวอย่าง:

```html
<label for="input1">Enter a date:</label>
<input type="date" id="input1" name="input1">
```

# --instructions--

Camper Cat นั้นจัด Mortal Kombat tournament และต้องการถามผู้เข้าแข่งขันของพวกเขาว่าควรจัดงานวันไหน
จงเพิ่ม `input` tag พร้อมกับ `type` attribute ของ `date`, `id` attribute ของ `pickdate`, และ `name` attribute ของ `date`.

# --hints--

โค้ดของคุณควรเพิ่ม `input` tag สำหรับช่อง date selector 

```js
assert($('input').length == 2);
```

Your `input` tag should have a `type` attribute with a value of `date`.

```js
assert($('input').attr('type') == 'date');
```

Your `input` tag should have an `id` attribute with a value of `pickdate`.

```js
assert($('input').attr('id') == 'pickdate');
```

Your `input` tag should have a `name` attribute with a value of `date`.

```js
assert($('input').attr('name') == 'date');
```

# --seed--

## --seed-contents--

```html
<body>
  <header>
    <h1>Tournaments</h1>
  </header>
  <main>
    <section>
      <h2>Mortal Kombat Tournament Survey</h2>
      <form>
        <p>Tell us the best date for the competition</p>
        <label for="pickdate">Preferred Date:</label>

        <!-- Only change code below this line -->



        <!-- Only change code above this line -->

        <input type="submit" name="submit" value="Submit">
      </form>
    </section>
  </main>
  <footer>&copy; 2018 Camper Cat</footer>
</body>
```

# --solutions--

```html
<body>
  <header>
    <h1>Tournaments</h1>
  </header>
  <main>
    <section>
      <h2>Mortal Kombat Tournament Survey</h2>
      <form>
        <p>Tell us the best date for the competition</p>
        <label for="pickdate">Preferred Date:</label>
        <input type="date" id="pickdate" name="date">
        <input type="submit" name="submit" value="Submit">
      </form>
    </section>
  </main>
  <footer>&copy; 2018 Camper Cat</footer>
</body>
```
