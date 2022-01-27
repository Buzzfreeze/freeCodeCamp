---
id: 56533eb9ac21ba0edf2244d0
title: Comparison with the Equality Operator
challengeType: 1
videoUrl: 'https://scrimba.com/c/cKyVMAL'
forumTopicId: 16784
dashedName: comparison-with-the-equality-operator
---

# --description--

ใน Javascript มี <dfn>comparison operators</dfn> (เครื่องหมายที่ใช้ในการเปรียบเทียบ) หลายตัว operator เหล่านี้จะคืนค่าออกมาเป็น boolean ซึ่งจะมีค่าเป็น `true` หรือ `false`

operator ที่เป็นพื้นฐานที่สุดคือ equality operator `==` ซึ่งจะเปรียบเทียบค่า 2 ค่า และส่งคืนค่า `true` ถ้าค่าทั้งสองเท่ากัน และ `false` ถ้าค่าทั้งสองไม่เท่ากัน อย่าสับสนระหว่าง equality operator (`==`) กับ เครื่องหมายในการกำหนดค่า (`=`)


```js
function equalityTest(myVal) {
  if (myVal == 10) {
     return "Equal";
  }
  return "Not Equal";
}
```

ถ้า `myVal` มีค่าเท่ากับ `10` equality operator จะคืนค่า `true` ออกมา ซึ่งจะทำให้โค้ดในวงเล็บปีกกาทำงาน แล้วฟังก์ชันจะคืนค่า `Equal` ออกมา แต่ถ้า `myVal` มีค่าไม่เท่ากับ `10` equality operator จะคืนค่า `false` ออกมา แล้วก็จะทำให้ฟังก์ชันจะคืนค่า `Not Equal` ออกมาแทน

เพื่อให้ JavaScript สามารถเปรียบเทียบ <dfn>ประเภทข้อมูล</dfn> ที่ต่างกันได้ (เช่น `numbers` และ `strings`) JavaScript จำเป็นต้องแปลงประเภทข้อมูล ซึ่งกระบวนการนี้เรียกว่า Type Coercion ถ้ามีการแปลงประเภทข้อมูลแล้ว JavaScript ก็จะสามารถเปรียบเทียบเงื่อนไขต่างๆ ได้ ให้ลองดูตามตัวอย่างนี้:

```js
1   ==  1
1   ==  2
1   == '1'
"3" ==  3
```

expression เหล่านี้จะได้ผลลัพธ์เป็น `true`, `false`, `true`, และ `true` ตามลำดับ 


# --instructions--

จงเพิ่ม equality operator ให้กับบรรทัดที่กำหนด เพื่อที่ฟังก์ชันจะได้คืนค่าเป็น string `Equal` เมื่อ `val` มีค่าเท่ากับ `12`


# --hints--

การเรียกใช้ฟังก์ชัน `testEqual(10)` ต้องคืนค่าออกมาเป็น string `Not Equal`

```js
assert(testEqual(10) === 'Not Equal');
```

การเรียกใช้ฟังก์ชัน `testEqual(12)` ต้องคืนค่าออกมาเป็น string `Equal`

```js
assert(testEqual(12) === 'Equal');
```

การเรียกใช้ฟังก์ชัน `testEqual("12")` ต้องคืนค่าออกมาเป็น string `Equal`

```js
assert(testEqual('12') === 'Equal');
```

คุณต้องใช้ equality operator (`==`)

```js
assert(code.match(/==/g) && !code.match(/===/g));
```

# --seed--

## --seed-contents--

```js
// เตรียมข้อมูล
function testEqual(val) {
  if (val) { // แก้บรรทัดนี้เท่านั้น
    return "Equal";
  }
  return "Not Equal";
}

testEqual(10);
```

# --solutions--

```js
function testEqual(val) {
  if (val == 12) {
    return "Equal";
  }
  return "Not Equal";
}
```
