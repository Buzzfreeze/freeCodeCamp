---
id: a77dbc43c33f39daa4429b4f
title: Boo who
challengeType: 5
forumTopicId: 16000
dashedName: boo-who
---

# --description--

ให้สร้างฟังก์ชันที่ตรวจสอบว่าค่าที่รับเข้ามาเป็น boolean หรือไม่ และให้คืนค่าเป็น `true` ถ้าเป็น boolean หรือ `false` ถ้าไม่ใช้ boolean
โดย boolean จะมีค่าเป็น `true` หรือ `false` เท่านั้น


# --hints--

การเรียกใช้ฟังก์ชัน `booWho(true)` ต้องได้ค่าเป็น `true`

```js
assert.strictEqual(booWho(true), true);
```

การเรียกใช้ฟังก์ชัน `booWho(false)` ต้องได้ค่าเป็น `true`

```js
assert.strictEqual(booWho(false), true);
```

การเรียกใช้ฟังก์ชัน `booWho([1, 2, 3])` ต้องได้ค่าเป็น `false`

```js
assert.strictEqual(booWho([1, 2, 3]), false);
```

การเรียกใช้ฟังก์ชัน `booWho([].slice)` ต้องได้ค่าเป็น `false`

```js
assert.strictEqual(booWho([].slice), false);
```

การเรียกใช้ฟังก์ชัน `booWho({ "a": 1 })` ต้องได้ค่าเป็น `false`

```js
assert.strictEqual(booWho({ a: 1 }), false);
```

การเรียกใช้ฟังก์ชัน `booWho(1)` ต้องได้ค่าเป็น `false`

```js
assert.strictEqual(booWho(1), false);
```

การเรียกใช้ฟังก์ชัน `booWho(NaN)` ต้องได้ค่าเป็น `false`

```js
assert.strictEqual(booWho(NaN), false);
```

การเรียกใช้ฟังก์ชัน `booWho("a")` ต้องได้ค่าเป็น `false`

```js
assert.strictEqual(booWho('a'), false);
```

การเรียกใช้ฟังก์ชัน `booWho("true")` ต้องได้ค่าเป็น `false`

```js
assert.strictEqual(booWho('true'), false);
```

การเรียกใช้ฟังก์ชัน `booWho("false")` ต้องได้ค่าเป็น `false`

```js
assert.strictEqual(booWho('false'), false);
```

# --seed--

## --seed-contents--

```js
function booWho(bool) {
  return bool;
}

booWho(null);
```

# --solutions--

```js
function booWho(bool) {
  return typeof bool === "boolean";
}

booWho(null);
```
