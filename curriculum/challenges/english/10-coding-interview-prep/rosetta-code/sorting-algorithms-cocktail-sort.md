---
id: 5a23c84252665b21eecc8004
title: Sorting algorithms/Cocktail sort
challengeType: 5
forumTopicId: 302312
dashedName: sorting-algorithmscocktail-sort
---

# --description--
Cocktail sort เป็นการพัฒนาต่อจาก [Bubble Sort](<https://rosettacode.org/wiki/Bubble Sort>) ซึ่งในการพั?นานี้จะทำการ "bubble" จากทั้งด้านหน้าและด้านหลังของ array

Pseudocode ของอัลกอริทึมนี้คือ (จาก [wikipedia](<https://en.wikipedia.org/wiki/Cocktail sort>)):

<pre><b>function</b> <i>cocktailSort</i>( A : list of sortable items )
  <b>do</b>
    swapped := false
    <b>for each</b> i <b>in</b> 0 <b>to</b> length( A ) - 2 <b>do</b>
      <b>if</b> A[ i ] > A[ i+1 ] <b>then</b> <i>// test whether the two</i>
                                <i>// elements are in the wrong</i>
                                <i>// order</i>
        swap( A[ i ], A[ i+1 ] ) <i>// let the two elements</i>
                                 <i>// change places</i>
        swapped := true;
    <b>if</b> swapped = false <b>then</b>
      <i>// we can exit the outer loop here if no swaps occurred.</i>
      <b>break do-while loop</b>;
    swapped := false
    <b>for each</b> i <b>in</b> length( A ) - 2 <b>down to</b> 0 <b>do</b>
      <b>if</b> A[ i ] > A[ i+1 ] <b>then</b>
        swap( A[ i ], A[ i+1 ] )
        swapped := true;
  <b>while</b> swapped; <i>// if no elements have been swapped,</i>
                <i>// then the list is sorted</i>
</pre>

# --instructions--

ให้เขียนฟังก์ชันที่ทำการ sort array โดยใช้ cocktail sort

# --hints--

`cocktailSort` ต้องเป็นฟังก์ชัน

```js
assert(typeof cocktailSort == 'function');
```

`cocktailSort([25, 32, 12, 7, 20])` ต้องคืนค่าเป็น array

```js
assert(Array.isArray(cocktailSort([25, 32, 12, 7, 20])));
```

`cocktailSort([25, 32, 12, 7, 20])` ต้องคืนค่าเป็น `[7, 12, 20, 25, 32]`

```js
assert.deepEqual(cocktailSort([25, 32, 12, 7, 20]), [7, 12, 20, 25, 32]);
```

`cocktailSort([38, 45, 35, 8, 13])` ต้องคืนค่าเป็น `[8, 13, 35, 38, 45]`

```js
assert.deepEqual(cocktailSort([38, 45, 35, 8, 13]), [8, 13, 35, 38, 45]);
```

`cocktailSort([43, 36, 20, 34, 24])` ต้องคืนค่าเป็น `[20, 24, 34, 36, 43]`

```js
assert.deepEqual(cocktailSort([43, 36, 20, 34, 24]), [20, 24, 34, 36, 43]);
```

`cocktailSort([12, 33, 26, 18, 1, 16, 38])` ต้องคืนค่าเป็น `[1, 12, 16, 18, 26, 33, 38]`

```js
assert.deepEqual(cocktailSort([12, 33, 26, 18, 1, 16, 38]), [
  1,
  12,
  16,
  18,
  26,
  33,
  38
]);
```

`cocktailSort([3, 39, 48, 16, 1, 4, 29])` ต้องคืนค่าเป็น `[1, 3, 4, 16, 29, 39, 48]`

```js
assert.deepEqual(cocktailSort([3, 39, 48, 16, 1, 4, 29]), [
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
function cocktailSort(arr) {

}
```

# --solutions--

```js
function cocktailSort(arr) {
  let isSorted = true;
  while (isSorted) {
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        isSorted = true;
      }
    }

    if (!isSorted) break;

    isSorted = false;

    for (let j = arr.length - 1; j > 0; j--) {
      if (arr[j - 1] > arr[j]) {
        let temp = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = temp;
        isSorted = true;
      }
    }
  }

  return arr;
}
```
