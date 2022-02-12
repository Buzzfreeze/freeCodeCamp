---
id: 5900f39a1000cf542c50fead
title: 'Problem 46: Goldbach''s other conjecture'
challengeType: 5
forumTopicId: 302134
dashedName: problem-46-goldbachs-other-conjecture
---

# --description--

Christian Goldbach ได้เสนอว่า จำนวนประกอบที่เป็นเลขคี่ทุกตัวจะเป็นผลลัพธ์ของจำนวนเฉพาะ บวกกับสองคูณเลขกำลังสอง

<div style='margin-left: 2em;'>
  9 = 7 + 2×1<sup>2</sup><br>
  15 = 7 + 2×2<sup>2</sup><br>
  21 = 3 + 2×3<sup>2</sup><br>
  25 = 7 + 2×3<sup>2</sup><br>
  27 = 19 + 2×2<sup>2</sup><br>
  33 = 31 + 2×1<sup>2</sup>
</div>

แต่คำพูดนี้ผิด

จำนวนประกอบที่เป็นเลขคี่ที่น้อยที่สุด ที่ทำให้คำพูดนี้ผิด

# --hints--

`goldbachsOtherConjecture()` ต้องคืนค่าเป็นตัวเลข

```js
assert(typeof goldbachsOtherConjecture() === 'number');
```

`goldbachsOtherConjecture()` ต้องคืนค่าเป็น 5777

```js
assert.strictEqual(goldbachsOtherConjecture(), 5777);
```

# --seed--

## --seed-contents--

```js
function goldbachsOtherConjecture() {

  return true;
}

goldbachsOtherConjecture();
```

# --solutions--

```js
function goldbachsOtherConjecture() {  function isPrime(num) {
    if (num < 2) {
      return false;
    } else if (num === 2) {
      return true;
    }
    const sqrtOfNum = Math.floor(num ** 0.5);
    for (let i = 2; i <= sqrtOfNum + 1; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }

  function isSquare(num) {
    return Math.sqrt(num) % 1 === 0;
  }

  // construct a list of prime numbers
  const primes = [];
  for (let i = 2; primes.length < 1000; i++) {
    if (isPrime(i)) primes.push(i);
  }

  let num = 3;
  let answer;
  while (!answer) {
    num += 2;
    if (!isPrime(num)) {
      let found = false;
      for (let primeI = 0; primeI < primes.length && !found; primeI++) {
        const square = (num - primes[primeI]) / 2;
        if (isSquare(square)) {
          found = true;
          break;
        }
      }
      if (!found) answer = num;
    }
  }
  return answer;
}
```
