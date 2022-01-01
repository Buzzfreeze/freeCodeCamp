---
id: 56533eb9ac21ba0edf2244c3
title: Assignment with a Returned Value
challengeType: 1
videoUrl: 'https://scrimba.com/c/ce2pEtB'
forumTopicId: 16658
dashedName: assignment-with-a-returned-value
---

# --description--

หากคุณจำได้จากบทที่ผ่านมาเกี่ยวกับ 
 [Storing Values ​​with the Assignment Operator](/learn/javascript-algorithms-and-data-structures/basic-javascript/storing-values-with-the-assignment-operator) สิ่งที่อยู่ด้านขวาของเครื่องหมายเท่ากับได้รับการประมวลผลก่อนการนำไปกำหนดค่า ซึ่งหมายความว่าเราสามารส่งคืนค่าของฟังก์ชัน มากำหนดให้กับตัวแปรได้

สมมติว่าเราได้สร้างฟังก์ชัน `sum` ไว้ ซึ่งฟังก์ชันนี้จะทำการบวกตัวเลขสองตัวเข้าด้วยกัน แล้วโค้ดต่อไปนี้:

```js
ourSum = sum(5, 12);
```

จะเรียก function `sum` ซึ่งคืนค่าออกมาเป็น `17` แล้วหลังจากนั้นจะนำค่าที่คืนออกมาไปกำหนดค่าให้กับตัวแปร `ourSum`

# --instructions--

จงเรียกใช้ function `processArg` ด้วย argument `7` และนำค่าที่คืนออกมาไปกำหนดค่าให้กับตัวแปร `processed`

# --hints--

ตัวแปร `processed` ควรมีค่าเป็น `2`

```js
assert(processed === 2);
```

คุณต้องกำหนดค่าตัวแปร `processed` ด้วยค่าที่คืนออกมาของฟังก์ชัน `processArg`

```js
assert(/processed\s*=\s*processArg\(\s*7\s*\)/.test(code));
```

# --seed--

## --after-user-code--

```js
(function(){return "processed = " + processed})();
```

## --seed-contents--

```js
// เตรียมข้อมูล
var processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}

// แก้โค้ดใต้บรรทัดนี้เท่านั้น
```

# --solutions--

```js
var processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}

processed = processArg(7);
```
