---
id: bad87fee1348bd9aedf0887a
title: Headline with the h2 Element
challengeType: 0
videoUrl: "https://scrimba.com/p/pVMPUv/cE8Gqf3"
forumTopicId: 18196
dashedName: headline-with-the-h2-element
---

# --description--

ในแบบทดสอบนี้และแบบทดสอบถัดๆไป เราจะมาสร้างแอปรูปน้องแมว โดยใช้ HTML5 ไปด้วยกันทีละส่วน

ตอนนี้ เราจะให้คุณเพิ่ม `h2` element เข้ามาในเว็บของคุณ โดย `h2` จะเป็น heading ระดับ 2

`h1` element มักถูกใช้เป็น heading หลัก

`h2` element มักถูกใช้เป็น heading รอง

และก็ยังมี heading `h3`, `h4`, `h5` และ `h6` อีก
ซึ่งตัวเลขที่ตามหลังตัว h จะเป็นเลขที่จะบ่งบอกถึงระดับของ heading ที่แตกต่างกัน

# --instructions--

ให้เพิ่มแท็ก `h2` โดยมีข้อความข้างในว่า "CatPhotoApp" ซึ่งจะเป็นการสร้าง HTML element อันที่สองต่อจาก `h1` "Hello World"

# --hints--

คุณต้องสร้าง `h2` element มาอันหนึ่ง

```js
assert($("h2").length > 0);
```

`h2` element ต้องมีแท็กปิด

```js
assert(
  code.match(/<\/h2>/g) &&
    code.match(/<\/h2>/g).length === code.match(/<h2>/g).length
);
```

`h2` element ต้องมีข้อความ `CatPhotoApp` อยู่ข้างใน

```js
assert.isTrue(/cat(\s)?photo(\s)?app/gi.test($("h2").text()));
```

`h1` element ต้องมีข้อความ `Hello World` อยู่ข้างใน

```js
assert.isTrue(/hello(\s)+world/gi.test($("h1").text()));
```

`h1` element ต้องอยู่เหนือ `h2` element ของคุณ

```js
assert(code.match(/<h1>\s*?.*?\s*?<\/h1>\s*<h2>\s*?.*?\s*?<\/h2>/gi));
```

# --seed--

## --seed-contents--

```html
<h1>Hello World</h1>
```

# --solutions--

```html
<h1>Hello World</h1>
<h2>CatPhotoApp</h2>
```
