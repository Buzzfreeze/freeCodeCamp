---
id: bad87fee1348bd9aedf08833
title: Fill in the Blank with Placeholder Text
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVMPUv/cgR7Dc7'
forumTopicId: 18178
dashedName: fill-in-the-blank-with-placeholder-text
---

# --description--

นักพัฒนาเว็บไซต์มันจะใช้ <dfn>lorem ipsum text</dfn> เป็น placeholder text
lorem ipsum text เป็นข้อความที่สุ่มมาจาก Cicero of Ancient Rome

Lorem ipsum text ถูกใช้เพื่อเป็น placeholder text โดย typesetter ทำเป็นเหมือนธรรมเนียมที่ทำต่อ ๆ กันมาสำหรับนักพัฒนาเว็บ

อย่างไรก็ดี,ตอนนี้เราก็กำลังทำ CatPhotoApp ฉะนั้นมาใช้ชุดตัวอักษร `kitty ipsum` กันดีกว่า

# --instructions--

จงแทนที่ข้อความใน `p` element ด้วยคำบางคำที่มาจาก kitty ipsum text: `Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.`

# --hints--

`p` element ควรเก็บข้อความช่วงต้นบางส่วนจาก "kitty ipsum" (ดูข้อความนั้นได้ที่ instructions)

```js
assert.isTrue(/Kitty(\s)+ipsum/gi.test($('p').text()));
```

# --seed--

## --seed-contents--

```html
<h1>Hello World</h1>

<h2>CatPhotoApp</h2>

<p>Hello Paragraph</p>
```

# --solutions--

```html
<h1>Hello World</h1>

<h2>CatPhotoApp</h2>

<p>
  Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball
  run catnip eat the grass sniff
</p>
```
