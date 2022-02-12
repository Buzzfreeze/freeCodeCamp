---
id: 5eb3e4b20aa93c437f9e9717
title: Set of real numbers
challengeType: 5
forumTopicId: 385322
dashedName: set-of-real-numbers
---

# --description--

จำนวนจริงทั้งหมดอยู่ในเซ็ทที่นับไม่ได้ ℝ 

ในบรรดาเซ็ทย่อยที่เป็นเซ็ท convex  แต่ละเซ็ทแสดงเป็นช่วงระหว่างจำนวนจริงสองจำนวน *a* และ *b* โดยที่ *a* ≤ *b* มีสี่กรณีสำหรับความหมายของ "ระหว่าง" ขึ้นอยู่กับขอบเขตที่เปิดหรือปิด:

<ul>
  <li>[<i>a</i>, <i>b</i>]: {<i>x</i> | <i>a</i> ≤ <i>x</i> and <i>x</i> ≤ <i>b</i> }</li>
  <li>(<i>a</i>, <i>b</i>): {<i>x</i> | <i>a</i> < <i>x</i> and <i>x</i> < <i>b</i> }</li>
  <li>[<i>a</i>, <i>b</i>): {<i>x</i> | <i>a</i> ≤ <i>x</i> and <i>x</i> < <i>b</i> }</li>
  <li>(<i>a</i>, <i>b</i>]: {<i>x</i> | <i>a</i> < <i>x</i> and <i>x</i> ≤ <i>b</i> }</li>
</ul>

Note ถ้า *a* = *b* ของทั้ง4กรณีเป็น \[*a*, *a*] จะเป็นรูปแบบ non-empty

**Task**

<ul>
  <li>ให้หาวิธีแสดงเซ็ทของจำนวนจริงใดๆ</li>
  <li>ให้เขียน method สำหรับการดำเนินการเหล่านี้ (โดยที่ <i>x</i> เป็นจำนวนจริง และ <i>A</i> และ <i>B</i> เป็นเซ็ท):</li>
  <ul>
    <li>
      <i>x</i> ∈ <i>A</i>: หาว่า <i>x</i> เป็นสมาชิกของ <i>A</i> หรือไม่<br>
      ตัวอย่าง: 1 เป็นสมาชิกของ [1, 2), แต่ 2, 3, ... ไม่เป็น
    </li>
    <li>
      <i>A</i> ∪ <i>B</i>:  <i>A</i> union <i>B</i> เช่น {<i>x</i> | <i>x</i> ∈ <i>A</i> หรือ <i>x</i> ∈ <i>B</i>}<br>
      ตัวอย่าง: [0, 2) ∪ (1, 3) = [0, 3); [0, 1) ∪ (2, 3] = well, [0, 1) ∪ (2, 3]
    </li>
    <li>
      <i>A</i> ∩ <i>B</i>: <i>A</i> intersect <i>B</i> เช่น {<i>x</i> | <i>x</i> ∈ <i>A</i> และ <i>x</i> ∈ <i>B</i>}<br>
      ตัวอย่าง: [0, 2) ∩ (1, 3) = (1, 2); [0, 1) ∩ (2, 3] = เซ็ทว่าง
    </li>
    <li>
      <i>A</i> - <i>B</i>: ผลต่างระหว่าง <i>A</i> และ <i>B</i> หรือเขียนได้อีกแบบเป็น <i>A</i> \ <i>B</i> เช่น{<i>x</i> | <i>x</i> ∈ <i>A</i> and <i>x</i> ∉ <i>B</i>}<br>
      ตัวอย่าง: [0, 2) − (1, 3) = [0, 1]
    </li>
  </ul>
</ul>

# --instructions--

ให้เขียนฟังก์ชันที่รับพารามิเตอร์ 2 ตัว โดยเป็นสตริงและ array ของ object

object ที่เป็นเซ็ทจะต้องมี attribute `low`, `high` และ `rangeType` 

`rangeType` จะมีค่าเป็น 0, 1, 2 หรือ 3 ซึ่งแทนที่ค่า `CLOSED`, `BOTH_OPEN`, `LEFT_OPEN` และ `RIGHT_OPEN` ตามลำดับ ฟังก์ชันต้องดูรูปแบบของเซ็ทตามข้อมูลนี้

สตริงเป็นตัวกำหนดการดำเนินการ ซึ่งจะมีค่าเป็น `"union"`, `"intersect"` และ `"subtract"`

หลังจากดำเนินการ ฟังก์ชันควรตรวจสอบว่าค่าใน array มีอยู่ในเซ็ทผลลัพธ์หรือไม่ และเก็บค่า boolean ไว้ใน array ตามตำแหน่งของเซ็ทนั้น และคืนค่า array นี้ออกมา

# --hints--

`realSet` ต้องเป็นฟังก์ชัน

```js
assert(typeof realSet == 'function');
```

