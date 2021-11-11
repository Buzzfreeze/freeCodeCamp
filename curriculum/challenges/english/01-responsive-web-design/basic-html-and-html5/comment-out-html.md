---
id: bad87fee1348bd9aedf08804
title: Comment out HTML
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVMPUv/cGyGbca'
forumTopicId: 16782
dashedName: comment-out-html
---

# --description--

จงจำไว้ว่าเพื่อที่จะเขียนคอมเมนต์ คุณต้องมี `<!--` และปิดท้ายด้วย `-->`

คุณจะต้องปิดท้ายคอมเมนต์ก่อนที่จะเริ่ม `h2` element 

# --instructions--

จงทำให้ `h1` element และ `p` element กลายเป็นแค่คอมเมนต์ แต่ไม่รวม `h2` element

# --hints--

`h1` element ควรกลายเป็นคอมเมนต์เพื่อที่มันจะได้ไม่ถูกแสดงผลในหน้าเว็บไซต์

```js
assert($('h1').length === 0);
```

`h2` element ไม่ควรกลายเป็นคอมเมนต์เพื่อที่มันจะได้ถูกแสดงผลในหน้าเว็บไซต์

```js
assert($('h2').length > 0);
```

`p` ควรกลายเป็นคอมเมนต์เพื่อที่มันจะได้ไม่ถูกแสดงผลในหน้าเว็บไซต์

```js
assert($('p').length === 0);
```

คอมเมนต์แต่ละอันของคุณควรจะปิดท้ายด้วย  `-->`

```js
assert(code.match(/[^fc]-->/g).length > 1);
```

คุณไม่ควรเปลี่ยนลำดับของ `h1` `h2` หรือ `p` ในโค้ดของคุณ

```js
assert(
  code.match(/<([a-z0-9]){1,2}>/g)[0] === '<h1>' &&
    code.match(/<([a-z0-9]){1,2}>/g)[1] === '<h2>' &&
    code.match(/<([a-z0-9]){1,2}>/g)[2] === '<p>'
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
