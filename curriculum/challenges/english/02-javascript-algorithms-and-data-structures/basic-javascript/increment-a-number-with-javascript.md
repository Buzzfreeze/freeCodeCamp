---
id: 56533eb9ac21ba0edf2244ac
title: Increment a Number with JavaScript
challengeType: 1
videoUrl: 'https://scrimba.com/c/ca8GLT9'
forumTopicId: 18201
dashedName: increment-a-number-with-javascript
---

# --description--

คุณสามารถใช้เครื่องหมาย `++` เพื่อ <dfn>เพิ่มค่า</dfn> หรือทำการบวก 1 ให้กับตัวแปรได้

```js
i++;
```

โค้ดด้านบนนี้ให้ผลลัพธ์เหมือนกับโค้ดด้านล่าง

```js
i = i + 1;
```

**หมายเหตุ:** โค้ดทั้งบรรทัดจะเป็น `i++;` โดยไม่จำเป็นต้องมีเครื่องหมายเท่ากับ

# --instructions--

จงแก้ไขโค้ดโดยนำเครื่องหมาย `++` มาใช้กับตัวแปร `myVar`

# --hints--

ตัวแปร `myVar` ควรมีค่าเท่ากับ `88`

```js
assert(myVar === 88);
```

คุณไม่ควรใช้เครื่องหมายเท่ากับ

```js
assert(
  /var\s*myVar\s*=\s*87;\s*\/*.*\s*([+]{2}\s*myVar|myVar\s*[+]{2});/.test(code)
);
```

คุณควรใช้เครื่องหมาย `++`

```js
assert(/[+]{2}\s*myVar|myVar\s*[+]{2}/.test(code));
```

คุณไม่ควรแก้โค้ดที่อยู่เหนือ comment

```js
assert(/var myVar = 87;/.test(code));
```

# --seed--

## --after-user-code--

```js
(function(z){return 'myVar = ' + z;})(myVar);
```

## --seed-contents--

```js
var myVar = 87;

// แก้ไขโค้ดใต้บรรทัดนี้เท่านั้น
myVar = myVar + 1;
```

# --solutions--

```js
var myVar = 87;
myVar++;
```
