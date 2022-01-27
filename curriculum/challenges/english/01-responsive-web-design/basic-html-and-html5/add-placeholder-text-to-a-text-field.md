---
id: bad87fee1348bd9aedf08830
title: Add Placeholder Text to a Text Field
challengeType: 0
videoUrl: "https://scrimba.com/p/pVMPUv/cKdJDhg"
forumTopicId: 16647
dashedName: add-placeholder-text-to-a-text-field
---

# --description--

Placeholder คือข้อความที่อยู่ใน `input` ก่อนที่ผู้ใช้จะพิมพ์ข้อความเข้ามา

ลองดูวิธีการระบุ placeholder:

```html
<input type="text" placeholder="this is placeholder text" />
```

**Note:** อย่าลืมว่า `input` element เป็นแบบ self-closing (ไม่จำเป็นต้องมีแท็กปิด)

# --instructions--

ให้กำหนดข้อความของ `placeholder` ของ `input` เป็น "cat photo URL"

# --hints--

ต้องระบุ `placeholder` attribute ให้กับ `input` element

```js
assert($("input[placeholder]").length > 0);
```

ข้อความใน `placeholder` attribute ต้องเป็น `cat photo URL`

```js
assert(
  $("input") &&
    $("input").attr("placeholder") &&
    $("input")
      .attr("placeholder")
      .match(/cat\s+photo\s+URL/gi)
);
```

`input` element ต้องไม่มีแท็กปิด

```js
assert(!code.match(/<input.*\/?>.*<\/input>/gi));
```

syntax ของ `input` element ต้องถูกต้อง

```js
assert($("input[type=text]").length > 0);
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
  <input type="text" />
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
  <input type="text" placeholder="cat photo URL" />
</main>
```
