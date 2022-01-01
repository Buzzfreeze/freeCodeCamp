---
id: 56533eb9ac21ba0edf2244ad
title: Decrement a Number with JavaScript
challengeType: 1
videoUrl: 'https://scrimba.com/c/cM2KeS2'
forumTopicId: 17558
dashedName: decrement-a-number-with-javascript
---

# --description--

คุณสามารถใช้เครื่องหมาย `--` เพื่อ <dfn>ลดค่า</dfn> หรือทำการลบตัวแปรออก 1 ได้

```js
i--;
```

โค้ดด้านบนนี้ให้ผลลัพธ์เหมือนกับโค้ดด้านล่าง

```js
i = i - 1;
```

**หมายเหตุ:** โค้ดทั้งบรรทัดจะเป็น `i--;` โดยไม่จำเป็นต้องมีเครื่องหมายเท่ากับ

# --instructions--

จงปรับแก้โค้ดโดยนำเครื่องหมาย `--` มาใช้กับตัวแปร `myVar`


# --hints--

ตัวแปร `myVar` ควรมีค่าเท่ากับ `10`

```js
assert(myVar === 10);
```

ควรเปลี่ยน `myVar = myVar - 1;`

```js
assert(
  /var\s*myVar\s*=\s*11;\s*\/*.*\s*([-]{2}\s*myVar|myVar\s*[-]{2});/.test(code)
);
```

คุณควรใช้เครื่องหมาย `--` กับตัวแปร `myVar`

```js
assert(/[-]{2}\s*myVar|myVar\s*[-]{2}/.test(code));
```

คุณไม่ควรแก้โค้ดที่อยู่เหนือ comment

```js
assert(/var myVar = 11;/.test(code));
```

# --seed--

## --after-user-code--

```js
(function(z){return 'myVar = ' + z;})(myVar);
```

## --seed-contents--

```js
var myVar = 11;

// แก้ไขโค้ดที่อยู่ใต้บรรทัดนี้เท่านั้น
myVar = myVar - 1;
```

# --solutions--

```js
var myVar = 11;
myVar--;
```
