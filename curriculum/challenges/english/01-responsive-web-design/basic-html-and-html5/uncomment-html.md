---
id: bad87fee1348bd9aedf08802
title: Uncomment HTML
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVMPUv/cBmG9T7'
forumTopicId: 18329
dashedName: uncomment-html
---

# --description--

การคอมเมนต์เป็นทางหนึ่งที่คุณจะทิ้งคอมเมนต์ให้กับผู้พัฒนาคนอื่นภายในโค้ดของคุณ โดยไม่ส่งผลต่อสิ่งที่จะแสดงผลบนหน้าจอของผู้ใช้

การคอมเมนต์นั้นเป็นอีกวิธีที่จะปิดการทำงานของโค้ดบางส่วน โดยไม่ต้องลบมันทิ้งทั้งหมด

การคอมเมนต์ใน HTML จะขึ้นต้นด้วย `<!--` และจบด้วย `-->`

# --instructions--

จงเลิกคอมเมนต์ `h1`, `h2` และ `p` elements.

# --hints--

`h1` element ควรสามารถมองเห็นได้ในหน้าเว็บไซต์ถ้ามันโดนยกเลิกการคอมเมนต์

```js
assert($('h1').length > 0);
```

Your `h2` element should be visible on the page by uncommenting it.

```js
assert($('h2').length > 0);
```

Your `p` element should be visible on the page by uncommenting it.

```js
assert($('p').length > 0);
```

No trailing comment tags should be visible on the page (i.e. `-->`).

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

<p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
```
