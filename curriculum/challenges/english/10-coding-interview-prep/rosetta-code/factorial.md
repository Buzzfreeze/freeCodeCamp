---
id: 597b2b2a2702b44414742771
title: Factorial
challengeType: 5
forumTopicId: 302263
dashedName: factorial
---

# --description--

เขียน function เพื่อ return factorial ของจำนวน.

Factorial ของจำนวนกำหนดโดย:

<pre><big>n! = n * (n-1) * (n-2) * ..... * 1</big>
</pre>

For example:

<ul>
  <li><code>3! = 3 * 2 * 1 = 6</code></li>
  <li><code>4! = 4 * 3 * 2 * 1 = 24</code></li>
</ul>

**Note:** `0! = 1`

# --hints--

`factorial` ควรเป็นfunction.

```js
assert(typeof factorial === 'function');
```

`factorial(2)` ควร return number.

```js
assert(typeof factorial(2) === 'number');
```

`factorial(3)` ควร return 6.

```js
assert.equal(factorial(3), 6);
```

`factorial(5)` ควร return 120.

```js
assert.equal(factorial(5), 120);
```

`factorial(10)` ควร return 3,628,800.

```js
assert.equal(factorial(10), 3628800);
```

# --seed--

## --seed-contents--

```js
function factorial(n) {

}
```

# --solutions--

```js
function factorial(n) {
  let sum = 1;
  while (n > 1) {
    sum *= n;
    n--;
  }
  return sum;
}
```
