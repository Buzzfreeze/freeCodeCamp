---
id: 597b2b2a2702b44414742771
title: Factorial
challengeType: 5
forumTopicId: 302263
dashedName: factorial
---

# --description--

ให้เขียนฟังก์ชันเพื่อให้คืนค่าเป็น factorial ของเลขที่ระบุ

Factorial ของตัวเลขจะหาได้โดย:

<pre><big>n! = n * (n-1) * (n-2) * ..... * 1</big>
</pre>

เช่น:

<ul>
  <li><code>3! = 3 * 2 * 1 = 6</code></li>
  <li><code>4! = 4 * 3 * 2 * 1 = 24</code></li>
</ul>

**จะเห็นว่า** `0! = 1`

# --hints--

`factorial` ต้องเป็นฟังก์ชัน

```js
assert(typeof factorial === 'function');
```

`factorial(2)` ต้องคืนค่าเป็นตัวเลข

```js
assert(typeof factorial(2) === 'number');
```

`factorial(3)` ต้องคืนค่าเป็น 6

```js
assert.equal(factorial(3), 6);
```

`factorial(5)` ต้องคืนค่าเป็น 120

```js
assert.equal(factorial(5), 120);
```

`factorial(10)` ต้องคืนค่าเป็น 3,628,800

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
