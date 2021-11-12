---
id: 5a23c84252665b21eecc8010
title: Sorting algorithms/Shell sort
challengeType: 5
forumTopicId: 302317
dashedName: sorting-algorithmsshell-sort
---

# --description--

เขียนฟังก์ชันเพื่อจัดเรียงarrayขององค์ประกอบโดยใช้algorithm [การจัดเรียงเชลล์](<https://en.wikipedia.org/wiki/Shell sort>) ซึ่งเป็นการเรียงลำดับแบบเพิ่มทีละน้อย ฟังก์ชันควรส่งคืนarrayที่เรียงลำดับ

ประเภทเชลล์ (หรือที่เรียกว่า Shellsort หรือวิธีของ Shell) ได้รับการตั้งชื่อตามนักประดิษฐ์ชื่อ Donald Shell ผู้เผยแพร่algorithmในปี 2502

การเรียงลำดับเชลล์คือลำดับของการเรียงลำดับการแทรกแบบinterleavedตามลำดับที่เพิ่มขึ้น ขนาดที่เพิ่มขึ้นจะลดลงหลังจากแต่ละรอบจนกระทั่งขนาดที่เพิ่มขึ้นคือ 1

ด้วยขนาดที่เพิ่มขึ้นเป็น 1 การเรียงลำดับจึงเป็นการเรียงลำดับการแทรกพื้นฐาน แต่ ณ เวลานี้ ข้อมูลได้รับการรับประกันว่าจะถูกจัดเรียงเกือบจะแล้ว ซึ่งเป็น "กรณีที่ดีที่สุด" ของการจัดเรียงการแทรก

ลำดับใดๆ จะเรียงลำดับข้อมูลตราบเท่าที่มันลงท้ายด้วย 1 แต่บางลำดับก็ทำงานได้ดีกว่าลำดับอื่นๆ

การศึกษาเชิงประจักษ์ได้แสดงลำดับการเพิ่มทางเรขาคณิตที่มีอัตราส่วนประมาณ 2.2 ทำงานได้ดีในทางปฏิบัติ

# --hints--

`shellSort` ควรเป็น function.

```js
assert(typeof shellSort == 'function');
```

`shellSort([25, 32, 12, 7, 20])` ควร return array.

```js
assert(Array.isArray(shellSort([25, 32, 12, 7, 20])));
```

`shellSort([25, 32, 12, 7, 20])` ควร return `[7, 12, 20, 25, 32]`.

```js
assert.deepEqual(shellSort([25, 32, 12, 7, 20]), [7, 12, 20, 25, 32]);
```

`shellSort([38, 45, 35, 8, 13])` ควร return `[8, 13, 35, 38, 45]`.

```js
assert.deepEqual(shellSort([38, 45, 35, 8, 13]), [8, 13, 35, 38, 45]);
```

`shellSort([43, 36, 20, 34, 24])` ควร return `[20, 24, 34, 36, 43]`.

```js
assert.deepEqual(shellSort([43, 36, 20, 34, 24]), [20, 24, 34, 36, 43]);
```

`shellSort([12, 33, 26, 18, 1, 16, 38])` ควร return `[1, 12, 16, 18, 26, 33, 38]`.

```js
assert.deepEqual(shellSort([12, 33, 26, 18, 1, 16, 38]), [
  1,
  12,
  16,
  18,
  26,
  33,
  38
]);
```

`shellSort([3, 39, 48, 16, 1, 4, 29])` ควร return `[1, 3, 4, 16, 29, 39, 48]`.

```js
assert.deepEqual(shellSort([3, 39, 48, 16, 1, 4, 29]), [
  1,
  3,
  4,
  16,
  29,
  39,
  48
]);
```

# --seed--

## --seed-contents--

```js
function shellSort(a) {

}
```

# --solutions--

```js
function shellSort(a) {
  for (var h = a.length; h > 0; h = parseInt(h / 2)) {
    for (var i = h; i < a.length; i++) {
      var k = a[i];
      for (var j = i; j >= h && k < a[j - h]; j -= h) a[j] = a[j - h];
      a[j] = k;
    }
  }
  return a;
}
```
