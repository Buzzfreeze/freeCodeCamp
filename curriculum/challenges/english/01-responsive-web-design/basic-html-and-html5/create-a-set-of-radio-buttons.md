---
id: bad87fee1348bd9aedf08834
title: Create a Set of Radio Buttons
challengeType: 0
forumTopicId: 16822
dashedName: create-a-set-of-radio-buttons
---

# --description--

คุณสามารถใช้ <dfn>radio buttons</dfn> กำคำถามที่คุรต้องการให้ผู้ใช้เลือกเพียงคำตอบเดียวจากหลาย ๆ ตัวเลือก

Radio buttons เป็น `input` ประเภทหนึ่ง

radio button แต่ละอันของคุณจะถูกเก็บไว้ใน `label` element ของมันเอง
การใส่ `input` element ไว้ใน `label` element จะเป็นการเชื่อมโยง Radio buttons input เข้ากับ label element ที่ครอบมันอยู่โดยอัตโนมัติ

radio buttons ที่เกี่ยวข้องกันทั้งหมดควรจะมี `name` attribute เดียวกันเพื่อที่จะสร้างกลุ่มของ radio button 
เมื่อเราสร้างกลุ่มของ radio button  เวลาเราเลือก radio button ตัวใดก็ตาม มันจะเป็นการยกเลิกการเลือก button อื่นที่อยู่ภายในกลุ่มเดียวกันโดยอัตโนมัติ เพื่อให้มั่นใจได้ว่าผู้ใช้จะเลือกเพียงตัวเลือกเดียว

นี่คือตัวอย่างของ  radio button:

```html
<label> 
  <input type="radio" name="indoor-outdoor">Indoor 
</label>
```

มันเป็นวิธีการที่ดีที่สุดที่จะกำหนดให้ `for` attribute ของ `label` element มีค่าเดียวกับ `id` attribute ของ `input` element ที่สัมพันธ์กัน
มันจะช่วยให้ assistive technology สามารถสร้างความสัมพันธ์ที่เชื่อมโยงกันระหว่าง label และ `input` element
ยกตัวอย่างเช่น:

```html
<input id="indoor" type="radio" name="indoor-outdoor">
<label for="indoor">Indoor</label>
```

พวกเราสามารถเก็บ `input` element ไว้ใน `label` tag ได้เช่นกัน:

```html
<label for="indoor"> 
  <input id="indoor" type="radio" name="indoor-outdoor">Indoor 
</label>
```

# --instructions--

จงเพิ่ม radio button 2 อันที่คู๋กันให้กับแบบฟอร์ม โดยแต่ละอันจะถูกเก็บไว้ใน `label` element ของมันเอง
อันหนึ่งควรมี ตัวเลือก เป็น `indoor` และอีกอันหนึ่งควรมีตัวเลือกเป็น `outdoor`
ทั้งสองควรจะมี `name` attribute อันเดียวกันโดยชื่อว่า `indoor-outdoor` เพื่อสร้างกลุ่มของ radio 

# --hints--

หน้าเว็บไซต์ของจะมี `radio` button element 2 อัน

```js
assert($('input[type="radio"]').length > 1);
```

Your radio buttons should be given the `name` attribute of `indoor-outdoor`.

```js
assert($('input[type="radio"]').filter("[name='indoor-outdoor']").length > 1);
```

Each of your two radio button elements should be nested in its own `label` element.

```js
assert($('label > input[type="radio"]:only-child').length > 1);
```

Each of your `label` elements should have a closing tag.

```js
assert(
  code.match(/<\/label>/g) &&
    code.match(/<label/g) &&
    code.match(/<\/label>/g).length === code.match(/<label/g).length
);
```

One of your radio buttons should have the label `indoor`.

```js
assert(
  $('label')
    .text()
    .match(/indoor/gi)
);
```

One of your radio buttons should have the label `outdoor`.

```js
assert(
  $('label')
    .text()
    .match(/outdoor/gi)
);
```

Each of your radio button elements should be added within the `form` tag.

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
    <input type="text" placeholder="cat photo URL" required>
    <button type="submit">Submit</button>
  </form>
</main>
```
