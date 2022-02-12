---
id: 59880443fb36441083c6c20e
title: Euler method
challengeType: 5
forumTopicId: 302258
dashedName: euler-method
---

# --description--

Euler's method ตัวเลขประมาณคำตอบของสมการเชิงอนุพันธ์อันดับ 1 สามัญ (ODE) ด้วยค่าเริ่มต้นที่กำหนด เป็นวิธีการที่ชัดเจนในการแก้ปัญหาค่าเริ่มต้น (IVP) ตามที่อธิบายไว้ใน [this article](<https://www.freecodecamp.org/news/eulers-method-explained-with-examples/> "news: Euler's Method Explained with Examples").

ต้องระบุ ODE ในรูปแบบต่อไปนี้:

<ul style='list-style: none;'>
  <li><big>$\frac{dy(t)}{dt} = f(t,y(t))$</big></li>
</ul>

ด้วยค่าเริ่มต้น

<ul style='list-style: none;'>
  <li><big>$y(t_0) = y_0$</big></li>
</ul>

ในการหาคำตอบที่เป็นตัวเลข เราแทนที่อนุพันธ์บน LHS ด้วยการประมาณผลต่าง:

<ul style='list-style: none;'>
  <li><big>$\frac{dy(t)}{dt}  \approx \frac{y(t+h)-y(t)}{h}$</big></li>
</ul>

และหาค่าของ $y(t+h)$:

<ul style='list-style: none;'>
  <li><big>$y(t+h) \approx y(t) + h \, \frac{dy(t)}{dt}$</big></li>
</ul>

ซึ่งจะเหมือนกับ

<ul style='list-style: none;'>
  <li><big>$y(t+h) \approx y(t) + h \, f(t,y(t))$</big></li>
</ul>

กฏการคำนวนแบบวนซ้ำก็จะเป็น:

<ul style='list-style: none;'>
  <li><big>$y_{n+1} = y_n + h \, f(t_n, y_n)$</big></li>
</ul>

โดยที่ $h$ คือ step size ซึ่งเป็นพารามิเตอร์ที่สำคัญสำหรับความแม่นยำของคำตอบ ซึ่งถ้ายิ่งน้อยจะยิ่งแม่นยำ แต่ก็จะทำให้ใช้ทรัพยากรมากขึ้นไปด้วย

**ตัวอย่าง: Newton's Cooling Law**

Newton's cooling law อธิบายว่าวัตถุที่มีอุณหภูมิเริ่มต้น $T(t_0) = T_0$ เย็นลงในสภาพแวดล้อมที่มีอุณหภูมิ $T_R$ อย่างไร:

<ul style='list-style: none;'>
  <li><big>$\frac{dT(t)}{dt} = -k \, \Delta T$</big></li>
</ul>

หรือ

<ul style='list-style: none;'>
  <li><big>$\frac{dT(t)}{dt} = -k \, (T(t) - T_R)$</big></li>
</ul>

อัตราการทำความเย็นเป็น $\\frac{dT(t)}{dt}$ ของวัตถุเป็นสัดส่วนกับความแตกต่างของอุณหภูมิปัจจุบัน $\\Delta T = (T(t) - T_R)$ กับสภาพแวดล้อมโดยรอบ

ซึ่งจะตีความเป็นสมการได้เป็น

<ul style='list-style: none;'>
  <li><big>$T(t) = T_R + (T_0 - T_R) \; e^{-k t}$</big></li>
</ul>

# --instructions--

ให้ใช้วิธีของออยเลอร์ เพื่อแก้ปัญหาตัวอย่างกฎการระบายความร้อนของนิวตัน โดยใช้ใช้ step size สามค่า คือ:

<ul>
  <li><code>2 s</code></li>
  <li><code>5 s</code> และ</li>
  <li><code>10 s</code></li>
</ul>

และเปรียบเทียบกับวิธีวิเคราะห์

**Initial values:**

<ul>
  <li>อุณหภูมิเริ่มต้น <big>$T_0$</big> ต้องเป็น <code>100 °C</code></li>
  <li>อุณหภูมิห้อง <big>$T_R$</big> ต้องเป็น <code>20 °C</code></li>
  <li>ค่าคงที่การเย็นตัว <big>$k$</big> ต้องเป็น <code>0.07</code></li>
  <li>ช่วงเวลาที่จะคำนวณต้องมีค่าตั้งแต่ <code>0 s</code> ถึง <code>100 s</code></li>
</ul>  

พารามิเตอร์ตัวแรกของฟังก์ชันคือเวลาเริ่มต้น พารามิเตอร์ที่สองคืออุณหภูมิเริ่มต้น พารามิเตอร์ที่สามคือเวลาที่ผ่านไป และพารามิเตอร์ที่สี่คือ step size

# --hints--

`eulersMethod` ต้องเป็นฟังก์ชัน

```js
assert(typeof eulersMethod === 'function');
```

`eulersMethod(0, 100, 100, 2)` ต้องคืนค่าเป็นตัวเลข

```js
assert(typeof eulersMethod(0, 100, 100, 2) === 'number');
```

`eulersMethod(0, 100, 100, 2)` ต้องคืนค่าเป็น 20.0424631833732

```js
assert.equal(eulersMethod(0, 100, 100, 2), 20.0424631833732);
```

`eulersMethod(0, 100, 100, 5)` ต้องคืนค่าเป็น 20.01449963666907

```js
assert.equal(eulersMethod(0, 100, 100, 5), 20.01449963666907);
```

`eulersMethod(0, 100, 100, 10)` ต้องคืนค่าเป็น 20.000472392

```js
assert.equal(eulersMethod(0, 100, 100, 10), 20.000472392);
```

# --seed--

## --seed-contents--

```js
function eulersMethod(x1, y1, x2, h) {

}
```

# --solutions--

```js
function eulersMethod(x1, y1, x2, h) {
  let x = x1;
  let y = y1;

  while ((x < x2 && x1 < x2) || (x > x2 && x1 > x2)) {
    y += h * (-0.07 * (y - 20));
    x += h;
  }

  return y;
}
```
