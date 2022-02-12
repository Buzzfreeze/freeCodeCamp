---
id: 5900f52e1000cf542c510041
title: 'Problem 450: Hypocycloid and Lattice points'
challengeType: 5
forumTopicId: 302123
dashedName: problem-450-hypocycloid-and-lattice-points
---

# --description--

hypocycloid คือเส้นโค้งที่วาดโดยจุดบนวงกลมเล็กๆ ที่กลิ้งไปมาในวงกลมที่ใหญ่กว่า 

สมการ parametric ของ hypocycloid ที่มีศูนย์กลางที่จุดกำเนิด และเริ่มต้นที่จุดขวาสุด คือ

$$x(t) = (R - r) \cos(t) + r \cos(\frac{R - r}{r}t)$$

$$y(t) = (R - r) \sin(t) - r \sin(\frac{R - r}{r} t)$$

โดยที่ $R$ คือรัศมีของวงกลมขนาดใหญ่ และ $r$ คือรัศมีของวงกลมขนาดเล็ก

ให้ $C(R, r)$ เป็นเซตของจุดต่าง ๆ ที่มีพิกัดจำนวนเต็มบน hypocycloid ที่มีรัศมี $R$ และ $r$ และมีค่าที่สอดคล้องกันของ $t$ ซึ่ง $\sin(t) $ และ $\cos(t)$ เป็นจำนวนตรรกยะ

ให้ $S(R, r) = \sum\_{(x,y) \in C(R, r)} |x| + |y|$ คือผลรวมของค่าสัมบูรณ์ของพิกัด $x$ และ $y$ ของจุดใน $C(R, r)$

ให้ $T(N) = \sum_{R = 3}^N \sum_{r=1}^{\left\lfloor \frac{R - 1}{2} \right\rfloor} S(R, r) $ เป็นผลรวมของ $S(R, r)$ ถ้า $R$ และ $r$ จำนวนเต็มบวก $R\leq N$ และ $2r &lt; R$

กำหนดให้:

$$\begin{align}
  C(3, 1) = & \\{(3, 0), (-1, 2), (-1,0), (-1,-2)\\} \\\\
  C(2500, 1000) = & \\{(2500, 0), (772, 2376), (772, -2376), (516, 1792), (516, -1792), (500, 0), (68, 504), \\\\
                  &(68, -504),(-1356, 1088), (-1356, -1088), (-1500, 1000), (-1500, -1000)\\}
\end{align}$$

**จุดสังเกต:** (-625, 0) 
ไม่ใช่องค์ประกอบของ $C(2500, 1000)$ เพราะ $\sin(t)$ ไม่ใช่จำนวนตรรกยะสำหรับค่าที่สอดคล้องกันของ t

$S(3, 1) = (|3| + |0|) + (|-1| + |2|) + (|-1| + |0|) + (|-1| + |-2|) = 10$

$T(3) = 10$; $T(10) = 524$; $T(100) = 580\\,442$; $T({10}^3) = 583\\,108\\,600$.

ให้หา $T({10}^6)$

# --hints--

`hypocycloidAndLatticePoints()` ต้องคืนค่าเป็น `583333163984220900`

```js
assert.strictEqual(hypocycloidAndLatticePoints(), 583333163984220900);
```

# --seed--

## --seed-contents--

```js
function hypocycloidAndLatticePoints() {

  return true;
}

hypocycloidAndLatticePoints();
```

# --solutions--

```js
// solution required
```
