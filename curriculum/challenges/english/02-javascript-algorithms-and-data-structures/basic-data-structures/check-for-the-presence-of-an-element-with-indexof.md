---
id: 587d7b7b367417b2b2512b14
title: Check For The Presence of an Element With indexOf()
challengeType: 1
forumTopicId: 301154
dashedName: check-for-the-presence-of-an-element-with-indexof
---

# --description--

เนื่องจาก array สามารถเปลี่ยนแปลงหรือ *mutated* ได้ตลอดเวลา จึงไม่รับประกันว่า ข้อมูลหนึ่งๆ จะยังอยู่หรือย้ายตำแหน่งใน array หรือไม่ โชคดีที่   JavaScript มีอีก built-in method คือ `indexOf()` ซึ่งช่วยให้เราตรวจสอบการมีอยู่ของ element ใน array ได้อย่างรวดเร็วและง่ายดาย โดย `indexOf()` รับ element เป็นพารามิเตอร์ และเมื่อเรียก method นี้ มันจะคืนค่าตำแหน่งหรือ index ของ element นั้น หรือ `-1` หาก element นั้นไม่มีอยู่ใน array 

ตัวอย่างเช่น: 

```js
let fruits = ['apples', 'pears', 'oranges', 'peaches', 'pears'];

fruits.indexOf('dates');
fruits.indexOf('oranges');
fruits.indexOf('pears');
```

`indexOf('dates')` คืนค่า `-1`, `indexOf('oranges')` คืนค่า `2`, และ `indexOf('pears')` คืนค่า `1` (index แรกที่เจอ element)

# --instructions--

`indexOf()` มีประโยชน์อย่างมาก สำหรับการตรวจสอบการมีอยู่ของ element ใน array ได้อย่างรวดเร็ว เราได้กำหนดฟังก์ชัน `quickCheck` ที่รับ array และ element เป็น argument จงแก้ไขฟังก์ชันโดยใช้ `indexOf()` เพื่อให้คืนค่า `true` หาก element นั้นมีอยู่ใน array  และ `false` หากไม่มีใน array

# --hints--

function `quickCheck` ควรคืนค่า boolean (`true` หรือ `false`)

```js
assert.isBoolean(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));
```

`quickCheck(["squash", "onions", "shallots"], "mushrooms")` ควรคืนค่า `false`

```js
assert.strictEqual(
  quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'),
  false
);
```

`quickCheck(["onions", "squash", "shallots"], "onions")` ควรคืนค่า `true`

```js
assert.strictEqual(
  quickCheck(['onions', 'squash', 'shallots'], 'onions'),
  true
);
```

`quickCheck([3, 5, 9, 125, 45, 2], 125)` ควรคืนค่า `true`

```js
assert.strictEqual(quickCheck([3, 5, 9, 125, 45, 2], 125), true);
```

`quickCheck([true, false, false], undefined)` ควรคืนค่า `false`

```js
assert.strictEqual(quickCheck([true, false, false], undefined), false);
```

function `quickCheck`  ควรใช้ `indexOf()` method

```js
assert.notStrictEqual(quickCheck.toString().search(/\.indexOf\(/), -1);
```

# --seed--

## --seed-contents--

```js
function quickCheck(arr, elem) {
  // Only change code below this line

  // Only change code above this line
}

console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));
```

# --solutions--

```js
function quickCheck(arr, elem) {
  return arr.indexOf(elem) >= 0; 
}
```
