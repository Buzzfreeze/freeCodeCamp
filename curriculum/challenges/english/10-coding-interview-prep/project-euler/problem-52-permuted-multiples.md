---
id: 5900f3a01000cf542c50feb3
title: 'Problem 52: Permuted multiples'
challengeType: 5
forumTopicId: 302163
dashedName: problem-52-permuted-multiples
---

# --description--

จำนวน 125874 และ 251748(สองเท่าของค่าแรก) มีตัวเลขที่เหมือนกัน แต่ลำดับต่างกัน

หาจำนวนเต็มที่น้อยที่สุดและเป็นค่าบวก ที่คูณด้วยจำนวนเต็ม $\\{2, 3, \ldots, n\\}$, แล้วมียังมีเลขเหมือนเดิม

# --hints--

`permutedMultiples(2)` ต้องคืนค่าเป็นตัวเลข

```js
assert(typeof permutedMultiples(2) === 'number');
```

`permutedMultiples(2)` ต้องคืนค่าเป็น `125874`

```js
assert.strictEqual(permutedMultiples(2), 125874);
```

`permutedMultiples(6)` ต้องคืนค่าเป็น `142857`

```js
assert.strictEqual(permutedMultiples(6), 142857);
```

# --seed--

## --seed-contents--

```js
function permutedMultiples(n) {

  return true;
}

permutedMultiples(2);
```

# --solutions--

```js
function permutedMultiples(n) {
    const isPermutation = (a, b) =>
        a.length !== b.length
            ? false
            : a.split('').sort().join() === b.split('').sort().join();


    let start = 1;
    let found = false;
    let result = 0;

    while (!found) {
        start *= 10;
        for (let i = start; i < start * 10 / n; i++) {
            found = true;
            for (let j = 2; j <= n; j++) {
                if (!isPermutation(i + '', j * i + '')) {
                    found = false;
                    break;
                }
            }
            if (found) {
                result = i;
                break;
            }
        }
    }

    return result;
}
```
