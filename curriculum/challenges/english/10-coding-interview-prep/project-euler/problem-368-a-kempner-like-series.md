---
id: 5900f4dd1000cf542c50ffef
title: 'Problem 368: A Kempner-like series'
challengeType: 5
forumTopicId: 302029
dashedName: problem-368-a-kempner-like-series
---

# --description--

harmonic series $1 + \dfrac{1}{2} + \dfrac{1}{3} + \dfrac{1}{4} + \ldots$ เป็นซีรีส์แบบ divergent

แต่ถ้าเราไม่มองเทอมที่ตัวส่วนมี 9 อยู่ในนั้น ซีรีส์นี้ก็จะมาบรรจบกันที่ประมาณ 22.9206766193 ได้อย่างน่าทึ่ง ชุด harmonic ที่ได้รับการดัดแปลงนี้เรียกว่าชุด Kempner

ให้เราพิจารณาชุด harmonic ที่แก้ไขแล้วอีกชุดหนึ่งโดยละเว้นจากซีรีส์ harmonic ทุกเทอมโดยที่ตัวส่วนมีตัวเลขเรียงกันตั้งแต่ 3 หลักขึ้นไป เราสามารถยืนยันได้ว่าจาก 1200 เงื่อนไขแรกของชุด harmonic  จะละเว้นเพียง 20 เงื่อนไขเท่านั้น

20 เงื่อนไขที่ละเว้นเหล่านี้คือ:

$$\dfrac{1}{111}, \dfrac{1}{222}, \dfrac{1}{333}, \dfrac{1}{444}, \dfrac{1}{555}, \dfrac{1}{666}, \dfrac{1}{777}, \dfrac{1}{888}, \dfrac{1}{999}, \dfrac{1}{1000}, \dfrac{1}{1110}, \\\\
\dfrac{1}{1111}, \dfrac{1}{1112}, \dfrac{1}{1113}, \dfrac{1}{1114}, \dfrac{1}{1115}, \dfrac{1}{1116}, \dfrac{1}{1117}, \dfrac{1}{1118}, \dfrac{1}{1119}$$

ซีรีส์นี้ก็จะบรรจบกัน 

หาค่าของซีรีส์ว่ามาบรรจบเป็นค่าไหน โดยให้คำตอบของคุณปัดเศษเป็นทศนิยมสิบหลัก

# --hints--

`kempnerLikeSeries()` ต้องคืนค่าเป็น `253.6135092068`

```js
assert.strictEqual(kempnerLikeSeries(), 253.6135092068);
```

# --seed--

## --seed-contents--

```js
function kempnerLikeSeries() {

  return true;
}

kempnerLikeSeries();
```

# --solutions--

```js
// solution required
```
