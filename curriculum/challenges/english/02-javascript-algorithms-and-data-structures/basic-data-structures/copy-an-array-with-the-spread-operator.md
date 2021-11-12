---
id: 587d7b7b367417b2b2512b13
title: Copy an Array with the Spread Operator
challengeType: 1
forumTopicId: 301157
dashedName: copy-an-array-with-the-spread-operator
---

# --description--

แม้ว่า `slice()` ให้เราเลือกได้ว่า ต้องการคัดลอก element ใดของ array อย่างไรก็ตาม ES6 มี operator ใหม่ คือ <dfn>spread operator</dfn> ที่ช่วยให้เราคัดลอก element *ทั้งหมด* ของ array ได้อย่างง่ายดาย ตามลำดับ ด้วยรูปแบบ syntax ที่เรียบง่ายและอ่านง่าย โดย spread syntax จะมีลักษณะดังนี้: `...`

ในทางปฏิบัติ เราสามารถใช้ spread operator ในการ copy array ดังนี้

```js
let thisArray = [true, true, undefined, false, null];
let thatArray = [...thisArray];
```

`thatArray` เท่ากับ `[true, true, undefined, false, null]` จะเห็นว่า `thisArray` ยังคงไม่เปลี่ยน และ `thatArray` ก็มี element เหมือน `thisArray`

# --instructions--

เราได้ประกาศฟังก์ชัน `copyMachine` ซึ่งรับ `arr` (array) และ `num` (number) เป็น argument ฟังก์ชันนี้ควรคืนค่าเป็น array ใหม่ที่ประกอบด้วย `num` ซึ่งเป็นสำเนา (copy) ของ `arr` เราได้เขียนโค้ดส่วนใหญ่ให้คุณแล้ว แต่ยังทำงานได้ไม่ถูกต้องนัก จงแก้ไขฟังก์ชันโดยใช้ spread operation เพื่อให้ทำงานได้อย่างถูกต้อง (คำแนะนำ: method ที่เราได้กล่าวถึงไปแล้วอาจมีประโยชน์ในที่นี้!)

# --hints--

`copyMachine([true, false, true], 2)` ควรคืนค่า `[[true, false, true], [true, false, true]]`

```js
assert.deepEqual(copyMachine([true, false, true], 2), [
  [true, false, true],
  [true, false, true]
]);
```

`copyMachine([1, 2, 3], 5)` ควรคืนค่า `[[1, 2, 3], [1, 2, 3], [1, 2, 3], [1, 2, 3], [1, 2, 3]]`

```js
assert.deepEqual(copyMachine([1, 2, 3], 5), [
  [1, 2, 3],
  [1, 2, 3],
  [1, 2, 3],
  [1, 2, 3],
  [1, 2, 3]
]);
```

`copyMachine([true, true, null], 1)` ควรคืนค่า `[[true, true, null]]`

```js
assert.deepEqual(copyMachine([true, true, null], 1), [[true, true, null]]);
```

`copyMachine(["it works"], 3)` ควรคืนค่า `[["it works"], ["it works"], ["it works"]]`

```js
assert.deepEqual(copyMachine(['it works'], 3), [
  ['it works'],
  ['it works'],
  ['it works']
]);
```

function `copyMachine` ควรใช้ `spread operator` กับ array `arr`

```js
assert(code.match(/\.\.\.arr/));
```

# --seed--

## --seed-contents--

```js
function copyMachine(arr, num) {
  let newArr = [];
  while (num >= 1) {
    // Only change code below this line

    // Only change code above this line
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
