---
id: 56533eb9ac21ba0edf2244d6
title: Comparison with the Less Than Operator
challengeType: 1
videoUrl: 'https://scrimba.com/c/cNVRWtB'
forumTopicId: 16789
dashedName: comparison-with-the-less-than-operator
---

# --description--

เครื่องหมายน้อยกว่า (`<`) เปรียบเทียบค่าของตัวเลขสองตัว หากตัวเลขทางซ้ายน้อยกว่าตัวเลขทางขวา จะแสดงผลเป็น `true` มิฉะนั้น จะส่งกลับ `false` เช่นเดียวกับเครื่องหมาย (`==`) เครื่องหมายน้อยกว่า (`<`) จะแปลงประเภทข้อมูลขณะที่ทำการเปรียบเทียบ

**Examples**

```js
2   < 5
'3' < 7
5   < 5
3   < 2
'8' < 4
```

ผลลัพธ์แต่ละบรรทัดจะเป็น `true`, `true`, `false`, `false` และ `false` ตามลำดับ

# --instructions--

จงเพิ่มเครื่องหมายน้อยกว่าในบรรทัดที่กำหนดเพื่อให้การคืนค่าดูสมเหตุสมผล


# --hints--

`testLessThan(0)` ควรคืนค่า string `Under 25`

```js
assert(testLessThan(0) === 'Under 25');
```

`testLessThan(24)` ควรคืนค่า string `Under 25`

```js
assert(testLessThan(24) === 'Under 25');
```

`testLessThan(25)` ควรคืนค่า string `Under 55`

```js
assert(testLessThan(25) === 'Under 55');
```

`testLessThan(54)` ควรคืนค่า string `Under 55`

```js
assert(testLessThan(54) === 'Under 55');
```

`testLessThan(55)` ควรคืนค่า string `55 or Over`

```js
assert(testLessThan(55) === '55 or Over');
```

`testLessThan(99)` ควรคืนค่า string `55 or Over`

```js
assert(testLessThan(99) === '55 or Over');
```

คุณควรใช้เครื่องหมาย `<` อย่างน้อยสองครั้ง

```js
assert(code.match(/val\s*<\s*('|")*\d+('|")*/g).length > 1);
```

# --seed--

## --seed-contents--

```js
function testLessThan(val) {
  if (val) {  // Change this line
    return "Under 25";
  }

  if (val) {  // Change this line
    return "Under 55";
  }

  return "55 or Over";
}

testLessThan(10);
```

# --solutions--

```js
function testLessThan(val) {
  if (val < 25) {  // Change this line
    return "Under 25";
  }

  if (val < 55) {  // Change this line
    return "Under 55";
  }

  return "55 or Over";
}
```