`realSet({"low":0, "high":1, "rangeType" :2}, {"low":0, "high":2, "rangeType" :3}, "union", [1, 2, 3])` ต้องคืนค่าเป็น array

```js
assert(
  Array.isArray(
    realSet(
      { low: 0, high: 1, rangeType: 2 },
      { low: 0, high: 2, rangeType: 3 },
      'union',
      [1, 2, 3]
    )
  )
);
```

`realSet({"low":0, "high":1, "rangeType" :2}, {"low":0, "high":2, "rangeType" :3}, "union", [1, 2, 3])` ต้องคืนค่าเป็น `[true, false, false]`

```js
assert.deepEqual(
  realSet(
    { low: 0, high: 1, rangeType: 2 },
    { low: 0, high: 2, rangeType: 3 },
    'union',
    [1, 2, 3]
  ),
  [true, false, false]
);
```

`realSet({"low":0, "high":2, "rangeType" :3}, {"low":1, "high":2, "rangeType" :2}, "intersect", [0, 1, 2])` ต้องคืนค่าเป็น `[false, false, false]`

```js
assert.deepEqual(
  realSet(
    { low: 0, high: 2, rangeType: 3 },
    { low: 1, high: 2, rangeType: 2 },
    'intersect',
    [0, 1, 2]
  ),
  [false, false, false]
);
```

`realSet({"low":0, "high":3, "rangeType" :3}, {"low":0, "high":1, "rangeType" :1}, "subtract", [0, 1, 2])` ต้องคืนค่าเป็น `[true, true, true]`

```js
assert.deepEqual(
  realSet(
    { low: 0, high: 3, rangeType: 3 },
    { low: 0, high: 1, rangeType: 1 },
    'subtract',
    [0, 1, 2]
  ),
  [true, true, true]
);
```

`realSet({"low":0, "high":3, "rangeType" :3}, {"low":0, "high":1, "rangeType" :0}, "subtract", [0, 1, 2])` ต้องคืนค่าเป็น `[false, false, true]`

```js
assert.deepEqual(
  realSet(
    { low: 0, high: 3, rangeType: 3 },
    { low: 0, high: 1, rangeType: 0 },
    'subtract',
    [0, 1, 2]
  ),
  [false, false, true]
);
```

`realSet({"low":0, "high":33, "rangeType" :1}, {"low":30, "high":31, "rangeType" :0}, "intersect", [30, 31, 32])` ต้องคืนค่าเป็น `[true, true, false]`

```js
assert.deepEqual(
  realSet(
    { low: 0, high: 33, rangeType: 1 },
    { low: 30, high: 31, rangeType: 0 },
    'intersect',
    [30, 31, 32]
  ),
  [true, true, false]
);
```

# --seed--

## --seed-contents--

```js
function realSet(set1, set2, operation, values) {

}
```

# --solutions--

```js
function realSet(set1, set2, operation, values) {
  const RangeType = {
    CLOSED: 0,
    BOTH_OPEN: 1,
    LEFT_OPEN: 2,
    RIGHT_OPEN: 3
  };

  function Predicate(test) {
    this.test = test;
    this.or = function(other) {
      return new Predicate(t => this.test(t) || other.test(t));
    };
    this.and = function(other) {
      return new Predicate(t => this.test(t) && other.test(t));
    };
    this.negate = function() {
      return new Predicate(t => !this.test(t));
    };
  }

  function RealSet(start, end, rangeType, predF) {
    this.low = start;
    this.high = end;

    if (predF) {
      this.predicate = new Predicate(predF);
    } else {
      this.predicate = new Predicate(d => {
        switch (rangeType) {
          case RangeType.CLOSED:
            return start <= d && d <= end;
          case RangeType.BOTH_OPEN:
            return start < d && d < end;
          case RangeType.LEFT_OPEN:
            return start < d && d <= end;
          case RangeType.RIGHT_OPEN:
            return start <= d && d < end;
        }
      });
    }

    this.contains = function(d) {
      return this.predicate.test(d);
    };

    this.union = function(other) {
      var low2 = Math.min(this.low, other.low);
      var high2 = Math.max(this.high, other.high);
      return new RealSet(low2, high2, null, d =>
        this.predicate.or(other.predicate).test(d)
      );
    };

    this.intersect = function(other) {
      var low2 = Math.min(this.low, other.low);
      var high2 = Math.max(this.high, other.high);
      return new RealSet(low2, high2, null, d =>
        this.predicate.and(other.predicate).test(d)
      );
    };

    this.subtract = function(other) {
      return new RealSet(this.low, this.high, null, d =>
        this.predicate.and(other.predicate.negate()).test(d)
      );
    };
  }
  set1 = new RealSet(set1.low, set1.high, set1.rangeType);
  set2 = new RealSet(set2.low, set2.high, set2.rangeType);
  var result = [];
  values.forEach(function(value) {
    result.push(set1[operation](set2).contains(value));
  });
  return result;
}
```
