---
id: 5a23c84252665b21eecc8002
title: Sorting algorithms/Bogosort
challengeType: 5
forumTopicId: 302311
dashedName: sorting-algorithmsbogosort
---

# --description--

ให้ sort array ของตัวเลขโดยใช้ [Bogosort](https://en.wikipedia.org/wiki/Bogosort) 


Bogosort จะสุ่มลำดับของข้อมูลใน array จนกว่าจะเรียงอย่างถูกต้อง

"Bogosort" เป็นอัลกอริทึมที่ประสิทธิภาพห่วยมากๆ โดยเป็นอัลกอริทึมขำๆเท่านั้น

ซึ่งจะใช้เวลาเฉลี่ยเป็น O(n!) เพราะโอกาศที่จะสลับข้อมูลแล้วเรียงได้ถูกต้องจะเป็น *n* factorial และ Worst Case คือไม่มีที่สิ้นสุด เพราะว่าไม่มีการรับประกันว่าจะหาคำตอบได้  
ส่วน Best Case จะเป็น O(n) เพราะว่าถ้าโชคดีอาจจะสุ่มครั้งเดียวแล้วเรียงเลย

Pseudocode:

<pre><b>while not</b> InOrder(list) <b>do</b>
  Shuffle(list)
<b>done</b>
</pre>

# --hints--

`bogosort` ต้องเป็นฟังก์ชัน

```js
assert(typeof bogosort == 'function');
```

`bogosort([25, 32, 12, 7, 20])` ต้องคืนค่าเป็น array

```js
assert(Array.isArray(bogosort([25, 32, 12, 7, 20])));
```

`bogosort([25, 32, 12, 7, 20])` ต้องคืนค่าเป็น `[7, 12, 20, 25, 32]`

```js
assert.deepEqual(bogosort([25, 32, 12, 7, 20]), [7, 12, 20, 25, 32]);
```

`bogosort([38, 45, 35, 8, 13])` ต้องคืนค่าเป็น `[8, 13, 35, 38, 45]`

```js
assert.deepEqual(bogosort([38, 45, 35, 8, 13]), [8, 13, 35, 38, 45]);
```

`bogosort([43, 36, 20, 34, 24])` ต้องคืนค่าเป็น `[20, 24, 34, 36, 43]`

```js
assert.deepEqual(bogosort([43, 36, 20, 34, 24]), [20, 24, 34, 36, 43]);
```

`bogosort([12, 33, 26, 18, 1, 16, 38])` ต้องคืนค่าเป็น `[1, 12, 16, 18, 26, 33, 38]`

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

`bogosort([3, 39, 48, 16, 1, 4, 29])` ต้องคืนค่าเป็น `[1, 3, 4, 16, 29, 39, 48]`

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
