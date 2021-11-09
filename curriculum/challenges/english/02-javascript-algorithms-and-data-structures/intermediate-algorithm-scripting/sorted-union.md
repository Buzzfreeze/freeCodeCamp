---
id: a105e963526e7de52b219be9
title: Sorted Union
challengeType: 5
forumTopicId: 16077
dashedName: sorted-union
---

# --description--

จงเขียนฟังก์ชันที่รับค่าตั้งแต่ 2 array ขึ้นไป แล้วคืนค่าเป็น array ตัวใหม่ที่มีค่าไม่ซ้ำกัน โดยเรียงลำดับตาม array ตั้งต้น
หรือกล่าวได้ว่า ค่าที่อยู่ใน array ตัวใหม่จะเป็นค่าที่มาจากทุก array รวมกัน เรียงข้อมูลตามลำดับเดิม แต่ต้องไม่มีข้อมูลซ้ำกัน
กรณีตัวเลข หากมีการเรียงใน array ตั้งต้นเป็นอย่างไร ก็ยังคงเรียงเป็นอย่างนั้น ส่วน array ตัวใหม่ ไม่ต้องทำการเรียงแต่อย่างใด
ให้ทำการทดสอบดังตัวอย่างต่อไปนี้

# --hints--

`uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1])` ควรคืนค่า `[1, 3, 2, 5, 4]`.

```js
assert.deepEqual(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]), [1, 3, 2, 5, 4]);
```

`uniteUnique([1, 2, 3], [5, 2, 1])` ควรคืนค่า `[1, 2, 3, 5]`.

```js
assert.deepEqual(uniteUnique([1, 2, 3], [5, 2, 1]), [1, 2, 3, 5]);
```

`uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8])` ควรคืนค่า `[1, 2, 3, 5, 4, 6, 7, 8]`.

```js
assert.deepEqual(uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]), [
  1,
  2,
  3,
  5,
  4,
  6,
  7,
  8
]);
```

# --seed--

## --seed-contents--

```js
function uniteUnique(arr) {
  return arr;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
```

# --solutions--

```js
function uniteUnique(arr) {
  return [].slice.call(arguments).reduce(function(a, b) {
    return [].concat(a, b.filter(function(e) {return a.indexOf(e) === -1;}));
  }, []);
}
```
