---
id: 594da033de4190850b893874
title: Averages/Root mean square
challengeType: 5
forumTopicId: 302228
dashedName: averagesroot-mean-square
---

# --description--

หาค่า [Root mean square](<https://en.wikipedia.org/wiki/Root mean square> "wp: Root mean square") ของตัวเลข 1 ถึง 10

The *root mean square* เป็นที่รู้จักกันโดยชื่อย่อ RMS (หรือ rms) และในชื่อ **quadratic mean**.
RMS คำนวณจากค่าเฉลี่ยของกำลังสองของตัวเลข รากที่สอง:

$$x\_{\\mathrm{rms}} = \\sqrt {{{x_1}^2 + {x_2}^2 + \\cdots + {x_n}^2} \\over n}. $$

# --hints--

`rms` ควรเป็น function.

```js
assert(typeof rms === 'function');
```

`rms([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])` ควร equal `6.2048368229954285`.

```js
assert.equal(rms(arr1), answer1);
```

# --seed--

## --after-user-code--

```js
const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const answer1 = 6.2048368229954285;
```

## --seed-contents--

```js
function rms(arr) {

}
```

# --solutions--

```js
function rms(arr) {
  const sumOfSquares = arr.reduce((s, x) => s + x * x, 0);
  return Math.sqrt(sumOfSquares / arr.length);
}
```
