---
id: 5900f4f81000cf542c51000b
title: 'Problem 396: Weak Goodstein sequence'
challengeType: 5
forumTopicId: 302061
dashedName: problem-396-weak-goodstein-sequence
---

# --description--

สำหรับจำนวนเต็มบวกใดๆ $n$ ลำดับ Goodstein ของ $n$th $\\{g1, g2, g3, \ldots\\}$ ถูกกำหนดเป็น:

- $g_1 = n$
- สำหรับ $k > 1$ $g_k$ ได้มาจากการเขียน $g_{k - 1}$ ในฐาน $k$ โดยตีความว่าเป็นเลขฐาน $k + 1$ แล้วลบ 1

ลำดับจะสิ้นสุดลงเมื่อ $g_k$ กลายเป็น 0

ตัวอย่างเช่น ลำดับ Goodstein $6$th คือ $\\{6, 11, 17, 25, \ldots\\}$

- $g_1 = 6$
- $g_2 = 11$ เนื่องจาก $6 = 110_2$, $110_3 = 12$ และ $12 - 1 = 11$
- $g_3 = 17$ เนื่องจาก $11 = 102_3$, $102_4 = 18$ และ $18 - 1 = 17$
- $g_4 = 25$ เนื่องจาก 17$ = 101_4$, $101_5 = 26$ และ 26$ - 1 = 25$

และอื่นๆ

สามารถแสดงให้เห็นได้ว่าลำดับ Goodstein ทุกลำดับสิ้นสุดลง

ให้ $G(n)$ เป็นจำนวนองค์ประกอบที่ไม่ใช่ศูนย์ในลำดับ Goodstein $n$th

สามารถตรวจสอบได้ว่า $G(2) = 3$, $G(4) = 21$ and $G(6) = 381$.

นอกจากนี้ยังสามารถตรวจสอบได้ว่า $\sum G(n) = 2517$ สำหรับ $1 ≤ n &lt; 8$.

หา 9 หลักสุดท้ายของ $\sum G(n)$ สำหรับ $1 ≤ n &lt; 16$

# --hints--

`weakGoodsteinSequence()` ควร return `173214653`.

```js
assert.strictEqual(weakGoodsteinSequence(), 173214653);
```

# --seed--

## --seed-contents--

```js
function weakGoodsteinSequence() {

  return true;
}

weakGoodsteinSequence();
```

# --solutions--

```js
// solution required
```
