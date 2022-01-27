---
id: bad87fed1348bd9aedf08833
title: Delete HTML Elements
challengeType: 0
videoUrl: "https://scrimba.com/p/pVMPUv/ckK73C9"
forumTopicId: 17559
dashedName: delete-html-elements
---

# --description--

โทรศัพท์ของเรายาวไม่พอที่จะแสดงผลแอปที่เรากำลังจะเขียน

ให้ลบ element ที่ไม่จำเป็นออก เราจะได้เริ่มสร้าง CatPhotoApp ของเราซะที

# --instructions--

ให้ลบ `h1` element ออก เราจะได้มีพื้นที่มากขึ้น

# --hints--

ต้องลบ `h1` element ออก

```js
assert(!code.match(/<h1>/gi) && !code.match(/<\/h1>/gi));
```

ต้องมี `h2` element อยู่ในหน้าเว็บ

```js
assert(code.match(/<h2>[\w\W]*<\/h2>/gi));
```

ต้องมี `p` element อยู่ในหน้าเว็บ

```js
assert(code.match(/<p>[\w\W]*<\/p>/gi));
```

# --seed--

## --seed-contents--

```html
<h1>Hello World</h1>

<h2>CatPhotoApp</h2>

<p>
  Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack
  your ankles chase the red dot, hairball run catnip eat the grass sniff.
</p>
```

# --solutions--

```html
<h2>CatPhotoApp</h2>
<p>
  Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack
  your ankles chase the red dot, hairball run catnip eat the grass sniff.
</p>
```
