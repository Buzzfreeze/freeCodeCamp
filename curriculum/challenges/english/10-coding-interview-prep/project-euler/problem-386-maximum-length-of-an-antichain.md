---
id: 5900f4ef1000cf542c510001
title: 'Problem 386: Maximum length of an antichain'
challengeType: 5
forumTopicId: 302050
dashedName: problem-386-maximum-length-of-an-antichain
---

# --description--

ให้ $n$ เป็นจำนวนเต็ม และ $S(n)$ เป็นเซตของตัวประกอบของ $n$

เซตย่อย $A$ ของ $S(n)$ เรียกว่า antichain ของ $S(n)$ ถ้า $A$ มีองค์ประกอบเพียงตัวเดียว หรือถ้าไม่มีองค์ประกอบของ $A$ ที่แบ่งองค์ประกอบอื่นๆ ของ $A $.

เช่น $S(30) = \\{1, 2, 3, 5, 6, 10, 15, 30\\}$

$\\{2, 5, 6\\}$ ไม่ใช่ antichain ของ $S(30)$

$\\{2, 3, 5\\}$ เป็น antichain ของ $S(30)$

ให้ $N(n)$ เป็นความยาวสูงสุดของ antichain ของ $S(n)$

ให้หา $\sum N(n)$ ถ้า $1 ≤ n ≤ {10}^8$

# --hints--

`maximumLengthOfAntichain()` ต้องคืนค่าเป็น `528755790`

```js
assert.strictEqual(maximumLengthOfAntichain(), 528755790);
```

# --seed--

## --seed-contents--

```js
function maximumLengthOfAntichain() {

  return true;
}

maximumLengthOfAntichain();
```

# --solutions--

```js
// solution required
```
