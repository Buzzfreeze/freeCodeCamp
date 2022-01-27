---
id: bad87fee1348bd9aedf08804
title: Comment out HTML
challengeType: 0
videoUrl: "https://scrimba.com/p/pVMPUv/cGyGbca"
forumTopicId: 16782
dashedName: comment-out-html
---

# --description--

ยังจำได้ใช่ไหมว่าเราใช้ `<!--` และ `-->` เพื่อคอมเม้นต์โค้ด

# --instructions--

ให้ทำการคอมเมนต์ เพื่อให้ไม่แสดง element `h1` และ `p` ในหน้าเว็บ แต่ยังแสดง `h2` อยู่เหมือนเดิม

# --hints--

ต้องคอมเมนต์ `h1` element เพื่อให้ไม่เห็น `h1` บนหน้าเว็บ

```js
assert($("h1").length === 0);
```

ไม่ต้องคอมเมนต์ `h2` element เพื่อที่ `h2` จะได้ถูกแสดงผลในหน้าเว็บไซต์

```js
assert($("h2").length > 0);
```

ต้องคอมเมนต์ `p` element เพื่อให้ไม่เห็น `p` บนหน้าเว็บ

```js
assert($("p").length === 0);
```

คอมเมนต์แต่ละอันของคุณต้องปิดท้ายด้วย `-->`

```js
assert(code.match(/[^fc]-->/g).length > 1);
```

คุณไม่ควรเปลี่ยนลำดับของ `h1` `h2` หรือ `p` ในโค้ดของคุณ

```js
assert(
  code.match(/<([a-z0-9]){1,2}>/g)[0] === "<h1>" &&
    code.match(/<([a-z0-9]){1,2}>/g)[1] === "<h2>" &&
    code.match(/<([a-z0-9]){1,2}>/g)[2] === "<p>"
);
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
<!--<h1>Hello World</h1>-->
<h2>CatPhotoApp</h2>
<!--<p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p> -->
```
