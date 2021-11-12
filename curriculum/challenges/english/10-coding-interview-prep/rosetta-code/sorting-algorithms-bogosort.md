---
id: 5a23c84252665b21eecc8002
title: Sorting algorithms/Bogosort
challengeType: 5
forumTopicId: 302311
dashedName: sorting-algorithmsbogosort
---

# --description--

[Bogosort](https://en.wikipedia.org/wiki/Bogosort) list ของ numbers
Bogosort จะสุ่มcollectionแบบสุ่มจนกว่าจะจัดเรียง

"Bogosort" เป็นa;gorithmที่ไม่มีประสิทธิภาพไม่ดี 

เวลารันเฉลี่ยของมันคือ O(n!) เพราะโอกาสที่การสับเปลี่ยนชุดที่กำหนดจะจบลงด้วยการเรียงลำดับประมาณหนึ่งใน *n* factorial และกรณีที่เลวร้ายที่สุดคือไม่มีที่สิ้นสุดเนื่องจากไม่มีการรับประกันว่าจะสุ่มแบบสุ่ม จะสร้างลำดับการเรียงลำดับ กรณีที่ดีที่สุดคือ O(n) เนื่องจากการผ่านองค์ประกอบเพียงครั้งเดียวอาจเพียงพอที่จะใช้ได้

Pseudocode:

<pre><b>while not</b> InOrder(list) <b>do</b>
  Shuffle(list)
<b>done</b>
</pre>

# --hints--

`bogosort` ควรเป็น function.

```js
assert(typeof bogosort == 'function');
```

`bogosort([25, 32, 12, 7, 20])` ควร return array.

```js
assert(Array.isArray(bogosort([25, 32, 12, 7, 20])));
```

`bogosort([25, 32, 12, 7, 20])` ควร return `[7, 12, 20, 25, 32]`.

```js
assert.deepEqual(bogosort([25, 32, 12, 7, 20]), [7, 12, 20, 25, 32]);
```

`bogosort([38, 45, 35, 8, 13])` ควร return `[8, 13, 35, 38, 45]`.

```js
assert.deepEqual(bogosort([38, 45, 35, 8, 13]), [8, 13, 35, 38, 45]);
```

`bogosort([43, 36, 20, 34, 24])` ควร return `[20, 24, 34, 36, 43]`.

```js
assert.deepEqual(bogosort([43, 36, 20, 34, 24]), [20, 24, 34, 36, 43]);
```

`bogosort([12, 33, 26, 18, 1, 16, 38])` ควร return `[1, 12, 16, 18, 26, 33, 38]`.

```js
assert.deepEqual(bogosort([12, 33, 26, 18, 1, 16, 38]), [
  1,
  12,
  16,
  18,
  26,
  33,
  38
]);
```

`bogosort([3, 39, 48, 16, 1, 4, 29])` ควร return `[1, 3, 4, 16, 29, 39, 48]`.

```js
assert.deepEqual(bogosort([3, 39, 48, 16, 1, 4, 29]), [
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
function bogosort(v) {

}
```

# --solutions--

```js
function bogosort(v) {
  function shuffle(v) {
    for (
      var j, x, i = v.length;
      i;
      j = Math.floor(Math.random() * i), x = v[--i], v[i] = v[j], v[j] = x
    );
    return v;
  }

  function isSorted(v) {
    for (var i = 1; i < v.length; i++) {
      if (v[i - 1] > v[i]) {
        return false;
      }
    }
    return true;
  }
  var sorted = false;
  while (sorted == false) {
    v = shuffle(v);
    sorted = isSorted(v);
  }
  return v;
}
```
