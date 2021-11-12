---
id: 598eea87e5cf4b116c3ff81a
title: Factors of a Mersenne number
challengeType: 5
forumTopicId: 302264
dashedName: factors-of-a-mersenne-number
---

# --description--

Mersenne number เป็นจำนวนในรูปของ <code>2<sup>P</sup>-1</code>.

ถ้า `P` เป็นจำนวนเฉพาะ ตัวเลข Mersenne อาจเป็น Mersenne Prime (หาก `P` ไม่ใช่จำนวนเฉพาะ แสดงว่าจำนวน Mersenne ก็ไม่ใช่จำนวนเฉพาะด้วย)

ในการค้นหาจำนวนเฉพาะของ Mersenne จะเป็นข้อได้เปรียบที่จะกำจัดเลขชี้กำลังโดยการค้นหาปัจจัยเล็กๆ ก่อนที่จะเริ่ม  [การทำสอบ Lucas-Lehmer test](<https://rosettacode.org/wiki/Lucas-Lehmer test> "Lucas-Lehmer test") ซึ่งอาจมีความยาวมาก 

มีอัลกอริธึมที่มีประสิทธิภาพมากในการพิจารณาว่าตัวเลขหาร <code>2<sup>P</sup>-1</code> หรือไม่ (หรือเทียบเท่าถ้า <code>2<sup>P</sup> mod (ตัวเลข) ) = 1</code>)

บางภาษามีการนำไปใช้ในตัวของการดำเนินการเลขชี้กำลังและmodนี้อยู่แล้ว (เรียกว่า modPow หรือคล้ายกัน)

ต่อไปนี้เป็นวิธีการใช้ modPow นี้ด้วยตัวคุณเอง:

เช่น คำนวน <code>2<sup>23</sup> mod 47</code>.

แปลงเลขชี้กำลัง 23 เป็นเลขฐานสอง คุณจะได้ 10111 เริ่มต้นด้วย <code><tt>square</tt> = 1</code> ยกกำลังสองซ้ำๆ

ลบบิตบนของเลขชี้กำลังออก และหากเป็น 1 ให้คูณ "กำลังสอง" ด้วยฐานของการยกกำลัง (2) ให้คำนวณ <code><tt>square</tt> modulo 47</code>

ใช้ผลลัพธ์ของmoduloจากขั้นตอนสุดท้ายเป็นค่าเริ่มต้นของ "กำลังสอง" ในขั้นตอนถัดไป:

<pre>Remove   Optional
square        top bit  multiply by 2  mod 47
------------  -------  -------------  ------
1*1 = 1       1  0111  1*2 = 2           2
2*2 = 4       0   111     no             4
4*4 = 16      1    11  16*2 = 32        32
32*32 = 1024  1     1  1024*2 = 2048    27
27*27 = 729   1        729*2 = 1458      1
</pre>

เนื่องจาก <code>2<sup>23</sup> mod 47 = 1</code>, 47 เป็น factor ของ <code>2<sup>P</sup>-1</code>.

(ลบ 1 จากทั้งสองข้าง: <code>2<sup>23</sup>-1 = 0 mod 47</code>.)

เนื่องจาก 47 เป็น factor <code>2<sup>23</sup>-1</code> ไม่ใช่ prime.

คุณสมบัติเพิ่มเติมของตัวเลข Mersenne ช่วยให้เราปรับแต่งกระบวนการได้มากขึ้น

ทุก factor `q` of <code>2<sup>P</sup>-1</code> ต้องอยู่ในรูป `2kP+1`, `k` 
เป็นจำนวนเต็มบวกหรือศูนย์ มากกว่านั้น `q` ต้องเป็น `1` หรืแ `7 mod 8`.

ทุก potential factor `q` ต้องเป็น [prime](<https://rosettacode.org/wiki/Primality by Trial Division> "Primality by Trial Division").

เช่นเดียวกับอัลกอริธึมการแบ่งการทดลองอื่นๆ อัลกอริธึมจะหยุดเมื่อ `2kP+1 > sqrt(N)` การทดสอบหลักเหล่านี้ใช้งานได้เฉพาะกับตัวเลข Mersenne ที่ `P` เป็นจำนวนเฉพาะ ตัวอย่างเช่น <code>M<sub>4</sub>=15</code> ไม่มีปัจจัยใดที่ใช้เทคนิคเหล่านี้ แต่แยกปัจจัยออกเป็น 3 และ 5 ซึ่งไม่ตรงกับ `2kP+1`

# --instructions--

ใช้วิธีข้างต้นเพื่อหา factor ของ <code>2<sup>p</sup>-1</code>.

# --hints--

`check_mersenne` ควรเป็น function.

```js
assert(typeof check_mersenne === 'function');
```

`check_mersenne(3)` ควร return string.

```js
assert(typeof check_mersenne(3) == 'string');
```

`check_mersenne(3)` ควร return string `M3 = 2^3-1 is prime`.

```js
assert.equal(check_mersenne(3), 'M3 = 2^3-1 is prime');
```

`check_mersenne(23)` ควร return string `M23 = 2^23-1 is composite with factor 47`.

```js
assert.equal(check_mersenne(23), 'M23 = 2^23-1 is composite with factor 47');
```

`check_mersenne(929)` ควร return string `M929 = 2^929-1 is composite with factor 13007`.

```js
assert.equal(
  check_mersenne(929),
  'M929 = 2^929-1 is composite with factor 13007'
);
```

# --seed--

## --seed-contents--

```js
function check_mersenne(p) {

}
```

# --solutions--

```js
function check_mersenne(p){
    function isPrime(value){
      for (let i=2; i < value; i++){
        if (value % i == 0){
          return false;
        }
        if (value % i != 0){
          return true;
         }
      }
    }

    function trial_factor(base, exp, mod){
      let square, bits;
      square = 1;
      bits = exp.toString(2).split('');
      for (let i=0,ln=bits.length; i<ln; i++){
        square = Math.pow(square, 2) * (bits[i] == 1 ? base : 1) % mod;
      }
      return (square == 1);
    }

    function mersenne_factor(p){
      let limit, k, q;
      limit = Math.sqrt(Math.pow(2,p) - 1);
      k = 1;
      while ((2*k*p - 1) < limit){
        q = 2*k*p + 1;
        if (isPrime(q) && (q % 8 == 1 || q % 8 == 7) && trial_factor(2,p,q)){
          return q; // q เป็น factor of 2**p-1
        }
        k++;
      }
      return null;
    }
  let f, result;
  result="M"+p+" = 2^"+p+"-1 is ";
  f = mersenne_factor(p);
  result+=f == null ? "prime" : "composite with factor "+f;
  return result;
}
```
