---
id: bad87fee1348bd9aedf08801
title: Inform with the Paragraph Element
challengeType: 0
videoUrl: "https://scrimba.com/p/pVMPUv/ceZ7DtN"
forumTopicId: 18202
dashedName: inform-with-the-paragraph-element
---

# --description--

`p` element เป็น element สำหรับข้อความที่เป็นพารากราฟบนหน้าเว็บ
(`p` ย่อมาจากคำว่า "paragraph")

ลองดูวิธีการใช้ paragraph element ด้านล่าง:

```html
<p>I'm a p tag!</p>
```

# --instructions--

ให้สร้าง `p` element หนึ่งตัว ต่อจาก `h2` โดยมีข้อความข้างในเป็นคำว่า `Hello Paragraph`

**Note:** ปกติแล้วแท็ก HTML ทุกอันจะเขียนด้วยตัวพิมพ์เล็ก เช่น แท็กสำหรับพารากราฟจะเป็น `<p></p>` ไม่ใช่ `<P></P>`

# --hints--

โค้ดของคุณควรมี `p` element

```js
assert($("p").length > 0);
```

`p` element ต้องมีข้อความ `Hello Paragraph` อยู่ข้างใน

```js
assert.isTrue(/hello(\s)+paragraph/gi.test($("p").text()));
```

`p` element ควรมีแท็กปิด

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
