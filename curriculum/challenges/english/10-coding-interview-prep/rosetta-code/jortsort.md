---
id: 5a23c84252665b21eecc7ec4
title: JortSort
challengeType: 5
forumTopicId: 302293
dashedName: jortsort
---

# --description--

jortSort เป็นชุดเครื่องมือการเรียงลำดับที่ทำให้ผู้ใช้ทำงานและรับประกันประสิทธิภาพเพราะคุณไม่ต้องเรียงลำดับอีกเลย เดิมทีมันถูกนำเสนอโดย Jenn "Moneydollars" Schiffer ที่ชื่อเสียง [JSConf](https://www.youtube.com/watch?v=pj4U_W0OFoE).

jortSort ควรเป็นฟังก์ชันที่ใช้อาร์เรย์เดียวของวัตถุที่เปรียบเทียบกันได้เป็นอาร์กิวเมนต์ จากนั้นจะเรียงลำดับอาร์เรย์ในลำดับจากน้อยไปมาก และเปรียบเทียบอาร์เรย์ที่จัดเรียงกับอาร์เรย์ที่ให้มาในตอนแรก หากอาร์เรย์ตรงกัน (เช่น จัดเรียงอาร์เรย์เดิมแล้ว) ฟังก์ชันจะคืนค่าเป็น "จริง" หากอาร์เรย์ไม่ตรงกัน (เช่น ไม่ได้จัดเรียงอาร์เรย์เดิม) ฟังก์ชันจะส่งกลับค่าเท็จ

# --hints--

`jortsort` ควรเป็น function.

```js
assert(typeof jortsort == 'function');
```

`jortsort([1,2,3,4,5])` ควร return boolean.

```js
assert(typeof jortsort([1, 2, 3, 4, 5]) == 'boolean');
```

`jortsort([1,2,3,4,5])` ควร return `true`.

```js
assert.equal(jortsort([1, 2, 3, 4, 5]), true);
```

`jortsort([1,2,13,4,5])` ควร return `false`.

```js
assert.equal(jortsort([1, 2, 13, 4, 5]), false);
```

`jortsort([12,4,51,2,4])` ควร return `false`.

```js
assert.equal(jortsort([12, 4, 51, 2, 4]), false);
```

`jortsort([1,2])` ควร return `true`.

```js
assert.equal(jortsort([1, 2]), true);
```

`jortsort([5,4,3,2,1])` ควร return `false`.

```js
assert.equal(jortsort([5, 4, 3, 2, 1]), false);
```

`jortsort([1,1,1,1,1])` ควร return `true`.

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
