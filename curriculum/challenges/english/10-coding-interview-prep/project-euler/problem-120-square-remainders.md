---
id: 5900f3e41000cf542c50fef7
title: 'Problem 120: Square remainders'
challengeType: 5
forumTopicId: 301747
dashedName: problem-120-square-remainders
---

# --description--

ให้ `r` เป็นเศษเหลือเมื่อนำ ${(a − 1)}^n + {(a + 1)}^n$ ไปหารด้วย $a^2$

เช่น ถ้า $a = 7$ และ $n = 3$ แล้ว $r = 42: 6^3 + 8^3 = 728 ≡ 42 \\ \text{mod}\\ 49$ และในขณะที่ `n` และ `r` จะเปลี่ยนค่าได้ แต่ถ้า $a = 7$ แล้ว $r_{max} = 42$

สำหรับ $3 ≤ a ≤ 1000$ ให้หา $\sum{r}_{max}$

# --hints--

`squareRemainders()` ต้องคืนค่าเป็น `333082500`

```js
assert.strictEqual(squareRemainders(), 333082500);
```

# --seed--

## --seed-contents--

```js
function squareRemainders() {

  return true;
}

squareRemainders();
```

# --solutions--

```js
// solution required
```
