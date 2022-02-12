---
id: 5900f45f1000cf542c50ff71
title: 'Problem 242: Odd Triplets'
challengeType: 5
forumTopicId: 301889
dashedName: problem-242-odd-triplets
---

# --description--

จาก {1,2,..., $n$} เรากำหนด $f(n, k)$ เป็นจำนวน subset ของ $k$ โดยมีผลรวมขององค์ประกอบเป็นจำนวนคี่  
เช่น $f(5,3) = 4$ เนื่องจากเซ็ท {1,2,3,4,5} มี subset 3 องค์ประกอบสี่เซ็ทที่มีผลรวมขององค์ประกอบคี่ เช่น {1,2,4} , {1,3,5}, {2,3,4} และ {2,4,5}

เมื่อทั้งสามค่า $n$, $k$ และ $f(n, k)$ เป็นจำนวนคี่ จะเรียกว่า $[n, k, f(n, k)]$ เป็น odd-triplet

มี odd-triplet ที่มี $n ≤ 10$ คือ: $[1, 1, f(1, 1) = 1]$, $[5, 1, f(5, 1) = 3]$, $[5, 5, f(5, 5) = 1]$, $[9, 1, f(9, 1) = 5]$ และ $[9, 9, f(9, 9) = 1]$ .

มี odd-triplet ที่มี $n ≤ {10}^{12}$ กี่ตัว?

มี odd-triplet ห้าตัวที่ $n ≤ 10$, คือ:  
$[1, 1, f(1, 1) = 1]$, $[5, 1, f(5, 1) = 3]$, $[5, 5, f(5, 5) = 1]$, $[9, 1, f(9, 1) = 5]$ และ $[9, 9, f(9, 9) = 1]$

มี odd-triplet กี่ตัวที่ $n ≤ {10}^{12}$?

# --hints--

`oddTriplets()` ต้องคืนค่าเป็น `997104142249036700`

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
