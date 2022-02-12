---
id: 597f24c1dda4e70f53c79c81
title: Fibonacci sequence
challengeType: 5
forumTopicId: 302268
dashedName: fibonacci-sequence
---

# --description--

ให้เขียนฟังก์ชันเพื่อหาเลข Fibonacci ตัวที่ <code>n</code>

เลข Fibonacci ตัวที่ <code>n</code> จะหาได้จาก:

<code>F<sub>n</sub> = F<sub>n-1</sub> + F<sub>n-2</sub></code>

โดยเลขสองตัวแรกของลำดับจะเป็น 0 กับ 1

ดังนั้นลำดับ Fibonacci จะมีค่าเป็น 0, 1, 1, 2, 3, 5, 8, 13...

# --hints--

`fibonacci` ต้องเป็นฟังก์ชัน

```js
assert(typeof fibonacci === 'function');
```

`fibonacci(2)` ต้องคืนค่าเป็นตัวเลข

```js
assert(typeof fibonacci(2) == 'number');
```

`fibonacci(3)` ต้องคืนค่าเป็น 2

```js
assert.equal(fibonacci(3), 2);
```

`fibonacci(5)` ต้องคืนค่าเป็น 5

```js
assert.equal(fibonacci(5), 5);
```

`fibonacci(10)` ต้องคืนค่าเป็น 55

```js
assert.equal(fibonacci(10), 55);
```

# --seed--

## --seed-contents--

```js
function fibonacci(n) {

}
```

# --solutions--

```js
function fibonacci(n) {
  let a = 0, b = 1, t;
  while (--n >= 0) {
    t = a;
    a = b;
    b += t;
  }
  return a;
}
```
