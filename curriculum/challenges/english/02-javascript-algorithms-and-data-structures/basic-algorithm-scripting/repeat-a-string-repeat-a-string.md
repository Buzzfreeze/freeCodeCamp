---
id: afcc8d540bea9ea2669306b6
title: Repeat a String Repeat a String
challengeType: 5
forumTopicId: 16041
dashedName: repeat-a-string-repeat-a-string
---

# --description--

แบบทดสอบนี้ให้ทำซ้ำ string `str` (argument แรก) ตามจำนวนครั้งที่กำหนดใน `num` (argument ที่สอง) และคืนค่า empty string หาก `num` ไม่ใช่เลขจำนวนเต็มบวก และห้ามใช้ method `.repeat()`

# --hints--

`repeatStringNumTimes("*", 3)` ควรคืนค่าเป็น string `***`.

```js
assert(repeatStringNumTimes('*', 3) === '***');
```

`repeatStringNumTimes("abc", 3)` ควรคืนค่าเป็น string `abcabcabc`.

```js
assert(repeatStringNumTimes('abc', 3) === 'abcabcabc');
```

`repeatStringNumTimes("abc", 4)` ควรคืนค่าเป็น string `abcabcabcabc`.

```js
assert(repeatStringNumTimes('abc', 4) === 'abcabcabcabc');
```

`repeatStringNumTimes("abc", 1)` ควรคืนค่าเป็น string `abc`.

```js
assert(repeatStringNumTimes('abc', 1) === 'abc');
```

`repeatStringNumTimes("*", 8)` ควรคืนค่าเป็น string `********`.

```js
assert(repeatStringNumTimes('*', 8) === '********');
```

`repeatStringNumTimes("abc", -2)` ควรคืนค่า empty string (`""`)

```js
assert(repeatStringNumTimes('abc', -2) === '');
```

ไม่ควรใช้ method `repeat()`

```js
assert(!/\.repeat/g.test(code));
```

`repeatStringNumTimes("abc", 0)` ควรคืนค่าเป็น `""`.

```js
assert(repeatStringNumTimes('abc', 0) === '');
```

# --seed--

## --seed-contents--

```js
function repeatStringNumTimes(str, num) {
  return str;
}

repeatStringNumTimes("abc", 3);
```

# --solutions--

```js
function repeatStringNumTimes(str, num) {
  if (num < 1) return '';
  return num === 1 ? str : str + repeatStringNumTimes(str, num-1);
}

repeatStringNumTimes("abc", 3);
```
