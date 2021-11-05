---
id: 5900f3b71000cf542c50feca
title: 'Problem 75: Singular integer right triangles'
challengeType: 5
forumTopicId: 302188
dashedName: problem-75-singular-integer-right-triangles
---

# --description--

ปรากฎว่า 12 ซม. เป็นความยาวของเส้นลวดที่เล็กที่สุดที่สามารถโค้งงอเพื่อสร้างสามเหลี่ยมมุมฉากด้านจำนวนเต็มได้
ในลักษณะเดียว แต่มีตัวอย่างอีกมากมาย

<div style='margin-left: 4em;'>
  <strong>12 cm:</strong> (3,4,5)<br>
  <strong>24 cm:</strong> (6,8,10)<br>
  <strong>30 cm:</strong> (5,12,13)<br>
  <strong>36 cm:</strong> (9,12,15)<br>
  <strong>40 cm:</strong> (8,15,17)<br>
  <strong>48 cm:</strong> (12,16,20)<br><br>
</div>

นทางตรงกันข้าม ความยาวของเส้นลวด เช่น 20 ซม. ไม่สามารถโค้งงอให้เป็นรูปสามเหลี่ยมมุมฉากด้านจำนวนเต็มไม่ได้ และความยาวอื่นๆ ยอมให้พบวิธีแก้ปัญหามากกว่าหนึ่งวิธี ตัวอย่างเช่น การใช้ 120 ซม. สามารถสร้างสามเหลี่ยมมุมฉากด้านจำนวนเต็มที่แตกต่างกันสามรูป

<div style='margin-left: 4em;'>
  <strong>120 cm:</strong> (30,40,50), (20,48,52), (24,45,51)<br><br>
</div>

เนื่องจาก L คือความยาวของเส้นลวด สำหรับค่าของ L ≤ `n` สามารถสร้างมุมขวาด้านจำนวนเต็มของสามเหลี่ยมได้กี่ค่า

# --hints--

`singularIntRightTriangles(48)` ควร return number.

```js
assert(typeof singularIntRightTriangles(48) === 'number');
```

`singularIntRightTriangles(48)` ควร return `6`.

```js
assert.strictEqual(singularIntRightTriangles(48), 6);
```

`singularIntRightTriangles(700000)` ควร return `75783`.

```js
assert.strictEqual(singularIntRightTriangles(700000), 75783);
```

`singularIntRightTriangles(1000000)` ควร return `107876`.

```js
assert.strictEqual(singularIntRightTriangles(1000000), 107876);
```

`singularIntRightTriangles(1500000)` ควร return `161667`.

```js
assert.strictEqual(singularIntRightTriangles(1500000), 161667);
```

# --seed--

## --seed-contents--

```js
function singularIntRightTriangles(n) {

  return true;
}

singularIntRightTriangles(48);
```

# --solutions--

```js
function singularIntRightTriangles(limit) {
  function euclidFormula(m, n) {
    return [m ** 2 - n ** 2, 2 * m * n, m ** 2 + n ** 2];
  }

  function gcd(numberA, numberB) {
    if (numberB === 0) {
      return numberA;
    }
    return gcd(numberB, numberA % numberB);
  }

  function notBothOdd(numberA, numberB) {
    return (numberA + numberB) % 2 === 1;
  }

  function areCoprime(numberA, numberB) {
    return gcd(numberA, numberB) === 1;
  }

  const trianglesWithPerimeter = new Array(limit + 1).fill(0);
  const mLimit = Math.sqrt(limit / 2);

  for (let m = 2; m < mLimit; m++) {
    for (let n = 1; n < m; n++) {
      if (notBothOdd(m, n) && areCoprime(m, n)) {
        const [sideA, sideB, sideC] = euclidFormula(m, n);
        const perimeter = sideA + sideB + sideC;
        let curPerimeter = perimeter;
        while (curPerimeter <= limit) {
          trianglesWithPerimeter[curPerimeter]++;
          curPerimeter += perimeter;
        }
      }
    }
  }
  return trianglesWithPerimeter.filter(trianglesCount => trianglesCount === 1)
    .length;
}
```
