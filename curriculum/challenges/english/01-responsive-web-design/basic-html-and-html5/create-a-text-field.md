---
id: bad87fee1348bd9aedf08829
title: Create a Text Field
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVMPUv/c2EVnf6'
forumTopicId: 16823
dashedName: create-a-text-field
---

# --description--

คราวนี้ มาสร้างแบบฟอร์มให้กับเว็บของเรากันเถอะ

`input` element เป็นวิธีที่สะดวกมาก ๆ สำหรับการรับข้อมูลมาจากผู้ใช้ของคุณ

คุณสามารถสร้างกล่องรับข้อความได้โดยใช้วิธีนี้:

```html
<input type="text">
```

จะเห็นว่า `input` element เป็นแท็กแบบ self-closing (เป็นแท็กเปิดและปิดในตัวเอง)

# --instructions--

ให้สร้าง `input` element ที่มี type เป็น `text` ใต้ลิสต์ของคุณ

# --hints--

แอปของคุณต้องมี `input` element ประเภท `text`

```js
assert($('input[type=text]').length > 0);
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
  <form>
    <input type="text">
  </form>
</main>
```
