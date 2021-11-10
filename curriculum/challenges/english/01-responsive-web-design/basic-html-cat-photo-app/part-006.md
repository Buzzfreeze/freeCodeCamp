---
id: 5dc23991f86c76b9248c6eb8
title: Part 6
challengeType: 0
dashedName: part-6
---

# --description--

HTML elements มันถูกเก็บไว้ใน  HTML element อันอื่น
ในขั้นตอนที่แล้ว คุรได้เก็บ `h2` element, ตอมเมนต์และ `p` element ไว้ใน `main` element
element ที่อยู่ข้างในจะถูกเรียกว่า child ของ parent element ของมัน

เพื่อทำให้ HTML อ่านง่ายขึ้น จงเพิ่มย่อหน้าให้กับ `h2` element, ตอมเมนต์และ `p` element 2 อันเพื่อแสดงให้เห็นว่าพวกมันเป็น children ของ `main` element

# --hints--

คุณควรมี `h2` element ที่เก็บข้อความว่า `Cat Photos`
คุณอาจจะเผลอลบมันไปโดยไม่ได้ตั้งใจ ลืมใส่แท็กเปิดหรือปิด หรือข้อความที่เขียนไม่เหมือนเดิมก็ได้

```js
assert(
  document.querySelector('h2') &&
    code.match(/<\/h2\>/) &&
    document.querySelector('h2').innerText.toLowerCase() === 'cat photos'
);
```

Your `h2` element should below the `main` element's opening tag and its opening tag should start 6 spaces over from the start of the line.

```js
assert(code.toLowerCase().match(/<main\>\n\s{6}<h2>/));
```

Your code should have a comment. You removed the comment from an earlier step.

```js
assert(code.match(/<!--.*-->/));
```

The comment's text should be `TODO: Add link to cat photos`. Do not change the text or spacing of the comment.

```js
assert(code.match(/<!--\s*todo:\s+add\s+link\s+to\s+cat\s+photos\.?\s*-->/i));
```

Your comment should be below the `h2` element and start 6 spaces over from the start of the line.

```js
assert(
  code
    .toLowerCase()
    .match(/<\/h2>\n\s{6}<!--\s*todo:\s+add\s+link\s+to\s+cat\s+photos\s*-->/)
);
```

Your code should have a `p` element. You have removed the `p` element from an earlier step.

```js
assert(document.querySelector('p'));
```

The text of the `p` element should be `Click here to view more cat photos.` Do not change the text, spacing, or punctuation of the `p` element.

```js
assert(
  document
    .querySelector('p')
    .innerText.toLowerCase()
    .match(/click\s+here\s+to\s+view\s+more\s+cat\s+photos\.?$/)
);
```

Your `p` element should be below the comment and its opening tag should start 6 spaces over from the start of the line.

```js
assert(code.toLowerCase().match(/-->\n\s{6}<p>/));
```

# --seed--

## --seed-contents--

```html
<html>
  <body>
    <h1>CatPhotoApp</h1>
    <main>
--fcc-editable-region--
    <h2>Cat Photos</h2>
    <!-- TODO: Add link to cat photos -->
    <p>Click here to view more cat photos.</p>
--fcc-editable-region--
    </main>
  </body>
</html>
```

