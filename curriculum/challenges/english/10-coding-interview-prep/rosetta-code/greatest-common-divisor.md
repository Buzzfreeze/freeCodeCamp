---
id: 5a23c84252665b21eecc7e82
title: Greatest common divisor
challengeType: 5
forumTopicId: 302277
dashedName: greatest-common-divisor
---

# --description--

ให้เขียนฟังก์ชันที่คืนค่าตัวหารร่วมมากของจำนวนเต็มสองตัว

# --hints--

`gcd` ต้องเป็นฟังก์ชัน

```js
assert(typeof gcd == 'function');
```

`gcd(24,36)` ต้องคืนค่าเป็นตัวเลข

```js
assert(typeof gcd(24, 36) == 'number');
```

`gcd(24,36)` ต้องคืนค่าเป็น `12`

```js
assert.equal(gcd(24, 36), 12);
```

`gcd(30,48)` ต้องคืนค่าเป็น `6`

```js
assert.equal(gcd(30, 48), 6);
```

`gcd(10,15)` ต้องคืนค่าเป็น `5`

```js
assert.equal(gcd(10, 15), 5);
```

`gcd(100,25)` ต้องคืนค่าเป็น `25`

```js
assert.equal(gcd(100, 25), 25);
```

`gcd(13,250)` ต้องคืนค่าเป็น `1`

```js
assert.equal(gcd(13, 250), 1);
```

`gcd(1300,250)` ต้องคืนค่าเป็น `50`

```js
assert.equal(gcd(1300, 250), 50);
```

# --seed--

## --seed-contents--

```js
function gcd(a, b) {

}
```

# --solutions--

```js
function gcd(a, b) {
  return b==0 ? Math.abs(a):gcd(b, a % b);
}
```
