---
id: 5e6dd139859c290b6ab80292
title: Longest increasing subsequence
challengeType: 5
forumTopicId: 385272
dashedName: longest-increasing-subsequence
---

# --description--

ให้หาชุดข้อมูลที่เรียงต่อกันได้ยาวที่สุด โดยที่ชุดข้อมูลนั้นเรียงค่าจากน้อยไปมาก

เช่นถ้ามี array:

$\\{3, 10, 2, 1, 20\\}$

ชุดข้อมูลที่เรียงต่อกันได้ยาวที่สุด โดยที่ชุดข้อมูลนั้นเรียงค่าจากน้อยไปมาก คือ:

$\\{3, 10, 20\\}$

ลองอ่านข้อมูลเพิ่มเติมได้ที่ [Wikipedia](<https://en.wikipedia.org/wiki/Longest increasing subsequence>).

# --instructions--

ให้เขัยนฟังก์ชันที่รับค่าเป็น array และคืนค่าเป็นชุดข้อมูลที่เรียงต่อกันได้ยาวที่สุด โดยที่ชุดข้อมูลนั้นเรียงค่าจากน้อยไปมาก

# --hints--

`findSequence` ต้องเป็นฟังก์ชัน

```js
assert(typeof findSequence == 'function');
```

`findSequence([3, 10, 2, 1, 20])` ต้องคืนค่าเป็น array

```js
assert(Array.isArray(findSequence([3, 10, 2, 1, 20])));
```

`findSequence([3, 10, 2, 1, 20])` ต้องคืนค่าเป็น `[3, 10, 20]`

```js
assert.deepEqual(findSequence([3, 10, 2, 1, 20]), [3, 10, 20]);
```

`findSequence([2, 7, 3, 5, 8])` ต้องคืนค่าเป็น `[2, 3, 5, 8]`

```js
assert.deepEqual(findSequence([2, 7, 3, 5, 8]), [2, 3, 5, 8]);
```

`findSequence([2, 6, 4, 5, 1])` ต้องคืนค่าเป็น `[2, 4, 5]`

```js
assert.deepEqual(findSequence([2, 6, 4, 5, 1]), [2, 4, 5]);
```

`findSequence([10, 22, 9, 33, 21, 50, 60, 80])` ต้องคืนค่าเป็น `[10, 22, 33, 50, 60, 80]`

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

`findSequence([0, 12, 2, 10, 6, 14, 1, 9, 5, 13, 3, 11, 7, 15])` ต้องคืนค่าเป็น `[0, 2, 6, 9, 11, 15`

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
