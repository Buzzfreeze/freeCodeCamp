---
id: 56533eb9ac21ba0edf2244d7
title: Comparison with the Less Than Or Equal To Operator
challengeType: 1
videoUrl: 'https://scrimba.com/c/cNVR7Am'
forumTopicId: 16788
dashedName: comparison-with-the-less-than-or-equal-to-operator
---

# --description--

เครื่องหมายน้อยกว่าหรือเท่ากับ (`<=`)เปรียบเทียบค่าของตัวเลขสองตัว หากตัวเลขทางซ้ายน้อยกว่าหรือเท่ากับตัวเลขทางขวา จะแสดงผลเป็น `true` 
ถ้าตัวเลขทางซ้ายมากกว่าตัวเลขทางขวาจะส่งคืนค่า `false` เช่นเดียวกับเครื่องหมาย (`==`) เครื่องหมายน้อยกว่าหรือเท่ากับ (`<=`) จะแปลงประเภทข้อมูลขณะที่ทำการเปรียบเทียบ

**Examples**

```js
4   <= 5
'7' <= 7
5   <= 5
3   <= 2
'8' <= 4
```

ผลลัพธ์แต่ละบรรทัดจะเป็น `true`, `true`, `true`, `false` และ `false` ตามลำดับ

# --instructions--

จงเพิ่มเครื่องหมายน้อยกว่าหรือเท่ากับในบรรทัดที่กำหนดเพื่อให้การคืนค่าดูสมเหตุสมผล

# --hints--

`testLessOrEqual(0)` ควรคืนค่า string `Smaller Than or Equal to 12`

```js
assert(testLessOrEqual(0) === 'Smaller Than or Equal to 12');
```

`testLessOrEqual(11)` ควรคืนค่า string `Smaller Than or Equal to 12`

```js
assert(testLessOrEqual(11) === 'Smaller Than or Equal to 12');
```

`testLessOrEqual(12)` ควรคืนค่า string `Smaller Than or Equal to 12`

```js
assert(testLessOrEqual(12) === 'Smaller Than or Equal to 12');
```

`testLessOrEqual(23)` ควรคืนค่า string `Smaller Than or Equal to 24`

```js
assert(testLessOrEqual(23) === 'Smaller Than or Equal to 24');
```

`testLessOrEqual(24)` ควรคืนค่า string `Smaller Than or Equal to 24`

```js
assert(testLessOrEqual(24) === 'Smaller Than or Equal to 24');
```

`testLessOrEqual(25)` ควรคืนค่า string `More Than 24`

```js
assert(testLessOrEqual(25) === 'More Than 24');
```

`testLessOrEqual(55)` ควรคืนค่า string `More Than 24`

```js
assert(testLessOrEqual(55) === 'More Than 24');
```

คุณควรใช้เครื่องหมาย `<=` อย่างน้อยสองครั้ง


```js
assert(code.match(/val\s*<=\s*('|")*\d+('|")*/g).length > 1);
```

# --seed--

## --seed-contents--

```js
function testLessOrEqual(val) {
  if (val) {  // Change this line
    return "Smaller Than or Equal to 12";
  }

  if (val) {  // Change this line
    return "Smaller Than or Equal to 24";
  }

  return "More Than 24";
}

testLessOrEqual(10);
```

# --solutions--

```js
function testLessOrEqual(val) {
  if (val <= 12) {  // Change this line
    return "Smaller Than or Equal to 12";
  }

  if (val <= 24) {  // Change this line
    return "Smaller Than or Equal to 24";
  }

  return "More Than 24";
}
```
