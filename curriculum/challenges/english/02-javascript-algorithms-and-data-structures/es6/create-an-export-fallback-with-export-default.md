---
id: 587d7b8c367417b2b2512b58
title: Create an Export Fallback with export default
challengeType: 1
forumTopicId: 301199
dashedName: create-an-export-fallback-with-export-default
---

# --description--

ในบทเรียน `export` คุณได้เรียนรู้เกี่ยวกับ syntax ที่เรียกว่า <dfn>named export</dfn> ซึ่งทำให้คุณสามารถoeฟังก์ชันและตัวแปรต่างๆ มาใช้กับไฟล์อื่นๆ ได้

ยังมี `export` syntax อีกแบบที่คุณควรทราบ ซึ่งรู้จักกันในชื่อ <dfn>export default</dfn>
โดยปกติ คุณจะใช้ syntax นี้หากมีการส่งออกเพียงค่าเดียวจากไฟล์ นอกจากนี้ยังใช้เพื่อสร้างค่า fallback สำหรับไฟล์หรือโมดูล

ตัวอย่างด้านล่างใช้ `export default`

```js
export default function add(x, y) {
  return x + y;
}

export default function(x, y) {
  return x + y;
}
```

ฟังก์ชันแรกคือ named function และฟังก์ชันที่สองคือ anonymous function

เนื่องจาก `export default` ใช้เพื่อประกาศค่า fallback สำหรับโมดูลหรือไฟล์ คุณจึงมี default export ได้เพียงอันเดียวในแต่ละโมดูลหรือไฟล์ นอกจากนี้ คุณไม่สามารถใช้ `export default` กับ `var`, `let` หรือ `const`

# --instructions--

function ต่อไปนี้ควรมีค่า fallback ในโมดูล จงเพิ่มโค้ดที่จำเป็นต้องใช้

# --hints--

โค้ดของคุณควรใช้ `export` fallback

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
