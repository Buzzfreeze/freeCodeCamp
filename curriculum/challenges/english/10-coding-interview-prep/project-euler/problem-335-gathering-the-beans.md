---
id: 5900f4bd1000cf542c50ffce
title: 'Problem 335: Gathering the beans'
challengeType: 5
forumTopicId: 301993
dashedName: problem-335-gathering-the-beans
---

# --description--

เมื่อใดก็ตามที่ปีเตอร์รู้สึกเบื่อ เขาจะวางชามหนึ่งใบไว้ในวงกลม หลังจากนี้ เขานำถั่วทั้งหมดออกจากชามหนึ่งแล้วหย่อนลงในชามทีละอันตามเข็มนาฬิกา เขาจะทำซ้ำ โดยเริ่มจากชามที่เขาทิ้งถั่วเมล็ดสุดท้ายลงไป ลองดูตัวอย่าง

<img class="img-responsive center-block" alt="animation of moving beans in 5 bowls" src="https://cdn.freecodecamp.org/curriculum/project-euler/gathering-the-beans.gif" style="background-color: white; padding: 10px;">

ถ้ามีชาม 5 ใย ปีเตอร์ต้องย้ายถั่ว 15 ครั้งเพื่อให้ถั่วกลับไปอยู่ในสถานะเริ่มต้น

ให้ $M(x)$ แทนจำนวนขยับที่จำเป็นในการกลับสู่สถานะเริ่มต้น โดยเริ่มด้วยชาม $x$ ใบ  
ดังนั้น $M(5) = 15$ นอกจากนี้ $M(100) = 10920$ ด้วย

ให้หา $\displaystyle\sum_{k = 0}^{{10}^{18}} M(2^k + 1)$ โดยให้นำคำตอบไป mod กับ $7^9$

# --hints--

`gatheringTheBeans()` ต้องคืนค่าเป็น `5032316`

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
