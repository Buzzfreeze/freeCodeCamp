---
id: 5dc17dc8f86c76b9248c6eb5
title: Part 4
challengeType: 0
dashedName: part-4
---

# --description--

การคอมเมนต์จะทำให้คุณสามารถทิ้งข้อความไว้ได้โดยไม่ส่งผลต่อการแสดงผลในbrowser
มันยังทำให้โค้ดของคุณไม่ทำงานได้ด้วย
คอมเมนต์หนึ่งใน HTML จะขึ้นต้นด้วย `<!--` ซึ่งจะสามารถเก็บข้อความจำนวนกี่บบรรทัดก็ได้ แล้วก็จะลงท้ายด้วย `-->`
ตัวอย่างเช่น คอมเมนต์ `<!-- TODO: Remove h1 -->` จะเก็บตัวอักษรที่เขียนว่า `TODO: Remove h1`

จงเพิ่มคอมมเนต์เหนือ `p` element ที่เขียนว่า `TODO: Add link to cat photos`. \\

# --hints--

คอมเมนต์ของคุณควรขึ้นต้นด้วย `<!--`
แล้วตอนนี้คุณก็ขาดแต่ข้อความที่คุณอยากเขียนคอนเมนต์ไว้เท่านั้น

```js
assert(code.match(/<!--/));
```

Your comment should end with `-->`.  You are missing one or more of the characters that define the end of a comment.

```js
assert(code.match(/-->/));
```

Your code should not have extra opening/closing comment characters. You have an extra `<!--` or `-->` displaying in the browser.

```js
const noSpaces = code.replace(/\s/g, '');
assert(noSpaces.match(/<!--/g).length < 2 && noSpaces.match(/-->/g).length < 2);
```

Your comment should contain the text `TODO: Add link to cat photos`.

```js
assert(code.match(/<!--\s*todo:\s+add\s+link\s+to\s+cat\s+photos\s*-->/i));
```

Your comment should be above the `p` element. You have them in the wrong order.

```js
assert(
  code
    .replace(/\s/g, '')
    .match(
      /<!--todo:addlinktocatphotos--><p>clickheretoviewmorecatphotos\.?<\/p>/i
    )
);
```

# --seed--

## --seed-contents--

```html
<html>
  <body>
    <h1>CatPhotoApp</h1>
    <h2>Cat Photos</h2>
--fcc-editable-region--
    <p>Click here to view more cat photos.</p>
--fcc-editable-region--
  </body>
</html>
```

