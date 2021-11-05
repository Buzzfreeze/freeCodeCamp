---
id: 5900f4031000cf542c50ff15
title: >-
  Problem 150: Searching a triangular array for a sub-triangle having
  minimum-sum
challengeType: 5
forumTopicId: 301781
dashedName: problem-150-searching-a-triangular-array-for-a-sub-triangle-having-minimum-sum
---

# --description--

ในarrayสามเหลี่ยมของจำนวนเต็มบวกและจำนวนเต็มลบ เราต้องการหาสามเหลี่ยมย่อยเพื่อให้ผลรวมของตัวเลขที่อยู่ในนั้นมีค่าน้อยที่สุด

ในตัวอย่างด้านล่าง สามารถตรวจสอบได้โดยง่ายว่าสามเหลี่ยมที่ทำเครื่องหมายว่าตรงตามเงื่อนไขนี้โดยมีผลรวมเป็น −42

<img class="img-responsive center-block" alt="triangular array, with marked sub-triangle, having sum of -42" src="https://cdn.freecodecamp.org/curriculum/project-euler/searching-a-triangular-array-for-a-sub-triangle-having-minimum-sum.gif" style="background-color: white; padding: 10px;">

เราต้องการสร้างอาร์เรย์สามเหลี่ยมที่มีหนึ่งพันแถว ดังนั้นเราจึงสร้างตัวเลขสุ่มหลอก 500500 $s_k$ ในช่วง $±2^{19}$ โดยใช้ประเภทของตัวสร้างตัวเลขสุ่ม (เรียกว่าตัวสร้างที่สอดคล้องกันเชิงเส้น ) ดังนี้

$$\begin{align}
  t := & \\ 0\\\\
  \text{for}\\ & k = 1\\ \text{up to}\\ k = 500500:\\\\
  & t := (615949 × t + 797807)\\ \text{modulo}\\ 2^{20}\\\\
  & s_k := t − 219\\\\
\end{align}$$

ดังนั้น $s_1 = 273519$, $s_2 = −153582$, $s_3 = 450905$ เป็นต้น

triangular array ถูกสร้างขึ้นโดยใช้ pseudo-random numbers 

$$
s_1 \\\\
s_2\\;s_3 \\\\
s_4\\; s_5\\; s_6 \\\\
s_7\\; s_8\\; s_9\\; s_{10} \\\\
\ldots
$$

สามเหลี่ยมย่อยสามารถเริ่มต้นที่องค์ประกอบใดๆ ของอาร์เรย์และขยายลงไปได้เท่าที่เราต้องการ (การนำสององค์ประกอบที่อยู่ด้านล่างโดยตรงจากแถวถัดไป สามองค์ประกอบด้านล่างโดยตรงจากแถวหลังจากนั้น เป็นต้น)

"ผลรวมของรูปสามเหลี่ยมย่อย" หมายถึงผลรวมขององค์ประกอบทั้งหมดที่อยู่ในรูป

หาผลรวมสามเหลี่ยมย่อยที่เล็กที่สุดที่เป็นไปได้

# --hints--

`smallestSubTriangleSum()` ควร return `-271248680`.

```js
assert.strictEqual(smallestSubTriangleSum(), -271248680);
```

# --seed--

## --seed-contents--

```js
function smallestSubTriangleSum() {

  return true;
}

smallestSubTriangleSum();
```

# --solutions--

```js
// solution required
```
