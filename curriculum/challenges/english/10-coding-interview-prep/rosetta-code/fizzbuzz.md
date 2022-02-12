---
id: 5e9ddb06ec35240f39657419
title: FizzBuzz
challengeType: 5
forumTopicId: 385370
dashedName: fizzbuzz
---

# --description--

ให้เขียนโปรแกรมที่สร้างอาร์เรย์ของจำนวนเต็มตั้งแต่ 1 ถึง 100 โดย:

<ul>
    <li>ถ้าเลขนั้นหาร 3 ลงตัว ให้เพิ่ม <code>"Fizz"</code> ลงใน array แทนที่ตัวเลขนั้น</li>
    <li>ถ้าเลขนั้นหาร 5 ลงตัว ให้เพิ่ม <code>"Buzz"</code> ลงใน array แทนที่ตัวเลขนั้น</li>
    <li>ถ้าเลขนั้นหาร 3 และ 5 ลงตัว ให้เพิ่ม <code>"FizzBuzz"</code> ลงใน array แทนที่ตัวเลขนั้น</li>
</ul>

# --instructions--

ต้องเขียนฟังก์ชันให้คืนค่าตามเงื่อนไข

# --hints--

`fizzBuzz` ต้องเป็นฟังก์ชัน

```js
assert(typeof fizzBuzz == 'function');
```

`fizzBuzz()` ต้องคืนค่าเป็น Array

```js
assert(Array.isArray(fizzBuzz()) == true);
```

ถ้าตัวเลขหาร 3 ลงตัว ต้องคืนค่าเป็น `"Fizz"`

```js
assert.equal(fizzBuzz()[2], 'Fizz');
```

ถ้าตัวเลขหาร 5 ลงตัว ต้องคืนค่าเป็น `"Buzz"`

```js
assert.equal(fizzBuzz()[99], 'Buzz');
```

ถ้าตัวเลขหาร 3 และ 5 ลงตัว ต้องคืนค่าเป็น `"FizzBuzz"`

```js
assert.equal(fizzBuzz()[89], 'FizzBuzz');
```

ตัวเลขที่หารด้วย 3 หรือ 5 ไม่ลงตัว จะคืนค่าเป็นจำนวนนั้นเลย

```js
assert.equal(fizzBuzz()[12], 13);
```

# --seed--

## --seed-contents--

```js
function fizzBuzz() {

}
```

# --solutions--

```js
function fizzBuzz() {
    let res=[];
    for (let i =1; i < 101; i++) {
        if (i % 3 === 0  && i % 5 === 0) {
            res.push("FizzBuzz");
        }
        else if (i % 3 === 0) {
            res.push("Fizz");
        }
        else if (i % 5 === 0) {
            res.push("Buzz");
        } 
        else {
            res.push(i);
        }
    }
    return res;
}
```
