---
id: bad87fee1348bd9aedf0887a
title: Headline with the h2 Element
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVMPUv/cE8Gqf3'
forumTopicId: 18196
dashedName: headline-with-the-h2-element
---

# --description--

หลังจากที่เราได้เรียนรู้เกี่ยวกับ HTML ไประดับหนึ่งแล้ว
ตอนนี้เราจะมาสร้าง HTML5 cat photo web app ด้วยกันไปทีละส่วน ๆ

`h2` เป็น element ที่คุณจะเพิ่มเข้ามาในขั้นนี้จะเพิ่ม heading ระดับ h2 ให้กับเว็บเพจ

`h1` element มักถูกใช้เป็น heading หลัก
`h2` element มันถูกใช้เป็น heading รอง
และมันก็ยังมี heading `h3`, `h4`, `h5` และ `h6` element ที่จะบ่งบอกถึงระดับของ heading ที่แตกต่างกันตามต้องการ

# --instructions--

จงเพิ่มแท็ก `h2` ที่เขียนว่า "CatPhotoApp" เพื่อสร้าง HTML element อันที่สองต่อจาก "Hello World" `h1` element

# --hints--

คุณควรสร้าง `h2` element มาอันหนึ่ง

```js
assert($('h2').length > 0);
```

`h2` element ควรมีแท็กปิด

```js
assert(code.match(/<\/h2>/g) && code.match(/<\/h2>/g).length === code.match(/<h2>/g).length);
```

`h2` element ควรมีข้อความที่เขียนว่า `CatPhotoApp`.

```js
assert.isTrue(/cat(\s)?photo(\s)?app/gi.test($('h2').text()));
```

`h1` element ควรมีข้อความที่เขียนว่า `Hello World`.

```js
assert.isTrue(/hello(\s)+world/gi.test($('h1').text()));
```

`h1` element ควรอยู่หน้า `h2` element ของคุณ

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
