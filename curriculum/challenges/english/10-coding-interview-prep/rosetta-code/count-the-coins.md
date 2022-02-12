---
id: 59713bd26bdeb8a594fb9413
title: Count the coins
challengeType: 5
forumTopicId: 302238
dashedName: count-the-coins
---

# --description--

ใน [อเมริกา](https://en.wikipedia.org/wiki/United_States) จะมีเหรียญสี่ประเภท:

<ul>
  <li>quarter (25 cent)</li>
  <li>dime (10 cent)</li>
  <li>nickel (5 cent) และ</li>
  <li>penny (1 cen)</li>
</ul>

<p>ในการทอนเหรียญให้มีมูลค่า 15 cent จะทำให้หกแบบ:</p>

<ul>
  <li>1 dime และ 1 nickel</li>
  <li>1 dime และ 5 penny</li>
  <li>3 nickels</li>
  <li>2 nickels และ 5 penny</li>
  <li>1 nickel และ 10 penny</li>
  <li>15 penny</li>
</ul>

# --instructions--

ให้เขียนฟังก์ชันเพื่อนับว่าจะสามารถทอนเงินได้กี่แบบ โดยฟังก์ชันต้องรับค่าเป็น `cents`

# --hints--

`countCoins` ต้องเป็นฟังก์ชัน

```js
assert(typeof countCoins === 'function');
```

`countCoins(15)` ต้องคืนค่าเป็น `6`

```js
assert.equal(countCoins(15), 6);
```

`countCoins(85)` ต้องคืนค่าเป็น `163`

```js
assert.equal(countCoins(85), 163);
```

`countCoins(100)` ต้องคืนค่าเป็น `242`

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
