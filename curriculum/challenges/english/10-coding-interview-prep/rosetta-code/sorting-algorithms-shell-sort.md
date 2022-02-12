---
id: 5a23c84252665b21eecc8010
title: Sorting algorithms/Shell sort
challengeType: 5
forumTopicId: 302317
dashedName: sorting-algorithmsshell-sort
---

# --description--

ให้เขียนฟังก์ชันเพื่อจัดเรียงข้อมูลใน array โดยใช้ [Shell sort](<https://en.wikipedia.org/wiki/Shell sort>) 

Shellsort (หรือ Shell method) ได้รับการตั้งชื่อตามนักประดิษฐ์ชื่อ Donald Shell ผู้เผยแพร่อัลกอริทึมนี้ในปี 2502

Shellsort เป็นการใช้ sequence ของ insertion sort โดยที่ขนาดการ insert จะลดลงเรื่อย จนกลายเป็น 1

การที่ insert เป็น 1 จะเป็น insertion sort แบบพื้นฐาน ใน Shellsort นี้ จะเป็น 1 เมื่อรายการเรียงเกือบเสร็จแล้ว ทำให้กลายเป็น best case ของ insertion sort

จากการศึกษา การเพิ่ม seqeuence ทีละ 2.2 จะทำงานได้ดี

# --hints--

`shellSort` ต้องเป็นฟังก์ชัน

```js
assert(typeof shellSort == 'function');
```

`shellSort([25, 32, 12, 7, 20])` ต้องคืนค่าเป็น array

```js
assert(Array.isArray(shellSort([25, 32, 12, 7, 20])));
```

`shellSort([25, 32, 12, 7, 20])` ต้องคืนค่าเป็น `[7, 12, 20, 25, 32]`

```js
assert.deepEqual(shellSort([25, 32, 12, 7, 20]), [7, 12, 20, 25, 32]);
```

`shellSort([38, 45, 35, 8, 13])` ต้องคืนค่าเป็น `[8, 13, 35, 38, 45]`

```js
assert.deepEqual(shellSort([38, 45, 35, 8, 13]), [8, 13, 35, 38, 45]);
```

`shellSort([43, 36, 20, 34, 24])` ต้องคืนค่าเป็น `[20, 24, 34, 36, 43]`

```js
assert.deepEqual(shellSort([43, 36, 20, 34, 24]), [20, 24, 34, 36, 43]);
```

`shellSort([12, 33, 26, 18, 1, 16, 38])` ต้องคืนค่าเป็น `[1, 12, 16, 18, 26, 33, 38]`

```js
assert.deepEqual(shellSort([12, 33, 26, 18, 1, 16, 38]), [
  1,
  12,
  16,
  18,
  26,
  33,
  38
]);
```

`shellSort([3, 39, 48, 16, 1, 4, 29])` ต้องคืนค่าเป็น `[1, 3, 4, 16, 29, 39, 48]`

```js
assert.deepEqual(shellSort([3, 39, 48, 16, 1, 4, 29]), [
  1,
  3,
  4,
  16,
  29,
  39,
  48
]);
```

# --seed--

## --seed-contents--

```js
function shellSort(a) {

}
```

# --solutions--

```js
function shellSort(a) {
  for (var h = a.length; h > 0; h = parseInt(h / 2)) {
    for (var i = h; i < a.length; i++) {
      var k = a[i];
      for (var j = i; j >= h && k < a[j - h]; j -= h) a[j] = a[j - h];
      a[j] = k;
    }
  }
  return a;
}
```
