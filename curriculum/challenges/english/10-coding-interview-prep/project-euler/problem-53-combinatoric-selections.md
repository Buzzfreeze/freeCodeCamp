---
id: 5900f3a11000cf542c50feb4
title: 'Problem 53: Combinatoric selections'
challengeType: 5
forumTopicId: 302164
dashedName: problem-53-combinatoric-selections
---

# --description--

มี 10 วิธีจากการเลือก 3 ใน 5 ของ 12345:

<div style='text-align: center;'>123, 124, 125, 134, 135, 145, 234, 235, 245, and 345</div>

ใน combinatorics เราใช้ notation, $\\displaystyle \\binom 5 3 = 10$

โดยทั่วไปใช้ $\\displaystyle \\binom n r = \\dfrac{n!}{r!(n-r)!}$, where $r \\le n$, $n! = n \\times (n-1) \\times ... \\times 3 \\times 2 \\times 1$, และ $0! = 1$.

จะไม่ถึง $n = 23$ ที่มีค่าเกิน one-million: $\\displaystyle \\binom {23} {10} = 1144066$.

มีกี่ค่าที่ $\\displaystyle \\binom n r$ for $1 \\le n \\le 100$ มากกว่า one-million

# --hints--

`combinatoricSelections(1000)` ควร return number.

```js
assert(typeof combinatoricSelections(1000) === 'number');
```

`combinatoricSelections(1000)` ควร return 4626.

```js
assert.strictEqual(combinatoricSelections(1000), 4626);
```

`combinatoricSelections(10000)` ควร return 4431.

```js
assert.strictEqual(combinatoricSelections(10000), 4431);
```

`combinatoricSelections(100000)` ควร return 4255.

```js
assert.strictEqual(combinatoricSelections(100000), 4255);
```

`combinatoricSelections(1000000)` ควร return 4075.

```js
assert.strictEqual(combinatoricSelections(1000000), 4075);
```

# --seed--

## --seed-contents--

```js
function combinatoricSelections(limit) {

  return 1;
}

combinatoricSelections(1000000);
```

# --solutions--

```js
function combinatoricSelections(limit) {
    const factorial = n =>
        Array.apply(null, { length: n })
            .map((_, i) => i + 1)
            .reduce((p, c) => p * c, 1);

    let result = 0;
    const nMax = 100;

    for (let n = 1; n <= nMax; n++) {
        for (let r = 0; r <= n; r++) {
            if (factorial(n) / (factorial(r) * factorial(n - r)) >= limit)
                result++;
        }
    }

    return result;
}
```
