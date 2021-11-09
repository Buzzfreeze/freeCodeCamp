---
id: ae9defd7acaf69703ab432ea
title: Smallest Common Multiple
challengeType: 5
forumTopicId: 16075
dashedName: smallest-common-multiple
---

# --description--

จงหาค่า ค.ร.น. ของ parameters ที่กำหนด รวมถึงเลขทุกตัวที่อยู่ระหว่าง paramters นั้น

parameter ที่จะกำหนดให้นั้นเป็น array ที่มี 2 ตัวเลข และไม่จำเป็นที่เลข 2 จำนวนนี้ต้องเรียงกัน

ตัวอย่างเช่น สมมติมีเลข 1 และ 3 จงหาค่า ค.ร.น. ของ 1 และ 3 รวมถึงเลขทุกตัวระหว่าง 1 และ 3 คำตอบที่ได้ คือ 6

# --hints--

`smallestCommons([1, 5])` ควรคืนค่าเป็น number

```js
assert.deepEqual(typeof smallestCommons([1, 5]), 'number');
```

`smallestCommons([1, 5])` ควรคืนค่าเป็น 60

```js
assert.deepEqual(smallestCommons([1, 5]), 60);
```

`smallestCommons([5, 1])` ควรคืนค่าเป็น 60

```js
assert.deepEqual(smallestCommons([5, 1]), 60);
```

`smallestCommons([2, 10])` ควรคืนค่าเป็น 2520

```js
assert.deepEqual(smallestCommons([2, 10]), 2520);
```

`smallestCommons([1, 13])` ควรคืนค่าเป็น 360360

```js
assert.deepEqual(smallestCommons([1, 13]), 360360);
```

`smallestCommons([23, 18])` ควรคืนค่าเป็น 6056820

```js
assert.deepEqual(smallestCommons([23, 18]), 6056820);
```

# --seed--

## --seed-contents--

```js
function smallestCommons(arr) {
  return arr;
}


smallestCommons([1,5]);
```

# --solutions--

```js
function gcd(a, b) {
    while (b !== 0) {
        a = [b, b = a % b][0];
    }
    return a;
}

function lcm(a, b) {
    return (a * b) / gcd(a, b);
}

function smallestCommons(arr) {
  arr.sort(function(a,b) {return a-b;});
  var rng = [];
  for (var i = arr[0]; i <= arr[1]; i++) {
    rng.push(i);
  }
  return rng.reduce(lcm);
}
```
