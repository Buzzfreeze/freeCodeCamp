---
id: 5a23c84252665b21eecc7e7b
title: Generator/Exponential
challengeType: 5
forumTopicId: 302275
dashedName: generatorexponential
---

# --description--
Generator คือ entity ที่สั่งการได้ (เช่น function หรือ procedure) ที่มีโค้ดที่ให้ผลลัพธ์เป็นลำดับของค่าทีละค่า ดังนั้นทุกครั้งที่คุณเรียกใช้ Generator ก็จะคืนค่าเป็นค่าลำดับถัดไป

Generator มักจะสร้างขึ้นบน coroutines หรือ object เพื่อให้ state ภายในของ object เปลี่ยนไปตามปกติ

Generator มักใช้ในกรณีที่ลำดับอาจไม่มีที่สิ้นสุด และในกรณีที่เป็นไปได้ที่จะสร้างค่าถัดไปของลำดับที่มี state น้อยที่สุดเท่านั้น

# --instructions--

ให้เขียนฟังก์ชันที่ใช้ Generator เพื่อสร้างเลขกำลังสองและเลขกำลังสาม 

ให้สร้าง Generator ใหม่ที่กรองเลขกำลังสามทั้งหมดออกจาก Generator เลขกำลังสอง

ฟังก์ชันต้องคืนค่าเป็นค่าที่ \\( n \\) ของ Generator ที่กรองมาแล้วกรอง

เช่น ถ้า \\(n=7\\) ฟังก์ชันต้องคืนค่าเป็น 81 เนื่องจากลำดับจะเป็น 4, 9, 16, 25, 36, 49, 81 โดยที่ 64 จะถูกกรองออก เนื่องจากเป็นเลขกำลังสาม (4 ยกกำลังสามได้ 64)

# --hints--

`exponentialGenerator` ต้องเป็นฟังก์ชัน

```js
assert(typeof exponentialGenerator == 'function');
```

`exponentialGenerator()` ต้องคืนค่าเป็นตัวเลข

```js
assert(typeof exponentialGenerator(10) == 'number');
```

`exponentialGenerator(10)` ต้องคืนค่าเป็น `144`

```js
assert.equal(exponentialGenerator(10), 144);
```

`exponentialGenerator(12)` ต้องคืนค่าเป็น `196`

```js
assert.equal(exponentialGenerator(12), 196);
```

`exponentialGenerator(14)` ต้องคืนค่าเป็น `256`

```js
assert.equal(exponentialGenerator(14), 256);
```

`exponentialGenerator(20)` ต้องคืนค่าเป็น `484`

```js
assert.equal(exponentialGenerator(20), 484);
```

`exponentialGenerator(25)` ต้องคืนค่าเป็น `784`

```js
assert.equal(exponentialGenerator(25), 784);
```

# --seed--

## --seed-contents--

```js
function exponentialGenerator(n) {

}
```

# --solutions--

```js
function exponentialGenerator(n){
  function* PowersGenerator(m) {
    var n=0;
    while(1) {
        yield Math.pow(n, m);
        n += 1;
    }
  }

  function* FilteredGenerator(g, f){
    var value = g.next().value;
    var filter = f.next().value;
    while(1) {
        if( value < filter ) {
            yield value;
            value = g.next().value;
        } else if ( value > filter ) {
            filter = f.next().value;
        } else {
            value = g.next().value;
            filter = f.next().value;
        }
    }
  }

  var squares = PowersGenerator(2);
  var cubes = PowersGenerator(3);

  var filtered = FilteredGenerator(squares, cubes);

  var curr=0;
  for(var i=0;i<n;i++) curr=filtered.next();

  return curr.value;
}
```
