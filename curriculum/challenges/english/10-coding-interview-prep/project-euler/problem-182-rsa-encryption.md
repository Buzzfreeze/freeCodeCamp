---
id: 5900f4231000cf542c50ff35
title: 'Problem 182: RSA encryption'
challengeType: 5
forumTopicId: 301818
dashedName: problem-182-rsa-encryption
---

# --description--

การเข้ารหัส RSA มีวิธีดังนี้:

สร้างสองจำนวนเฉพาะ `p` และ `q` ที่ต่างกัน  
คำนวณ `n=p*q` และ `φ=(p-1)(q-1)`  
ค้นหาจำนวนเต็ม `e` โดย `1 < e < φ` เพื่อให้ `gcd(e,φ) = 1`

ข้อความในระบบนี้เป็นตัวเลขในช่วง `[0,n-1]`
จากนั้นข้อความที่จะเข้ารหัสจะถูกแปลงเป็นข้อความ (ตัวเลขในช่วง `[0,n-1]`)
ในการเข้ารหัสข้อความ สำหรับแต่ละข้อความ `m`, c=m<sup>e</sup> mod n จะถูกคำนวณ

ในการถอดรหัสข้อความ มีวิธีดังนี้:  
คำนวณ `d` ให้เท่ากับ `ed=1 mod φ`  
จากนั้นสำหรับแต่ละข้อความที่เข้ารหัส `c` ให้คำนวณ m=c<sup>d</sup> mod n

มีค่าของ `e` และ `m` ซึ่ง m<sup>e</sup> mod n = m
เราเรียกข้อความ `m` ซึ่ง m<sup>e</sup> mod n=m ข้อความที่ไม่ปกปิด

ปัญหาในการเลือก "e" คือไม่ควรมีข้อความที่ไม่ปกปิดมากเกินไป  
ตัวอย่างเช่น ให้ `p=19` และ `q=37`
จากนั้น `n=19*37=703` และ `φ=18*36=648`
หากเราเลือก `e=181` ถึงแม้ว่า `gcd(181,648)=1` ปรากฎว่าข้อความที่เป็นไปได้ทั้งหมด `(0≤m≤n-1)` ไม่ถูกปกปิดเมื่อคำนวณ m<sup>e</sup> mod n  
สำหรับตัวเลือกที่ถูกต้องของ "e" มีข้อความที่ไม่ปกปิดอยู่บ้าง
สิ่งสำคัญคือต้องมีข้อความที่ไม่ปกปิดเป็นอย่างน้อย

สำหรับ `p` และ `q` ที่ให้มา ให้หาผลรวมของค่าทั้งหมดของ `e` โดยที่ `1 < e < φ(p,q)` และ `gcd(e,φ)=1` เพื่อให้ตัวเลข ของข้อความที่ไม่ปกปิดมีค่าเป็น `e` เป็นอย่างน้อย

# --hints--

`RSAEncryption` ต้องเป็นฟังก์ชัน

```js
assert(typeof RSAEncryption === 'function')
```

`RSAEncryption` ต้องคืนค่าเป็นตัวเลข

```js
assert.strictEqual(typeof RSAEncryption(19, 37), 'number');
```

`RSAEncryption(19, 37)` ต้องคืนค่าเป็น `17766`

```js
assert.strictEqual(RSAEncryption(19, 37), 17766);
```

`RSAEncryption(283, 409)` ต้องคืนค่าเป็น `466196580`

```js
assert.strictEqual(RSAEncryption(283, 409), 466196580);
```

`RSAEncryption(1009, 3643)` ต้องคืนค่าเป็น `399788195976`

```js
assert.strictEqual(RSAEncryption(19, 37), 17766);
```

# --seed--

## --seed-contents--

```js
function RSAEncryption(p, q) {

  return true;
}

RSAEncryption(19, 37);
```

# --solutions--

```js
function gcd(a, b) {
    if (b)
        return gcd(b, a % b);
    else
        return a;
}

function RSAEncryption(p, q) {
    let phi = (p - 1) * (q - 1);

    let best = Number.MAX_SAFE_INTEGER;
    let sum = 0;

    for (let e = 0; e < phi; ++e) {
        if (!(gcd(e, phi) == 1))
            continue;

        let msg = (gcd(p - 1, e - 1) + 1) * (gcd(q - 1, e - 1) + 1);

        if (best == msg) {
            sum += e;
        } else if (best > msg) {
            best = msg;
            sum = e;
        }
    }

    return sum;
}
```
