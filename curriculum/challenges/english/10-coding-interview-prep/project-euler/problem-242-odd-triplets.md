---
id: 5900f45f1000cf542c50ff71
title: 'Problem 242: Odd Triplets'
challengeType: 5
forumTopicId: 301889
dashedName: problem-242-odd-triplets
---

# --description--

จาก {1,2,..., $n$} เรากำหนด $f(n, k)$ เป็นจำนวนชุดย่อยของ $k$-element โดยมีผลรวมขององค์ประกอบเป็นจำนวนคี่ ตัวอย่างเช่น $f(5,3) = 4$ เนื่องจากชุด {1,2,3,4,5} มีชุดย่อย 3 องค์ประกอบสี่ชุดที่มีผลรวมขององค์ประกอบคี่ เช่น: {1,2,4} , {1,3,5}, {2,3,4} และ {2,4,5}

เมื่อทั้งสามค่า $n$, $k$ และ $f(n, k)$ เป็นจำนวนคี่ เราบอกว่าพวกมันสร้างค่าคี่สามตัว $[n, k, f(n, k)]$

มีodd-tripletsที่มี $n ≤ 10$ คือ: $[1, 1, f(1, 1) = 1]$, $[5, 1, f(5, 1) = 3]$, $[5, 5, f(5, 5) = 1]$, $[9, 1, f(9, 1) = 5]$ และ $[9, 9, f(9, 9) = 1]$ .

มีodd-tripletsที่มี $n ≤ {10}^{12}$ กี่ตัว?

There are exactly five odd-triplets with $n ≤ 10$, namely: $[1, 1, f(1, 1) = 1]$, $[5, 1, f(5, 1) = 3]$, $[5, 5, f(5, 5) = 1]$, $[9, 1, f(9, 1) = 5]$ and $[9, 9, f(9, 9) = 1]$.

มี odd-triplets เท่าไหร่ที่มี $n ≤ {10}^{12}$?

# --hints--

`oddTriplets()` ควร return `997104142249036700`.

```js
assert.strictEqual(oddTriplets(), 997104142249036700);
```

# --seed--

## --seed-contents--

```js
function oddTriplets() {

  return true;
}

oddTriplets();
```

# --solutions--

```js
// solution required
```
