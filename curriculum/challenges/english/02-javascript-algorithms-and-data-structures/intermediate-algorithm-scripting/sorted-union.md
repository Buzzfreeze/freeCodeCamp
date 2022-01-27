---
id: a105e963526e7de52b219be9
title: Sorted Union
challengeType: 5
forumTopicId: 16077
dashedName: sorted-union
---

# --description--

จงเขียนฟังก์ชันที่รับค่าเป็น array ตั้งแต่ 2 ตัวขึ้นไป แล้วคืนค่าเป็น array ตัวใหม่ที่รวมค่าของสอง array นั้นเข้าด้วยกันแต่ลบ element ที่ซ้ำกันออก 
โดย element ในผลลัพธ์ต้องเรียงลำดับตาม array ที่ส่งเข้าไป

ไม่ต้องทำการเรียง array จากน้อยไปมาก ให้เรียงตามค่าที่ส่งเข้าไปเท่านั้น

ให้ดูตัวอย่างจากการทดสอบโค้ดด้านล่าง

# --hints--

`uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1])` ต้องคืนค่าเป็น `[1, 3, 2, 5, 4]`

```js
assert.deepEqual(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]), [1, 3, 2, 5, 4]);
```

`uniteUnique([1, 2, 3], [5, 2, 1])` ต้องคืนค่าเป็น `[1, 2, 3, 5]`

```js
assert.deepEqual(uniteUnique([1, 2, 3], [5, 2, 1]), [1, 2, 3, 5]);
```

`uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8])` ต้องคืนค่าเป็น `[1, 2, 3, 5, 4, 6, 7, 8]`

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
