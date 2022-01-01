---
id: bad87fee1348bd9aedf08802
title: Uncomment HTML
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVMPUv/cBmG9T7'
forumTopicId: 18329
dashedName: uncomment-html
---

# --description--

การคอมเมนต์เป็นทางหนึ่งที่คุณจะคอมเมนต์ให้กับผู้พัฒนาคนอื่นไว้ภายในโค้ดของคุณ โดยที่จะไม่ส่งผลต่อการแสดงผลบนหน้าจอของผู้ใช้

การคอมเมนต์นั้นเป็นอีกวิธีที่จะปิดการทำงานของโค้ดบางส่วน

การคอมเมนต์ใน HTML จะขึ้นต้นด้วย `<!--` และจบด้วย `-->`

# --instructions--

นำคอมเมนต์ออกจาก `h1`, `h2` และ `p` elements.

# --hints--

เราควรจะเห็น `h1` element ได้ในหน้าเว็บไซต์ถ้า `h1` โดนยกเลิกการคอมเมนต์

```js
assert($('h1').length > 0);
```

เราควรจะเห็น `h2` element ได้ในหน้าเว็บไซต์ถ้า `h2` โดนยกเลิกการคอมเมนต์

```js
assert($('h2').length > 0);
```

เราควรจะเห็น `p` element ได้ในหน้าเว็บไซต์ถ้า `p` โดนยกเลิกการคอมเมนต์

```js
assert($('p').length > 0);
```

เราไม่ควรจะเห็นส่วนที่เป็นแท็กคอมเมนต์ (เช่น `-->`).

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
