---
id: 5900f3b81000cf542c50fecb
title: 'Problem 76: Counting summations'
challengeType: 5
forumTopicId: 302189
dashedName: problem-76-counting-summations
---

# --description--

เราสามารถเขียนเลขที่บวกกันได้ 5 ได้หกวิธี

<div style='margin-left: 4em;'>
  4 + 1<br>
  3 + 2<br>
  3 + 1 + 1<br>
  2 + 2 + 1<br>
  2 + 1 + 1 + 1<br>
  1 + 1 + 1 + 1 + 1<br><br>
</div>

เราสามารถเขียนเลขที่บวกกันได้ `n` ได้กี่วิธี?

# --hints--

`countingSummations(5)` ต้องคืนค่าเป็นตัวเลข

```js
assert(typeof countingSummations(5) === 'number');
```

`countingSummations(5)` ต้องคืนค่าเป็น `6`

```js
assert.strictEqual(countingSummations(5), 6);
```

`countingSummations(20)` ต้องคืนค่าเป็น `626`

```js
assert.strictEqual(countingSummations(20), 626);
```

`countingSummations(50)` ต้องคืนค่าเป็น `204225`

```js
assert.strictEqual(countingSummations(50), 204225);
```

`countingSummations(100)` ต้องคืนค่าเป็น `190569291`

```js
assert.strictEqual(countingSummations(100), 190569291);
```

# --seed--

## --seed-contents--

```js
function countingSummations(n) {

  return true;
}

countingSummations(5);
```

# --solutions--

```js
function countingSummations(n) {
  const combinations = new Array(n + 1).fill(0);
  combinations[0] = 1;

  for (let i = 1; i < n; i++) {
    for (let j = i; j < n + 1; j++) {
      combinations[j] += combinations[j - i];
    }
  }
  return combinations[n];
}
```
