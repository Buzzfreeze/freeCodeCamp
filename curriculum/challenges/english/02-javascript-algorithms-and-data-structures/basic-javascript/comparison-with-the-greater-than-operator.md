---
id: 56533eb9ac21ba0edf2244d4
title: Comparison with the Greater Than Operator
challengeType: 1
videoUrl: 'https://scrimba.com/c/cp6GbH4'
forumTopicId: 16786
dashedName: comparison-with-the-greater-than-operator
---

# --description--

เครื่องหมายมากกว่า (`>`) เปรียบเทียบค่าของตัวเลขสองตัว หากตัวเลขทางซ้ายมากกว่าตัวเลขทางขวา ระบบจะส่งกลับค่า `true` มิฉะนั้น จะส่งกลับ `false`

ช่นเดียวกับเครื่องหมาย (`==`) เครื่องหมายมากกว่าจะแปลงประเภทของข้อมูล ขณะทำการเปรียบเทียบ


**Examples**

```js
5   >  3
7   > '3'
2   >  3
'1' >  9
```

ผลลัพธ์แต่ละบรรทัดจะเป็น `true`, `true`, `false`, และ `false` ตามลำดับ

# --instructions--

จงเพิ่มเครื่องหมายมากกว่าในบรรทัดที่กำหนดเพื่อให้การคืนค่าดูสมเหตุสมผล

# --hints--

`testGreaterThan(0)` ควรคืนค่า string  `10 or Under`

```js
assert(testGreaterThan(0) === '10 or Under');
```

`testGreaterThan(10)` ควรคืนค่า string `10 or Under`

```js
assert(testGreaterThan(10) === '10 or Under');
```

`testGreaterThan(11)` ควรคืนค่า string  `Over 10`

```js
assert(testGreaterThan(11) === 'Over 10');
```

`testGreaterThan(99)` ควรคืนค่า string  `Over 10`

```js
assert(testGreaterThan(99) === 'Over 10');
```

`testGreaterThan(100)` ควรคืนค่า string  `Over 10`

```js
assert(testGreaterThan(100) === 'Over 10');
```

`testGreaterThan(101)` ควรคืนค่า string  `Over 100`

```js
assert(testGreaterThan(101) === 'Over 100');
```

`testGreaterThan(150)` ควรคืนค่า string `Over 100`

```js
assert(testGreaterThan(150) === 'Over 100');
```

คุณควรใช้ `>` operator อย่างน้อย 2 ครั้ง

```js
assert(code.match(/val\s*>\s*('|")*\d+('|")*/g).length > 1);
```

# --seed--

## --seed-contents--

```js
function testGreaterThan(val) {
  if (val) {  // Change this line
    return "Over 100";
  }

  if (val) {  // Change this line
    return "Over 10";
  }

  return "10 or Under";
}

testGreaterThan(10);
```

# --solutions--

```js
function testGreaterThan(val) {
  if (val > 100) {  // Change this line
    return "Over 100";
  }
  if (val > 10) {  // Change this line
    return "Over 10";
  }
  return "10 or Under";
}
```
