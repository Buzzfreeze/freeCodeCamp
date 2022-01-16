---
id: afcc8d540bea9ea2669306b6
title: Repeat a String Repeat a String
challengeType: 5
forumTopicId: 16041
dashedName: repeat-a-string-repeat-a-string
---

# --description--

แบบทดสอบนี้ให้คัดลอก string `str` (argument แรก) เป็นจำนวน `num` ครั้ง (argument ที่สอง) และคืนค่า string ที่ได้ออกมา ถ้า `num` ไม่ใช่เลขจำนวนเต็มบวก ให้คืนค่าเป็น empty string (`""`) แทน และห้ามใช้ method `.repeat()`

# --hints--

การเรียกใช้ฟังก์ชัน `repeatStringNumTimes("*", 3)` ต้องได้ค่าเป็น string `***`

```js
assert(repeatStringNumTimes('*', 3) === '***');
```

การเรียกใช้ฟังก์ชัน `repeatStringNumTimes("abc", 3)` ต้องได้ค่าเป็น string `abcabcabc`

```js
assert(repeatStringNumTimes('abc', 3) === 'abcabcabc');
```

การเรียกใช้ฟังก์ชัน `repeatStringNumTimes("abc", 4)` ต้องได้ค่าเป็น string `abcabcabcabc`

```js
assert(repeatStringNumTimes('abc', 4) === 'abcabcabcabc');
```

การเรียกใช้ฟังก์ชัน `repeatStringNumTimes("abc", 1)` ต้องได้ค่าเป็น string `abc`

```js
assert(repeatStringNumTimes('abc', 1) === 'abc');
```

การเรียกใช้ฟังก์ชัน `repeatStringNumTimes("*", 8)` ต้องได้ค่าเป็น string `********`

```js
assert(repeatStringNumTimes('*', 8) === '********');
```

การเรียกใช้ฟังก์ชัน `repeatStringNumTimes("abc", -2)` ต้องได้ค่าเป็น empty string (`""`)

```js
assert(repeatStringNumTimes('abc', -2) === '');
```

ห้ามใช้ method `repeat()`

```js
assert(!/\.repeat/g.test(code));
```

การเรียกใช้ฟังก์ชัน `repeatStringNumTimes("abc", 0)` ต้องได้ค่าเป็น `""`

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
