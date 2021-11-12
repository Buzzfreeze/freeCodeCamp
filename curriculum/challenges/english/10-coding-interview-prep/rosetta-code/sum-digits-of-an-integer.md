---
id: 5a23c84252665b21eecc803f
title: Sum digits of an integer
challengeType: 5
forumTopicId: 302331
dashedName: sum-digits-of-an-integer
---

# --description--

เขียนฟังก์ชันที่รับstringเป็นพารามิเตอร์ stringนี้แสดงตัวเลขที่สามารถอยู่ในฐานใดก็ได้ (น้อยกว่า 37) และส่งคืนผลรวมของตัวเลข

<ul>
  <li><b>1</b><sub>10</sub> sums to <b>1</b></li>
  <li><b>1234</b><sub>10</sub> sums to <b>10</b></li>
  <li><b>fe</b><sub>16</sub> sums to <b>29</b></li>
  <li><b>f0e</b><sub>16</sub> sums to <b>29</b></li>
</ul>

# --hints--

`sumDigits` ควรเป็น function.

```js
assert(typeof sumDigits == 'function');
```

`sumDigits("1")` ควร return number.

```js
assert(typeof sumDigits('1') == 'number');
```

`sumDigits("1")` ควร return `1`.

```js
assert.equal(sumDigits('1'), 1);
```

`sumDigits("12345")` ควร return `15`.

```js
assert.equal(sumDigits('12345'), 15);
```

`sumDigits("254")` ควร return `11`.

```js
assert.equal(sumDigits('254'), 11);
```

`sumDigits("fe")` ควร return `29`.

```js
assert.equal(sumDigits('fe'), 29);
```

`sumDigits("f0e")` ควร return `29`.

```js
assert.equal(sumDigits('f0e'), 29);
```

`sumDigits("999ABCXYZ")` ควร return `162`.

```js
assert.equal(sumDigits('999ABCXYZ'), 162);
```

# --seed--

## --seed-contents--

```js
function sumDigits(n) {

}
```

# --solutions--

```js
function sumDigits(n) {
  n += '';
  for (var s = 0, i = 0, e = n.length; i < e; i += 1)
    s += parseInt(n.charAt(i), 36);
  return s;
}
```
