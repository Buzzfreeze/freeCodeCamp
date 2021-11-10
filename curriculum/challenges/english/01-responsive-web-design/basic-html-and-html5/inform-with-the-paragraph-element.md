---
id: bad87fee1348bd9aedf08801
title: Inform with the Paragraph Element
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVMPUv/ceZ7DtN'
forumTopicId: 18202
dashedName: inform-with-the-paragraph-element
---

# --description--

`p` element นั้นหมายถึง element สำหรับข้อความที่เป็นพารากราฟบนหน้าเว็บไซต์
`p` นั้นย่อมาจากคำว่า "paragraph"

คุณสามารถสร้าง paragraph element ได้ดังนี้:

```html
<p>I'm a p tag!</p>
```

# --instructions--

จงสร้าง `p` element อันหนึ่งต่อจาก `h2` element, และจงกำหนดให้มันมีข้อความที่เขียนว่า `Hello Paragraph`

**Note:** ตามปกติ, HTML tag ทุกอัจเขียนด้วยตัวพิมพ์เล็ก ยกตัวอย่างเช่น `<p></p>` ไม่ใช่ `<P></P>`

# --hints--

โค้ดของคุณควรมี `p` element

```js
assert($('p').length > 0);
```

Your `p` element should have the text `Hello Paragraph`.

```js
assert.isTrue(/hello(\s)+paragraph/gi.test($('p').text()));
```

Your `p` element should have a closing tag.

```js
assert(
  code.match(/<\/p>/g) &&
    code.match(/<\/p>/g).length === code.match(/<p/g).length
);
```

# --seed--

## --seed-contents--

```html
<h1>Hello World</h1>
<h2>CatPhotoApp</h2>
```

# --solutions--

```html
<h1>Hello World</h1>
<h2>CatPhotoApp</h2>
<p>Hello Paragraph</p>
```
