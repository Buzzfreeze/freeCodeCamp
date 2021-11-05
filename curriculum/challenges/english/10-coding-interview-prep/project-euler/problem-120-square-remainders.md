---
id: 5900f3e41000cf542c50fef7
title: 'Problem 120: Square remainders'
challengeType: 5
forumTopicId: 301747
dashedName: problem-120-square-remainders
---

# --description--

ให้ `r` เป็นเศษเหลือเมื่อ ${(a − 1)}^n + {(a + 1)}^n$ หารด้วย $a^2$

ตัวอย่างเช่น ถ้า $a = 7$ และ $n = 3$ แล้ว $r = 42: 6^3 + 8^3 = 728 ≡ 42 \\ \text{mod}\\ 49$ และในขณะที่ `n` แตกต่างกันไป `r` ก็เช่นกัน แต่สำหรับ $a = 7$ ปรากฎว่า $r_{max} = 42$

สำหรับ $3 ≤ a ≤ 1000$ ให้หา $\sum{r}_{max}$

# --hints--

`squareRemainders()` ควร return `333082500`.

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
