---
id: a77dbc43c33f39daa4429b4f
title: Boo who
challengeType: 5
forumTopicId: 16000
dashedName: boo-who
---

# --description--

ในการตรวจสอบค่าหนึ่งๆ ว่าเป็น boolean หรือไม่ ผลจากตรวจสอบจะคืนค่าเป็น `true` หรือ `false`
โดย boolean สามารถมีค่าเป็น `true` และ `false`


# --hints--

`booWho(true)` ควรคืนค่า `true` ออกมา

```js
assert.strictEqual(booWho(true), true);
```

`booWho(false)` ควรคืนค่า `true` ออกมา

```js
assert.strictEqual(booWho(false), true);
```

`booWho([1, 2, 3])` ควรคืนค่า `false` ออกมา

```js
assert.strictEqual(booWho([1, 2, 3]), false);
```

`booWho([].slice)` ควรคืนค่า `false` ออกมา

```js
assert.strictEqual(booWho([].slice), false);
```

`booWho({ "a": 1 })` ควรคืนค่า `false` ออกมา

```js
assert.strictEqual(booWho({ a: 1 }), false);
```

`booWho(1)` ควรคืนค่า `false` ออกมา

```js
assert.strictEqual(booWho(1), false);
```

`booWho(NaN)` ควรคืนค่า `false` ออกมา

```js
assert.strictEqual(booWho(NaN), false);
```

`booWho("a")` ควรคืนค่า `false` ออกมา

```js
assert.strictEqual(booWho('a'), false);
```

`booWho("true")` ควรคืนค่า `false` ออกมา

```js
assert.strictEqual(booWho('true'), false);
```

`booWho("false")` ควรคืนค่า `false` ออกมา

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
