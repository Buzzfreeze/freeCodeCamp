---
id: 56533eb9ac21ba0edf2244d0
title: Comparison with the Equality Operator
challengeType: 1
videoUrl: 'https://scrimba.com/c/cKyVMAL'
forumTopicId: 16784
dashedName: comparison-with-the-equality-operator
---

# --description--

ใน Javascript มี <dfn>comparison operators</dfn> (operator ที่ใช้ในการเปรียบเทียบ) มากมาย operator เหล่านี้ส่งคืนค่า boolean `true` หรือ `false`

operator ที่เป็นพื้นฐานที่สุดคือ equality operator `==` ซึ่งจะเปรียบเทียบค่า 2 ค่า และส่งคืนค่า `true` ถ้าค่าทั้งสองเท่ากัน และ `false` ถ้าค่าทั้งสองไม่เท่ากัน โปรดทราบว่า equality operator แตกต่างจากการกำหนดค่า (`=`) ซึ่งเป็นการกำหนดค่าทางด้านขวาไปยังตัวแปรทางด้านซ้าย 


```js
function equalityTest(myVal) {
  if (myVal == 10) {
     return "Equal";
  }
  return "Not Equal";
}
```

หาก `myVal` เท่ากับ `10` equality operator จะคืนค่า `true` ดังนั้นโค้ดในวงเล็บปีกกาจะทำงาน และฟังก์ชันจะคืนค่า `Equal` แต่ในทางกลับกัน หาก หาก `myVal` ไม่เท่ากับ `10` equality operator จะคืนค่า `false` ฟังก์ชันจะคืนค่า `Not Equal` อย่างไรก็ตาม เพื่อให้ JavaScript สามารถเปรียบเทียบ <dfn>ประเภทข้อมูล</dfn> ที่แตกต่างกันสองแบบ (เช่น `numbers` และ `strings`) จะต้องแปลงประเภทหนึ่งเป็นอีกประเภทหนึ่ง ซึ่งเรียกว่า Type Coercion เมื่อเป็นเช่นนั้นแล้ว ก็สามารถเปรียบเทียบเงื่อนไขต่างๆ ได้ดังนี้:

```js
1   ==  1
1   ==  2
1   == '1'
"3" ==  3
```

expression เหล่านี้จะถูกประเมินเป็น `true`, `false`, `true`, และ `true` ตามลำดับ 


# --instructions--

จงเพิ่ม equality operator ให้กับบรรทัดที่กำหนด เพื่อที่ function จะได้คืนค่า string `Equal` เมื่อ `val` มีค่าเท่ากับ `12`


# --hints--

`testEqual(10)` ควรคืนค่า string `Not Equal`

```js
assert(testEqual(10) === 'Not Equal');
```

`testEqual(12)` ควรคืนค่า string `Equal`

```js
assert(testEqual(12) === 'Equal');
```

`testEqual("12")` ควรคืนค่า string `Equal`

```js
assert(testEqual('12') === 'Equal');
```

คุณควรใช้ operator `==` 

```js
assert(code.match(/==/g) && !code.match(/===/g));
```

# --seed--

## --seed-contents--

```js
// Setup
function testEqual(val) {
  if (val) { // Change this line
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
