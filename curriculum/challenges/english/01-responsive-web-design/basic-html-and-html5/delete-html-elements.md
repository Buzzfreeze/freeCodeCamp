---
id: bad87fed1348bd9aedf08833
title: Delete HTML Elements
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVMPUv/ckK73C9'
forumTopicId: 17559
dashedName: delete-html-elements
---

# --description--

พื้นที่ในแนวตั้งไม่พอจงเอา element ที่ไม่จำเป็นออกไปเพื่อจะได้เริ่มสร้างบทความ CatPhotoApp ของเรา

# --instructions--

จงลบ `h1` element ออกไปเพื่อที่เราจะได้มี view ที่ดูง่ายมากขึ้น

# --hints--

`h1` element ควรถูกลบ

```js
assert(!code.match(/<h1>/gi) && !code.match(/<\/h1>/gi));
```

`h2` element ควรจะอยู่ในหน้านี้

```js
assert(code.match(/<h2>[\w\W]*<\/h2>/gi));
```

`p` element ควรจะอยู่ในหน้านี้

```js
assert(code.match(/<p>[\w\W]*<\/p>/gi));
```

# --seed--

## --seed-contents--

```html
<h1>Hello World</h1>

<h2>CatPhotoApp</h2>

<p>
  Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball
  run catnip eat the grass sniff.
</p>
```

# --solutions--

```html
<h2>CatPhotoApp</h2>
<p>
  Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball
  run catnip eat the grass sniff.
</p>
```
