---
id: 5a23c84252665b21eecc7ec4
title: JortSort
challengeType: 5
forumTopicId: 302293
dashedName: jortsort
---

# --description--

jortSort เป็นชุดเครื่องมือการเรียงลำดับที่ถูกนำเสนอโดย Jenn "Moneydollars" Schiffer ในงาน [JSConf](https://www.youtube.com/watch?v=pj4U_W0OFoE).

jortSort เป็นฟังก์ชันที่รับค่าเป็น array ของ object ที่เปรียบเทียบกันได้ จากนั้นจะเรียงลำดับ array ในลำดับจากน้อยไปมาก และเปรียบเทียบ array ที่จัดเรียงกับ array ที่ให้มาในตอนแรก ถ้า array ตรงกัน ฟังก์ชันจะคืนค่าเป็น true หาก array ไม่ตรงกัน ฟังก์ชันจะคืนค่าเป็น false

# --hints--

`jortsort` ต้องเป็นฟังก์ชัน

```js
assert(typeof jortsort == 'function');
```

`jortsort([1,2,3,4,5])` ต้องคืนค่าเป็น boolean

```js
assert(typeof jortsort([1, 2, 3, 4, 5]) == 'boolean');
```

`jortsort([1,2,3,4,5])` ต้องคืนค่าเป็น `true`

```js
assert.equal(jortsort([1, 2, 3, 4, 5]), true);
```

`jortsort([1,2,13,4,5])` ต้องคืนค่าเป็น `false`

```js
assert.equal(jortsort([1, 2, 13, 4, 5]), false);
```

`jortsort([12,4,51,2,4])` ต้องคืนค่าเป็น `false`

```js
assert.equal(jortsort([12, 4, 51, 2, 4]), false);
```

`jortsort([1,2])` ต้องคืนค่าเป็น `true`

```js
assert.equal(jortsort([1, 2]), true);
```

`jortsort([5,4,3,2,1])` ต้องคืนค่าเป็น `false`

```js
assert.equal(jortsort([5, 4, 3, 2, 1]), false);
```

`jortsort([1,1,1,1,1])` ต้องคืนค่าเป็น `true`

```js
assert.equal(jortsort([1, 1, 1, 1, 1]), true);
```

# --seed--

## --seed-contents--

```js
function jortsort(array) {

}
```

# --solutions--

```js
function jortsort(array) {
  // sort the array
  var originalArray = array.slice(0);
  array.sort( function(a,b){return a - b} );

  // compare to see if it was originally sorted
  for (var i = 0; i < originalArray.length; ++i) {
    if (originalArray[i] !== array[i]) return false;
  }

  return true;
};
```
