---
id: 587d78b2367417b2b2512b0e
title: Add Items to an Array with push() and unshift()
challengeType: 1
forumTopicId: 301151
dashedName: add-items-to-an-array-with-push-and-unshift
---

# --description--

ความยาว (length) ของ array เหมือนกับ data type ที่เก็บค่าได้ และไม่ fix ค่า โดย Arrays มีความยาวเท่าไหร่ก็ได้ขึ้นกับจำนวน elements  และเพิ่มหรือลบ element ภายหลังได้ หรือกล่าวอีกนัยหนึ่งว่า Arrays เป็น <dfn>mutable</dfn> ในบทเรียนนี้ เราจะเรียนรู้ 2 methods ที่สามารถปรับเปลี่ยน Arrays นั่นคือ `Array.push()` และ `Array.unshift()`

ทั้งสอง methods รับค่า element 1 ตัวหรือมากกว่า มาเป็น parameter แล้วเพิ่ม elements ให้กับ array ซึ่ง method `push()` เพิ่ม element ที่ส่วนท้ายของ array  และ `unshift()` เพิ่ม element ที่จุดเริ่มต้นของ array ให้พิจารณาโค้ดต่อไปนี้

```js
let twentyThree = 'XXIII';
let romanNumerals = ['XXI', 'XXII'];

romanNumerals.unshift('XIX', 'XX');
```

`romanNumerals` ควรมีค่า `['XIX', 'XX', 'XXI', 'XXII']`

```js
romanNumerals.push(twentyThree);
```

`romanNumerals` ควรมีค่า `['XIX', 'XX', 'XXI', 'XXII', 'XXIII']` 

โปรดสังเกตว่า เรายังสามารถส่งค่าผ่านตัวแปรได้ ซึ่งช่วยให้เรามีความยืดหยุ่นมากขึ้นในการปรับเปลี่ยนข้อมูลของ array แบบไดนามิก

# --instructions--

เราได้ประกาศฟังก์ชัน `mixedNumbers` ซึ่งเราส่ง array เข้าไปเป็น argument จงแก้ไขฟังก์ชันโดยใช้ `push()` และ `unshift()` เพื่อเพิ่ม `'I', 2, 'three'` ที่จุดเริ่มต้นของ array และ `7, 'VIII', 9` ต่อท้าย array เพื่อให้คืนค่าเป็น array ที่ประกอบด้วยคำแทนเลข 1-9 ตามลำดับ

# --hints--

`mixedNumbers(["IV", 5, "six"])` ควรคืนค่า `["I", 2, "three", "IV", 5, "six", 7, "VIII", 9]`

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

 `mixedNumbers` function ควรใช้ `push()` method

```js
assert(mixedNumbers.toString().match(/\.push/));
```

`mixedNumbers` function ควรใช้ `unshift()` method

```js
assert(mixedNumbers.toString().match(/\.unshift/));
```

# --seed--

## --seed-contents--

```js
function mixedNumbers(arr) {
  // Only change code below this line

  // Only change code above this line
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
