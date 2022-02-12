---
id: 5a23c84252665b21eecc8014
title: Sort stability
challengeType: 5
forumTopicId: 302308
dashedName: sort-stability
---

# --description--

เมื่อจัดเรียง records ในตารางตามคอลัมน์หรือฟิลด์ [stable sort](https://en.wikipedia.org/wiki/Stable_sort#Stability) จะเก็บลำดับของ record ที่มี key เดียวกันเสมอ

เช่น ในตารางชื่อประเทศและชื่อเมือง จะทำการ stable sort ในคอลัมน์ **ที่สอง** (ชื่อเมือง)

การใช้ stable sort จะเป็นการทำให้ชื่อเมือง Birmingham ของ US อยู่เหนือ Birmingham ของ UK เสมอ (ุถ้าใช้ unstable sort จะมีโอกาสทำให้ Birmingham ของ UK ขึ้นมาอยู่เหนือ Birmingham ของ US ได้)

<pre>UK  London
US  New York
US  Birmingham
UK  Birmingham
</pre>

ในทำนองเดียวกัน การ stable sort ในคอลัมน์แรกจะทำให้ "UK London" เป็นรายการแรกและ "US Birmingham" เป็นรายการสุดท้าย (เนื่องจากลำดับขององค์ประกอบที่มีคำแรกเหมือนกัน - "UK" หรือ "US" - จะคงที่)

# --instructions--

ให้เขียนฟังก์ชันรับค่าเป็น array สองมิติ โดยแต่ละ element จะมี element ด้านในเหมือนกับตัวอย่างด้านบน ให้ฟังก์ชันนี้เรียงข้อมูลตามด้านบนและคืนค่าเป็น array ออกมา

# --hints--

`stableSort` ต้องเป็นฟังก์ชัน

```js
assert(typeof stableSort == 'function');
```

`stableSort([["UK", "London"], ["US", "New York"], ["US", "Birmingham"], ["UK", "Birmingham"]])` ต้องคืนค่าเป็น array

```js
assert(
  Array.isArray(
    stableSort([
      ['UK', 'London'],
      ['US', 'New York'],
      ['US', 'Birmingham'],
      ['UK', 'Birmingham']
    ])
  )
);
```

`stableSort([["UK", "London"], ["US", "New York"], ["US", "Birmingham"], ["UK", "Birmingham"]])` ต้องคืนค่าเป็น `[["US", "Birmingham"], ["UK", "Birmingham"], ["UK", "London"], ["US", "New York"]]`

```js
assert.deepEqual(
  stableSort([
    ['UK', 'London'],
    ['US', 'New York'],
    ['US', 'Birmingham'],
    ['UK', 'Birmingham']
  ]),
  [
    ['US', 'Birmingham'],
    ['UK', 'Birmingham'],
    ['UK', 'London'],
    ['US', 'New York']
  ]
);
```

`stableSort([[2, 2], [1, 2], [1, 4], [1, 5]])` ต้องคืนค่าเป็น `[[2, 2], [1, 2], [1, 4], [1, 5]]`

```js
assert.deepEqual(
  stableSort([
    [2, 2],
    [1, 2],
    [1, 4],
    [1, 5]
  ]),
  [
    [2, 2],
    [1, 2],
    [1, 4],
    [1, 5]
  ]
);
```

`stableSort([[11, 55], [12, 45], [11, 45], [32, 45]])` ต้องคืนค่าเป็น `[[12, 45], [11, 45], [32, 45], [11, 55]]`

```js
assert.deepEqual(
  stableSort([
    [11, 55],
    [12, 45],
    [11, 45],
    [32, 45]
  ]),
  [
    [12, 45],
    [11, 45],
    [32, 45],
    [11, 55]
  ]
);
```

`stableSort([[10, 22], [1, 2], [1, 4], [1, 5], [10, 9]])` ต้องคืนค่าเป็น `[[1, 2], [1, 4], [1, 5], [10, 9], [10, 22]]`

```js
assert.deepEqual(
  stableSort([
    [10, 22],
    [1, 2],
    [1, 4],
    [1, 5],
    [10, 9]
  ]),
  [
    [1, 2],
    [1, 4],
    [1, 5],
    [10, 9],
    [10, 22]
  ]
);
```

`stableSort([[55, 54], [12, 22], [31, 43], [31, 54], [10, 49]])` ต้องคืนค่าเป็น `[[12, 22], [31, 43], [10, 49], [55, 54], [31, 54]]`

```js
assert.deepEqual(
  stableSort([
    [55, 54],
    [12, 22],
    [31, 43],
    [31, 54],
    [10, 49]
  ]),
  [
    [12, 22],
    [31, 43],
    [10, 49],
    [55, 54],
    [31, 54]
  ]
);
```

# --seed--

## --seed-contents--

```js
function stableSort(arr) {

}
```

# --solutions--

```js
function stableSort(arr) {
  arr.sort(function(a, b) {
    return a[1] < b[1] ? -1 : a[1] > b[1] ? 1 : 0;
  });
  return arr;
}
```
