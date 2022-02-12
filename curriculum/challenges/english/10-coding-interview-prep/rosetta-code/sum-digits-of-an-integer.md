---
id: 5a23c84252665b21eecc803f
title: Sum digits of an integer
challengeType: 5
forumTopicId: 302331
dashedName: sum-digits-of-an-integer
---

# --description--

เขียนฟังก์ชันที่รับสตริงเป็นพารามิเตอร์ โดยสตริงนี้แทนตัวเลขที่สามารถอยู่ในฐานใดก็ได้ (น้อยกว่า 37) และคืนค่าเป็นผลรวมของแต่ละหลัก

<ul>
  <li><b>1</b><sub>10</sub> จะมีผลรวมเป็น <b>1</b></li>
  <li><b>1234</b><sub>10</sub> จะมีผลรวมเป็น <b>10</b></li>
  <li><b>fe</b><sub>16</sub> จะมีผลรวมเป็น <b>29</b></li>
  <li><b>f0e</b><sub>16</sub> จะมีผลรวมเป็น <b>29</b></li>
</ul>

# --hints--

`sumDigits` ต้องเป็นฟังก์ชัน

```js
assert(typeof sumDigits == 'function');
```

`sumDigits("1")` ต้องคืนค่าเป็นตัวเลข

```js
assert(typeof sumDigits('1') == 'number');
```

`sumDigits("1")` ต้องคืนค่าเป็น `1`

```js
assert.equal(sumDigits('1'), 1);
```

`sumDigits("12345")` ต้องคืนค่าเป็น `15`

```js
assert.equal(sumDigits('12345'), 15);
```

`sumDigits("254")` ต้องคืนค่าเป็น `11`

```js
assert.equal(sumDigits('254'), 11);
```

`sumDigits("fe")` ต้องคืนค่าเป็น `29`

```js
assert.equal(sumDigits('fe'), 29);
```

`sumDigits("f0e")` ต้องคืนค่าเป็น `29`

```js
assert.equal(sumDigits('f0e'), 29);
```

`sumDigits("999ABCXYZ")` ต้องคืนค่าเป็น `162`

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
