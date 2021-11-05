---
id: 5900f3b81000cf542c50fecb
title: 'Problem 76: Counting summations'
challengeType: 5
forumTopicId: 302189
dashedName: problem-76-counting-summations
---

# --description--

เป็นไปได้ที่จะเขียนห้าเป็นผลรวม ในหกวิธีที่แตกต่างกัน

<div style='margin-left: 4em;'>
  4 + 1<br>
  3 + 2<br>
  3 + 1 + 1<br>
  2 + 2 + 1<br>
  2 + 1 + 1 + 1<br>
  1 + 1 + 1 + 1 + 1<br><br>
</div>

สามารถเขียน `n' เป็นผลรวมของจำนวนเต็มบวกอย่างน้อยสองจำนวนได้กี่วิธี

# --hints--

`countingSummations(5)` ควร return number

```js
assert(typeof countingSummations(5) === 'number');
```

`countingSummations(5)` ควร return `6`.

```js
assert.strictEqual(countingSummations(5), 6);
```

`countingSummations(20)` ควร return `626`.

```js
assert.strictEqual(countingSummations(20), 626);
```

`countingSummations(50)` ควร return `204225`.

```js
assert.strictEqual(countingSummations(50), 204225);
```

`countingSummations(100)` ควร return `190569291`.

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
