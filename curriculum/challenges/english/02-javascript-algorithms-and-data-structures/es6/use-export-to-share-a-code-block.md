---
id: 587d7b8c367417b2b2512b56
title: Use export to Share a Code Block
challengeType: 1
forumTopicId: 301219
dashedName: use-export-to-share-a-code-block
---

# --description--

สมมติว่า มีไฟล์ชื่อ `math_functions.js` ที่ประกอบด้วยฟังก์ชันหลายตัวที่คำนวณทางคณิตศาสตร์ ฟังก์ชันหนึ่งเก็บไว้ในตัวแปร `add` ซึ่งรับค่าเป็นตัวเลขสองตัวและคืนค่าเป็นผลบวกของเลขทั้งสอง อย่างไรก็ตาม คุณต้องการใช้ฟังก์ชันนี้ในไฟล์ JavaScript อื่น ดังนั้นการแชร์ให้ไฟล์อื่น คุณต้อง `export` ก่อน

```js
export const add = (x, y) => {
  return x + y;
}
```

โค้ดข้างต้นเป็นวิธีในการส่งออกฟังก์ชันที่ใช้กันทั่วไป แต่คุณสามารถทำสิ่งเดียวกันได้ด้วยโค้ดด้านล่างนี้

```js
const add = (x, y) => {
  return x + y;
}

export { add };
```

เมื่อคุณส่งออก (export) ตัวแปรหรือฟังก์ชัน คุณสามารถนำเข้า (import) ตัวแปร หรือฟังก์ชันนั้นไปใช้ในไฟล์อื่น และใช้งานได้โดยไม่ต้องเขียนโค้ดใหม่ คุณสามารถส่งออกได้ทีละหลายอย่าง โดยการทำซ้ำแบบตัวอย่างแรก สำหรับแต่ละรายการที่คุณต้องการส่งออก หรือโดยการวางทั้งหมดไว้ในคำสั่งการส่งออก ดังตัวอย่างที่สอง ดังนี้:

```js

export { add, subtract };
```

# --instructions--


มีสองฟังก์ชันที่เกี่ยวข้องกับ string ใน editor จง export ทั้งคู่โดยใช้วิธีตามที่คุณต้องการ

# --hints--

คุณควรส่งออก `uppercaseString` อย่างเหมาะสม

```js
assert(
  code.match(
    /(export\s+const\s+uppercaseString|export\s*{\s*(uppercaseString[^}]*|[^,]*,\s*uppercaseString\s*)})/g
  )
);
```

คุณควรส่งออก `lowercaseString` อย่างเหมาะสม

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
