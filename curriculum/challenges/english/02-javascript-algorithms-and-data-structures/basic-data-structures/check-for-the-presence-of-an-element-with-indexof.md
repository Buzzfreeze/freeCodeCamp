---
id: 587d7b7b367417b2b2512b14
title: Check For The Presence of an Element With indexOf()
challengeType: 1
forumTopicId: 301154
dashedName: check-for-the-presence-of-an-element-with-indexof
---

# --description--

เนื่องจาก array สามารถเปลี่ยนแปลงหรือ *mutated* ได้ตลอดเวลา จึงไม่มีอะไรที่รับประกันได้ว่า ข้อมูลหนึ่งๆ จะยังอยู่ใน array หรือไม่ 
แต่เราโชคดีที่ JavaScript มีอีก built-in method คือ `indexOf()` ที่จะช่วยตรวจสอบให้ว่ายังคงมี element นั้นใน array ไหม โดย `indexOf()` จะรับ element เป็นพารามิเตอร์ และ method นี้จะคืนค่าเป็นตำแหน่งหรือ index ของ element นั้น หรือคืนค่าเป็น `-1` ถ้าไม่เจอ element นั้นใน array 

ตัวอย่างเช่น: 

```js
let fruits = ['apples', 'pears', 'oranges', 'peaches', 'pears'];

fruits.indexOf('dates');
fruits.indexOf('oranges');
fruits.indexOf('pears');
```

`indexOf('dates')` คืนค่าเป็น `-1`, `indexOf('oranges')` คืนค่าเป็น `2`, และ `indexOf('pears')` คืนค่าเป็น `1` (index ที่เจอ element ครั้งแรก)

# --instructions--

เราใช้ `indexOf()` เพื่อดูว่าใน array ยังมี element อยู่ไหมได้อย่างรวดเร็ว
เราได้สร้างฟังก์ชัน `quickCheck` ที่รับ array และ element เป็น argument ให้แล้ว
ให้แก้ไขฟังก์ชันโดยใช้ `indexOf()` เพื่อให้คืนค่า `true` ถ้าเจอ element นั้นใน array และ `false` ถ้าไม่เจอ

# --hints--

ฟังก์ชัน `quickCheck` ต้องคืนค่าเป็นข้อมูลประเภท boolean (`true` หรือ `false`)

```js
assert.isBoolean(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));
```

การเรียกใช้ฟังก์ชัน `quickCheck(["squash", "onions", "shallots"], "mushrooms")` ต้องคืนค่าเป็น `false`

```js
assert.strictEqual(
  quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'),
  false
);
```

การเรียกใช้ฟังก์ชัน `quickCheck(["onions", "squash", "shallots"], "onions")` ต้องคืนค่าเป็น `true`

```js
assert.strictEqual(
  quickCheck(['onions', 'squash', 'shallots'], 'onions'),
  true
);
```

การเรียกใช้ฟังก์ชัน `quickCheck([3, 5, 9, 125, 45, 2], 125)` ต้องคืนค่าเป็น `true`

```js
assert.strictEqual(quickCheck([3, 5, 9, 125, 45, 2], 125), true);
```

การเรียกใช้ฟังก์ชัน `quickCheck([true, false, false], undefined)` ต้องคืนค่าเป็น `false`

```js
assert.strictEqual(quickCheck([true, false, false], undefined), false);
```

ต้องใช้ method `indexOf()` ในฟังก์ชัน `quickCheck`

```js
assert.notStrictEqual(quickCheck.toString().search(/\.indexOf\(/), -1);
```

# --seed--

## --seed-contents--

```js
function quickCheck(arr, elem) {
  // แก้ไขโค้ดใต้บรรทัดนี้เท่านั้น

  // แก้ไขโค้ดเหนือบรรทัดนี้เท่านั้น
}

console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));
```

# --solutions--

```js
function quickCheck(arr, elem) {
  return arr.indexOf(elem) >= 0; 
}
```
