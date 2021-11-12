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

ในการหาคำตอบที่เป็นตัวเลข เราแทนที่อนุพันธ์บน LHS ด้วยการประมาณผลต่างที่แน่นอน:

<ul style='list-style: none;'>
  <li><big>$\frac{dy(t)}{dt}  \approx \frac{y(t+h)-y(t)}{h}$</big></li>
</ul>

then solve for $y(t+h)$:

<ul style='list-style: none;'>
  <li><big>$y(t+h) \approx y(t) + h \, \frac{dy(t)}{dt}$</big></li>
</ul>

which is the same as

<ul style='list-style: none;'>
  <li><big>$y(t+h) \approx y(t) + h \, f(t,y(t))$</big></li>
</ul>

The iterative solution rule is then:

<ul style='list-style: none;'>
  <li><big>$y_{n+1} = y_n + h \, f(t_n, y_n)$</big></li>
</ul>

โดยที่ $h$ คือขนาดขั้นตอน ซึ่งเป็นพารามิเตอร์ที่เกี่ยวข้องมากที่สุดสำหรับความแม่นยำของคำตอบขนาดขั้นที่เล็กลงจะเพิ่มความแม่นยำ แต่ยังรวมถึงค่าใช้จ่ายในการคำนวณด้วย ดังนั้นจึงต้องเลือกเองตามปัญหาที่มีอยู่เสมอ

**Example: Newton's Cooling Law**

Newton's cooling law อธิบายว่าวัตถุที่มีอุณหภูมิเริ่มต้น $T(t_0) = T_0$ เย็นลงในสภาพแวดล้อมที่มีอุณหภูมิ $T_R$ อย่างไร:

<ul style='list-style: none;'>
  <li><big>$\frac{dT(t)}{dt} = -k \, \Delta T$</big></li>
</ul>

หรือ

<ul style='list-style: none;'>
  <li><big>$\frac{dT(t)}{dt} = -k \, (T(t) - T_R)$</big></li>
</ul>

มันบอกว่าอัตราการทำความเย็น $\\frac{dT(t)}{dt}$ ของวัตถุเป็นสัดส่วนกับความแตกต่างของอุณหภูมิปัจจุบัน $\\Delta T = (T(t) - T_R)$ กับสภาพแวดล้อมโดยรอบ

วิธีแก้ปัญหาเชิงวิเคราะห์ ซึ่งเราจะเปรียบเทียบกับการประมาณเชิงตัวเลขคือ

<ul style='list-style: none;'>
  <li><big>$T(t) = T_R + (T_0 - T_R) \; e^{-k t}$</big></li>
</ul>

# --instructions--

ตามวิธีของออยเลอร์ จากนั้นใช้เพื่อแก้ปัญหาตัวอย่างกฎการระบายความร้อนของนิวตันที่กำหนดสำหรับขนาดขั้นตอนต่างๆ สามขนาด ได้แก่:

<ul>
  <li><code>2 s</code></li>
  <li><code>5 s</code> and</li>
  <li><code>10 s</code></li>
</ul>

และเปรียบเทียบกับวิธีวิเคราะห์

**Initial values:**

<ul>
  <li>initial temperature <big>$T_0$</big> shall be <code>100 °C</code></li>
  <li>room temperature <big>$T_R$</big> shall be <code>20 °C</code></li>
  <li>cooling constant <big>$k$</big> shall be <code>0.07</code></li>
  <li>time interval to calculate shall be from <code>0 s</code> to <code>100 s</code></li>
</ul>  

พารามิเตอร์ตัวแรกของฟังก์ชันคือเวลาเริ่มต้น พารามิเตอร์ที่สองคืออุณหภูมิเริ่มต้น พารามิเตอร์ที่สามคือเวลาที่ผ่านไป และพารามิเตอร์ที่สี่คือขนาดขั้นตอน

# --hints--

`eulersMethod` ควรเป็น function.

```js
assert(typeof eulersMethod === 'function');
```

`eulersMethod(0, 100, 100, 2)` ควร return number.

```js
assert(typeof eulersMethod(0, 100, 100, 2) === 'number');
```

`eulersMethod(0, 100, 100, 2)` ควร return 20.0424631833732.

```js
assert.equal(eulersMethod(0, 100, 100, 2), 20.0424631833732);
```

`eulersMethod(0, 100, 100, 5)` ควร return 20.01449963666907.

```js
assert.equal(eulersMethod(0, 100, 100, 5), 20.01449963666907);
```

`eulersMethod(0, 100, 100, 10)` ควร return 20.000472392.

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
