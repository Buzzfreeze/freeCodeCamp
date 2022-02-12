---
id: 5900f5241000cf542c510037
title: 'Problem 440: GCD and Tiling'
challengeType: 5
forumTopicId: 302112
dashedName: problem-440-gcd-and-tiling
---

# --description--

เราต้องการเรียงกระดานที่มีความยาว $n$ และสูง 1 ให้สมบูรณ์ โดยมีบล็อก 1 × 2 หรือบล็อก 1 × 1 ที่มีทศนิยมเพียงหลักเดียว

<img class="img-responsive center-block" alt="ten blocks 1x1 with single decimal digit on top, and 1x2 block" src="https://cdn.freecodecamp.org/curriculum/project-euler/gcd-and-tiling-1.png" style="background-color: white; padding: 10px;">

เช่น ต่อไปนี้คือวิธีบางส่วนในการเรียงกระดานที่มีความยาว $n = 8$

<img class="img-responsive center-block" alt="examples of ways to tile a board of length n = 8" src="https://cdn.freecodecamp.org/curriculum/project-euler/gcd-and-tiling-2.png" style="background-color: white; padding: 10px;">

ให้ $T(n)$ เป็นจำนวนวิธีการเรียงต่อกันของกระดานที่มีความยาว $n$ ตามที่อธิบายไว้ข้างต้น

เช่น $T(1) = 10$ และ $T(2) = 101$

ให้ $S(L)$ เป็นผลรวมของ $\sum_{a, b, c} gcd(T(c^a), T(c^b))$ เมื่อ $1 ≤ a, b, c ≤ L$

ตัวอย่างเช่น

$$\begin{align}
  & S(2) = 10\\,444 \\\\
  & S(3) = 1\\,292\\,115\\,238\\,446\\,807\\,016\\,106\\,539\\,989 \\\\
  & S(4)\bmod 987\\,898\\,789 = 670\\,616\\,280.
\end{align}$$

ให้หา $S(2000)\bmod 987\\,898\\,789$

# --hints--

`gcdAndTiling()` ต้องคืนค่าเป็น `970746056`

```js
assert.strictEqual(gcdAndTiling(), 970746056);
```

# --seed--

## --seed-contents--

```js
function gcdAndTiling() {

  return true;
}

gcdAndTiling();
```

# --solutions--

```js
// solution required
```
