---
id: bad87fee1348bd9aedf08835
title: Create a Set of Checkboxes
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVMPUv/cqrkJsp'
forumTopicId: 16821
dashedName: create-a-set-of-checkboxes
---

# --description--

แบบฟอร์มมักจะใช้ <dfn>checkboxes</dfn> กับคำถามที่สามารถเลือกได้มากกว่า 1 คำตอบ

Checkboxes เป็น `input` ประเภทหนึ่ง

checkbox แต่ละอันของคุณจะถูกเก็บไว้ใน `label` element ของมันเอง
การใส่ `input` element ไว้ใน `label` element จะเป็นการเชื่อมโยง checkbox input เข้ากับ label element ที่เก็บมันไว้โดยอัตโนมัติ

checkbox input ทั้งหมดที่เกี่ยวข้องกันควรจะมี `name` attribute อันเดียวกัน

หนึ่งใน best practice คือการกำหนดความสัมพันธ์ระหว่าง checkbox `input` อันหนึ่งกับ `label` ที่เกี่ยวข้องกับมันโดยการกำหนดให้ `for` attribute ของ `label` element มีค่าเดียวกับ `id` attribute ของ `input` element ที่สัมพันธ์กัน

นี่คือตัวอย่างของ checkbox อันหนึ่ง:

```html
<label for="loving"><input id="loving" type="checkbox" name="personality"> Loving</label>
```

# --instructions--

จงเพิ่มกลุ่มของ checkbox สามอันให้กับแบบฟอร์มของคุณ
แต่ละ checkbox ควรจะถูกเก็บไว้ใน `label` element ของมันเอง
ทั้งสามอันควรจะใช้ `name` attribute ที่ชื่อว่า `personality` เหมือนกัน

# --hints--

หน้าเว็บไซต์ของคุณควรมี 3 checkbox element

```js
assert($('input[type="checkbox"]').length > 2);
```

แต่ละ checkbox element ทั้งสามอันของคุณควรจะถูกเก็บไว้ใน `label` element ของมัน

```js
assert($('label > input[type="checkbox"]:only-child').length > 2);
```

จงเช็คให้แน่ใจว่า `label` element แต่ละอันของคุณมีแท็กปิด

```js
assert(
  code.match(/<\/label>/g) &&
    code.match(/<label/g) &&
    code.match(/<\/label>/g).length === code.match(/<label/g).length
);
```

checkboxe ของคุณควรถูกกำหนดให้มี `name` attribute เป็น `personality`

```js
assert(
  $('label > input[type="checkbox"]').filter('[name="personality"]').length > 2
);
```

checkboxe แต่ละอันควรจะถูกใส่ไว้ใน `form` tag

```js
assert($('label').parent().get(0).tagName.match('FORM'));
```

# --seed--

## --seed-contents--

```html
<h2>CatPhotoApp</h2>
<main>
  <p>Click here to view more <a href="#">cat photos</a>.</p>

  <a href="#"><img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back."></a>

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
    <label for="indoor"><input id="indoor" type="radio" name="indoor-outdoor"> Indoor</label>
    <label for="outdoor"><input id="outdoor" type="radio" name="indoor-outdoor"> Outdoor</label><br>
    <input type="text" placeholder="cat photo URL" required>
    <button type="submit">Submit</button>
  </form>
</main>
```

# --solutions--

```html
<h2>CatPhotoApp</h2>
<main>
  <p>Click here to view more <a href="#">cat photos</a>.</p>
  
  <a href="#"><img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back."></a>
  
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
    <label for="indoor"><input id="indoor" type="radio" name="indoor-outdoor"> Indoor</label>
    <label for="outdoor"><input id="outdoor" type="radio" name="indoor-outdoor"> Outdoor</label><br>
    <label for="playful"><input id="playful" type="checkbox" name="personality">Playful</label>
    <label for="lazy"><input id="lazy" type="checkbox" 
name="personality">Lazy</label>
    <label for="evil"><input id="evil" type="checkbox" 
name="personality">Evil</label><br>
    <input type="text" placeholder="cat photo URL" required>
    <button type="submit">Submit</button>
  </form>
</main>
```
