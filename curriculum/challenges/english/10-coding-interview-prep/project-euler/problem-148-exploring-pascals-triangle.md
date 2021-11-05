---
id: 5900f4021000cf542c50ff14
title: 'Problem 148: Exploring Pascal''s triangle'
challengeType: 5
forumTopicId: 301777
dashedName: problem-148-exploring-pascals-triangle
---

# --description--

เราสามารถตรวจสอบได้ง่ายๆ ว่าไม่มีรายการใดในเจ็ดแถวแรกของสามเหลี่ยมปาสกาลที่หารด้วย 7 ลงตัว:

```
            1
          1   1
        1   2   1
      1   3   3   1
    1   4   6   4   1
  1   5   10  10  5   1
1   6   15  20  15  6   1
```

อย่างไรก็ตาม หากเราตรวจสอบหนึ่งร้อยแถวแรก เราจะพบว่ามีเพียง 2361 จาก 5050 รายการเท่านั้นที่ไม่สามารถหารด้วย 7 ลงตัว

# --instructions--

หาจำนวนรายการที่หารด้วย 7 ไม่ลงตัวในหนึ่งพันล้านแถวแรก (${10}^9$) ของสามเหลี่ยม Pascal

# --hints--

`entriesOfPascalsTriangle()` ควร return `2129970655314432`.

```js
assert.strictEqual(entriesOfPascalsTriangle(), 2129970655314432);
```

# --seed--

## --seed-contents--

```js
function entriesOfPascalsTriangle() {

  return true;
}

entriesOfPascalsTriangle();
```

# --solutions--

```js
// solution required
```
