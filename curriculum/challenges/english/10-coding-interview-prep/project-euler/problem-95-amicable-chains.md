---
id: 5900f3cc1000cf542c50fede
title: "Problem 95: Amicable chains"
challengeType: 5
forumTopicId: 302212
dashedName: problem-95-amicable-chains
---

# --description--

ตัวหาร คือเลขทั้งหมดที่หารเลขนั้นลงตัว ยกเว้นตัวเลขนั้น เช่น ตัวหารของ 28 คือ 1, 2, 4, 7 และ 14  
และเนื่องจากผลรวมของตัวหารเหล่านี้เท่ากับ 28 เราจึงเรียกว่าเลข 28 นี้เป็นจำนวนสมบูรณ์

ที่น่าสนใจคือผลรวมของตัวหารของ 220 คือ 284 และผลรวมของตัวหารของ 284 คือ 220 ทำให้เกิดห่วงโซ่ของตัวเลขสองตัว ด้วยเหตุนี้ 220 และ 284 จึงเรียกว่าจำนวนเชิงมิตร (amicable number)

มีจำนวนเชิงมิตรที่เป็นห่วงโซ่ที่ยาวขึ้นด้วย เช่น ถ้าเริ่มต้นด้วย 12496 เราจะสร้างห่วงโซ่ของตัวเลขห้าชุดได้แบบนี้:

$$
  12496 → 14288 → 15472 → 14536 → 14264 \\,(→ 12496 → \cdots)
$$

เนื่องจากห่วงโซ่นี้กลับสู่จุดเริ่มต้น จึงเรียกว่า amicable chain

ให้หาเลขที่น้อยที่สุดของ amicable chain ที่ยาวที่สุดที่มีเลขแต่ละตัวไม่เกิน `limit`

# --hints--

`amicableChains(300)` ต้องคืนค่าเป็นตัวเลข

```js
assert(typeof amicableChains(300) === "number");
```

`amicableChains(300)` ต้องคืนค่าเป็น `220`

```js
assert.strictEqual(amicableChains(300), 220);
```

`amicableChains(15000)` ต้องคืนค่าเป็น `220`

```js
assert.strictEqual(amicableChains(15000), 220);
```

`amicableChains(100000)` ต้องคืนค่าเป็น `12496`

```js
assert.strictEqual(amicableChains(100000), 12496);
```

`amicableChains(1000000)` ต้องคืนค่าเป็น `14316`

```js
assert.strictEqual(amicableChains(1000000), 14316);
```

# --seed--

## --seed-contents--

```js
function amicableChains(limit) {
  return true;
}

amicableChains(300);
```

# --solutions--

```js
function amicableChains(limit) {
  function getSmallestMember(chain) {
    let smallest = chain[0];
    for (let i = 1; i < chain.length; i++) {
      if (smallest > chain[i]) {
        smallest = chain[i];
      }
    }
    return smallest;
  }

  function getFactorsSums(limit) {
    const factorsSums = new Array(limit + 1).fill(1);
    for (let i = 2; i <= limit / 2; i++) {
      for (let j = 2 * i; j <= limit; j += i) {
        factorsSums[j] += i;
      }
    }
    return factorsSums;
  }

  const factorsSums = getFactorsSums(limit);
  const checkedNumbers = new Set();

  let longestChain = 0;
  let smallestMember = 0;
  for (let i = 0; i <= limit; i++) {
    const curChain = [];
    let curNumber = i;
    while (!checkedNumbers.has(curNumber) && factorsSums[curNumber] <= limit) {
      curNumber = factorsSums[curNumber];

      const chainStart = curChain.indexOf(curNumber);
      if (chainStart === -1) {
        curChain.push(curNumber);
        continue;
      }

      const chainLength = curChain.length - chainStart;
      if (chainLength > longestChain) {
        longestChain = chainLength;
        smallestMember = getSmallestMember(curChain.slice(chainStart));
      }
      break;
    }

    for (let j = 0; j < curChain.length; j++) {
      checkedNumbers.add(curChain[j]);
    }
  }

  return smallestMember;
}
```
