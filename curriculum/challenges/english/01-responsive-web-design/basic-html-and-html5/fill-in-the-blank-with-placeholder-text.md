---
id: bad87fee1348bd9aedf08833
title: Fill in the Blank with Placeholder Text
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVMPUv/cgR7Dc7'
forumTopicId: 18178
dashedName: fill-in-the-blank-with-placeholder-text
---

# --description--

ปกติคนที่เขียนเว็บจะใช้ <dfn>lorem ipsum text</dfn> เป็น placeholder (ข้อความตัวอย่าง)
โดย lorem ipsum เป็นข้อความสุ่มๆ ที่พออ่านรวมๆกันแล้วจะไม่มีความหมาย ปกติจะถูกใช้เพื่อเป็นตัวอย่างว่าถ้ามีข้อความจริงๆ หน้าเว็บนั้นจะมีหน้าตาเป็นอย่างไร

lorem ipsum นั้นถูกใช้มานานมาก ตั้งแต่ศตวรรศที่ 16 แล้ว แต่ตอนนี้เรากำลังทำแอปรูปน้องแมวกันอยู่ ฉะนั้นมาใช้ชุดตัวอักษร `kitty ipsum` แทนกันดีกว่า

# --instructions--

ให้เปลี่ยนข้อความใน `p` element เป็นคำจาก kitty ipsum: `Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.`

# --hints--

`p` element ต้องมีข้อความจาก "kitty ipsum" (ข้อความด้านบน)

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
