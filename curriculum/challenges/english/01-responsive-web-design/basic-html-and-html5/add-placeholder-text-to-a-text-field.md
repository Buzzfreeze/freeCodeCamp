---
id: bad87fee1348bd9aedf08830
title: Add Placeholder Text to a Text Field
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVMPUv/cKdJDhg'
forumTopicId: 16647
dashedName: add-placeholder-text-to-a-text-field
---

# --description--

Placeholder text คือสิ่งที่จะแสดงผลใน `input` element ก่อนที่ผู้ใช้ของคุณจะมีการเพิ่มข้อมูลอะไรเข้ามา

คุณสามารถสร้าง placeholder text โดยการเขียนแบบนี้:

```html
<input type="text" placeholder="this is placeholder text">
```

**Note:** จำไว้ว่า `input` elements เป็นแบบ self-closing (ไม่จำเป็นต้องมีแท็กปิด)

# --instructions--

จงกำหนดให้ค่าของ `placeholder` ของ `input` มีค่าเป็น "cat photo URL".

# --hints--

คุณควรเพิ่ม `placeholder` attribute อันหนึ่งให้กับ `input` element ที่เป็นแบบรับตัวอักษร

```js
assert($('input[placeholder]').length > 0);
```

คุณควรกำหนดค่าของ `placeholder` attribute เป็น `cat photo URL`

```js
assert(
  $('input') &&
    $('input').attr('placeholder') &&
    $('input')
      .attr('placeholder')
      .match(/cat\s+photo\s+URL/gi)
);
```

`input` element ที่ถูกกรอกข้อความลงไปแล้วไม่ควรจะมีแท็กปิด

```js
assert(!code.match(/<input.*\/?>.*<\/input>/gi));
```

`input` element ที่ถูกกรอกข้อความลงไปแล้วควรมี syntax ที่ถูกต้อง

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
  <input type="text">
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
  <input type="text" placeholder="cat photo URL">
</main>
```
