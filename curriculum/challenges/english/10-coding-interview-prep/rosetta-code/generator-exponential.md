---
id: 5a23c84252665b21eecc7e7b
title: Generator/Exponential
challengeType: 5
forumTopicId: 302275
dashedName: generatorexponential
---

# --description--
generatorคือentityที่สั่งการได้ (เช่น function หรือ procedure) ที่มีโค้ดที่ให้ผลลัพธ์เป็นลำดับของค่า ทีละค่า ดังนั้นทุกครั้งที่คุณเรียกใช้ตัวสร้าง ค่าถัดไปในลำดับจะถูกจัดเตรียมไว้

เครื่องกำเนิดมักจะสร้างขึ้นบน coroutines หรือวัตถุเพื่อให้สถานะภายในของวัตถุได้รับการจัดการ "ตามธรรมชาติ"

เครื่องกำเนิดไฟฟ้ามักใช้ในสถานการณ์ที่ลำดับอาจไม่มีที่สิ้นสุด และในกรณีที่เป็นไปได้ที่จะสร้างค่าถัดไปของลำดับที่มีสถานะน้อยที่สุดเท่านั้น

# --instructions--

เขียนฟังก์ชันที่ใช้ตัวสร้างเพื่อสร้างสี่เหลี่ยมและลูกบาศก์ สร้างตัวสร้างใหม่ที่กรองลูกบาศก์ทั้งหมดจากตัวสร้างสี่เหลี่ยม

ฟังก์ชันควรreturnค่า \\( n^{th} \\) ของตัวสร้างตัวกรอง

ตัวอย่างเช่น สำหรับ \\(n=7\\) ฟังก์ชันควรreturn 81 เนื่องจากลำดับจะเป็น 4, 9, 16, 25, 36, 49, 81 ที่นี่ 64 จะถูกกรองออก เนื่องจากเป็นลูกบาศก์ 

# --hints--

`exponentialGenerator` ควรเป็น function.

```js
assert(typeof exponentialGenerator == 'function');
```

`exponentialGenerator()` ควร return number.

```js
assert(typeof exponentialGenerator(10) == 'number');
```

`exponentialGenerator(10)` ควร return `144`.

```js
assert.equal(exponentialGenerator(10), 144);
```

`exponentialGenerator(12)` ควร return `196`.

```js
assert.equal(exponentialGenerator(12), 196);
```

`exponentialGenerator(14)` ควร return `256`.

```js
assert.equal(exponentialGenerator(14), 256);
```

`exponentialGenerator(20)` ควร return `484`.

```js
assert.equal(exponentialGenerator(20), 484);
```

`exponentialGenerator(25)` ควร return `784`.

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
