---
id: 5e9ddb06ec35240f39657419
title: FizzBuzz
challengeType: 5
forumTopicId: 385370
dashedName: fizzbuzz
---

# --description--

เขียนโปรแกรมที่สร้างอาร์เรย์ของจำนวนเต็มตั้งแต่ 1 ถึง 100 (รวม) แต่:

<ul>
    <li>for multiples of 3, add <code>"Fizz"</code> to the array instead of the number</li>
    <li>for multiples of 5, add <code>"Buzz"</code> to the array instead of the number</li>
    <li>for multiples of 3 and 5, add <code>"FizzBuzz"</code> to the array instead of the number</li>
</ul>

# --instructions--

โปรแกรมของคุณควรส่งคืนอาร์เรย์ที่มีผลลัพธ์ตามกฎข้างต้น

# --hints--

`fizzBuzz` ควรเป็น function.

```js
assert(typeof fizzBuzz == 'function');
```

`fizzBuzz()` ควร return  Array.

```js
assert(Array.isArray(fizzBuzz()) == true);
```

ตัวเลขหารด้วย 3 ควร return `"Fizz"`.

```js
assert.equal(fizzBuzz()[2], 'Fizz');
```

ตัวเลขหารด้วย 5 ควร return `"Buzz"`.

```js
assert.equal(fizzBuzz()[99], 'Buzz');
```

ตัวเลขหารด้วย 3 และ 5 ควร return `"FizzBuzz"`.

```js
assert.equal(fizzBuzz()[89], 'FizzBuzz');
```

ตัวเลขที่หารด้วย 3 หรือ 5 ไม่ลงตัว จะ return จำนวนนั้นเอง

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
