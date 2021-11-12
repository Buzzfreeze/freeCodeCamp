---
id: 5a23c84252665b21eecc800b
title: Sorting algorithms/Pancake sort
challengeType: 5
forumTopicId: 302315
dashedName: sorting-algorithmspancake-sort
---

# --description--

เขียนฟังก์ชันเพื่อจัดเรียงarrayของจำนวนเต็ม (ขนาดใดก็ได้ตามสะดวก) ให้เรียงลำดับจากน้อยไปมากโดยใช้ [Pancake sorting](<https://en.wikipedia.org/wiki/Pancake sorting>) ฟังก์ชันควรส่งคืนarrayที่เรียงลำดับ

กล่าวโดยย่อ แทนที่จะจัดเรียงองค์ประกอบแต่ละรายการ การดำเนินการเดียวที่อนุญาตคือ "พลิก" ปลายด้านหนึ่งของรายการ เช่น:

<pre>Before:
<b>6 7 8 9</b> 2 5 3 4 1<br>
After:
<b>9 8 7 6</b> 2 5 3 4 1
</pre>

สามารถพลิกปลายรายการได้เพียงด้านเดียวเท่านั้น นี่ควรเป็นค่าต่ำสุด แต่ระดับhi-endก็ใช้ได้ ถ้าเขียนcodeได้ง่ายกว่าหรือทำงานได้ดีกว่า แต่ **ต้อง** เป็นจุดสิ้นสุดเดียวกันสำหรับsolutionทั้งหมด (ปลายพลิกไม่สามารถเปลี่ยนแปลงได้ตามอำเภอใจ)

# --hints--

`pancakeSort` ควรเป็น function.

```js
assert(typeof pancakeSort == 'function');
```

`pancakeSort([25, 32, 12, 7, 20])` ควร return array.

```js
assert(Array.isArray(pancakeSort([25, 32, 12, 7, 20])));
```

`pancakeSort([25, 32, 12, 7, 20])` ควร return `[7, 12, 20, 25, 32]`.

```js
assert.deepEqual(pancakeSort([25, 32, 12, 7, 20]), [7, 12, 20, 25, 32]);
```

`pancakeSort([38, 45, 35, 8, 13])` ควร return `[8, 13, 35, 38, 45]`.

```js
assert.deepEqual(pancakeSort([38, 45, 35, 8, 13]), [8, 13, 35, 38, 45]);
```

`pancakeSort([43, 36, 20, 34, 24])` ควร return `[20, 24, 34, 36, 43]`.

```js
assert.deepEqual(pancakeSort([43, 36, 20, 34, 24]), [20, 24, 34, 36, 43]);
```

`pancakeSort([12, 33, 26, 18, 1, 16, 38])` ควร return `[1, 12, 16, 18, 26, 33, 38]`.

```js
assert.deepEqual(pancakeSort([12, 33, 26, 18, 1, 16, 38]), [
  1,
  12,
  16,
  18,
  26,
  33,
  38
]);
```

`pancakeSort([3, 39, 48, 16, 1, 4, 29])` ควร return `[1, 3, 4, 16, 29, 39, 48]`.

```js
assert.deepEqual(pancakeSort([3, 39, 48, 16, 1, 4, 29]), [
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
function pancakeSort(arr) {

}
```

# --solutions--

```js
function pancakeSort(arr) {
  for (var i = arr.length - 1; i >= 1; i--) {
    // find the index of the largest element not yet sorted
    var max_idx = 0;
    var max = arr[0];
    for (var j = 1; j <= i; j++) {
      if (arr[j] > max) {
        max = arr[j];
        max_idx = j;
      }
    }

    if (max_idx == i) continue; // element already in place

    var new_slice;

    // flip arr max element to index 0
    if (max_idx > 0) {
      new_slice = arr.slice(0, max_idx + 1).reverse();
      for (var j = 0; j <= max_idx; j++) arr[j] = new_slice[j];
    }

    // then flip the max element to its place
    new_slice = arr.slice(0, i + 1).reverse();
    for (var j = 0; j <= i; j++) arr[j] = new_slice[j];
  }
  return arr;
}
```
