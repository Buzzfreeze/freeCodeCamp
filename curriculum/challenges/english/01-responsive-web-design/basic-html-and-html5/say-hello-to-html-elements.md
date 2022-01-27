---
id: bd7123c8c441eddfaeb5bdef
title: Say Hello to HTML Elements
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVMPUv/cE8Gpt2'
forumTopicId: 18276
dashedName: say-hello-to-html-elements
---

# --description--

ยินดีต้อนรับเข้าสู่แบบฝึกหัดการเขียนโค้ดของ CareerVio
เราจะพาคุณไปรู้จักกับการสร้างเว็บไซต์ทีละขั้นตอน

เริ่มแรก คุณจะได้สร้างหน้าเว็บไซต์ง่าย ๆ โดยใช้ HTML
คุณสามารถแก้ไขโค้ดของคุณที่ code editor ที่อยู่ในหน้าเว็บนี้ได้เลย

คุณเห็นโค้ดของคุณตรง code editor ที่เขียนว่า `<h1>Hello</h1>` หรือเปล่า? นั่นคือ HTML element อันหนึ่ง

HTML element ส่วนใหญ่จะมีแท็กเปิดและแท็กปิด

แท็กเปิดจะเป็นอย่างนี้:

```html
<h1>
```

ส่วนแท็กปิดจะเป็นอย่างนี้:

```html
</h1>
```

แท็กเปิดและแท็กปิดต่างกันที่เดียวคือตรง / ที่อยู่หลังจาก opening bracket (`<`) ของแท็กปิด

แต่ละแบบฝึกหัดจะมีตัว test ที่คุณสามารถเรียกใช้ได้ตลอด โดยคลิกที่ปุ่ม "Run tests"
เมื่อ test ทุกอันผ่านแล้ว คุณจะเห็นปุ่มส่งโค้ด เมื่อคุณกดส่งโค้ดแล้ว เราจะพาคุณไปที่แบบฝึกหัดถัดไปเลย

# --instructions--

ในแบบฝึกหัดนี้ เราจะให้คุณเปลี่ยนข้อความใน `h1` element เป็น `Hello World`

# --hints--

ใน `h1` element ต้องมีข้อความ `Hello World` อยู่ด้านใน

```js
assert.isTrue(/hello(\s)+world/gi.test($('h1').text()));
```

# --seed--

## --seed-contents--

```html
<h1>Hello</h1>
```

# --solutions--

```html
<h1>Hello World</h1>
```
