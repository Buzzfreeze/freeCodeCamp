---
id: 5dfa22d1b521be39a3de7be0
title: Part 12
challengeType: 0
dashedName: part-12
---

# --description--

จงเปลี่ยนคำว่า `cat photos` ที่อยู่ใน `p` element ให้เป็นลิงค์โดยกว่าแทนที่คำนั้นด้วย anchor element ที่ทำให้ก่หน้านี้
`p` element ควรจะแสดงข้อความเดียวกันในหน้า browser, แต่คำว่า `cat photos` ควรกลางเป็นลิงค์หนึ่งแล้วตอนนี้
ในตอนนี้ควรมีแค่ลิงค์เดียวในหน้าแอป 

# --hints--

โค้ดของคุณควรมี anchor (`a`) element แค่อันเดียว
จนลบ anchor elements อันอื่น

```js
assert(document.querySelectorAll('a').length === 1);
```

Your anchor (`a`) element should be nested within the `p` element.

```js
assert($('p > a').length);
```

The link's text should be `cat photos`. You have either omitted the text or have a typo.

```js
const nestedAnchor = $('p > a')[0];
assert(
  nestedAnchor.getAttribute('href') === 'https://freecatphotoapp.com' &&
    nestedAnchor.innerText.toLowerCase().replace(/\s+/g, ' ') === 'cat photos'
);
```

After nesting the anchor (`a`) element, the only `p` element content visible in the browser should be `Click here to view more cat photos.` Double check the text, spacing, or punctuation of both the `p` and nested anchor element.

```js
const pText = document
  .querySelector('p')
  .innerText.toLowerCase()
  .replace(/\s+/g, ' ');
assert(pText.match(/click here to view more cat photos\.?$/));
```

# --seed--

## --seed-contents--

```html
<html>
  <body>
    <h1>CatPhotoApp</h1>
    <main>
      <h2>Cat Photos</h2>
      <!-- TODO: Add link to cat photos -->
--fcc-editable-region--
      <p>Click here to view more cat photos.</p>
      <a href="https://freecatphotoapp.com">cat photos</a>
--fcc-editable-region--
      <img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back.">
    </main>
  </body>
</html>
```

