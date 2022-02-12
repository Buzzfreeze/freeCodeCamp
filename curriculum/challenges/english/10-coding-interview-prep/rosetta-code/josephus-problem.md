---
id: 5a23c84252665b21eecc7ec5
title: Josephus problem
challengeType: 5
forumTopicId: 302294
dashedName: josephus-problem
---

# --description--

[Josephus problem](<https://en.wikipedia.org/wiki/Josephus problem>) เป็นปริศนาทางคณิตศาสตร์ดังนี้ 

นักโทษ $n$ คนกำลังยืนเป็นวงกลม โดยเรียงลำดับจากคนที่ $0$ ถึงคนที่ $n-1$

เพชฌฆาตเดินไปตามวงกลมโดยเริ่มจากนักโทษ $0$ และจะประหารนักโทศคนที่ $k$-th 

เมื่อเมื่อประหารไปเรื่อย วงกลมจะเล็กลง จนกระทั่งเหลือนักโทษเพียงคนเดียว นักโทษคนนั้นจะได้รับการปล่อยตัวเป็นอิสระ

เช่น ถ้ามีนักโทษ $n=5$ คนและลำดับการประหารนักโทษเป็น $k=2$ แล้วนักโทษคนที่ 1, 3, 0 และ 4 จะถูกประหาร และส่วนนักโทษหมายเลข 2 จะได้รับการปล่อยตัว

ถ้า $n, k > 0$ ให้ค้นหาว่านักโทษคนใดจะเป็นผู้รอดชีวิตคนสุดท้าย

# --instructions--

ให้เขียนฟังก์ชันที่รับค่าจำนวนนักโทษ และค่า k จากนั้นจึงคืนค่าเป็นหมายเลขของนักโทษที่ได้รับการปล่อยตัว

# --hints--

`josephus` ต้องเป็นฟังก์ชัน

```js
assert(typeof josephus == 'function');
```

`josephus(30,3)` ต้องคืนค่าเป็น number

```js
assert(typeof josephus(30, 3) == 'number');
```

`josephus(30,3)` ต้องคืนค่าเป็น `28`

```js
assert.equal(josephus(30, 3), 28);
```

`josephus(30,5)` ต้องคืนค่าเป็น `2`

```js
assert.equal(josephus(30, 5), 2);
```

`josephus(20,2)` ต้องคืนค่าเป็น `8`

```js
assert.equal(josephus(20, 2), 8);
```

`josephus(17,6)` ต้องคืนค่าเป็น `1`

```js
assert.equal(josephus(17, 6), 1);
```

`josephus(29,4)` ต้องคืนค่าเป็น `1`

```js
assert.equal(josephus(29, 4), 1);
```

# --seed--

## --seed-contents--

```js
function josephus(init, kill) {

}
```

# --solutions--

```js
function josephus(init, kill) {
  const arr = Array.from(Array(init).keys());
  let curr = -1
  while (arr.length > 1) {
    curr = (curr + kill) % arr.length;
    arr.splice(curr, 1);
    curr--;
  }
  return arr[0];
}
```
