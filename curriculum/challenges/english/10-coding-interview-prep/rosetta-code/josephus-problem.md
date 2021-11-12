---
id: 5a23c84252665b21eecc7ec5
title: Josephus problem
challengeType: 5
forumTopicId: 302294
dashedName: josephus-problem
---

# --description--

[Josephus problem](<https://en.wikipedia.org/wiki/Josephus problem>) เป็นปริศนาทางคณิตศาสตร์ที่มีคำอธิบาย: $n$ นักโทษกำลังยืนอยู่บนวงกลม เรียงลำดับจาก $0$ ถึง $n-1$

เพชฌฆาตเดินไปตามวงกลมโดยเริ่มจากนักโทษ $0$ นำนักโทษทุกคนที่ $k$-th ออกและฆ่าเขา

เมื่อกระบวนการดำเนินไป วงกลมจะเล็กลงเรื่อยๆ จนกระทั่งเหลือนักโทษเพียงคนเดียว ซึ่งจากนั้นจึงเป็นอิสระ

ตัวอย่างเช่น หากมี $n=5$ นักโทษและ $k=2$ ลำดับการฆ่านักโทษ (เรียกว่า "ลำดับการฆ่า") จะเป็น 1, 3, 0 และ 4 และผู้รอดชีวิต จะเป็น #2

ให้ $n, k > 0$, ค้นหาว่านักโทษคนใดจะเป็นผู้รอดชีวิตคนสุดท้าย

ในเหตุการณ์ดังกล่าวครั้งหนึ่ง มีนักโทษ 41 คน และนักโทษทุก<sup>rd</sup> 3 คนถูกฆ่า ($k=3$)

ในหมู่พวกเขามีเด็กคนหนึ่งชื่อโจเซฟัสที่แก้ปัญหา ยืนอยู่ที่ตำแหน่งที่รอดตาย และใช้ชีวิตต่อไปเพื่อเล่าเรื่อง

เขาเป็นหมายเลขอะไร
# --instructions--

Write a function that takes the initial number of prisoners and 'k' as parameter and returns the number of the prisoner that survives.

# --hints--

`josephus` ควรเป็น function.

```js
assert(typeof josephus == 'function');
```

`josephus(30,3)` ควร return number.

```js
assert(typeof josephus(30, 3) == 'number');
```

`josephus(30,3)` ควร return `28`.

```js
assert.equal(josephus(30, 3), 28);
```

`josephus(30,5)` ควร return `2`.

```js
assert.equal(josephus(30, 5), 2);
```

`josephus(20,2)` ควร return `8`.

```js
assert.equal(josephus(20, 2), 8);
```

`josephus(17,6)` ควร return `1`.

```js
assert.equal(josephus(17, 6), 1);
```

`josephus(29,4)` ควร return `1`.

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
