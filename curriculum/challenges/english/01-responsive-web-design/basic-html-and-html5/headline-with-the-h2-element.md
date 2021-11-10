---
id: bad87fee1348bd9aedf0887a
title: Headline with the h2 Element
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVMPUv/cE8Gqf3'
forumTopicId: 18196
dashedName: headline-with-the-h2-element
---

# --description--

ผ่านไปหลายบทเรียน เราจะได้สร้าง HTML5 cat photo web app ไปทีละส่วน ๆ

`h2` element ที่คุณจะเพิ่มเข้ามาในขั้นนี้จะเพิ่ม heading ระดับ 2 ให้กับเว็บเพจ 

element จะบอก browser โครงสร้างของเว็บไซต์ของคุณ
`h1` element มักถูกใช้เป็น heading หลัก
`h2` element มันถูกใช้เป็น heading รอง
และมันก็ยังมี `h3`, `h4`, `h5` และ `h6` element ที่จะบ่งบอกถึงระดับของ heading รอบที่แตกต่างกัน

# --instructions--

จงเพิ่มแท็ก`h2` ที่เขียนว่า "CatPhotoApp" เพื่อสร้าง HTML element อันที่สองต่อจาก "Hello World" `h1` element

# --hints--

คุณควรสร้าง `h2` element มาอันหนึ่ง

```js
assert($('h2').length > 0);
```

Your `h2` element should have a closing tag.

```js
assert(
  code.match(/<\/h2>/g) &&
    code.match(/<\/h2>/g).length === code.match(/<h2>/g).length
);
```

Your `h2` element should have the text `CatPhotoApp`.

```js
assert.isTrue(/cat(\s)?photo(\s)?app/gi.test($('h2').text()));
```

Your `h1` element should have the text `Hello World`.

```js
assert.isTrue(/hello(\s)+world/gi.test($('h1').text()));
```

Your `h1` element should be before your `h2` element.

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
