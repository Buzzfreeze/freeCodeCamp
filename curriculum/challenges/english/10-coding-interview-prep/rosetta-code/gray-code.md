---
id: 5a23c84252665b21eecc7e80
title: Gray code
challengeType: 5
forumTopicId: 302276
dashedName: gray-code
---

# --description--

[Gray code](<https://en.wikipedia.org/wiki/Gray code>) iเป็นรูปแบบหนึ่งของการเข้ารหัสแบบbinaryที่การเปลี่ยนระหว่างตัวเลขที่ต่อเนื่องกันต่างกันเพียงบิตเดียว

นี่เป็นการเข้ารหัสที่มีประโยชน์สำหรับการลดอันตรายของข้อมูลฮาร์ดแวร์ด้วยค่าที่เปลี่ยนแปลงอย่างรวดเร็วและ/หรือเชื่อมต่อกับฮาร์ดแวร์ที่ช้ากว่าเป็นinput

นอกจากนี้ยังมีประโยชน์ในการสร้างinputสำหรับ [แผนที่ Karnaugh](<https://en.wikipedia.org/wiki/Karnaugh map>) โดยเรียงลำดับจากซ้ายไปขวาหรือบนลงล่าง

# --instructions--

สร้างฟังก์ชันเพื่อเข้ารหัสตัวเลขและถอดรหัสตัวเลขจากโค้ดสีเทา ฟังก์ชั่นควรมี 2 พารามิเตอร์

อันแรกจะเป็นboolean ฟังก์ชันควรเข้ารหัสสำหรับ true และถอดรหัสสำหรับ false พารามิเตอร์ที่สองจะเป็นตัวเลขที่จะเข้ารหัส/ถอดรหัส

แสดงการแทนค่าbinaryปกติ การแทนค่าสีเทา และค่ารหัสสีเทาที่ถอดรหัสแล้วสำหรับเลขฐานสอง 5 บิตทั้งหมด (รวม 0-31 โดยไม่จำเป็นต้องมี 0 นำหน้า)

มีรหัสสีเทาที่เป็นไปได้มากมาย ต่อไปนี้เข้ารหัสสิ่งที่เรียกว่า "รหัสสีเทาสะท้อนbinary"

การเข้ารหัส (MSB คือบิต 0, b เป็นเลขฐานสอง, g คือรหัสสีเทา):

<pre>if b[i-1] = 1
  g[i] = not b[i]
else
  g[i] = b[i]
</pre>

Or:

<pre>g = b xor (b logically right shifted 1 time)
</pre>

Decoding (MSB is bit 0, b is binary, g is Gray code):

<pre>b[0] = g[0]<br>
for other bits:
b[i] = g[i] xor b[i-1]
</pre>

# --hints--

`gray` ควรเป็น function.

```js
assert(typeof gray == 'function');
```

`gray(true,177)` ควร return number.

```js
assert(typeof gray(true, 177) == 'number');
```

`gray(true,177)` ควร return `233`.

```js
assert.equal(gray(true, 177), 233);
```

`gray(true,425)` ควร return `381`.

```js
assert.equal(gray(true, 425), 381);
```

`gray(true,870)` ควร return `725`.

```js
assert.equal(gray(true, 870), 725);
```

`gray(false,233)` ควร return `177`.

```js
assert.equal(gray(false, 233), 177);
```

`gray(false,381)` ควร return `425`.

```js
assert.equal(gray(false, 381), 425);
```

`gray(false,725)` ควร return `870`.

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
