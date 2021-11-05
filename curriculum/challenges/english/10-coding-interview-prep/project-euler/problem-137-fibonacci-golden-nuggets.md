---
id: 5900f3f51000cf542c50ff08
title: 'Problem 137: Fibonacci golden nuggets'
challengeType: 5
forumTopicId: 301765
dashedName: problem-137-fibonacci-golden-nuggets
---

# --description--

พิจารณาอนุกรมพหุนามอนันต์ $A_{F}(x) = xF_1 + x^2F_2 + x^3F_3 + \ldots$ โดยที่ $F_k$ คือพจน์ที่ $k$th ในลำดับfibonacci: $1, 1, 2, 3, 5, 8, \ldots$; นั่นคือ $F_k = F_{k − 1} + F_{k − 2}, F_1 ​​= 1$ และ $F_2 = 1$

สำหรับปัญหานี้ เราจะสนใจค่าของ $x$ ซึ่ง $A_{F}(x)$ เป็นจำนวนเต็มบวก

$$\begin{align}
A_F(\frac{1}{2}) & = (\frac{1}{2}) × 1 + {(\frac{1}{2})}^2 × 1 + {(\frac{1}{2})}^3 × 2 + {(\frac{1}{2})}^4 × 3 + {(\frac{1}{2})}^5 × 5 + \cdots \\\\
                 & = \frac{1}{2} + \frac{1}{4} + \frac{2}{8} + \frac{3}{16} + \frac{5}{32} + \cdots \\\\
                 & = 2
\end{align}$$

ค่าที่สอดคล้องกันของ $x$ สำหรับตัวเลขธรรมชาติห้าตัวแรกแสดงอยู่ด้านล่าง
| $x$                       | $A_F(x)$ |
|---------------------------|----------|
| $\sqrt{2} − 1$            | $1$      |
| $\frac{1}{2}$             | $2$      |
| $\frac{\sqrt{13} − 2}{3}$ | $3$      |
| $\frac{\sqrt{89} − 5}{8}$ | $4$      |
| $\frac{\sqrt{34} − 3}{5}$ | $5$      |

เราจะเรียก $A_F(x)$ ว่า golden nugget ถ้า $x$ มีเหตุผล เพราะมันหายากขึ้นเรื่อยๆ ตัวอย่างเช่น golden nugget ที่ 10 คือ 74049690

หาค่าในลำดับที่ 15th golden nugget.

# --hints--

`goldenNugget()` ควร return `1120149658760`.

```js
assert.strictEqual(goldenNugget(), 1120149658760);
```

# --seed--

## --seed-contents--

```js
function goldenNugget() {

  return true;
}

goldenNugget();
```

# --solutions--

```js
// solution required
```
