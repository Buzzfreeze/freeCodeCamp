---
id: 5900f4a51000cf542c50ffb7
title: 'Problem 312: Cyclic paths on Sierpiński graphs'
challengeType: 5
forumTopicId: 301968
dashedName: problem-312-cyclic-paths-on-sierpiski-graphs
---

# --description--

- กราฟ Sierpiński ของคำสั่ง-1 ($S_1$) เป็นรูปสามเหลี่ยมด้านเท่า
- $S_{n + 1}$ ได้มาจาก $S_n$ โดยวางสำเนาสามชุดของ $S_n$ เพื่อให้สำเนาทุกคู่มีมุมเดียวกัน

<img class="img-responsive center-block" alt="Sierpinski graphs of order-1 to order-5" src="https://cdn.freecodecamp.org/curriculum/project-euler/cyclic-paths-on-sierpinski-graphs-1.gif" style="background-color: white; padding: 10px;">

ให้ $C(n)$ เป็นจำนวนรอบที่ผ่านจุดยอดทั้งหมดของ $S_n$ เพียงครั้งเดียว ตัวอย่างเช่น $C(3) = 8$ เนื่องจากสามารถวาดแปดรอบดังกล่าวบน $S_3$ ดังที่แสดงด้านล่าง:

<img class="img-responsive center-block" alt="eight cycles that pass exactly once through all vertices of S_3" src="https://cdn.freecodecamp.org/curriculum/project-euler/cyclic-paths-on-sierpinski-graphs-2.gif" style="background-color: white; padding: 10px;">

นอกจากนี้ยังสามารถตรวจสอบได้ว่า:

$$\begin{align}
  & C(1) = C(2) = 1 \\\\
  & C(5) = 71\\,328\\,803\\,586\\,048 \\\\
  & C(10 000)\bmod {10}^8 = 37\\,652\\,224 \\\\
  & C(10 000)\bmod {13}^8 = 617\\,720\\,485 \\\\
\end{align}$$

หา $C(C(C(10\\,000)))\bmod {13}^8$.

# --hints--

`pathsOnSierpinskiGraphs()` ควร return `324681947`.

```js
assert.strictEqual(pathsOnSierpinskiGraphs(), 324681947);
```

# --seed--

## --seed-contents--

```js
function pathsOnSierpinskiGraphs() {

  return true;
}

pathsOnSierpinskiGraphs();
```

# --solutions--

```js
// solution required
```
