---
id: 5900f38a1000cf542c50fe9d
title: 'Problem 30: Digit n powers'
challengeType: 5
forumTopicId: 301953
dashedName: problem-30-digit-n-powers
---

# --description--

มีแค่สามจำนวนที่สามารถเขียนเป็นผลรวมของเลขยกกำลังสี่ของตัวเลขในแต่ละหลัก

<div style='margin-left: 4em;'>
  1634 = 1<sup>4</sup> + 6<sup>4</sup> + 3<sup>4</sup> + 4<sup>4</sup><br>
  8208 = 8<sup>4</sup> + 2<sup>4</sup> + 0<sup>4</sup> + 8<sup>4</sup><br>
  9474 = 9<sup>4</sup> + 4<sup>4</sup> + 7<sup>4</sup> + 4<sup>4</sup><br>
</div>

เราจะไม่รวม 1 = 1<sup>4</sup> ไปด้วย

ผลรวมคือ 1634 + 8208 + 9474 = 19316

หาผลรวมของจำนวน ที่สามารถเขียนในรูปเลขแต่ละหลักยกกำลัง `n` ได้

# --hints--

`digitnPowers(2)` ต้องคืนค่าเป็น number

```js
assert(typeof digitnPowers(2) === 'number');
```

`digitnPowers(2)` ต้องคืนค่าเป็น 0

```js
assert(digitnPowers(2) == 0);
```

`digitnPowers(3)` ต้องคืนค่าเป็น 1301

```js
assert(digitnPowers(3) == 1301);
```

`digitnPowers(4)` ต้องคืนค่าเป็น 19316

```js
assert(digitnPowers(4) == 19316);
```

`digitnPowers(5)` ต้องคืนค่าเป็น 443839

```js
assert(digitnPowers(5) == 443839);
```

# --seed--

## --seed-contents--

```js
function digitnPowers(n) {

  return n;
}

digitnPowers(5);
```

# --solutions--

```js
// solution required
```
