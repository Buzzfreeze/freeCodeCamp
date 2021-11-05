---
id: 5900f3aa1000cf542c50febd
title: 'Problem 62: Cubic permutations'
challengeType: 5
forumTopicId: 302174
dashedName: problem-62-cubic-permutations
---

# --description--

cube, 41063625 ($345^3$) สามารถเรียงสับเปลี่ยนเพื่อผลิตลูกบาศก์อีกสองก้อน: 56623104 ($384^3$) และ 66430125 ($405^3$) ซึ่ง 41063625 จะเล็กที่สุดเมื่อมี 3 permutations -v' digits ที่เป็น cube

หาค่าลูกบาศก์ที่น้อยที่สุดของ `n` permutations โดยตัวเลขของมันคือลูกบาศก์


# --hints--

`cubicPermutations(2)` ควร return number.

```js
assert(typeof cubicPermutations(2) === 'number');
```

`cubicPermutations(2)` ควร return `125`.

```js
assert.strictEqual(cubicPermutations(2), 125);
```

`cubicPermutations(3)` ควร return `41063625`.

```js
assert.strictEqual(cubicPermutations(3), 41063625);
```

`cubicPermutations(4)` ควร return `1006012008`.

```js
assert.strictEqual(cubicPermutations(4), 1006012008);
```

`cubicPermutations(5)` ควร return `127035954683`.

```js
assert.strictEqual(cubicPermutations(5), 127035954683);
```

# --seed--

## --seed-contents--

```js
function cubicPermutations(n) {

  return true;
}

cubicPermutations(2);
```

# --solutions--

```js
function cubicPermutations(n) {
  function getDigits(num) {
    const digits = [];
    while (num > 0) {
      digits.push(num % 10);
      num = Math.floor(num / 10);
    }
    return digits;
  }

  function getCube(num) {
    return num ** 3;
  }

  const digitsToCubeCounts = {};
  let curNum = 1;
  let digits;

  while (!digitsToCubeCounts[digits] || digitsToCubeCounts[digits].count < n) {
    const cube = getCube(curNum);
    digits = getDigits(cube).sort().join();
    if (!digitsToCubeCounts[digits]) {
      digitsToCubeCounts[digits] = {
        count: 1,
        smallestCube: cube
      };
    } else {
      digitsToCubeCounts[digits].count += 1;
    }

    curNum++;
  }
  return digitsToCubeCounts[digits].smallestCube;
}
```
