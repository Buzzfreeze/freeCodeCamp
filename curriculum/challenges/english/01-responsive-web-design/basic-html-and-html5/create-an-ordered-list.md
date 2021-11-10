---
id: bad87fee1348bd9aedf08828
title: Create an Ordered List
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVMPUv/cQ3B8TM'
forumTopicId: 16824
dashedName: create-an-ordered-list
---

# --description--

HTML มี element พิเศษอีกอันหนึ่งที่เอาไว้สร้าง <dfn>ordered lists</dfn>, หรือลิตส์ที่เรียงเป็นลำดับตัวเลข

Ordered list จะเริ่มต้นด้วยแท็กเปิด `<ol>` element ตามด้วย `<li>` element จำนวนกี่อันก็ได้ ก่อนจะปิดท้ายด้วยแท็กปิด `</ol>`

ยกตัวอย่างเช่น:

```html
<ol>
  <li>Garfield</li>
  <li>Sylvester</li>
</ol>
```

จะสร้างลิสต์ที่เรียงเป็นลำดับตัวเลขที่มีสมาชิกในลิสต์เป็น `Garfield` และ `Sylvester`

# --instructions--

จงสร้าง ordered list ที่แสดง top 3 ของสิ่งที่แมวเกลียดที่สุด

# --hints--

คุณควรมี ordered list สำหรับ `Top 3 things cats hate:`

```js
assert(/Top 3 things cats hate:/i.test($('ol').prev().text()));
```

You should have an unordered list for `Things cats love:`

```js
assert(/Things cats love:/i.test($('ul').prev().text()));
```

You should have only one `ul` element.

```js
assert.equal($('ul').length, 1);
```

You should have only one `ol` element.

```js
assert.equal($('ol').length, 1);
```

You should have three `li` elements within your `ul` element.

```js
assert.equal($('ul li').length, 3);
```

You should have three `li` elements within your `ol` element.

```js
assert.equal($('ol li').length, 3);
```

Your `ul` element should have a closing tag.

```js
assert(
  code.match(/<\/ul>/g) &&
    code.match(/<\/ul>/g).length === code.match(/<ul>/g).length
);
```

Your `ol` element should have a closing tag.

```js
assert(
  code.match(/<\/ol>/g) &&
    code.match(/<\/ol>/g).length === code.match(/<ol>/g).length
);
```

Your `li` element should have a closing tag.

```js
assert(
  code.match(/<\/li>/g) &&
    code.match(/<li>/g) &&
    code.match(/<\/li>/g).length === code.match(/<li>/g).length
);
```

The `li` elements in your unordered list should not be empty.

```js
$('ul li').each((i, val) =>
  assert(__helpers.removeWhiteSpace(val.textContent))
);
```

The `li` elements in your ordered list should not be empty.

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
