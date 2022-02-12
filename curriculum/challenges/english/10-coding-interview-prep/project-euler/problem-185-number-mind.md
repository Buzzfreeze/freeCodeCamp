---
id: 5900f4251000cf542c50ff38
title: 'Problem 185: Number Mind'
challengeType: 5
forumTopicId: 301821
dashedName: problem-185-number-mind
---

# --description--

เกม Number Mind เป็นเกมที่แปลงมาจาก Master Mind ที่รู้จักกันดี

แทนที่จะต้องตอกหมุดสี คุณต้องเดาลำดับตัวเลขที่เป็นความลับ หลังจากการเดาแต่ละครั้ง คุณจะได้รับการบอกเฉพาะว่าคุณเดาตัวเลขที่ถูกต้องได้กี่แห่ง ดังนั้น ถ้าลำดับคือ 1234 และคุณเดาเป็น 2036 คุณจะได้รับแจ้งว่าคุณมีหลักที่ถูกต้องหนึ่งหลัก อย่างไรก็ตามคุณจะไม่ได้รับแจ้งว่าคุณมีตัวเลขอื่นผิดตำแหน่งด้วย

เช่น ถ้าคุณเดาเลข 5 หลัก

$$\begin{align}
  & 90342 ;2\\;\text{correct}\\\\
  & 70794 ;0\\;\text{correct}\\\\
  & 39458 ;2\\;\text{correct}\\\\
  & 34109 ;1\\;\text{correct}\\\\
  & 51545 ;2\\;\text{correct}\\\\
  & 12531 ;1\\;\text{correct}
\end{align}$$


จากการคาดเดาต่อไปนี้

$$\begin{align}
  & 5616185650518293 ;2\\;\text{correct}\\\\
  & 3847439647293047 ;1\\;\text{correct}\\\\
  & 5855462940810587 ;3\\;\text{correct}\\\\
  & 9742855507068353 ;3\\;\text{correct}\\\\
  & 4296849643607543 ;3\\;\text{correct}\\\\
  & 3174248439465858 ;1\\;\text{correct}\\\\
  & 4513559094146117 ;2\\;\text{correct}\\\\
  & 7890971548908067 ;3\\;\text{correct}\\\\
  & 8157356344118483 ;1\\;\text{correct}\\\\
  & 2615250744386899 ;2\\;\text{correct}\\\\
  & 8690095851526254 ;3\\;\text{correct}\\\\
  & 6375711915077050 ;1\\;\text{correct}\\\\
  & 6913859173121360 ;1\\;\text{correct}\\\\
  & 6442889055042768 ;2\\;\text{correct}\\\\
  & 2321386104303845 ;0\\;\text{correct}\\\\
  & 2326509471271448 ;2\\;\text{correct}\\\\
  & 5251583379644322 ;2\\;\text{correct}\\\\
  & 1748270476758276 ;3\\;\text{correct}\\\\
  & 4895722652190306 ;1\\;\text{correct}\\\\
  & 3041631117224635 ;3\\;\text{correct}\\\\
  & 1841236454324589 ;3\\;\text{correct}\\\\
  & 2659862637316867 ;2\\;\text{correct}
\end{align}$$

ค้นหาลำดับ 16 หลักที่ไม่ซ้ำ

# --hints--

`numberMind()` ต้องคืนค่าเป็น `4640261571849533`

```js
assert.strictEqual(numberMind(), 4640261571849533);
```

# --seed--

## --seed-contents--

```js
function numberMind() {

  return true;
}

numberMind();
```

# --solutions--

```js
// solution required
```
