---
id: 5900f4bd1000cf542c50ffce
title: 'Problem 335: Gathering the beans'
challengeType: 5
forumTopicId: 301993
dashedName: problem-335-gathering-the-beans
---

# --description--

เมื่อใดก็ตามที่ปีเตอร์รู้สึกเบื่อ เขาจะวางชามหนึ่งใบไว้ในวงกลม หลังจากนี้ เขานำถั่วทั้งหมดออกจากชามหนึ่งแล้วหย่อนลงในชามทีละอันตามเข็มนาฬิกา เขาพูดซ้ำ โดยเริ่มจากชามที่เขาทิ้งถั่วใบสุดท้ายลงไป จนกระทั่งสถานการณ์เริ่มต้นปรากฏขึ้นอีกครั้ง ตัวอย่างเช่นกับ 5 ชามเขาทำดังนี้

<img class="img-responsive center-block" alt="animation of moving beans in 5 bowls" src="https://cdn.freecodecamp.org/curriculum/project-euler/gathering-the-beans.gif" style="background-color: white; padding: 10px;">

ดังนั้นด้วยชาม 5 ใบจึงต้องใช้ Peter 15 เพื่อกลับสู่สถานการณ์เริ่มต้น

ให้ $M(x)$ แทนจำนวนการเคลื่อนไหวที่จำเป็นในการกลับสู่สถานการณ์เริ่มต้น เริ่มต้นด้วย $x$ โบวล์ ดังนั้น $M(5) = 15$ นอกจากนี้ยังสามารถตรวจสอบได้ว่า $M(100) = 10920$

หา $\displaystyle\sum_{k = 0}^{{10}^{18}} M(2^k + 1)$ ให้คำตอบแบบmodulo $7^9$

# --hints--

`gatheringTheBeans()` ควร return `5032316`.

```js
assert.strictEqual(gatheringTheBeans(), 5032316);
```

# --seed--

## --seed-contents--

```js
function gatheringTheBeans() {

  return true;
}

gatheringTheBeans();
```

# --solutions--

```js
// solution required
```
