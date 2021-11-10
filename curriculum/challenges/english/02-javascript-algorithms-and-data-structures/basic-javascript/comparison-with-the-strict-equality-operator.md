---
id: 56533eb9ac21ba0edf2244d1
title: Comparison with the Strict Equality Operator
challengeType: 1
videoUrl: 'https://scrimba.com/c/cy87atr'
forumTopicId: 16790
dashedName: comparison-with-the-strict-equality-operator
---

# --description--

Strict equality (`===`)  คล้ายคลึงกับ equality operator (`==`) อย่างไรก็ตาม สิ่งที่แตกต่างกันคือ เครื่องหมาย (`==`) พยายามที่จะแปลงค่า ทั้งสองที่เปรียบเทียบกันให้เป็น common type ส่วนเครื่องหมาย (`===`) ไม่ได้ทำเรื่องการเปลี่ยนประเภทของข้อมูลให้ 

ถ้าค่าทั้งสองที่ถูกเปรียบเทียบมีประเภทต่างกัน จะถูกพิจารณาว่าไม่เท่ากัน และ เครื่องหมาย (`===`) จะส่งคืนค่าเป็น false


**Examples**

```js
3 ===  3
3 === '3'
```

เงื่อนไขนี้จะคืนค่า  `true` และ `false` ตามลำดับ

ในตัวอย่างที่สอง `3` เป็นประเภท `Number` และ `'3'` เป็นประเภท `String`

# --instructions--

จงใช้เครื่องหมาย (`===`) ในคำสั่ง `if` เพื่อให้ function คืนค่า string `Equal` เมื่อ `val` เท่ากับ `7` เท่านั้น

# --hints--

`testStrict(10)` ควรคืนค่า string `Not Equal`


```js
assert(testStrict(10) === 'Not Equal');
```

`testStrict(7)` ควรคืนค่า string `Equal`

```js
assert(testStrict(7) === 'Equal');
```

`testStrict("7")` ควรคืนค่า string `Not Equal`

```js
assert(testStrict('7') === 'Not Equal');
```

คุณควรใช้เครื่องหมาย `===` 

```js
assert(code.match(/(val\s*===\s*\d+)|(\d+\s*===\s*val)/g).length > 0);
```

# --seed--

## --seed-contents--

```js
// Setup
function testStrict(val) {
  if (val) { // Change this line
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
