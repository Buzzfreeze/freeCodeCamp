---
id: 5900f4fd1000cf542c51000f
title: 'Problem 401: Sum of squares of divisors'
challengeType: 5
forumTopicId: 302069
dashedName: problem-401-sum-of-squares-of-divisors
---

# --description--

ตัวหารของ 6 คือ 1, 2, 3 และ 6

ผลรวมของกำลังสองของตัวเลขเหล่านี้คือ $1 + 4 + 9 + 36 = 50$

ให้ $\sigma_2(n)$ แทนผลรวมกำลังสองของตัวหารของ $n$ ดังนั้น $\sigma_2(6) = 50$

ให้ $\Sigma_2$ แทนฟังก์ชันสรุปของ $\sigma_2$  
นั่นคือ $\Sigma_2(n) = \sum \sigma_2(i)$ สำหรับ $i=1$ ถึง $n$  
6 ค่าแรกของ $\Sigma_2$ คือ: 1, 6, 16, 37, 63 และ 113

ให้หา $\Sigma_2({10}^{15})$ mod ${10}^9$

# --hints--

`sumOfSquaresDivisors()` ต้องคืนค่าเป็น `281632621`

```js
assert.strictEqual(sumOfSquaresDivisors(), 281632621);
```

# --seed--

## --seed-contents--

```js
function sumOfSquaresDivisors() {

  return true;
}

sumOfSquaresDivisors();
```

# --solutions--

```js
// solution required
```
