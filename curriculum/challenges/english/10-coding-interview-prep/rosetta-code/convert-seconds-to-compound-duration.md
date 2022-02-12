---
id: 596fd036dc1ab896c5db98b1
title: Convert seconds to compound duration
challengeType: 5
forumTopicId: 302236
dashedName: convert-seconds-to-compound-duration
---

# --description--

ห้เขียนฟังก์ชันตามเงื่อนไขนี้

<ul>
  <li>รับค่าจำนวนเต็มบวกที่เป็นค่าของจำนวนวินาที (เช่น <code>100</code>) แล้ว</li>
  <li>คืนค่าเป็นสตริงของจำนวนวินาทีนั้น ในหน่วย อาทิตย์ วัน ชั่วโมง นาที และวินาที ตามเงื่อนไขด้านล่าง (เช่น <code>1 min, 40 sec</code>)</li>
</ul>

แสดงให้เห็นว่าผ่านการทดสอบสามกรณีต่อไปนี้:

<div style='font-size:115%; font-weight: bold;'>Test Cases</div>

| ข้อมูลที่ส่งเข้าไป | ข้อมูลที่ส่งออกมา                         |
| ------------ | ------------------------------------- |
| 7259         | <code>2 hr, 59 sec</code>             |
| 86400        | <code>1 d</code>                      |
| 6000000      | <code>9 wk, 6 d, 10 hr, 40 min</code> |

<div style="font-size:115%; font-weight: bold;">เงื่อนไข</div>
<ul>
  <li>
    ต้องใช้หน่วยดังนี้:

| Unit   | Suffix used in Output | Conversion            |
| ------ | --------------------- | --------------------- |
| week   | <code>wk</code>       | 1 week = 7 days       |
| day    | <code>d</code>        | 1 day = 24 hours      |
| hour   | <code>hr</code>       | 1 hour = 60 minutes   |
| minute | <code>min</code>      | 1 minute = 60 seconds |
| second | <code>sec</code>      | ---                   |

  </li>
  <li>
    ต้องระบุ<strong>เฉพาะ</strong>หน่วยที่ไม่เป็น 0 เท่านั้น (เช่น คืนค่าเป็น <code>1 d</code> ไม่ใช่ <code>0 wk, 1 d, 0 hr, 0 min, 0 sec</code>)
  </li>
  <li>
    ให้ใช้หน่อยที่ใหญ่กว่าเสมอ (เช่น ให้คืนค่าเป็น <code>2 min, 10 sec</code> แต่ไม่ใช่ <code>1 min, 70 sec</code> และไม่ใช่ <code>130 sec</code>).
  </li>
  <li>
    ให้คืนค่าให้เหมือนกับ test case ด้านล่างให้มากที่สุด (เรียงหน่วยจากหน่วยใหญ่ ไปหน่วยเล็ก และคั่นแต่ละหน่วยด้วยคอมม่า + เว้นวรรค และคั่นระหว่างค่าและหน่วยด้วยเว้นวรรค)
  </li>
</ul>

# --hints--

`convertSeconds` ต้องเป็นฟังก์ชัน

```js
assert(typeof convertSeconds === 'function');
```

`convertSeconds(7259)` ต้องคืนค่าเป็น `2 hr, 59 sec`

```js
assert.equal(convertSeconds(testCases[0]), results[0]);
```

`convertSeconds(86400)` ต้องคืนค่าเป็น `1 d`

```js
assert.equal(convertSeconds(testCases[1]), results[1]);
```

`convertSeconds(6000000)` ต้องคืนค่าเป็น `9 wk, 6 d, 10 hr, 40 min`

```js
assert.equal(convertSeconds(testCases[2]), results[2]);
```

# --seed--

## --after-user-code--

```js
const testCases = [7259, 86400, 6000000];
const results = ['2 hr, 59 sec', '1 d', '9 wk, 6 d, 10 hr, 40 min'];
```

## --seed-contents--

```js
function convertSeconds(sec) {

  return true;
}
```

# --solutions--

```js
function convertSeconds(sec) {
  const localNames = ['wk', 'd', 'hr', 'min', 'sec'];
  // compoundDuration :: [String] -> Int -> String
  const compoundDuration = (labels, intSeconds) =>
    weekParts(intSeconds)
    .map((v, i) => [v, labels[i]])
    .reduce((a, x) =>
      a.concat(x[0] ? [`${x[0]} ${x[1] || '?'}`] : []), []
    )
    .join(', ');

    // weekParts :: Int -> [Int]
  const weekParts = intSeconds => [0, 7, 24, 60, 60]
    .reduceRight((a, x) => {
      const r = a.rem;
      const mod = x !== 0 ? r % x : r;

      return {
        rem: (r - mod) / (x || 1),
        parts: [mod].concat(a.parts)
      };
    }, {
      rem: intSeconds,
      parts: []
    })
    .parts;

  return compoundDuration(localNames, sec);
}
```
