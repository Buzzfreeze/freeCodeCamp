---
id: 5900f54c1000cf542c51005f
title: 'Problem 480: The Last Question'
challengeType: 5
forumTopicId: 302158
dashedName: problem-480-the-last-question
---

# --description--

พิจารณาคำทั้งหมดที่สามารถเกิดขึ้นได้ โดยการเลือกตัวอักษรในลำดับใดก็ได้จากวลี:

$$\mathbf{\text{thereisasyetinsufficientdataforameaningfulanswer}}$$

สมมติว่าตัวอักษรที่มี 15 ตัวอักษรหรือน้อยกว่านั้น เรียงตามลำดับตัวอักษรและเรียงลำดับโดยเริ่มจาก 1

รายการจะเป็น:

$$\begin{align}
  & 1: \text{a} \\\\
  & 2: \text{aa} \\\\
  & 3: \text{aaa} \\\\
  & 4: \text{aaaa} \\\\
  & 5: \text{aaaaa} \\\\
  & 6: \text{aaaaaa} \\\\
  & 7: \text{aaaaaac} \\\\
  & 8: \text{aaaaaacd} \\\\
  & 9: \text{aaaaaacde} \\\\
  & 10: \text{aaaaaacdee} \\\\
  & 11: \text{aaaaaacdeee} \\\\
  & 12: \text{aaaaaacdeeee} \\\\
  & 13: \text{aaaaaacdeeeee} \\\\
  & 14: \text{aaaaaacdeeeeee} \\\\
  & 15: \text{aaaaaacdeeeeeef} \\\\
  & 16: \text{aaaaaacdeeeeeeg} \\\\
  & 17: \text{aaaaaacdeeeeeeh} \\\\
  & \ldots \\\\
  & 28: \text{aaaaaacdeeeeeey} \\\\
  & 29: \text{aaaaaacdeeeeef} \\\\
  & 30: \text{aaaaaacdeeeeefe} \\\\
  & \ldots \\\\
  & 115246685191495242: \text{euleoywuttttsss} \\\\
  & 115246685191495243: \text{euler} \\\\
  & 115246685191495244: \text{eulera} \\\\
  & ... \\\\
  & 525069350231428029: \text{ywuuttttssssrrr} \\\\
\end{align}$$

กำหนดให้ $P(w)$ เป็นตำแหน่งของคำ $w$

กำหนดให้ $W(p)$ เป็นคำในตำแหน่ง $p$

จะเห็นว่า $P(w)$ และ $W(p)$ เป็นฟังก์ชันตรงกันข้ามกัน  
$P(W(p)) = p$ และ $W(P(w)) = w$

เช่น

$$\begin{align}
  & W(10) = \text{ aaaaaacdee} \\\\
  & P(\text{aaaaaacdee}) = 10 \\\\
  & W(115246685191495243) = \text{ euler} \\\\
  & P(\text{euler}) = 115246685191495243 \\\\
\end{align}$$

ให้หา
$$W(P(\text{legionary}) + P(\text{calorimeters}) - P(\text{annihilate}) + P(\text{orchestrated}) - P(\text{fluttering})).$$

ให้ตอบโดยใช้อักษรตัวพิมพ์เล็ก (ไม่ต้องมีจุด หรือเว้นวรรค)

# --hints--

`euler480()` ต้องคืนค่าเป็นสตริง

```js
assert(typeof euler480() === 'string');
```

`euler480()` ต้องคืนค่าเป็นสตริง `turnthestarson`

```js
assert.strictEqual(euler480(), 'turnthestarson');
```

# --seed--

## --seed-contents--

```js
function euler480() {

  return true;
}

euler480();
```

# --solutions--

```js
// solution required
```
