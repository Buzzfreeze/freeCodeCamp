---
id: 5900f4841000cf542c50ff97
title: 'Problem 280: Ant and seeds'
challengeType: 5
forumTopicId: 301931
dashedName: problem-280-ant-and-seeds
---

# --description--

มดทำงานหนักเดินแบบสุ่มบนตาราง 5x5  

การเดินเริ่มจากจตุรัสกลาง  
ในแต่ละขั้นตอน มดจะสุ่มย้ายไปยังช่องสี่เหลี่ยมที่อยู่ติดกันโดยไม่ออกจากตาราง ดังนั้นจึงมีการเคลื่อนไหวที่เป็นไปได้ 2, 3 หรือ 4 แบบ ในแต่ละขั้นตอนขึ้นอยู่กับตำแหน่งของมด

ในช่วงเริ่มต้นของการเดิน จะมีการวางเมล็ดพืชไว้ในแต่ละช่องสี่เหลี่ยมของแถวล่าง เมื่อมดไม่ได้แบกเมล็ดและไปถึงช่องสี่เหลี่ยมของแถวล่างที่มีเมล็ด มดจะเริ่มขนเมล็ด มดจะหย่อนเมล็ดลงบนช่องว่างแรกของแถวบนที่มดไปถึงในที่สุด

จำนวนขั้นตอนที่คาดไว้จนกว่าเมล็ดทั้งหมดจะถูกทิ้งในแถวบนสุดเป็นเท่าใด ให้คำตอบของคุณเป็นทศนิยม 6 ตำแหน่ง

# --hints--

`antAndSeeds()` ต้องคืนค่าเป็น `430.088247`

```js
assert.strictEqual(antAndSeeds(), 430.088247);
```

# --seed--

## --seed-contents--

```js
function antAndSeeds() {

  return true;
}

antAndSeeds();
```

# --solutions--

```js
// solution required
```
