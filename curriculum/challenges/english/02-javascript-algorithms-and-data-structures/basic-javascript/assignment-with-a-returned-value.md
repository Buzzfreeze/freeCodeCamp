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
 [Storing Values ​​with the Assignment Operator](/learn/javascript-algorithms-and-data-structures/basic-javascript/storing-values-with-the-assignment-operator) สิ่งที่อยู่ด้านขวาของเครื่องหมายเท่ากับได้รับการประมวลผลก่อนการกำหนดค่า ซึ่งหมายความว่าเราสามารส่งคืนค่าของฟังก์ชัน มากำหนดให้กับตัวแปรได้

สมมติว่าเราได้กำหนดฟังก์ชัน `sum` ไว้ล่วงหน้าซึ่งบวกตัวเลขสองตัวเข้าด้วยกันแล้ว:

```js
ourSum = sum(5, 12);
```

จะเรียก function `sum` ซึ่งคืนค่า `17` และกำหนดค่าไปยังตัวแปร `ourSum`

# --instructions--

จงเรียกใช้ function `processArg` ด้วย argument `7` และกำหนดค่าส่งกลับไปยังตัวแปร `processed`

# --hints--

`processed` ควรมีค่า `2`

```js
assert(processed === 2);
```

คุณควรกำหนด `processArg` ไปยัง `processed`

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
// Setup
var processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}

// Only change code below this line
```

# --solutions--

```js
var processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}

processed = processArg(7);
```
