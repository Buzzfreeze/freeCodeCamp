---
id: 5949b579404977fbaefcd737
title: Amicable pairs
challengeType: 5
forumTopicId: 302225
dashedName: amicable-pairs
---

# --description--

จำนวนเต็ม $N$ และ $M$ จะเป็น [amicable pairs](<https://en.wikipedia.org/wiki/Amicable numbers> "wp: Amicable numbers") ถ้า $N \\neq M$ และผลรวมของ [proper divisors](<https://rosettacode.org/wiki/Proper divisors> "Proper divisors") ของ $N$ ($\\mathrm{sum}(\\mathrm{propDivs}(N))$) $= M$ และ $\\mathrm{sum}(\\mathrm{propDivs}(M)) = N$

**ตัวอย่าง:**

**1184** และ **1210** เป็น amicable pair ที่มีตัวเลขที่หารลงตัวเป็น

<ul>
  <li>1, 2, 4, 8, 16, 32, 37, 74, 148, 296, 592  และ</li>
  <li>1, 2, 5, 10, 11, 22, 55, 110, 121, 242, 605   ตามลำดับ</li>
</ul>

# --instructions--

คำนวณและแสดง Amicable Pair ที่ต่ำกว่า 20,000 (มีแปดตัว)

# --hints--

`amicablePairsUpTo` ต้องเป็นฟังก์ชัน

```js
assert(typeof amicablePairsUpTo === 'function');
```

`amicablePairsUpTo(300)` ต้องคืนค่าเป็น `[[220,284]]`

```js
assert.deepEqual(amicablePairsUpTo(300), answer300);
```

`amicablePairsUpTo(3000)` ต้องคืนค่าเป็น `[[220,284],[1184,1210],[2620,2924]]`

```js
assert.deepEqual(amicablePairsUpTo(3000), answer3000);
```

`amicablePairsUpTo(20000)` ต้องคืนค่าเป็น `[[220,284],[1184,1210],[2620,2924],[5020,5564],[6232,6368],[10744,10856],[12285,14595],[17296,18416]]`

```js
assert.deepEqual(amicablePairsUpTo(20000), answer20000);
```

# --seed--

## --after-user-code--

```js
const answer300 = [[220, 284]];
const answer3000 = [
  [220, 284],
  [1184, 1210],
  [2620, 2924]
];
const answer20000 = [
  [220, 284],
  [1184, 1210],
  [2620, 2924],
  [5020, 5564],
  [6232, 6368],
  [10744, 10856],
  [12285, 14595],
  [17296, 18416]
];
```

## --seed-contents--

```js
function amicablePairsUpTo(maxNum) {

  return true;
}
```

# --solutions--

```js
// amicablePairsUpTo :: Int -> [(Int, Int)]
function amicablePairsUpTo(maxNum) {
  return range(1, maxNum)
    .map(x => properDivisors(x)
      .reduce((a, b) => a + b, 0))
    .reduce((a, m, i, lst) => {
      const n = i + 1;

      return (m > n) && lst[m - 1] === n ?
        a.concat([
          [n, m]
        ]) : a;
    }, []);
}

// properDivisors :: Int -> [Int]
function properDivisors(n) {
  if (n < 2) return [];

  const rRoot = Math.sqrt(n);
  const intRoot = Math.floor(rRoot);
  const blnPerfectSquare = rRoot === intRoot;
  const lows = range(1, intRoot)
  .filter(x => (n % x) === 0);

  return lows.concat(lows.slice(1)
    .map(x => n / x)
    .reverse()
    .slice(blnPerfectSquare | 0));
}

// Int -> Int -> Maybe Int -> [Int]
function range(m, n, step) {
  const d = (step || 1) * (n >= m ? 1 : -1);

  return Array.from({
    length: Math.floor((n - m) / d) + 1
  }, (_, i) => m + (i * d));
}
```
