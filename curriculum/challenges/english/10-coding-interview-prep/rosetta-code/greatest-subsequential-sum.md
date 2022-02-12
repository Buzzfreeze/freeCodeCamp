---
id: 5a23c84252665b21eecc7e84
title: Greatest subsequential sum
challengeType: 5
forumTopicId: 302278
dashedName: greatest-subsequential-sum
---

# --description--

ถ้ามีลำดับของจำนวนเต็มลำดับหนึ่ง ให้ค้นหาลำดับต่อเนื่องที่มีผลรวมขององค์ประกอบมากที่สุด แปลว่า ต้องไม่มีองค์ประกอบของลำดับย่อย (subsequence) ที่รวมกันแล้วมีค่ามากกว่าค่านี้

ลำดับย่อยที่ว่างเปล่าจะถือว่ามีผลรวมเป็น \\( 0 \\); ดังนั้นหากองค์ประกอบทั้งหมดเป็นค่าลบ ผลลัพธ์จะต้องเป็นลำดับที่ว่างเปล่า

ถ้ายังไม่เข้าใจลองดูตัวอย่างใน test ว่าผลลัพธ์ต้องเป็นอย่างไร

# --hints--

`maximumSubsequence` ต้องเป็นฟังก์ชัน

```js
assert(typeof maximumSubsequence == 'function');
```

`maximumSubsequence([ 1, 2, -1, 3, 10, -10 ])` ต้องคืนค่าเป็น array

```js
assert(Array.isArray(maximumSubsequence([1, 2, -1, 3, 10, -10])));
```

`maximumSubsequence([ 1, 2, -1, 3, 10, -10 ])` ต้องคืนค่าเป็น `[ 1, 2, -1, 3, 10 ]`

```js
assert.deepEqual(maximumSubsequence([1, 2, -1, 3, 10, -10]), [1, 2, -1, 3, 10]);
```

`maximumSubsequence([ 0, 8, 10, -2, -4, -1, -5, -3 ])` ต้องคืนค่าเป็น `[ 0, 8, 10 ]`

```js
assert.deepEqual(maximumSubsequence([0, 8, 10, -2, -4, -1, -5, -3]), [
  0,
  8,
  10
]);
```

`maximumSubsequence([ 9, 9, -10, 1 ])` ต้องคืนค่าเป็น `[ 9, 9 ]`

```js
assert.deepEqual(maximumSubsequence([9, 9, -10, 1]), [9, 9]);
```

`maximumSubsequence([ 7, 1, -5, -3, -8, 1 ])` ต้องคืนค่าเป็น `[ 7, 1 ]`

```js
assert.deepEqual(maximumSubsequence([7, 1, -5, -3, -8, 1]), [7, 1]);
```

`maximumSubsequence([ -3, 6, -1, 4, -4, -6 ])` ต้องคืนค่าเป็น `[ 6, -1, 4 ]`

```js
assert.deepEqual(maximumSubsequence([-3, 6, -1, 4, -4, -6]), [6, -1, 4]);
```

`maximumSubsequence([ -1, -2, 3, 5, 6, -2, -1, 4, -4, 2, -1 ])` ต้องคืนค่าเป็น `[ 3, 5, 6, -2, -1, 4 ]`

```js
assert.deepEqual(maximumSubsequence([-1, -2, 3, 5, 6, -2, -1, 4, -4, 2, -1]), [
  3,
  5,
  6,
  -2,
  -1,
  4
]);
```

# --seed--

## --seed-contents--

```js
function maximumSubsequence(population) {

}
```

# --solutions--

```js
function maximumSubsequence(population) {
  function sumValues(arr) {
      var result = 0;
      for (var i = 0, len = arr.length; i < len; i++) {
          result += arr[i];
      }
      return result;
  }
  var greatest;
  var maxValue = 0;

  for (var i = 0, len = population.length; i < len; i++) {
      for (var j = i; j <= len; j++) {
          var subsequence = population.slice(i, j);
          var value = sumValues(subsequence);
          if (value > maxValue) {
              maxValue = value;
              greatest = subsequence;
          };
      }
  }

  return greatest;
}
```
