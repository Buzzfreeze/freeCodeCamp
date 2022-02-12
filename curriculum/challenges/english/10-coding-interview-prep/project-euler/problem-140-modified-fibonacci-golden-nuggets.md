---
id: 5900f3fa1000cf542c50ff0c
title: 'Problem 140: Modified Fibonacci golden nuggets'
challengeType: 5
forumTopicId: 301769
dashedName: problem-140-modified-fibonacci-golden-nuggets
---

# --description--


พิจารณาอนุกรมพหุนามอนันต์ $A_G(x) = xG_1 + x^2G_2 + x^3G_3 + \cdots$ โดยที่ $G_k$ เป็นเทอม $k$th ของความสัมพันธ์การเกิดซ้ำลำดับที่สอง $G_k = G_{k − 1 } + G_{k − 2}, G_1 = 1$ และ $G_2 = 4$; นั่นคือ $1, 4, 5, 9, 14, 23, \ldots$.

สำหรับปัญหานี้ เราจะพิจารณาถึงค่าของ $x$ ซึ่ง $A_G(x)$ เป็นจำนวนเต็มบวก

ค่าที่สอดคล้องกันของ $x$ สำหรับตัวเลขห้าตัวแรกแสดงอยู่ด้านล่าง

| $x$                         | $A_G(x)$ |
|-----------------------------|----------|
| $\frac{\sqrt{5} − 1}{4}$    | $1$      |
| $\frac{2}{5}$               | $2$      |
| $\frac{\sqrt{22} − 2}{6}$   | $3$      |
| $\frac{\sqrt{137} − 5}{14}$ | $4$      |
| $\frac{1}{2}$               | $5$      |

เราจะเรียก $A_G(x)$ ว่า golden nugget  
ถ้า $x$ เป็นจำนวนตรรกยะ เช่น golden nugget ตัวที่ 20 คือ 211345365

ให้หาผลรวมของ golden nugget 30 ลำดับแรก

# --hints--

`modifiedGoldenNuggets()` ต้องคืนค่าเป็น `5673835352990`

```js
assert.strictEqual(modifiedGoldenNuggets(), 5673835352990);
```

# --seed--

## --seed-contents--

```js
function modifiedGoldenNuggets() {

  return true;
}

modifiedGoldenNuggets();
```

# --solutions--

```js
// solution required
```
