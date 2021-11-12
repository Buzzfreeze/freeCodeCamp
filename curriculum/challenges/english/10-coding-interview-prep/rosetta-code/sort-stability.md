---
id: 5a23c84252665b21eecc8014
title: Sort stability
challengeType: 5
forumTopicId: 302308
dashedName: sort-stability
---

# --description--

เมื่อจัดเรียงrecordsในตารางตามคอลัมน์หรือเขตข้อมูลเฉพาะ [stable sort](https://en.wikipedia.org/wiki/Stable_sort#Stability) จะเก็บลำดับของrecordsที่มีkeyเดียวกันเสมอ

ตัวอย่างเช่น ในตารางประเทศและเมืองนี้ การจัดเรียงแบบคงที่ในคอลัมน์ **second** เมือง จะทำให้เบอร์มิงแฮมสหรัฐอเมริกาอยู่เหนือเบอร์มิงแฮมของสหราชอาณาจักร (แม้ว่าการเรียงลำดับที่ไม่เสถียร *might* ในกรณีนี้ ให้วางเบอร์มิงแฮมสหรัฐเหนือเบอร์มิงแฮมของสหราชอาณาจักร การจัดเรียงroutine อาจจะstable *guarantee*)

<pre>UK  London
US  New York
US  Birmingham
UK  Birmingham
</pre>

ในทำนองเดียวกัน การเรียงลำดับที่เสถียรในคอลัมน์แรกจะสร้าง "UK London" เป็นรายการแรกและ "US Birmingham" เป็นรายการสุดท้าย (เนื่องจากลำดับขององค์ประกอบที่มีคำแรกเหมือนกัน - "UK" หรือ "US" - จะ ให้คงอยู่)

# --instructions--

เขียนฟังก์ชันที่ใช้array 2 มิติเป็นพารามิเตอร์ แต่ละองค์ประกอบมี 2 องค์ประกอบคล้ายกับตัวอย่างข้างต้น ฟังก์ชันควรจัดเรียงarrayตามที่กล่าวไว้ก่อนหน้านี้และส่งคืนarrayที่จัดเรียง

# --hints--

`stableSort` ควรเป็น function.

```js
assert(typeof stableSort == 'function');
```

`stableSort([["UK", "London"], ["US", "New York"], ["US", "Birmingham"], ["UK", "Birmingham"]])` ควร return array.

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

`stableSort([["UK", "London"], ["US", "New York"], ["US", "Birmingham"], ["UK", "Birmingham"]])` ควร return `[["US", "Birmingham"], ["UK", "Birmingham"], ["UK", "London"], ["US", "New York"]]`.

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

`stableSort([[2, 2], [1, 2], [1, 4], [1, 5]])` ควร return `[[2, 2], [1, 2], [1, 4], [1, 5]]`.

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

`stableSort([[11, 55], [12, 45], [11, 45], [32, 45]])` ควร return `[[12, 45], [11, 45], [32, 45], [11, 55]]`.

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

`stableSort([[10, 22], [1, 2], [1, 4], [1, 5], [10, 9]])` ควร return `[[1, 2], [1, 4], [1, 5], [10, 9], [10, 22]]`.

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

`stableSort([[55, 54], [12, 22], [31, 43], [31, 54], [10, 49]])` ควร return `[[12, 22], [31, 43], [10, 49], [55, 54], [31, 54]]`.

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
