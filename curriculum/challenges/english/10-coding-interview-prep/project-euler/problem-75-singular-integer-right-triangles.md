---
id: 5900f3b71000cf542c50feca
title: 'Problem 75: Singular integer right triangles'
challengeType: 5
forumTopicId: 302188
dashedName: problem-75-singular-integer-right-triangles
---

# --description--

เราพบว่าความยาวของเส้นลวดที่สั้นที่สุดที่สามารถดัดเพื่อสร้างสามเหลี่ยมมุมฉากด้านจำนวนเต็มได้ เป็น 12 ซม.

แต่ก็มีตัวอย่างอื่นอีก

<div style='margin-left: 4em;'>
  <strong>12 cm:</strong> (3,4,5)<br>
  <strong>24 cm:</strong> (6,8,10)<br>
  <strong>30 cm:</strong> (5,12,13)<br>
  <strong>36 cm:</strong> (9,12,15)<br>
  <strong>40 cm:</strong> (8,15,17)<br>
  <strong>48 cm:</strong> (12,16,20)<br><br>
</div>

ในทางตรงกันข้าม ความยาวของเส้นลวด เช่น 20 ซม. จะดัดให้เป็นรูปสามเหลี่ยมมุมฉากด้านจำนวนเต็มไม่ได้ และความยาวอื่นๆ ยอมให้พบวิธีแก้ปัญหามากกว่าหนึ่งวิธี เช่น การใช้ 120 ซม. จะสร้างสามเหลี่ยมมุมฉากด้านจำนวนเต็มที่แตกต่างกันได้สามรูป

<div style='margin-left: 4em;'>
  <strong>120 cm:</strong> (30,40,50), (20,48,52), (24,45,51)<br><br>
</div>

ให้ L คือความยาวของเส้นลวด ถ้า L ≤ `n` จะสร้างสามเหลี่ยมมุมฉากที่มีด้านเป็นจำนวนเต็มได้กี่รูปแบบ

# --hints--

`singularIntRightTriangles(48)` ต้องคืนค่าเป็นตัวเลข

```js
assert(typeof singularIntRightTriangles(48) === 'number');
```

`singularIntRightTriangles(48)` ต้องคืนค่าเป็น `6`

```js
assert.strictEqual(singularIntRightTriangles(48), 6);
```

`singularIntRightTriangles(700000)` ต้องคืนค่าเป็น `75783`

```js
assert.strictEqual(singularIntRightTriangles(700000), 75783);
```

`singularIntRightTriangles(1000000)` ต้องคืนค่าเป็น `107876`

```js
assert.strictEqual(singularIntRightTriangles(1000000), 107876);
```

`singularIntRightTriangles(1500000)` ต้องคืนค่าเป็น `161667`

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
