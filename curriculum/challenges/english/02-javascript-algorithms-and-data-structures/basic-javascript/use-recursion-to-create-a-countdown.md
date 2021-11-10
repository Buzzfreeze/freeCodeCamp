---
id: 5cd9a70215d3c4e65518328f
title: Use Recursion to Create a Countdown
challengeType: 1
forumTopicId: 305925
dashedName: use-recursion-to-create-a-countdown
---

# --description--

ใน [previous challenge](/learn/javascript-algorithms-and-data-structures/basic-javascript/replace-loops-using-recursion)คุณได้เรียนรู้วิธีใช้ recursion เพื่อแทนที่ `for` loop ตอนนี้ ให้ดูที่ฟังก์ชันที่ซับซ้อนมากขึ้นซึ่งคืนค่าเป็น array ของจำนวนเต็มต่อเนื่องที่เริ่มต้นด้วย `1` จนถึงตัวเลขที่ส่งเข้าไปในฟังก์ชัน

ตามที่กล่าวไว้ในบทเรียนที่แล้ว recursive มี <dfn>base case</dfn> โดย base case จะบอก recursive function ว่าเมื่อใดที่ไม่ต้องเรียกตัวเองอีกต่อไป ซึ่ง base case เป็น case ง่ายๆ ที่ทราบค่าที่จะส่งคืนอยู่แล้ว นอกจากนี้ยังมี <dfn>recursive call</dfn> ซึ่งเรียกใช้ฟังก์ชันดั้งเดิมด้วย argument ที่แตกต่างกัน หากฟังก์ชันถูกเขียนอย่างถูกต้อง ท้ายที่สุดแล้ว base case ต้องถูกเรียกขึ้นมา

ตัวอย่างเช่น สมมติว่าคุณต้องการเขียนฟังก์ชัน recursive ที่คืนค่า array ที่มีตัวเลข `1` ถึง `n` ฟังก์ชันนี้จะรับ argument `n` แทนตัวเลขสุดท้าย จากนั้นจะต้องเรียกตัวเองด้วยค่า `n` ที่น้อยลงเรื่อยๆ จนกว่าจะถึง `1` คุณสามารถเขียนฟังก์ชันได้ดังนี้:

```javascript
function countup(n) {
  if (n < 1) {
    return [];
  } else {
    const countArray = countup(n - 1);
    countArray.push(n);
    return countArray;
  }
}
console.log(countup(5));
```

ค่า `[1, 2, 3, 4, 5]` จะถูกแสดงบนหน้า console

ในตอนแรก สิ่งนี้ดูขัดกับความรู้สึก เนื่องจากค่าของ `n` *ลดลง* แต่ค่าใน array สุดท้ายคือ *เพิ่มขึ้น* สิ่งนี้เกิดขึ้นเนื่องจากการใส่ค่าล่าสุด หลังจากเรียก recursive กลับมา ณ จุดที่ `n` ถูก push เข้าไปใน array `countup(n - 1)` ได้รับการคำนวนและคืนค่า `[1, 2, ..., n - 1]`

# --instructions--

# - เราได้ประกาศฟังก์ชันชื่อ `countdown` ด้วยพารามิเตอร์เดียว (`n`) ฟังก์ชันควรใช้ recursion เพื่อคืนค่า array ที่มีจำนวนเต็ม `n` ถึง `1` ตามพารามิเตอร์ `n` หากมีการเรียกใช้ฟังก์ชันด้วยตัวเลขที่น้อยกว่า 1 ฟังก์ชันควรคืนค่า array เปล่า ตัวอย่างเช่น การเรียกใช้ฟังก์ชันนี้ด้วย `n = 5` ควรคืนค่า array `[5, 4, 3, 2, 1]` ฟังก์ชันของคุณต้องใช้ recursion โดยเรียกตัวเองและต้องไม่ใช้ loop ใดๆ

# --hints--

`countdown(-1)` ควรส่งคืนค่า array เปล่า

```js
assert.isEmpty(countdown(-1));
```

`countdown(10)` ควรส่งคืนค่า `[10, 9, 8, 7, 6, 5, 4, 3, 2, 1]`

```js
assert.deepStrictEqual(countdown(10), [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]);
```

`countdown(5)` ควรส่งคืนค่า `[5, 4, 3, 2, 1]`

```js
assert.deepStrictEqual(countdown(5), [5, 4, 3, 2, 1]);
```

โค้ดของคุณไม่ควรใช้ loop ทุกประเภท (`for`, `while` หรือ higher order functions เช่น  `forEach`, `map`, `filter`, และ `reduce`)

```js
assert(
  !code.match(/for|while|forEach|map|filter|reduce/g)
);
```

คุณควรใช้ recursive ในการแก้ปัญหา

```js
assert(
  countdown.toString().match(/countdown\s*\(.+\)/)
);
```

# --seed--

## --seed-contents--

```js
// Only change code below this line
function countdown(n){
  return;
}
// Only change code above this line
```

# --solutions--

```js
function countdown(n){
   return n < 1 ? [] : [n].concat(countdown(n - 1));
}
```
