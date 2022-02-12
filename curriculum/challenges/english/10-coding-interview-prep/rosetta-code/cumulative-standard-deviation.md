---
id: 5a23c84252665b21eecc7e03
title: Cumulative standard deviation
challengeType: 5
forumTopicId: 302240
dashedName: cumulative-standard-deviation
---

# --description--

ให้เขียนฟังก์ชันที่รับค่าเป็น array ของตัวเลข และให้หา [ค่าเบี่ยงเบนมาตรฐาน(SD)](<https://en.wikipedia.org/wiki/Standard Deviation>) ของชุดตัวเลขนั้น

# --hints--

`standardDeviation` ต้องเป็นฟังก์ชัน

```js
assert(typeof standardDeviation == 'function');
```

`standardDeviation([2, 4, 4, 4, 5, 5, 7, 9])` ต้องคืนค่าเป็นตัวเลข

```js
assert(typeof standardDeviation([2, 4, 4, 4, 5, 5, 7, 9]) == 'number');
```

`standardDeviation([2, 4, 4, 4, 5, 5, 7, 9])` ต้องคืนค่าเป็น `2`

```js
assert.equal(standardDeviation([2, 4, 4, 4, 5, 5, 7, 9]), 2);
```

`standardDeviation([600, 470, 170, 430, 300])` ต้องคืนค่าเป็น `147.323`

```js
assert.equal(standardDeviation([600, 470, 170, 430, 300]), 147.323);
```

`standardDeviation([75, 83, 96, 100, 121, 125])` ต้องคืนค่าเป็น `18.239`

```js
assert.equal(standardDeviation([75, 83, 96, 100, 121, 125]), 18.239);
```

`standardDeviation([23, 37, 45, 49, 56, 63, 63, 70, 72, 82])` ต้องคืนค่าเป็น `16.87`

```js
assert.equal(
  standardDeviation([23, 37, 45, 49, 56, 63, 63, 70, 72, 82]),
  16.87
);
```

`standardDeviation([271, 354, 296, 301, 333, 326, 285, 298, 327, 316, 287, 314])` ควร return `22.631`.

```js
assert.equal(
  standardDeviation([
    271,
    354,
    296,
    301,
    333,
    326,
    285,
    298,
    327,
    316,
    287,
    314
  ]),
  22.631
);
```

# --seed--

## --seed-contents--

```js
function standardDeviation(arr) {

}
```

# --solutions--

```js
function standardDeviation(arr) {
  var sum = 0,
    sum_sq = 0,
    n = arr.length;
  arr.forEach(function(e) {
    sum += e;
    sum_sq += e * e;
  });

  var std_dev = Math.sqrt(sum_sq / n - Math.pow(sum / n, 2));
  return Math.round(std_dev * 1000) / 1000;
}
```
