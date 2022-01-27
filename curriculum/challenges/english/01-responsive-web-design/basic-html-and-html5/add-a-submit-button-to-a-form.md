---
id: bad87fee1348bd9aedd08830
title: Add a Submit Button to a Form
challengeType: 0
videoUrl: "https://scrimba.com/p/pVMPUv/cp2Nkhz"
forumTopicId: 16627
dashedName: add-a-submit-button-to-a-form
---

# --description--

มาเพิ่มปุ่มส่งข้อมูล ให้กับแบบฟอร์มของเรากันเถอะ การคลิกที่ปุ่มนี้เป็นการส่งข้อมูลในแบบฟอร์มไปที่ URL ที่คุณได้กำหนดไว้ใน attribute `action`

ลองดูตัวอย่างของปุ่มส่งข้อมูล:

```html
<button type="submit">this button submits the form</button>
```

# --instructions--

ให้เพิ่มปุ่มส่งข้อมูลเป็น element ตัวสุดท้ายใน `form` element นี้
โดยการกำหนด input ให้เป็นแบบ `submit` และให้ปุ่มมีข้อความว่า `Submit`

# --hints--

`form` ต้องมี `button` หนึ่งตัวอยู่ข้างใน

```js
assert($("form").children("button").length > 0);
```

ปุ่มส่งข้อมูลต้องมี attribute `type` ที่มีค่าเป็น `submit`

```js
assert($("button").attr("type") === "submit");
```

ปุ่มส่งข้อมูลต้อมีข้อความข้างในเป็น `Submit`

```js
assert(
  $("button")
    .text()
    .match(/^\s*submit\s*$/gi)
);
```

ต้องมีแท็กปิดของ `button` element ด้วย

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
    <input type="text" placeholder="cat photo URL" />
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
    <input type="text" placeholder="cat photo URL" />
    <button type="submit">Submit</button>
  </form>
</main>
```
