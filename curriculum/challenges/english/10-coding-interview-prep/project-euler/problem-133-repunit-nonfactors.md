---
id: 5900f3f21000cf542c50ff04
title: 'Problem 133: Repunit nonfactors'
challengeType: 5
forumTopicId: 301761
dashedName: problem-133-repunit-nonfactors
---

# --description--

จำนวนที่ประกอบด้วยจำนวนทั้งหมดเรียกว่าการทำซ้ำ เราจะกำหนด $R(k)$ ให้เป็นหน่วยของความยาว $k$; ตัวอย่างเช่น $R(6) = 111111$

ให้เราพิจารณาการทำซ้ำของรูปแบบ $R({10}^n)$

แม้ว่า $R(10)$, $R(100)$ หรือ $R(1000)$ จะไม่หารด้วย 17 ลงตัว แต่ $R(10000)$ หารด้วย 17 ลงตัว แต่ยังไม่มีค่า n ซึ่ง $R ({10}^n)$ จะหารด้วย 19 อย่างน่าทึ่ง 11, 17, 41 และ 73 เป็นเพียงสี่จำนวนเฉพาะที่ต่ำกว่าร้อยที่สามารถเป็นตัวประกอบของ $R({10}^n)$

จงหาผลรวมของจำนวนเฉพาะทั้งหมดที่ต่ำกว่าหนึ่งแสนที่ไม่เป็นตัวประกอบของ $R({10}^n)$

# --hints--

`repunitNonfactors()` ควร return `453647705`.

```js
assert.strictEqual(repunitNonfactors(), 453647705);
```

# --seed--

## --seed-contents--

```js
function repunitNonfactors() {

  return true;
}

repunitNonfactors();
```

# --solutions--

```js
// solution required
```
