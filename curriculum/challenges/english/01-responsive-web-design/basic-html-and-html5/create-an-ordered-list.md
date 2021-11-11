---
id: bad87fee1348bd9aedf08828
title: Create an Ordered List
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVMPUv/cQ3B8TM'
forumTopicId: 16824
dashedName: create-an-ordered-list
---

# --description--

HTML มี element พิเศษอีกอันหนึ่งที่เอาไว้สร้าง <dfn>ordered lists</dfn> หรือลิตส์ที่เรียงเป็นลำดับตัวเลข

Ordered list (ลิงต์ที่สนใจลำดับ) จะเริ่มต้นด้วยแท็กเปิด `<ol>` element ตามด้วย `<li>` element จำนวนกี่อันก็ได้ ก่อนจะปิดท้ายด้วยแท็กปิด `</ol>`

ยกตัวอย่างเช่น:

```html
<ol>
  <li>Garfield</li>
  <li>Sylvester</li>
</ol>
```

จะสร้าง ordered list ที่มีสมาชิกในลิสต์เป็น `Garfield` และ `Sylvester`

# --instructions--

จงสร้าง ordered list ที่แสดง top 3 ของสิ่งที่แมวเกลียดที่สุด

# --hints--

คุณควรมี ordered list สำหรับ `Top 3 things cats hate:`

```js
assert(/Top 3 things cats hate:/i.test($('ol').prev().text()));
```

คุณควรมี unordered list สำหรับ `Things cats love:`

```js
assert(/Things cats love:/i.test($('ul').prev().text()));
```

คุณควรมี `ul` element เพียงอันเดียวเท่านั้น

```js
assert.equal($('ul').length, 1);
```

คุณควรมี `ol` element เพียงอันเดียวเท่านั้น

```js
assert.equal($('ol').length, 1);
```

คุณควรมี `li` elements สามอันภายใน `ul` element ของคุณ

```js
assert.equal($('ul li').length, 3);
```

คุณควรมี `li` elements สามอันภายใน `ol` element ของคุณ

```js
assert.equal($('ol li').length, 3);
```

`ul` element ควรมีแท็กปิด

```js
assert(
  code.match(/<\/ul>/g) &&
    code.match(/<\/ul>/g).length === code.match(/<ul>/g).length
);
```

`ol` element ควรมีแท็กปิด

```js
assert(
  code.match(/<\/ol>/g) &&
    code.match(/<\/ol>/g).length === code.match(/<ol>/g).length
);
```

`li` element ควรมีแท็กปิด

```js
assert(
  code.match(/<\/li>/g) &&
    code.match(/<li>/g) &&
    code.match(/<\/li>/g).length === code.match(/<li>/g).length
);
```

`li` elements ใน unordered list ของคุณไม่ควรจะว่าง

```js
$('ul li').each((i, val) =>
  assert(__helpers.removeWhiteSpace(val.textContent))
);
```

`li` elements ใน ordered list ของคุณไม่ควรจะว่าง

```js
$('ol li').each((i, val) =>
  assert(!!__helpers.removeWhiteSpace(val.textContent))
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
    <li>hate 1</li>
    <li>hate 2</li>
    <li>hate 3</li>
  </ol>
</main>
```
