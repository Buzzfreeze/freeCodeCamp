---
id: 587d7b7b367417b2b2512b13
title: Copy an Array with the Spread Operator
challengeType: 1
forumTopicId: 301157
dashedName: copy-an-array-with-the-spread-operator
---

# --description--

การใช้ `slice()` ทำให้เราเลือกได้ว่าเราจะ element ไหนของ array แต่ตอนนี้ ES6 มี operator ใหม่ คือ <dfn>spread operator</dfn> ที่จะทำให้เราคัดลอก element *ทั้งหมด* ของ array ออกมาได้ง่ายๆ โดย element จะเรียงเหมือนเดิมด้วย 
spread syntax มีหน้าตาแบบนี้: `...`

ในการใช้จริง เราจะใช้ spread operator ในการคัดลอก array ตามตัวอย่างนี้:

```js
let thisArray = [true, true, undefined, false, null];
let thatArray = [...thisArray];
```

`thatArray` จะมีค่าเป็น `[true, true, undefined, false, null]` จะเห็นว่า `thisArray` จะไม่เปลี่ยนไป และ `thatArray` ก็จะมี element เหมือน `thisArray` เลย

# --instructions--

เราได้ประกาศฟังก์ชัน `copyMachine` ให้แล้ว ซึ่งรับ `arr` (array) และ `num` (number) เป็น argument 
ฟังก์ชันนี้ต้องคืนค่าเป็น array ใหม่ที่เกิดจากการคัดลอก `arr` เป็นจำนวน `num` รอบ  เราได้เขียนโค้ดส่วนใหญ่ให้แล้ว แต่โค้ดนี้จะยังทำงานได้ไม่ถูกต้อง ให้แก้ไขฟังก์ชันโดยใช้ spread operator เพื่อให้ทำงานได้ถูกต้อง 
(คำแนะนำ: เอา method อื่นที่เรียนไปแล้วมาใช้ด้วยก็ได้นะ!)

# --hints--

การเรียกใช้ฟังก์ชัน `copyMachine([true, false, true], 2)` ต้องได้ค่าเป็น `[[true, false, true], [true, false, true]]`

```js
assert.deepEqual(copyMachine([true, false, true], 2), [
  [true, false, true],
  [true, false, true]
]);
```

การเรียกใช้ฟังก์ชัน `copyMachine([1, 2, 3], 5)` ต้องได้ค่าเป็น `[[1, 2, 3], [1, 2, 3], [1, 2, 3], [1, 2, 3], [1, 2, 3]]`

```js
assert.deepEqual(copyMachine([1, 2, 3], 5), [
  [1, 2, 3],
  [1, 2, 3],
  [1, 2, 3],
  [1, 2, 3],
  [1, 2, 3]
]);
```

การเรียกใช้ฟังก์ชัน `copyMachine([true, true, null], 1)` ต้องได้ค่าเป็น `[[true, true, null]]`

```js
assert.deepEqual(copyMachine([true, true, null], 1), [[true, true, null]]);
```

การเรียกใช้ฟังก์ชัน `copyMachine(["it works"], 3)` ต้องได้ค่าเป็น `[["it works"], ["it works"], ["it works"]]`

```js
assert.deepEqual(copyMachine(['it works'], 3), [
  ['it works'],
  ['it works'],
  ['it works']
]);
```

ต้องใช้ `spread operator` กับ array `arr` ในฟังก์ชัน `copyMachine` 

```js
assert(code.match(/\.\.\.arr/));
```

# --seed--

## --seed-contents--

```js
function copyMachine(arr, num) {
  let newArr = [];
  while (num >= 1) {
    // แก้ไขโค้ดใต้บรรทัดนี้เท่านั้น

    // แก้ไขโค้ดเหนือบรรทัดนี้เท่านั้น
    num--;
  }
  return newArr;
}

console.log(copyMachine([true, false, true], 2));
```

# --solutions--

```js
function copyMachine(arr,num){
    let newArr=[];
    while(num >=1){
    newArr.push([...arr]);
    num--;
    }
    return newArr;
}
console.log(copyMachine([true, false, true], 2));
```
