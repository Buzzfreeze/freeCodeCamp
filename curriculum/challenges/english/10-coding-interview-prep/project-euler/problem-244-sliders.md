---
id: 5900f4601000cf542c50ff72
title: 'Problem 244: Sliders'
challengeType: 5
forumTopicId: 301891
dashedName: problem-244-sliders
---

# --description--

เกม Fifteen Puzzle ที่นี่ แทนที่จะเป็นแผ่นเรียงเลข เรามีไพ่สีแดงเจ็ดใบและไพ่สีฟ้าแปดแผ่น

การย้ายจะแสดงด้วยอักษรตัวแรกของทิศทาง (ซ้าย ขวา ขึ้น ลง) ที่แผ่นถูกเลื่อน เช่น เริ่มจากการกำหนดค่า ($S$) ตามลำดับ $LULUR$ เราไปถึงการกำหนดค่า ($E$):

($S$) <img class="img-responsive" alt="configuration S" src="https://cdn.freecodecamp.org/curriculum/project-euler/sliders-1.gif" style="display: inline-block; background-color: white; padding: 10px;">, ($E$) <img class="img-responsive" alt="configuration E" src="https://cdn.freecodecamp.org/curriculum/project-euler/sliders-2.gif" style="display: inline-block; background-color: white; padding: 10px;">

สำหรับแต่ละเส้นทาง จะคำนวณ checksum โดย (pseudocode):

$$\begin{align}
  & \text{checksum} = 0 \\\\
  & \text{checksum} = (\text{checksum} × 243 + m_1) \\; \text{mod} \\; 100\\,000\\,007 \\\\
  & \text{checksum} = (\text{checksum} × 243 + m_2) \\; \text{mod} \\; 100\\,000\\,007 \\\\
  & \ldots \\\\
  & \text{checksum} = (\text{checksum} × 243 + m_n) \\; \text{mod} \\; 100\\,000\\,007
\end{align}$$

โดยที่ $m_k$ คือค่า ASCII ของตัวอักษร $k^{\text{th}}$ ในลำดับการย้าย และค่า ASCII สำหรับการย้ายคือ:

$$\begin{array}{|c|c|}
  \hline
  L & 76 \\\\ \hline
  R & 82 \\\\ \hline
  U & 85 \\\\ \hline
  D & 68 \\\\ \hline
\end{array}$$

สำหรับลำดับที่ $LULUR$ ให้ไว้ข้างต้น ผลรวมการตรวจสอบจะเป็น 19761398 ตอนนี้ เริ่มจากการกำหนดค่า ($S$) ให้ค้นหาวิธีที่สั้นที่สุดในการเข้าถึงการกำหนดค่า ($T$)

($S$) <img class="img-responsive center-block" alt="configuration S" src="https://cdn.freecodecamp.org/curriculum/project-euler/sliders-3.gif" style="display: inline-block; background-color: white; padding: 10px;">, ($T$) <img class="img-responsive center-block" alt="configuration T" src="https://cdn.freecodecamp.org/curriculum/project-euler/sliders-4.gif" style="display: inline-block; background-color: white; padding: 10px;">

ผลรวมของchecksumทั้งหมดสำหรับเส้นทางที่มีความยาวน้อยที่สุดคือเท่าใด

# --hints--

`sliders()` ควร return `96356848`.

```js
assert.strictEqual(sliders(), 96356848);
```

# --seed--

## --seed-contents--

```js
function sliders() {

  return true;
}

sliders();
```

# --solutions--

```js
// solution required
```
