---
id: 5900f4021000cf542c50ff14
title: 'Problem 148: Exploring Pascal''s triangle'
challengeType: 5
forumTopicId: 301777
dashedName: problem-148-exploring-pascals-triangle
---

# --description--

เราสามารถตรวจสอบได้ง่ายๆ ว่าไม่มีไหนในเจ็ดแถวแรกของสามเหลี่ยม Pascal ที่หารด้วย 7 ลงตัว:

```
            1
          1   1
        1   2   1
      1   3   3   1
    1   4   6   4   1
  1   5   10  10  5   1
1   6   15  20  15  6   1
```

แต่ถ้าเราดูหนึ่งร้อยแถวแรก เราจะพบว่ามีเพียง 2361 จาก 5050 เลขเท่านั้นที่หารด้วย 7 ไม่ลงตัว

# --instructions--

หาจำนวนเลขที่หารด้วย 7 ไม่ลงตัวในหนึ่งพันล้านแถวแรก (${10}^9$) ของสามเหลี่ยม Pascal

# --hints--

`entriesOfPascalsTriangle()` ต้องคืนค่าเป็น `2129970655314432`

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
