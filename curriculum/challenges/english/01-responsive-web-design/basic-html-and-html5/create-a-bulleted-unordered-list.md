---
id: bad87fee1348bd9aedf08827
title: Create a Bulleted Unordered List
challengeType: 0
videoUrl: "https://scrimba.com/p/pVMPUv/cDKVPuv"
forumTopicId: 16814
dashedName: create-a-bulleted-unordered-list
---

# --description--

HTML มี element สำหรับสร้าง <dfn>unordered lists</dfn> หรือลิตส์ที่เป็นแบบ bullet point

Unordered list (ลิสต์ที่เรียงไม่ลำดับ) จะเปิดด้วย `<ul>` และตามด้วย`<li>` element จำนวนกี่อันก็ได้
และสุดท้ายก็จะปิดด้วย `</ul>`

ตัวอย่างเช่น:

```html
<ul>
  <li>milk</li>
  <li>cheese</li>
</ul>
```

โค้ดข้างบนจะสร้างลิสต์แบบ bullet point โดยมีรายการด้านในเป็น `milk` และ `cheese`

# --instructions--

ให้ลบ `p` element 2 อันสุดท้ายออกไป และสร้าง unordered list เป็นชื่อของสิ่งที่แมวชอบ 3 อย่าง ที่ด้านล่างของหน้าเว็บไซต์

# --hints--

ให้สร้าง `ul` element หนึ่งอัน

```js
assert($("ul").length > 0);
```

ต้องมี `li` element สามอันอยู่ใน `ul` element

```js
assert($("ul li").length > 2);
```

`ul` element ต้องมีแท็กปิด

```js
assert(
  code.match(/<\/ul>/gi) &&
    code.match(/<ul/gi) &&
    code.match(/<\/ul>/gi).length === code.match(/<ul/gi).length
);
```

`li` element ต้องมีแท็กปิด

```js
assert(
  code.match(/<\/li>/gi) &&
    code.match(/<li[\s>]/gi) &&
    code.match(/<\/li>/gi).length === code.match(/<li[\s>]/gi).length
);
```

ต้องมีข้อความอยู่ด้านใน `li` element ด้วย

```js
assert($("ul li").filter((_, item) => !$(item).text().trim()).length === 0);
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

  <p>
    Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching
    attack your ankles chase the red dot, hairball run catnip eat the grass
    sniff.
  </p>
  <p>
    Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere
    rip the couch sleep in the sink fluffy fur catnip scratched.
  </p>
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

  <ul>
    <li>milk</li>
    <li>mice</li>
    <li>catnip</li>
  </ul>
</main>
```
