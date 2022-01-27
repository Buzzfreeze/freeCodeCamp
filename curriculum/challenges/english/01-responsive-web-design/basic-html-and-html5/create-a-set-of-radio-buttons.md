---
id: bad87fee1348bd9aedf08834
title: Create a Set of Radio Buttons
challengeType: 0
forumTopicId: 16822
dashedName: create-a-set-of-radio-buttons
---

# --description--

คุณสามารถใช้ <dfn>radio button</dfn> ได้ ในกรณีที่คุณมีตัวเลือกหลายๆตัวแต่ต้องการให้ผู้ใช้เลือกเพียงตัวเลือกเดียว
(Radio button ก็เป็น `input` ประเภทหนึ่ง)

radio button แต่ละอันจะซ้อนอยู่ใน `label` element ของตัวเอง
การซ้อน `input` ไว้ใน `label` จะเป็นการเชื่อมโยง Radio button `input` นั้นเข้ากับ `label` ที่ครอบอยู่โดยอัตโนมัติ

radio button ที่เป็นกลุ่มเดียวกันจะต้องมี `name` attribute เดียวกัน
เมื่อสร้างกลุ่มของ radio button แล้ว เวลาเราเลือก radio button ตัวใดก็ตาม จะเป็นการยกเลิก button ตัวอื่นที่เลือกไว้ที่เป็นกลุ่มเดียวกันโดยอัตโนมัติ

ลองดูตัวอย่างการสร้าง radio button หนึ่งปุ่ม:

```html
<label> <input type="radio" name="indoor-outdoor" />Indoor </label>
```

มีมาตรฐานในการเขียน radio button ข้อหนึ่งคือ เราควรกำหนดให้ `for` attribute ของ `label` element เป็นค่าเดียวกับ `id` attribute ของ `input` element ที่สัมพันธ์กัน
เพื่อจะทำให้เว็บของเรารู้ว่า `label` และ `input` ตัวนั้น เป็นข้อมูลที่เกี่ยวข้องกัน
ยกตัวอย่างเช่น:

```html
<input id="indoor" type="radio" name="indoor-outdoor" />
<label for="indoor">Indoor</label>
```

และเราก็จะต้องซ้อน `input` ไว้ในแท็ก `label` ด้วย:

```html
<label for="indoor">
  <input id="indoor" type="radio" name="indoor-outdoor" />Indoor
</label>
```

# --instructions--

ให้เพิ่ม radio button 2 อันที่คู่กันในแบบฟอร์ม โดย raidio button แต่ละอันก็ต้องซ้อนอยู่ใน `label` element ของตัวเอง

โดย `label` ตัวหนึ่งต้องมีข้อความเป็น `indoor` และอีกตัวหนึ่งควรมีข้อความเป็น `outdoor`
และ radio button ทั้งสองปุ่มต้องมี `name` attribute เป็นชื่อเดียวกัน โดยมีชื่อว่า `indoor-outdoor`

# --hints--

หน้าเว็บไซต์ของคุณจะต้องมี `radio` button element 2 อัน

```js
assert($('input[type="radio"]').length > 1);
```

radio button ต้องมี `name` attribute เป็น `indoor-outdoor`

```js
assert($('input[type="radio"]').filter("[name='indoor-outdoor']").length > 1);
```

radio button ทั้งสองปุ่ม ต้องซ้อนอยู่ใน `label` ของตัวเอง

```js
assert($('label > input[type="radio"]:only-child').length > 1);
```

`label` ทุกตัวต้องมีแท็กปิด

```js
assert(
  code.match(/<\/label>/g) &&
    code.match(/<label/g) &&
    code.match(/<\/label>/g).length === code.match(/<label/g).length
);
```

ต้องมี radio button ตัวหนึ่งที่มี label เป็น `indoor`

```js
assert(
  $("label")
    .text()
    .match(/indoor/gi)
);
```

ต้องมี radio button ตัวหนึ่งที่มี label เป็น `outdoor`

```js
assert(
  $("label")
    .text()
    .match(/outdoor/gi)
);
```

radio button ทั้งสองอันต้องอยู่ในแท็ก `form`

```js
assert($("label").parent().get(0).tagName.match("FORM"));
```

# --seed--

## --seed-contents--

```html
<h2>CatPhotoApp</h2>
<main>
  <p>Click here to view more <a href="#">cat photos</a>.</p>

  <a href="#"
    ><img
      src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg"
      alt="A cute orange cat lying on its back."
  /></a>

  <p>Things cats love:</p>
  <ul>
    <li>cat nip</li>
    <li>laser pointers</li>
    <li>lasagna</li>
  </ul>
  <p>Top 3 things cats hate:</p>
  <ol>
    <li>flea treatment</li>
    <li>thunder</li>
    <li>other cats</li>
  </ol>
  <form action="https://www.freecatphotoapp.com/submit-cat-photo">
    <input type="text" placeholder="cat photo URL" required />
    <button type="submit">Submit</button>
  </form>
</main>
```

# --solutions--

```html
<h2>CatPhotoApp</h2>
<main>
  <p>Click here to view more <a href="#">cat photos</a>.</p>

  <a href="#"
    ><img
      src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg"
      alt="A cute orange cat lying on its back."
  /></a>

  <p>Things cats love:</p>
  <ul>
    <li>cat nip</li>
    <li>laser pointers</li>
    <li>lasagna</li>
  </ul>
  <p>Top 3 things cats hate:</p>
  <ol>
    <li>flea treatment</li>
    <li>thunder</li>
    <li>other cats</li>
  </ol>
  <form action="https://www.freecatphotoapp.com/submit-cat-photo">
    <label for="indoor"
      ><input id="indoor" type="radio" name="indoor-outdoor" /> Indoor</label
    >
    <label for="outdoor"
      ><input id="outdoor" type="radio" name="indoor-outdoor" /> Outdoor</label
    ><br />
    <input type="text" placeholder="cat photo URL" required />
    <button type="submit">Submit</button>
  </form>
</main>
```
