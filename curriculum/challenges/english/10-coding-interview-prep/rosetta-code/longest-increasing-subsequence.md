---
id: 5e6dd139859c290b6ab80292
title: Longest increasing subsequence
challengeType: 5
forumTopicId: 385272
dashedName: longest-increasing-subsequence
---

# --description--

ปัญหาลำดับที่ยาวที่สุดที่เพิ่มขึ้นคือการหาลำดับของลำดับที่กำหนดโดยที่องค์ประกอบของลำดับรองอยู่ในลำดับการเรียงลำดับ ต่ำสุดไปหาสูงสุด และลำดับที่ตามมานั้นยาวที่สุด ตัวอย่าง:
ตาม array:

$\\{3, 10, 2, 1, 20\\}$

ลำดับที่เพิ่มขึ้นที่ยาวที่สุดเป็น:

$\\{3, 10, 20\\}$

สำหรับข้อมูลเพิ่มเติมเกี่ยวกับปัญหานี้ โปรดดูที่ [Wikipedia](<https://en.wikipedia.org/wiki/Longest increasing subsequence>).

# --instructions--

เขียนฟังก์ชันที่ใช้arrayของตัวเลขเป็นพารามิเตอร์และส่งกลับค่าลำดับที่ยาวที่สุดที่เพิ่มขึ้น

รับประกันได้ว่าทุกarrayจะมีลำดับรองลงมาที่ยาวที่สุด

# --hints--

`findSequence` ควรเป็น function.

```js
assert(typeof findSequence == 'function');
```

`findSequence([3, 10, 2, 1, 20])` ควร return array.

```js
assert(Array.isArray(findSequence([3, 10, 2, 1, 20])));
```

`findSequence([3, 10, 2, 1, 20])` ควร return `[3, 10, 20]`.

```js
assert.deepEqual(findSequence([3, 10, 2, 1, 20]), [3, 10, 20]);
```

`findSequence([2, 7, 3, 5, 8])` ควร return `[2, 3, 5, 8]`.

```js
assert.deepEqual(findSequence([2, 7, 3, 5, 8]), [2, 3, 5, 8]);
```

`findSequence([2, 6, 4, 5, 1])` ควร return `[2, 4, 5]`.

```js
assert.deepEqual(findSequence([2, 6, 4, 5, 1]), [2, 4, 5]);
```

`findSequence([10, 22, 9, 33, 21, 50, 60, 80])` ควร return `[10, 22, 33, 50, 60, 80]`.

```js
assert.deepEqual(findSequence([10, 22, 9, 33, 21, 50, 60, 80]), [
  10,
  22,
  33,
  50,
  60,
  80
]);
```

`findSequence([0, 12, 2, 10, 6, 14, 1, 9, 5, 13, 3, 11, 7, 15])` ควร return `[0, 2, 6, 9, 11, 15`.

```js
assert.deepEqual(
  findSequence([0, 12, 2, 10, 6, 14, 1, 9, 5, 13, 3, 11, 7, 15]),
  [0, 2, 6, 9, 11, 15]
);
```

# --seed--

## --seed-contents--

```js
function findSequence(input) {

}
```

# --solutions--

```js
function findSequence(input) {
    var len = input.length;
    var result = []
    for (var i = 0; i < len; i++) result.push(1)

    for (var i = 0; i < len; i++)
        for (var j = i - 1; j >= 0; j--)
            if (input[i] > input[j] && result[j] >= result[i])
                result[i] = result[j] + 1;

    var maxValue = Math.max.apply(null, result);
    var maxIndex = result.indexOf(Math.max.apply(Math, result));
    var output = [];
    output.push(input[maxIndex]);
    for (var i = maxIndex; i >= 0; i--) {
        if (maxValue == 0) break;
        if (input[maxIndex] > input[i] && result[i] == maxValue - 1) {
            output.push(input[i]);
            maxValue--;
        }
    }
    output.reverse();
    return output;
}
```
