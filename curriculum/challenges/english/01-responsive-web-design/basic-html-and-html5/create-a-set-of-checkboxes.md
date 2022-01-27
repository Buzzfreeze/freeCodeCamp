---
id: bad87fee1348bd9aedf08835
title: Create a Set of Checkboxes
challengeType: 0
videoUrl: "https://scrimba.com/p/pVMPUv/cqrkJsp"
forumTopicId: 16821
dashedName: create-a-set-of-checkboxes
---

# --description--

คราวนี้ ถ้าเราอยากให้ผู้ใช้เลือกได้มากกว่า 1 ตัวเลือกล่ะ?

ในกรณีนี้ เราจะใช้ <dfn>checkbox</dfn> เพื่อให้ผู้ใช้เลือกได้ครั้งละหลายตัวเลือก
(checkbox ก็เป็น `input` ประเภทหนึ่ง)

checkbox แต่ละอันก็ต้องซ้อนอยู่ใน `label` ของตัวเอง
การใส่ `input` element ไว้ใน `label` element จะเป็นการเชื่อมโยง checkbox input เข้ากับ label element ที่ครอบอยู่โดยอัตโนมัติ

checkbox input ทั้งหมดที่เป็นกลุ่มเดียวกัน ต้องมี `name` attribute เหมือนกัน

มีมาตรฐานในการเขียน checkbox ข้อหนึ่งคือ เราควรกำหนดให้ `for` attribute ของ `label` element เป็นค่าเดียวกับ `id` attribute ของ `input` element ที่สัมพันธ์กัน
เพื่อจะทำให้เว็บของเรารู้ว่า `label` และ `input` ตัวนั้น เป็นข้อมูลที่เกี่ยวข้องกัน

ลองดูตัวอย่างการสร้าง checkbox:

```html
<label for="loving"
  ><input id="loving" type="checkbox" name="personality" /> Loving</label
>
```

# --instructions--

ให้เพิ่ม checkbox สามอันในแบบฟอร์มของคุณ
โดย checkbox ทุกอันต้องถูกซ้อนอยู่ใน `label` element ของตัวเอง
และ checkbox ทั้งสามอันต้องมี `name` attribute เป็น `personality` เหมือนกัน เพื่อทำให้เว็บของเรารู้ว่า checkbox นี้เป็นกลุ่มเดียวกัน

# --hints--

หน้าเว็บของคุณต้องมี checkbox element 3 ตัว

```js
assert($('input[type="checkbox"]').length > 2);
```

checkbox ทั้งสามตัวต้องซ้อนอยู่ใน `label` element ของตัวเอง

```js
assert($('label > input[type="checkbox"]:only-child').length > 2);
```

`label` ทุกตัวต้องมีแท็กปิด

```js
assert(
  code.match(/<\/label>/g) &&
    code.match(/<label/g) &&
    code.match(/<\/label>/g).length === code.match(/<label/g).length
);
```

checkbox ต้องมี `name` attribute เป็น `personality`

```js
assert(
  $('label > input[type="checkbox"]').filter('[name="personality"]').length > 2
);
```

checkbox ทั้งหมดต้องอยู่ในแท็ก `form`

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
    <label for="playful"
      ><input id="playful" type="checkbox" name="personality" />Playful</label
    >
    <label for="lazy"
      ><input id="lazy" type="checkbox" name="personality" />Lazy</label
    >
    <label for="evil"
      ><input id="evil" type="checkbox" name="personality" />Evil</label
    ><br />
    <input type="text" placeholder="cat photo URL" required />
    <button type="submit">Submit</button>
  </form>
</main>
```
