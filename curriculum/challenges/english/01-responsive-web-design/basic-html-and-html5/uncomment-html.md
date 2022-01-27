---
id: bad87fee1348bd9aedf08802
title: Uncomment HTML
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVMPUv/cBmG9T7'
forumTopicId: 18329
dashedName: uncomment-html
---

# --description--

การคอมเมนต์ (comment) เป็นวิธีที่คุณจะทิ้งข้อความไว้ให้คนอื่นที่เข้ามาอ่านโค้ดของคุณได้ โดยที่ข้อความที่คุณทิ้งไว้นี้จะไม่มีผลกับหน้าเว็บของคุณ

เราสามารถใช้การคอมเมนต์เพื่อปิดไม่ให้โค้ดบางส่วนแสดงผล หรือw,ไม่ให้ทำงานได้อีกด้วย

การคอมเมนต์ใน HTML จะขึ้นต้นด้วย `<!--` และปิดด้วย `-->`

# --instructions--

ใน code editor จะเห็นว่าโค้ดที่คุณเขียนไว้ถูกคอมเมนต์อยู่ ให้นำคอมเมนต์นั้นออก เพื่อให้แสดงผล `h1`, `h2` และ `p` บนหน้าเว็บได้

# --hints--

คุณจะเห็น `h1` element ในหน้าเว็บ ถ้าเอาคอมเมนต์ของ `h1` ออกแล้ว

```js
assert($('h1').length > 0);
```

คุณจะเห็น `h2` element ในหน้าเว็บ ถ้าเอาคอมเมนต์ของ `h2` ออกแล้ว

```js
assert($('h2').length > 0);
```

คุณจะเห็น `p` element ในหน้าเว็บ ถ้าเอาคอมเมนต์ของ `p` ออกแล้ว

```js
assert($('p').length > 0);
```

เราต้องไม่เห็นแท็กคอมเมนต์ (เช่น `-->`) ในหน้าเว็บ

```js
assert(!$('*:contains("-->")')[1]);
```

# --seed--

## --seed-contents--

```html
<!--
<h1>Hello World</h1>

<h2>CatPhotoApp</h2>

<p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
-->
```

# --solutions--

```html
<h1>Hello World</h1>

<h2>CatPhotoApp</h2>

<p>
  Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball
  run catnip eat the grass sniff.
</p>
```
