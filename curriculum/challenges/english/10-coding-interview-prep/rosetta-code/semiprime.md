---
id: 5eb3e4aa847216613aa81983
title: Semiprime
challengeType: 5
forumTopicId: 385318
dashedName: semiprime
---

# --description--

Semiprime number 
เป็นผลคุณของจำนวนเฉพาะ (จะเป็นจำนวนเฉพาะตัวเดียวกันก็ได้) [prime numbers](https://rosettacode.org/wiki/prime_number).

<pre>1679  =  23 x 73</pre>

# --instructions--
ให้เขียนฟังก์ชันที่คืนค่าเป็น true ถ้าตัวเลขเป็น semiprime หรือ false ถ้าไม่ใช่ semiprime

# --hints--

`isSemiPrime` ต้องเป็นฟังก์ชัน

```js
assert(typeof isSemiPrime === 'function');
```

`isSemiPrime(100)` ต้องคืนค่าเป็น boolean

```js
assert(typeof isSemiPrime(100) === 'boolean');
```

`isSemiPrime(100)` ต้องคืนค่าเป็น `false`

```js
assert.equal(isSemiPrime(100), false);
```

`isSemiPrime(504)` ต้องคืนค่าเป็น `false`

```js
assert.equal(isSemiPrime(504), false);
```

`isSemiPrime(4)` ต้องคืนค่าเป็น `true`

```js
assert.equal(isSemiPrime(4), true);
```

`isSemiPrime(46)` ต้องคืนค่าเป็น `true`

```js
assert.equal(isSemiPrime(46), true);
```

`isSemiPrime(13)` ต้องคืนค่าเป็น `false`

```js
assert.equal(isSemiPrime(13), false);
```

`isSemiPrime(74)` ต้องคืนค่าเป็น `true`

```js
assert.equal(isSemiPrime(74), true);
```

`isSemiPrime(1679)` ต้องคืนค่าเป็น `true`

```js
assert.equal(isSemiPrime(1679), true);
```

`isSemiPrime(2)` ต้องคืนค่าเป็น `false`

```js
assert.equal(isSemiPrime(2), false);
```

`isSemiPrime(95)` ต้องคืนค่าเป็น `true`

```js
assert.equal(isSemiPrime(95), true);
```

`isSemiPrime(124)` ต้องคืนค่าเป็น `false`

```js
assert.equal(isSemiPrime(124), false);
```

# --seed--

## --seed-contents--

```js
function isSemiPrime(n) {

}
```

# --solutions--

```js
function isSemiPrime(n) {
  if (n <= 3) return false;

  var ans = [];
  var done = false;
  while (!done) {
    if (n % 2 === 0) {
      ans.push(2);
      n /= 2;
      continue;
    }
    if (n % 3 === 0) {
      ans.push(3);
      n /= 3;
      continue;
    }
    if (n === 1) return ans.length == 2;
    var sr = Math.sqrt(n);
    done = true;
    // try to divide the checked number by all numbers till its square root.
    for (var i = 6; i <= sr; i += 6) {
      if (n % (i - 1) === 0) {
        // is n divisible by i-1?
        ans.push(i - 1);
        n /= i - 1;
        done = false;
        break;
      }
      if (n % (i + 1) === 0) {
        // is n divisible by i+1?
        ans.push(i + 1);
        n /= i + 1;
        done = false;
        break;
      }
    }
  }
  ans.push(n);
  return ans.length == 2;
}
```
