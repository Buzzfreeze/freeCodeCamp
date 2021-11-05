---
id: 5900f5191000cf542c51002b
title: 'Problem 428: Necklace of Circles'
challengeType: 5
forumTopicId: 302098
dashedName: problem-428-necklace-of-circles
---

# --description--

ให้ $a$, $b$ และ $c$ เป็นจำนวนบวก

ให้ $W$, $X$, $Y$, $Z$ เป็นสี่จุด collinear โดยที่ $|WX| = a$, $|XY| = b$, $|YZ| = c$ และ $|WZ| = a + b + c$

ให้ $C_{\text{in}}$ เป็นวงกลมที่มีเส้นผ่านศูนย์กลาง $XY$

ให้ $C_{\text{out}}$ เป็นวงกลมที่มีเส้นผ่านศูนย์กลาง $WZ$

Triplet ($a$, $b$, $c$) เรียกว่า *necklace triplet* ถ้าคุณสามารถวาง $k ≥ 3$ วงกลมที่แตกต่างกัน $C_1, C_2, \ldots, C_k$ ในลักษณะที่:

- $C_i$ ไม่มี common interior points สำหรับ $C_j$ สำหรับ $1 ≤ i$, $j ≤ k$ และ $i ≠ j$,
- $C_i$ เป็น tangent สำหรับ $C_{\text{in}}$ และ $C_{\text{out}}$ สำหรับ $1 ≤ i ≤ k$,
- $C_i$ เป็น tangent สำหรับ $C_{i + 1}$ for $1 ≤ i &lt; k$, และ
- $C_k$ เป็น tangent สำหรับ $C_1$.

ตัวอย่างเช่น (5, 5, 5) และ (4, 3, 21) เป็น *necklace triplet* แบบสามส่วน ในขณะที่สามารถแสดงได้ว่า (2, 2, 5) ไม่ใช่

<img class="img-responsive center-block" alt="a visual representation of a necklace triplet" src="https://cdn.freecodecamp.org/curriculum/project-euler/necklace-of-circles.png" style="background-color: white; padding: 10px;">

ให้ $T(n)$ เป็นจำนวนสามเท่าของnecklace triplet $(a, b, c)$ โดยที่ $a$, $b$ และ $c$ เป็นจำนวนเต็มบวก และ $b ≤ n$ ตัวอย่างเช่น $T(1) = 9$, $T(20) = 732$ and $T(3\\,000) = 438\\,106$.

หา $T(1\\,000\\,000\\,000)$.

# --hints--

`necklace(1000000000)` ควร return `747215561862`.

```js
assert.strictEqual(necklace(1000000000), 747215561862);
```

# --seed--

## --seed-contents--

```js
function necklace(n) {

  return true;
}

necklace(1000000000)
```

# --solutions--

```js
// solution required
```
