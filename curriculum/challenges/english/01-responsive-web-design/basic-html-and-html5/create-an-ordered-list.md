---
id: bad87fee1348bd9aedf08828
title: Create an Ordered List
challengeType: 0
videoUrl: "https://scrimba.com/p/pVMPUv/cQ3B8TM"
forumTopicId: 16824
dashedName: create-an-ordered-list
---

# --description--

HTML มี element พิเศษอีกอันหนึ่งที่เอาไว้สร้าง <dfn>ordered list</dfn> หรือลิสต์ที่มีการเรียงลำดับ

Ordered list จะเปิดด้วย `<ol>` โดยมี `<li>` element ด้านในจำนวนกี่อันก็ได้ และจะปิดด้วย `</ol>`

ตัวอย่างเช่น:

```html
<ol>
  <li>Garfield</li>
  <li>Sylvester</li>
</ol>
```

ตัวอย่างข้างบนจะทำให้เกิด ordered list ที่มีรายการด้านในเป็น `Garfield` และ `Sylvester`

# --instructions--

ให้สร้าง ordered list ที่เป็นของ 3 อย่างที่แมวเกลียดที่สุด (`Top 3 things cats hate`)

# --hints--

ต้องมี ordered list อยู่ใต้ข้อความ `Top 3 things cats hate:`

```js
assert(/Top 3 things cats hate:/i.test($("ol").prev().text()));
```

ต้องมี unordered list อยู่ใต้ข้อความ `Things cats love:`

```js
assert(/Things cats love:/i.test($("ul").prev().text()));
```

ต้องมี `ul` element เพียงอันเดียวเท่านั้น

```js
assert.equal($("ul").length, 1);
```

ต้องมี `ol` element เพียงอันเดียวเท่านั้น

```js
assert.equal($("ol").length, 1);
```

ต้องมี `li` element สามอันใน `ul` element ของคุณ

```js
assert.equal($("ul li").length, 3);
```

ต้องมี `li` element สามอันใน `ol` element ของคุณ

```js
assert.equal($("ol li").length, 3);
```

`ul` element ต้องมีแท็กปิด

```js
assert(
  code.match(/<\/ul>/g) &&
    code.match(/<\/ul>/g).length === code.match(/<ul>/g).length
);
```

`ol` element ต้องมีแท็กปิด

```js
assert(
  code.match(/<\/ol>/g) &&
    code.match(/<\/ol>/g).length === code.match(/<ol>/g).length
);
```

`li` element ต้องมีแท็กปิด

```js
assert(
  code.match(/<\/li>/g) &&
    code.match(/<li>/g) &&
    code.match(/<\/li>/g).length === code.match(/<li>/g).length
);
```

ใน `li` element ของ unordered list ต้องมีข้อความด้วย

```js
$("ul li").each((i, val) =>
  assert(__helpers.removeWhiteSpace(val.textContent))
);
```

ใน `li` elements ของ ordered list ต้องมีข้อความด้วย

```js
$("ol li").each((i, val) =>
  assert(!!__helpers.removeWhiteSpace(val.textContent))
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
    <li>hate 1</li>
    <li>hate 2</li>
    <li>hate 3</li>
  </ol>
</main>
```
