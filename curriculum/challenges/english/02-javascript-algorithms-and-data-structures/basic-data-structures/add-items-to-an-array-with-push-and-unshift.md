---
id: 587d78b2367417b2b2512b0e
title: Add Items to an Array with push() and unshift()
challengeType: 1
forumTopicId: 301151
dashedName: add-items-to-an-array-with-push-and-unshift
---

# --description--

ความยาวของ array ไม่ใช่ค่าคงที่ โดยความยาวของ array จะขึ้นอยู่กับจำนวน element  และจำนวน element ก็สามารถเปลี่ยนแปลงได้ หรือที่เราเรียกกันว่า array เป็นข้อมูลแบบ <dfn>mutable</dfn> 
ในบทเรียนนี้ เราจะเรียนรู้ method 2 ตัวที่ใช้เปลี่ยน array ได้ คือ `Array.push()` และ `Array.unshift()`

ทั้งสอง method รับพารามิเตอร์เป็น element อย่างน้อย 1 ตัว แล้วแล้วจะเอา element นั้นไปใส่ลงใน array ซึ่ง method `push()` จะนำ element ไปต่อท้าย array และ `unshift()` นำ element ไปแทรกหน้า array 

ลองดูตัวอย่างด้านล่าง:

```js
let twentyThree = 'XXIII';
let romanNumerals = ['XXI', 'XXII'];

romanNumerals.unshift('XIX', 'XX');
```

ตัวแปร `romanNumerals` จะมีค่าเป็น `['XIX', 'XX', 'XXI', 'XXII']`

```js
romanNumerals.push(twentyThree);
```

ตัวแปร `romanNumerals` จะมีค่าเป็น `['XIX', 'XX', 'XXI', 'XXII', 'XXIII']` 

จะเห็นว่า เราใช้ตัวแปรกับ method นี้ได้ ซึ่งจะทำให้เราแก้ไข array ได้อิสระมากขึ้น

# --instructions--

เราได้ประกาศฟังก์ชัน `mixedNumbers` ให้แล้ว ซึ่งฟังก์ชันนี้รับ array ไปเป็น argument 
ให้แก้ไขฟังก์ชันโดยใช้ `push()` และ `unshift()` เพื่อแทรก `'I', 2, 'three'` เข้าไปหน้า array และนำ `7, 'VIII', 9` ไปต่อท้าย array เพื่อให้คืนค่าเป็นออกมาเป็น array ที่ประกอบด้วยคำที่ใช้แทนเลข 1-9 ตามลำดับ

# --hints--

การเรียกใช้ `mixedNumbers(["IV", 5, "six"])` ต้องได้ค่าเป็น `["I", 2, "three", "IV", 5, "six", 7, "VIII", 9]`

```js
assert.deepEqual(mixedNumbers(['IV', 5, 'six']), [
  'I',
  2,
  'three',
  'IV',
  5,
  'six',
  7,
  'VIII',
  9
]);
```

 ต้องใช้ method `push()` ในฟังก์ชัน `mixedNumbers`

```js
assert(mixedNumbers.toString().match(/\.push/));
```

ต้องใช้ method `unshift()` ในฟังก์ชัน `mixedNumbers`

```js
assert(mixedNumbers.toString().match(/\.unshift/));
```

# --seed--

## --seed-contents--

```js
function mixedNumbers(arr) {
  // แก้ไขโค้ดใต้บรรทัดนี้เท่านั้น

  // แก้ไขโค้ดเหนือบรรทัดนี้เท่านั้น
  return arr;
}

console.log(mixedNumbers(['IV', 5, 'six']));
```

# --solutions--

```js
function mixedNumbers(arr) {
  arr.push(7,'VIII',9);
  arr.unshift('I',2,'three');
  return arr;
}
```
