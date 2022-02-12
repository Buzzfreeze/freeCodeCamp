---
id: 5a23c84252665b21eecc7e80
title: Gray code
challengeType: 5
forumTopicId: 302276
dashedName: gray-code
---

# --description--

[Gray code](<https://en.wikipedia.org/wiki/Gray code>) iเป็นรูปแบบหนึ่งของการเข้ารหัสแบบ binary ที่การเปลี่ยนระหว่างตัวเลขที่ต่อเนื่องกันต่างกันเพียงบิตเดียว

นี่เป็นการเข้ารหัสที่มีประโยชน์สำหรับการลดอันตรายของข้อมูลฮาร์ดแวร์ด้วยค่าที่เปลี่ยนแปลงอย่างรวดเร็วและ/หรือเชื่อมต่อกับฮาร์ดแวร์ที่ช้ากว่าเป็น input

นอกจากนี้ยังมีประโยชน์ในการสร้าง input สำหรับ [แผนที่ Karnaugh](<https://en.wikipedia.org/wiki/Karnaugh map>) โดยเรียงลำดับจากซ้ายไปขวาหรือบนลงล่าง

# --instructions--

ให้สร้างฟังก์ชันเพื่อเข้ารหัสตัวเลขและถอดรหัสตัวเลขจาก Gray code โดยฟังก์ชันต้องรับพารามิเตอร์ 2 ตัว

พารามิเตอร์ตัวแรกจะเป็น boolean ซึ่งถ้าเป็น true จะทำการเข้ารหัส และถ้าเป็น false จะทำการถอดรหัส 

พารามิเตอร์ที่สองจะเป็นตัวเลขที่จะเข้ารหัส/ถอดรหัส

ให้แสดงค่า binary ปกติ, ค่า Gray code และค่า Gray code ที่ถอดรหัสแล้วสำหรับเลขฐานสอง 5 บิตทั้งหมด (ตังแต่ 0 ถึง 31 โดยไม่จำเป็นต้องมี 0 นำหน้า)

มี Gray code ที่เป็นไปได้มากมาย ต่อไปนี้เข้ารหัสสิ่งที่เรียกว่า "binary reflected Gray code"

การเข้ารหัส (MSB คือบิต 0, b เป็นเลขฐานสอง, g คือ Gray code ):

<pre>if b[i-1] = 1
  g[i] = not b[i]
else
  g[i] = b[i]
</pre>

หรือ:

<pre>g = b xor (b ขยับไปทางขวา 1 ครั้ง)
</pre>

ถอดรหัส (MSB คือบิต 0, b คือ binary, g คือ Gray code):

<pre>b[0] = g[0]<br>
สำหรับบิตอื่น:
b[i] = g[i] xor b[i-1]
</pre>

# --hints--

`gray` ต้องเป็นฟังก์ชัน

```js
assert(typeof gray == 'function');
```

`gray(true,177)` ต้องคืนค่าเป็นตัวเลข

```js
assert(typeof gray(true, 177) == 'number');
```

`gray(true,177)` ต้องคืนค่าเป็น `233`

```js
assert.equal(gray(true, 177), 233);
```

`gray(true,425)` ต้องคืนค่าเป็น `381`

```js
assert.equal(gray(true, 425), 381);
```

`gray(true,870)` ต้องคืนค่าเป็น `725`

```js
assert.equal(gray(true, 870), 725);
```

`gray(false,233)` ต้องคืนค่าเป็น `177`

```js
assert.equal(gray(false, 233), 177);
```

`gray(false,381)` ต้องคืนค่าเป็น `425`

```js
assert.equal(gray(false, 381), 425);
```

`gray(false,725)` ต้องคืนค่าเป็น `870`

```js
assert.equal(gray(false, 725), 870);
```

# --seed--

## --seed-contents--

```js
function gray(enc, number) {

}
```

# --solutions--

```js
function gray(enc, number){
  if(enc){
      return number ^ (number >> 1);
  }else{
      let n = number;

      while (number >>= 1) {
          n ^= number;
      }
      return n;
  }
}
```
