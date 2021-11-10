---
id: 56533eb9ac21ba0edf2244d5
title: Comparison with the Greater Than Or Equal To Operator
challengeType: 1
videoUrl: 'https://scrimba.com/c/c6KBqtV'
forumTopicId: 16785
dashedName: comparison-with-the-greater-than-or-equal-to-operator
---

# --description--

เครื่องหมายมากกว่าหรือเท่ากับ (`>=`) เปรียบเทียบค่าของตัวเลขสองตัว หากตัวเลขทางซ้ายมากกว่าหรือเท่ากับตัวเลขทางขวา จะแสดงผลเป็น `true` มิฉะนั้น จะส่งกลับ `false`

คล้ายกับเครื่องหมาย (`==`) เครื่องหมายมากกว่าหรือเท่ากับ (`>=`) จะแปลงประเภทข้อมูลขณะที่ทำการเปรียบเทียบ 

**Examples**

```js
6   >=  6
7   >= '3'
2   >=  3
'7' >=  9
```

ผลลัพธ์แต่ละบรรทัดจะเป็น `true`, `true`, `false`, และ `false` ตามลำดับ

# --instructions--

จงเพิ่มเครื่องหมายมากกว่าหรือเท่ากับในบรรทัดที่กำหนดเพื่อให้การคืนค่าดูสมเหตุสมผล

# --hints--

`testGreaterOrEqual(0)` ควรคืนค่า string `Less than 10`

```js
assert(testGreaterOrEqual(0) === 'Less than 10');
```

`testGreaterOrEqual(9)` ควรคืนค่า string `Less than 10`

```js
assert(testGreaterOrEqual(9) === 'Less than 10');
```

`testGreaterOrEqual(10)` ควรคืนค่า string `10 or Over`

```js
assert(testGreaterOrEqual(10) === '10 or Over');
```

`testGreaterOrEqual(11)` ควรคืนค่า string `10 or Over`

```js
assert(testGreaterOrEqual(11) === '10 or Over');
```

`testGreaterOrEqual(19)` ควรคืนค่า string `10 or Over`

```js
assert(testGreaterOrEqual(19) === '10 or Over');
```

`testGreaterOrEqual(100)` ควรคืนค่า string `20 or Over`

```js
assert(testGreaterOrEqual(100) === '20 or Over');
```

`testGreaterOrEqual(21)` ควรคืนค่า string `20 or Over`

```js
assert(testGreaterOrEqual(21) === '20 or Over');
```

คุณควรใช้เครื่องหมาย `>=` อย่างน้อยสองครั้ง

```js
assert(code.match(/val\s*>=\s*('|")*\d+('|")*/g).length > 1);
```

# --seed--

## --seed-contents--

```js
function testGreaterOrEqual(val) {
  if (val) {  // Change this line
    return "20 or Over";
  }

  if (val) {  // Change this line
    return "10 or Over";
  }

  return "Less than 10";
}

testGreaterOrEqual(10);
```

# --solutions--

```js
function testGreaterOrEqual(val) {
  if (val >= 20) {  // Change this line
    return "20 or Over";
  }

  if (val >= 10) {  // Change this line
    return "10 or Over";
  }

  return "Less than 10";
}
```
