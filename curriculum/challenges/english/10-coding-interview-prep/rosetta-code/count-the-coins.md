---
id: 59713bd26bdeb8a594fb9413
title: Count the coins
challengeType: 5
forumTopicId: 302238
dashedName: count-the-coins
---

# --description--

เหรียญทั่วไปมีสี่ประเภทใน [US](https://en.wikipedia.org/wiki/United_States) currency:

<ul>
  <li>quarters (25 cents)</li>
  <li>dimes (10 cents)</li>
  <li>nickels (5 cents), and</li>
  <li>pennies (1 cent)</li>
</ul>

<p>There are six ways to make change for 15 cents:</p>

<ul>
  <li>A dime and a nickel</li>
  <li>A dime and 5 pennies</li>
  <li>3 nickels</li>
  <li>2 nickels and 5 pennies</li>
  <li>A nickel and 10 pennies</li>
  <li>15 pennies</li>
</ul>

# --instructions--

ใช้ฟังก์ชันเพื่อกำหนดจำนวนวิธีที่จะทำการเปลี่ยนแปลงสำหรับข้อมูลป้อนเข้า `cents` ซึ่งหมายถึงจำนวนเงินเพนนีของสหรัฐฯ โดยใช้เหรียญทั่วไปเหล่านี้

# --hints--

`countCoins` ควรเป็น function.

```js
assert(typeof countCoins === 'function');
```

`countCoins(15)` ควร return `6`.

```js
assert.equal(countCoins(15), 6);
```

`countCoins(85)` ควร return `163`.

```js
assert.equal(countCoins(85), 163);
```

`countCoins(100)` ควร return `242`.

```js
assert.equal(countCoins(100), 242);
```

# --seed--

## --seed-contents--

```js
function countCoins(cents) {

  return true;
}
```

# --solutions--

```js
function countCoins(cents) {
  const operands = [1, 5, 10, 25];
  const targetsLength = cents + 1;
  const operandsLength = operands.length;
  const t = [1];

  for (let a = 0; a < operandsLength; a++) {
    for (let b = 1; b < targetsLength; b++) {
      // initialise undefined target
      t[b] = t[b] ? t[b] : 0;

      // accumulate target + operand ways
      t[b] += (b < operands[a]) ? 0 : t[b - operands[a]];
    }
  }

  return t[targetsLength - 1];
}
```
