---
id: 5900f3ae1000cf542c50fec1
title: 'Problem 66: Diophantine equation'
challengeType: 5
forumTopicId: 302178
dashedName: problem-66-diophantine-equation
---

# --description--

พิจารณา quadratic Diophantine equation นี้:

<div style='text-align: center;'>x<sup>2</sup> – Dy<sup>2</sup> = 1</div>

เช่นเมื่อ D=13 มี solution ของ x เป็น 649<sup>2</sup> – 13×180<sup>2</sup> = 1

สามารถสันนิษฐานได้ว่าไม่มีคำตอบในจำนวนเต็มบวก เมื่อ D เป็น square

หาค่า solutions ของ x สำหรับ D = {2, 3, 5, 6, 7}:

<div style='margin-left: 2em;'>
  3<sup>2</sup> – 2×2<sup>2</sup> = 1<br>
  2<sup>2</sup> – 3×1<sup>2</sup> = 1<br>
  <strong><span style='color: red;'>9</span></strong><sup>2</sup> – 5×4<sup>2</sup> = 1<br>
  5<sup>2</sup> – 6×2<sup>2</sup> = 1<br>
  8<sup>2</sup> – 7×3<sup>2</sup> = 1<br>
</div>

เมื่อดู solutions ใน `x` สำหรับ D ≤ 7 ค่ามากสุดเป็น `x` ที่ถูกกำหนด D=5

หาค่าของ D ≤ `n` ใน solutions ของ `x` โดยให้ `x` มีค่ามากที่สุด

# --hints--

`diophantineEquation(7)` ต้องคืนค่าเป็นตัวเลข

```js
assert(typeof diophantineEquation(7) === 'number');
```

`diophantineEquation(7)` ต้องคืนค่าเป็น `5`

```
assert.strictEqual(diophantineEquation(7), 5);
```

`diophantineEquation(100)` ต้องคืนค่าเป็น `61`

```
assert.strictEqual(diophantineEquation(100), 61);
```

`diophantineEquation(409)` ต้องคืนค่าเป็น `409`

```
assert.strictEqual(diophantineEquation(409), 409);
```

`diophantineEquation(500)` ต้องคืนค่าเป็น `421`

```
assert.strictEqual(diophantineEquation(500), 421);
```

`diophantineEquation(1000)` ต้องคืนค่าเป็น `661`

```js
assert.strictEqual(diophantineEquation(1000), 661);
```

# --seed--

## --seed-contents--

```js
function diophantineEquation(n) {

  return true;
}

diophantineEquation(7);
```

# --solutions--

```js
function diophantineEquation(n) {
  // Based on https://www.mathblog.dk/project-euler-66-diophantine-equation/
  function isSolution(D, numerator, denominator) {
    return numerator * numerator - BigInt(D) * denominator * denominator === 1n;
  }

  let result = 0;
  let biggestX = 0;

  for (let D = 2; D <= n; D++) {
    let boundary = Math.floor(Math.sqrt(D));
    if (boundary ** 2 === D) {
      continue;
    }

    let m = 0n;
    let d = 1n;
    let a = BigInt(boundary);

    let [numerator, prevNumerator] = [a, 1n];

    let [denominator, prevDenominator] = [1n, 0n];

    while (!isSolution(D, numerator, denominator)) {
      m = d * a - m;
      d = (BigInt(D) - m * m) / d;
      a = (BigInt(boundary) + m) / d;

      [numerator, prevNumerator] = [a * numerator + prevNumerator, numerator];
      [denominator, prevDenominator] = [
        a * denominator + prevDenominator,
        denominator
      ];
    }

    if (numerator > biggestX) {
      biggestX = numerator;
      result = D;
    }
  }
  return result;
}
```
