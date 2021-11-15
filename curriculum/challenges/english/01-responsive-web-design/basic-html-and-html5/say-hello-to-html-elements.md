---
id: bd7123c8c441eddfaeb5bdef
title: Say Hello to HTML Elements
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVMPUv/cE8Gpt2'
forumTopicId: 18276
dashedName: say-hello-to-html-elements
---

# --description--

ยินดีต้อนรับเข้าสู่ HTML coding challenge ของ freeCodeCamp
เราจะพาคุณไปรู้จักกับการสร้างเว็บไซต์ทีละขั้น ๆ กัน

เริ่มแรก คุณกำลังจะสร้างหน้าเว็บไซต์ง่าย ๆ ด้วย HTML
คุณสามารถแก้ไขโค้ดของคุณที่ code editor ซึ่งได้ถูกฝังไว้ในหน้าเว็บนี้แล้ว

คุณเห็นโค้ดของคุณตรง code editor ที่เขียนว่า `<h1>Hello</h1>` หรือเปล่า? นั่นคือ HTML element อันหนึ่ง

HTML element ส่วนมากจะมีแท็กเปิดและแท็กปิด

แท็กเปิดจะเป็นอย่างนี้:

```html
<h1>
```

แท็กปิดจะเป็นอย่างนี้:

```html
</h1>
```

ความแตกต่างเดียวของแท็กเปิดและแท็กปิดคือ / ที่อยู่หลังจาก opening bracket ของแท็กปิด

แต่ละแบบฝึกหัดจะมีตัว test ที่คุณสามารถรันได้ตลอดเวลาโดยการคลิกที่ปุ่ม "Run tests" 
เมื่อคุณทำ test ทุกอันผ่านแล้ว คุณก็พร้อมที่จะส่ง solution ของคุณและไปที่แบบฝึกหัด coding อันถัดไป

# --instructions--

เพื่อที่จะผ่าน test ในแบบฝึกหัดนี้, จงเปลี่ยนข้อความของ `h1` element ให้เป็น `Hello World`

# --hints--

`h1` element ควรมีข้อความที่เขียนว่า `Hello World`.

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
