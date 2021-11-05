---
id: 5900f4021000cf542c50ff13
title: 'Problem 149: Searching for a maximum-sum subsequence'
challengeType: 5
forumTopicId: 301778
dashedName: problem-149-searching-for-a-maximum-sum-subsequence
---

# --description--

เมื่อดูจากตารางด้านล่าง จะเป็นเรื่องง่ายที่จะตรวจสอบว่าผลรวมสูงสุดของตัวเลขที่อยู่ติดกันในทุกทิศทาง (แนวนอน แนวตั้ง เส้นทแยงมุม หรือแนวต้าน) เท่ากับ 16 ดอลลาร์ (= 8 + 7 + 1)$

$$\begin{array}{|r|r|r|r|}
  \hline
  −2 &  5 &  3 & 2 \\\\ \hline
   9 & −6 &  5 & 1 \\\\ \hline
   3 &  2 &  7 & 3 \\\\ \hline
  −1 &  8 & −4 & 8 \\\\ \hline
\end{array}$$

การค้นหาซ้ำ แต่ในระดับที่ใหญ่กว่ามาก:


ขั้นแรก สร้างตัวเลขสุ่มหลอกสี่ล้านตัวโดยใช้รูปแบบเฉพาะของสิ่งที่เรียกว่า "Lagged Fibonacci Generator":

สำหรับ $1 ≤ k ≤ 55$, $s_k = (100003 − 200003k + 300007{k}^3) \\ (modulo\\ 1000000) − 500000$.

สำหรับ $56 ≤ k ≤ 4000000$, $s_k = (s_{k − 24} + s_{k − 55} + 1000000) \\ (modulo\\ 1000000) − 500000$.

ดังนั้น $s_{10} = −393027$ and $s_{100} = 86613$.

จากนั้นเงื่อนไขของ $s$ จะถูกจัดเรียงในตาราง 2000×2000 โดยใช้ตัวเลข 2000 ตัวแรกเพื่อเติมแถวแรก (ตามลำดับ) ตัวเลข 2000 ตัวถัดไปเพื่อเติมแถวที่สอง และอื่นๆ

สุดท้าย ให้หาผลรวมสูงสุดของ (จำนวนเท่าใดก็ได้) ของรายการที่อยู่ติดกันในทิศทางใดก็ได้ (แนวนอน แนวตั้ง แนวทแยง หรือแนวต้าน)

# --hints--

`maximumSubSequence()` ควร return `52852124`.

```js
assert.strictEqual(maximumSubSequence(), 52852124);
```

# --seed--

## --seed-contents--

```js
function maximumSubSequence() {

  return true;
}

maximumSubSequence();
```

# --solutions--

```js
// solution required
```
