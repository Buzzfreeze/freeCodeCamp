---
id: 56533eb9ac21ba0edf2244d1
title: Comparison with the Strict Equality Operator
challengeType: 1
videoUrl: 'https://scrimba.com/c/cy87atr'
forumTopicId: 16790
dashedName: comparison-with-the-strict-equality-operator
---

# --description--

strict equality operator (`===`) จะคล้ายๆ กับ equality operator (`==`) ที่ต่างกันคือเครื่องหมาย `==` จะพยายามเปลี่ยนให้ทั้งข้างซ้ายและข้างขวาของเครื่องหมาย `==` เป็นข้อมูลประเภทเดียวกัน แต่เครื่องหมาย (`===`) จะไม่เปลี่ยนประเภทข้อมูลให้ 

ถ้าค่าที่ถูกนำมาเปรียบเทียบเป็นคนละประเภทกัน จะมองว่าค่านั้นไม่เท่ากันทันที และเครื่องหมาย (`===`) จะคืนค่าออกมาเป็น false


**ตัวอย่าง**

```js
3 ===  3
3 === '3'
```

เงื่อนไขด้านบนนี้จะคืนค่าออกมาเป็น `true` และ `false` ตามลำดับ

ในตัวอย่างที่สอง `3` เป็นข้อมูลประเภท `Number` และ `'3'` เป็นข้อมูลประเภท `String`

# --instructions--

จงใช้เครื่องหมาย (`===`) ในคำสั่ง `if` เพื่อให้ฟังก์ชันคืนค่า string `Equal` เมื่อ `val` มีค่าเท่ากับ `7` เท่านั้น

# --hints--

การเรียกใช้ฟังก์ชัน `testStrict(10)` ต้องคืนค่าออกมาเป็น string `Not Equal`


```js
assert(testStrict(10) === 'Not Equal');
```

การเรียกใช้ฟังก์ชัน `testStrict(7)` ต้องคืนค่าออกมาเป็น string `Equal`

```js
assert(testStrict(7) === 'Equal');
```

การเรียกใช้ฟังก์ชัน `testStrict("7")` ต้องคืนค่าออกมาเป็น string `Not Equal`

```js
assert(testStrict('7') === 'Not Equal');
```

คุณต้องใช้เครื่องหมาย `===` 

```js
assert(code.match(/(val\s*===\s*\d+)|(\d+\s*===\s*val)/g).length > 0);
```

# --seed--

## --seed-contents--

```js
// เตรียมข้อมูล
function testStrict(val) {
  if (val) { // แก้ไขบรรทัดนี้เท่านั้น
    return "Equal";
  }
  return "Not Equal";
}

testStrict(10);
```

# --solutions--

```js
function testStrict(val) {
  if (val === 7) {
    return "Equal";
  }
  return "Not Equal";
}
```
