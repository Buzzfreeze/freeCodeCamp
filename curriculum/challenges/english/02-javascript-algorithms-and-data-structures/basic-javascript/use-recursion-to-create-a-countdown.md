---
id: 5cd9a70215d3c4e65518328f
title: Use Recursion to Create a Countdown
challengeType: 1
forumTopicId: 305925
dashedName: use-recursion-to-create-a-countdown
---

# --description--

ใน [ตัวอย่างที่แล้ว](/learn/javascript-algorithms-and-data-structures/basic-javascript/replace-loops-using-recursion)เราได้ลองใช้ recursion แทน `for` loop ไปแล้ว 
คราวนี้ลองมาดูฟังก์ชันที่ซับซ้อนกว่าเดิมกัน โดยฟังก์ชันนี้จะคืนค่าเป็น array ของตัวเลขจำนวนเต็ม ที่ไล่ตั้งแต่เลข `1` ไปจนถึงเลขที่ระบุ

ถ้ายังจำได้ในบทเรียนเรื่อง recursive เราจะต้องมี <dfn>base case</dfn> โดยตัว base case จะเป็นตัวที่บอกให้ฟังก์ชันแบบ recursive ของเรารู้ว่าเมื่อไหร่ที่ควรจะหยุดเรียกใช้ตัวเอง 
โดย base case นี้จะเป็น case ง่ายๆ ที่เรารู้ค่าที่จะได้คืนอยู่แล้ว
แล้วเราก็จะต้องมี <dfn>recursive call</dfn> ซึ่งก็คือการเรียกใช้ตัวเองโดยที่เปลี่ยน argument ที่ส่งเข้าไป ถ้าเราเขียนฟังก์ชันได้ถูก base case จะต้องถูกเรียกขึ้นมาในตอนสุดท้าย

เช่น ถ้าเราจะเขียนฟังก์ชัน recursive ที่คืนค่าออกมาเป็น array ที่มีตัวเลขตั้งแต่ `1` ถึง `n` โดยฟังก์ชันนี้จะรับ argument `n` ซึ่ง `n` จะแทนตัวเลขตัวสุดท้ายใน array แล้วเราต้องให้ฟังก์ชันเรียกตัวเองโดยให้ argument `n` มีค่าน้อยลงเรื่อยๆ จนกว่าจะได้ `n` ที่มีค่าเป็น `1`
เราจะเขียนฟังก์ชันนี้ได้ตามตัวอย่างนี้:

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

หน้า console จะแสดง `[1, 2, 3, 4, 5]`

ในตอนอ่านโค้ดเราอาจจะรู้สึกแปลกๆ เพราะว่าในโค้ดเราจะเห็น `n` *ลดลง* แต่ค่าใน array ที่คืนออกมาจะเห็นตัวเลข *เพิ่มขึ้น* ที่เป็นแบบนี้ก็เพราะเราจะทำการเพิ่มค่าลงใน array หลังจากที่ฟังก์ชันทำการเรียกตัวเองไปจนถึงชั้นในสุดแล้ว เมื่อฟังก์ชันเพิ่มค่า `n` เข้าไปใน array `countup(n - 1)` จะถูกคำนวนและคืนค่า `[1, 2, ..., n - 1]` ออกมา

ลองดูการทำงานทีละขั้นตอนกัน
เมื่อเราเรียกฟังก์ชัน

1. เราเรียกใช้ `countup(5)` ซึ่งจะทำให้เกิดการเรียกใช้ฟังก์ชันชั้นในคือ `countup(n-1)` ซึ่งก็คือ `countup(4)`
2. `countup(4)` ก็จะเรียกฟังก์ชันชั้นในซึ่งก็คือ `countup(3)` ซึ่งก็จะเรียก `countup(2)`, `countup(1)` และ `countup(0)` ตามลำดับ
3. เมื่อฟังก์ชันเรียกใช้ `countup(0)` แล้วฟังก์ชันจะรู้แล้วว่า `countup(0)` จะมีค่าเป็น 1 `countup(0)` ก็จะคืนค่าเป็น `[]` ออกมา
4. เมื่อฟังก์ชัน `countup(1)` ซึ่งทำการเรียกใช้ `countup(0)` รู้แล้วว่า `countup(0)` นั้นมีค่าเป็น `[]` ก็จะทำการเพิ่มค่า `n` เข้าไปใน array ทำให้ในตอนนี้ array มีค่าเป็น `[1]` และคืนค่าใน array ออกไป
5. ต่อไปฟังก์ชัน `countup(2)` ที่ทำการเรียกใช้ `countup(1)` ก็จะรู้แล้วว่า `countup(1)` นั้นคืนค่า `[1]` ออกมา `countup(2)` ก็จะทำการเพิ่ม `n` ของตัวเองเข้าไปใน array ทำให้ ณ ตอนนี้ array จะมีค่าเป็น `[1, 2]`
6. จากนั้น `countup(3)` `countup(4)` และ `countup(5)` ก็จะทำงานแบบเดียวกันจนได้ผลลัพธ์เป็น `[1, 2, 3, 4, 5]` ออกมา

# --instructions--

เราได้ประกาศฟังก์ชันชื่อ `countdown` โดยมี parameter `n` ไว้ให้แล้ว
ให้เขียนฟังก์ชันนี้โดยใช้ recursion เพื่อคืนค่า array ที่มีจำนวนเต็มตั้งแต่ `n` ถึง `1` ถ้าเรียกใช้ฟังก์ชันด้วยตัวเลขที่น้อยกว่า 1 ให้ฟังก์ชันควรคืนค่าเป็น array ว่าง (`[]`) 
ถ้าเรียกใช้ฟังก์ชันนี้ด้วย `n = 5` ควรคืนค่าเป็น array `[5, 4, 3, 2, 1]` 
คุณต้องเขียนฟังก์ชันนี้โดยใช้ recursion และห้ามใช้ loop โดยเด็ดขาด

# --hints--

การเรียกใช้ฟังก์ชัน `countdown(-1)` ต้องคืนค่าออกมาเป็น array ว่าง

```js
assert.isEmpty(countdown(-1));
```

การเรียกใช้ฟังก์ชัน `countdown(10)` ต้องคืนค่าออกมาเป็น `[10, 9, 8, 7, 6, 5, 4, 3, 2, 1]`

```js
assert.deepStrictEqual(countdown(10), [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]);
```

การเรียกใช้ฟังก์ชัน `countdown(5)` ต้องคืนค่าออกมาเป็น `[5, 4, 3, 2, 1]`

```js
assert.deepStrictEqual(countdown(5), [5, 4, 3, 2, 1]);
```

ห้ามใช้ loop ในโค้ด (ไม่ว่าจะเป็น `for`, `while` หรือ higher order functions เช่น  `forEach`, `map`, `filter`, และ `reduce`)

```js
assert(
  !code.match(/for|while|forEach|map|filter|reduce/g)
);
```

ต้องใช้ recursive ในการเขียนฟังก์ชัน

```js
assert(
  countdown.toString().match(/countdown\s*\(.+\)/)
);
```

# --seed--

## --seed-contents--

```js
// แก้ไขโค้ดใต้บรรทัดนี้เท่านั้น
function countdown(n){
  return;
}
// แก้ไขโค้ดเหนือบรรทัดนี้เท่านั้น
```

# --solutions--

```js
function countdown(n){
   return n < 1 ? [] : [n].concat(countdown(n - 1));
}
```
