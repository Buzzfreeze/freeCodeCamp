---
id: 5900f3b91000cf542c50fecc
title: 'Problem 77: Prime summations'
challengeType: 5
forumTopicId: 302190
dashedName: problem-77-prime-summations
---

# --description--

เราสามารถเขียนจำนวนเฉพาะที่บวกกันได้ 10 ได้ห้าวิธี

<div style='margin-left: 4em;'>
  7 + 3<br>
  5 + 5<br>
  5 + 3 + 2<br>
  3 + 3 + 2 + 2<br>
  2 + 2 + 2 + 2 + 2<br><br>
</div>

ค่าแรกที่สามารถเขียนเป็นผลรวมของจำนวนเฉพาะที่มากกว่า `n` คือค่าไหน

# --hints--

`primeSummations(5)` ต้องคืนค่าเป็นตัวเลข

```js
assert(typeof primeSummations(5) === 'number');
```

`primeSummations(5)` ต้องคืนค่าเป็น `11`

```js
assert.strictEqual(primeSummations(5), 11);
```

`primeSummations(100)` ต้องคืนค่าเป็น `31`

```js
assert.strictEqual(primeSummations(100), 31);
```

`primeSummations(1000)` ต้องคืนค่าเป็น `53`

```js
assert.strictEqual(primeSummations(1000), 53);
```

`primeSummations(5000)` ควร return `71`.

```js
assert.strictEqual(primeSummations(5000), 71);
```

# --seed--

## --seed-contents--

```js
function primeSummations(n) {

  return true;
}

primeSummations(5);
```

# --solutions--

```js
function primeSummations(n) {
  function getSievePrimes(max) {
    const primesMap = new Array(max).fill(true);
    primesMap[0] = false;
    primesMap[1] = false;
    const primes = [];

    for (let i = 2; i < max; i += 2) {
      if (primesMap[i]) {
        primes.push(i);
        for (let j = i * i; j < max; j += i) {
          primesMap[j] = false;
        }
      }
      if (i === 2) {
        i = 1;
      }
    }
    return primes;
  }

  const MAX_NUMBER = 100;
  const primes = getSievePrimes(MAX_NUMBER);

  for (let curNumber = 2; curNumber < MAX_NUMBER; curNumber++) {
    const combinations = new Array(curNumber + 1).fill(0);
    combinations[0] = 1;
    for (let i = 0; i < primes.length; i++) {
      for (let j = primes[i]; j <= curNumber; j++) {
        combinations[j] += combinations[j - primes[i]];
      }
    }
    if (combinations[curNumber] > n) {
      return curNumber;
    }
  }

  return false;
}
```
