---
id: 587d7b8c367417b2b2512b58
title: Create an Export Fallback with export default
challengeType: 1
forumTopicId: 301199
dashedName: create-an-export-fallback-with-export-default
---

# --description--

ในบทเรียนเรื่อง `export` ที่ผ่านมา เราได้เรียน syntax ที่เรียกว่า <dfn>named export</dfn> ซึ่งทำให้เราใช้ฟังก์ชันและตัวแปรต่างๆ ในไฟล์อื่นได้

แต่ยังมี `export` syntax อีกแบบที่ควรรู้ ซึ่งเรียกว่า <dfn>export default</dfn>
โดยปกติเราจะใช้ syntax นี้ถ้ามีการ export ค่าแค่ค่าเดียว นอกจากนี้ยังใช้เพื่อเป็น fallback สำหรับไฟล์หรือโมดูล

ตัวอย่างการใช้ `export default`:

```js
export default function add(x, y) {
  return x + y;
}

export default function(x, y) {
  return x + y;
}
```

อันแรกเป็น named function และอันที่สองเป็น anonymous function

เนื่องจาก `export default` ใช้เพื่อเป็น fallback เราจึงมี default export ได้เพียงอันเดียวในแต่ละโมดูลหรือไฟล์ แล้วเราก็ไม่สามารถใช้ `export default` กับ `var`, `let` หรือ `const` ได้

# --instructions--

ฟังก์ชันต่อไปนี้ต้องเป็น fallback ของโมดูล จงเพิ่มโค้ดที่จำเพื่อทำให้ฟังก์ชันนี้เป็น fallback

# --hints--

โค้ดของคุณควรใช้ `export` สำหรับการ fallback

```js
assert(
  code.match(
    /export\s+default\s+function(\s+subtract\s*|\s*)\(\s*x,\s*y\s*\)\s*{/g
  )
);
```

# --seed--

## --seed-contents--

```js
function subtract(x, y) {
  return x - y;
}
```

# --solutions--

```js
export default function subtract(x, y) {
  return x - y;
}
```
