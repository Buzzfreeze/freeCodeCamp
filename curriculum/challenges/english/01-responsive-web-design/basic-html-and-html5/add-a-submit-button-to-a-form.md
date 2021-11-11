---
id: bad87fee1348bd9aedd08830
title: Add a Submit Button to a Form
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVMPUv/cp2Nkhz'
forumTopicId: 16627
dashedName: add-a-submit-button-to-a-form
---

# --description--

มาเพิ่มปุ่มส่งข้อมูล (submit button) ให้กับแบบฟอร์มของคุณกันเถอะ การคลิกที่ปุ่มนี้เป็นการส่งข้อมูลในแบบฟอร์มไปที่URL ที่คุณได้กำหนดไว้ด้วย `action` attribute

นี่คือตัวอย่างของปุ่มส่งข้อมูล:

```html
<button type="submit">this button submits the form</button>
```

# --instructions--

จงเพิ่มปุ่มส่งข้อมูลซึ่งจะเป็น element สุดท้ายของ `form` element นี้ 
โดยการกำหนด input ให้เป็นแบบ `submit`, และเพิ่มข้อความว่า `Submit` ให้กับมัน

# --hints--

`form` ควรมี `button` อันหนึ่งข้างใน

```js
assert($('form').children('button').length > 0);
```

ปุ่มส่งข้อมูลควรมี attribute `type` ที่มีค่าเป็น `submit`

```js
assert($('button').attr('type') === 'submit');
```

ปุ่มส่งข้อมูลควรจะมีแค่ข้อความ `Submit` เท่านั้นที่อยู่ข้างใน

```js
assert(
  $('button')
    .text()
    .match(/^\s*submit\s*$/gi)
);
```

`button` element ของคุณควรจะมีแท็กปิด

```js
assert(
  code.match(/<\/button>/g) &&
    code.match(/<button/g) &&
    code.match(/<\/button>/g).length === code.match(/<button/g).length
);
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
    <input type="text" placeholder="cat photo URL">
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
    <input type="text" placeholder="cat photo URL">
    <button type="submit">Submit</button>
  </form>
</main>
```
