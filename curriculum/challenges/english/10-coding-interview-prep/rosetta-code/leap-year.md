---
id: 5a23c84252665b21eecc7ede
title: Leap year
challengeType: 5
forumTopicId: 302300
dashedName: leap-year
---

# --description--

ให้เช็คว่าปีนั้นเป็นปีอธิกสุรทิน (leap year) หรือไม่

# --hints--

`isLeapYear` ต้องเป็นฟังก์ชัน

```js
assert(typeof isLeapYear == 'function');
```

`isLeapYear()` ต้องคืนค่าเป็น boolean

```js
assert(typeof isLeapYear(2018) == 'boolean');
```

`isLeapYear(2018)` ต้องคืนค่าเป็น `false`

```js
assert.equal(isLeapYear(2018), false);
```

`isLeapYear(2016)` ต้องคืนค่าเป็น `true`

```js
assert.equal(isLeapYear(2016), true);
```

`isLeapYear(2000)` ต้องคืนค่าเป็น `true`

```js
assert.equal(isLeapYear(2000), true);
```

`isLeapYear(1900)` ต้องคืนค่าเป็น `false`

```js
assert.equal(isLeapYear(1900), false);
```

`isLeapYear(1996)` ต้องคืนค่าเป็น `true`

```js
assert.equal(isLeapYear(1996), true);
```

`isLeapYear(1800)` ต้องคืนค่าเป็น `false`

```js
assert.equal(isLeapYear(1800), false);
```

# --seed--

## --seed-contents--

```js
function isLeapYear(year) {

}
```

# --solutions--

```js
function isLeapYear(year) {
  return year % 100 === 0 ? year % 400 === 0 : year % 4 === 0;
}
```
