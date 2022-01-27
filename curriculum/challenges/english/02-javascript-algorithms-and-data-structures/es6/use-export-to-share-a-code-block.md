---
id: 587d7b8c367417b2b2512b56
title: Use export to Share a Code Block
challengeType: 1
forumTopicId: 301219
dashedName: use-export-to-share-a-code-block
---

# --description--

สมมติว่าเรามีไฟล์ชื่อ `math_functions.js` ที่มีฟังก์ชันหลายๆ ตัวที่ใช้คำนวนตัวเลข ในไฟล์นั้นจะมีตัวแปรชื่อ `add` ซึ่งเป็นฟังก์ชันที่รับค่าเป็นตัวเลขสองตัว และคืนค่าเป็นผลรวมของตัวเลขนั้น ถ้าคุณต้องการใช้ฟังก์ชันนี้ในไฟล์ JavaScript ไฟล์อื่น คุณต้อง `export` ก่อน

```js
export const add = (x, y) => {
  return x + y;
}
```

โค้ดด้านบนเป็นตัวอย่างของการ `export` ที่ใช้ทั่วๆ ไป  
แต่เราสามารถ `export` แบบอื่นก็ได้ เช่นตามตัวอย่างด้านล่างนี้:

```js
const add = (x, y) => {
  return x + y;
}

export { add };
```

เมื่อเรา export ตัวแปรหรือฟังก์ชัน เราสามารถ import ตัวแปร หรือฟังก์ชันนั้นไปใช้ในไฟล์อื่น และใช้งานได้โดยไม่ต้องเขียนโค้ดใหม่  
เราสามารถ export ข้อมูลครั้งละหลายๆ ตัวได้ โดยจะ export ทีละตัวแบบตัวอย่างแรก หรือรวมกันมา export ทีเดียวแบบตัวอย่างที่สองก็ได้ ตามโค้ดข้างล่างนี้:

```js

export { add, subtract };
```

# --instructions--


ใน editor คุณจะเห็นว่ามีสองฟังก์ชันที่ทำงานกับ string ให้ export ทั้งสองฟังก์ชัน โดยเลือกใช้วิธีที่คุณชอบ

# --hints--

ต้อง export `uppercaseString` ให้ถูกต้อง

```js
assert(
  code.match(
    /(export\s+const\s+uppercaseString|export\s*{\s*(uppercaseString[^}]*|[^,]*,\s*uppercaseString\s*)})/g
  )
);
```

ต้อง export `lowercaseString` ให้ถูกต้อง

```js
assert(
  code.match(
    /(export\s+const\s+lowercaseString|export\s*{\s*(lowercaseString[^}]*|[^,]*,\s*lowercaseString\s*)})/g
  )
);
```

# --seed--

## --seed-contents--

```js
const uppercaseString = (string) => {
  return string.toUpperCase();
}

const lowercaseString = (string) => {
  return string.toLowerCase()
}
```

# --solutions--

```js
export const uppercaseString = (string) => {
  return string.toUpperCase();
}

export const lowercaseString = (string) => {
  return string.toLowerCase()
}
```
