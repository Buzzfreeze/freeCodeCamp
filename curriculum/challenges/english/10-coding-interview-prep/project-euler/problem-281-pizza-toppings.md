---
id: 5900f4861000cf542c50ff98
title: 'Problem 281: Pizza Toppings'
challengeType: 5
forumTopicId: 301932
dashedName: problem-281-pizza-toppings
---

# --description--

คุณจะได้รับพิซซ่า (วงกลมที่สมบูรณ์แบบ) ที่หั่นเป็นชิ้นขนาดเท่ากัน $m·n$ และคุณต้องการมีท็อปปิ้งอย่างละชิ้น

ให้ $f(m,n)$ แทนจำนวนวิธีที่คุณสามารถเติมท็อปปิ้งบนพิซซ่าด้วยท็อปปิ้ง $m$ ที่แตกต่างกัน ($m ≥ 2$) โดยใช้ท็อปปิ้งแต่ละอันบนชิ้น $n$ ($n ≥ 1$ ). การสะท้อนกลับถือว่าชัดเจน การหมุนไม่ใช่

ตัวอย่างเช่น $f(2,1) = 1$, $f(2,2) = f(3,1) = 2$ และ $f(3,2) = 16$ $f(3,2)$ แสดงอยู่ด้านล่าง:

<img class="img-responsive center-block" alt="animation with 16 ways to have 3 different toppings on 2 slices each" src="https://cdn.freecodecamp.org/curriculum/project-euler/pizza-toppings.gif" style="background-color: white; padding: 10px;">

จงหาผลรวมของ $f(m,n)$ ทั้งหมดที่ $f(m,n) ≤ {10}^{15}$

# --hints--

`pizzaToppings()` ควร return `1485776387445623`.

```js
assert.strictEqual(pizzaToppings(), 1485776387445623);
```

# --seed--

## --seed-contents--

```js
function pizzaToppings() {

  return true;
}

pizzaToppings();
```

# --solutions--

```js
// solution required
```
