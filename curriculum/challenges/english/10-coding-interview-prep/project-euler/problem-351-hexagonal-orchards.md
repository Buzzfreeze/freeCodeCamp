---
id: 5900f4cb1000cf542c50ffde
title: 'Problem 351: Hexagonal orchards'
challengeType: 5
forumTopicId: 302011
dashedName: problem-351-hexagonal-orchards
---

# --description--

สวนผลไม้หกเหลี่ยมของคำสั่ง $n$ คือโครงตาข่ายสามเหลี่ยมที่ประกอบขึ้นจากจุดภายในรูปหกเหลี่ยมปกติที่มีด้าน $n$ ต่อไปนี้เป็นตัวอย่างของสวนผลไม้หกเหลี่ยมลำดับที่ 5

<img class="img-responsive center-block" alt="hexagonal orchard of order 5, with highlighted in green points, which are hidden from the center by a point closer to it" src="https://cdn.freecodecamp.org/curriculum/project-euler/hexagonal-orchards.png" style="background-color: white; padding: 10px;">

ที่เน้นด้วยสีเขียวคือจุดที่ซ่อนจากจุดศูนย์กลางโดยจุดที่ใกล้กว่านั้น จะเห็นได้ว่าสำหรับสวนผลไม้หกเหลี่ยมลำดับ 5 มีจุด 30 จุดซ่อนอยู่จากจุดศูนย์กลาง

ให้ $H(n)$ เป็นจำนวนจุดที่ซ่อนอยู่จากจุดศูนย์กลางในสวนผลไม้หกเหลี่ยมที่มีคำสั่ง $n$

$H(5) = 30$. $H(10) = 138$. $H(1\\,000)$ = $1\\,177\\,848$.

หา $H(100\\,000\\,000)$

# --hints--

`hexagonalOrchards()` ควร return `11762187201804552`.

```js
assert.strictEqual(hexagonalOrchards(), 11762187201804552);
```

# --seed--

## --seed-contents--

```js
function hexagonalOrchards() {

  return true;
}

hexagonalOrchards();
```

# --solutions--

```js
// solution required
```
