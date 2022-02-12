---
id: 5900f4ba1000cf542c50ffcd
title: 'Problem 334: Spilling the beans'
challengeType: 5
forumTopicId: 301992
dashedName: problem-334-spilling-the-beans
---

# --description--

ในสวรรค์ของเพลโต มีชามจำนวนนับไม่ถ้วนวางเป็นเส้นตรง ชามแต่ละใบมีถั่วจำนวนหนึ่งหรือไม่มีเลย 

เด็กคนหนึ่งเล่นเกมซึ่งอนุญาตให้ขยับได้แบบเดียว:  
นำถั่วสองอันออกจากชามใด ๆ แล้วใส่หนึ่งในชามที่อยู่ติดกันสองอัน เกมจะจบลงเมื่อแต่ละชามมีถั่วหนึ่งเมล็ดหรือไม่มีเลย

เช่น พิจารณาชามที่อยู่ติดกันสองชามที่มีถั่ว 2 และ 3 เมล็ดตามลำดับ ชามอื่นๆทั้งหมดจะว่างเปล่า  
จะย้ายถั่วได้แปดครั้งเพื่อทำให้เกมจบ

<img class="img-responsive center-block" alt="animation of game when two adjacent bowls contains 2 and 3 beans respectivelly" src="https://cdn.freecodecamp.org/curriculum/project-euler/spilling-the-beans.gif" style="background-color: white; padding: 10px;">

กำหนดให้มีลำดับนี้

$$\begin{align}
  & t_0 = 123456, \\\\
  & t_i = \begin{cases}
         \frac{t_{i - 1}}{2},               & \text{if $t_{i - 1}$ is even} \\\\
         \left\lfloor\frac{t_{i - 1}}{2}\right\rfloor \oplus 926252, & \text{if $t_{i - 1}$ is odd}
         \end{cases} \\\\
         & \qquad \text{where $⌊x⌋$ is the floor function and $\oplus$ is the bitwise XOR operator.} \\\\
  & b_i = (t_i\bmod 2^{11}) + 1.
\end{align}$$

สองเทอมแรกของลำดับสุดท้ายคือ $b_1 = 289$ และ $b_2 = 145$ ถ้าเราเริ่มต้นด้วย $b_1$ และ $b_2$ beans ในสองชามที่อยู่ติดกัน จะต้องย้ายถั่ว 3419100 ครั้งเพื่อจบเกม

ตอนนี้ชาม 1500 ใบที่อยู่ติดกันมีถั่ว $b_1, b_2, \ldots, b_{1500}$ ตามลำดับ ชามอื่นๆ ทั้งหมดว่างเปล่า  
ให้หาว่าต้องขยับถั่วกี่ครั้งเพื่อให้เกมจบ

# --hints--

`spillingTheBeans()` ต้องคืนค่าเป็น `150320021261690850`

```js
assert.strictEqual(spillingTheBeans(), 150320021261690850);
```

# --seed--

## --seed-contents--

```js
function spillingTheBeans() {

  return true;
}

spillingTheBeans();
```

# --solutions--

```js
// solution required
```
