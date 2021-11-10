---
id: 5dfb5ecbeacea3f48c6300b1
title: Part 20
challengeType: 0
dashedName: part-20
---

# --description--

จงใช้  list item (`li`) elements เพื่อสร้างลิสต์ขึ้นมาอันหนึ่ง นี่คือตัวอย่าง list items ที่อยู่ใน unordered list:

```html
<ul>
  <li>milk</li>
  <li>cheese</li>
</ul>
```

จงเก็บ 3 list items ไว้ใน `ul` element เพื่อแสดง 3 สิ่งที่แมวชอบ: `cat nip`, `laser pointers` และ `lasagna`.

# --hints--

คุณควรมี 3 `li` elements. โดยแต่ละ `li` element ควรมีแท็กเปิดและปิดของมันเอง

```js
assert($('li').length === 3 && code.match(/<\/li\>/g).length === 3);
```

You should have three `li` elements with the text `cat nip`, `laser pointers` and `lasagna` in any order. You have either omitted some text or have a typo.

```js
assert.deepStrictEqual(
  [...document.querySelectorAll('li')]
    .map((item) => item.innerText.toLowerCase())
    .sort((a, b) => a.localeCompare(b)),
  ['cat nip', 'lasagna', 'laser pointers']
);
```

The three `li` elements should be located between the `ul` element's opening and closing tags.

```js
assert(
  [...document.querySelectorAll('li')].filter(
    (item) => item.parentNode.nodeName === 'UL'
  ).length === 3
);
```

# --seed--

## --seed-contents--

```html
<html>
  <body>
    <h1>CatPhotoApp</h1>
    <main>
      <section>
        <h2>Cat Photos</h2>
        <!-- TODO: Add link to cat photos -->
        <p>Click here to view more <a target="_blank" href="https://freecatphotoapp.com">cat photos</a>.</p>
        <a href="https://freecatphotoapp.com"><img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back."></a>
      </section>
      <section>
        <h2>Cat Lists</h2>
        <h3>Things cats love:</h3>
--fcc-editable-region--
        <ul>
        </ul>
--fcc-editable-region--
      </section>
    </main>
  </body>
</html>
```

