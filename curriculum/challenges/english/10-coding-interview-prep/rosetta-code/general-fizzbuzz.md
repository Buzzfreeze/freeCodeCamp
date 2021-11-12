---
id: 5a23c84252665b21eecc7e78
title: General FizzBuzz
challengeType: 5
forumTopicId: 302273
dashedName: general-fizzbuzz
---

# --description--

เขียน [FizzBuzz](https://rosettacode.org/wiki/FizzBuzz) เวอร์ชันทั่วไปที่ใช้ได้กับรายการปัจจัยต่างๆ ควบคู่ไปกับคำพูด

นี่เป็นการใช้งาน "fizzbuzz" โดยพื้นฐานแล้วซึ่งมีการกำหนดกฎของเกมให้กับผู้ใช้ สร้างฟังก์ชันเพื่อใช้สิ่งนี้ ฟังก์ชันควรใช้พารามิเตอร์สองตัว

อันดับแรกจะเป็นarrayที่มีกฎ FizzBuzz ตัวอย่างเช่น: `[ [3, "Fizz"] , [5, "Buzz"] ]`

สิ่งนี้บ่งชี้ว่า ควรพิมพ์ "Fizz" หากตัวเลขเป็นทวีคูณของ 3 และ "Buzz" หากเป็นพหุคูณของ 5 หากเป็นพหุคูณของทั้งสอง stringควรต่อกันตามลำดับที่ระบุในarray ในกรณีนี้ 'FizzBuzz' หากตัวเลขเป็นทวีคูณของ 3 และ 5

พารามิเตอร์ที่สองคือตัวเลขที่ฟังก์ชันควรreturn stringตามที่ระบุไว้ข้างต้น

# --hints--

`genFizzBuzz` ควรเป็น function.

```js
assert(typeof genFizzBuzz == 'function');
```

`genFizzBuzz([[3, "Fizz"],[5, "Buzz"]], 6)` ควร return string.

```js
assert(
  typeof genFizzBuzz(
    [
      [3, 'Fizz'],
      [5, 'Buzz']
    ],
    6
  ) == 'string'
);
```

`genFizzBuzz([[3, "Fizz"],[5, "Buzz"]], 6)` ควร return `"Fizz"`.

```js
assert.equal(
  genFizzBuzz(
    [
      [3, 'Fizz'],
      [5, 'Buzz']
    ],
    6
  ),
  'Fizz'
);
```

`genFizzBuzz([[3, "Fizz"],[5, "Buzz"]], 10)` ควร return `"Buzz"`.

```js
assert.equal(
  genFizzBuzz(
    [
      [3, 'Fizz'],
      [5, 'Buzz']
    ],
    10
  ),
  'Buzz'
);
```

`genFizzBuzz([[3, "Buzz"],[5, "Fizz"]], 12)` ควร return `"Buzz"`.

```js
assert.equal(
  genFizzBuzz(
    [
      [3, 'Buzz'],
      [5, 'Fizz']
    ],
    12
  ),
  'Buzz'
);
```

`genFizzBuzz([[3, "Buzz"],[5, "Fizz"]], 13)` ควร return `"13"`.

```js
assert.equal(
  genFizzBuzz(
    [
      [3, 'Buzz'],
      [5, 'Fizz']
    ],
    13
  ),
  '13'
);
```

`genFizzBuzz([[3, "Buzz"],[5, "Fizz"]], 15)` ควร return `"BuzzFizz"`.

```js
assert.equal(
  genFizzBuzz(
    [
      [3, 'Buzz'],
      [5, 'Fizz']
    ],
    15
  ),
  'BuzzFizz'
);
```

`genFizzBuzz([[3, "Fizz"],[5, "Buzz"]], 15)` ควร return `"FizzBuzz"`.

```js
assert.equal(
  genFizzBuzz(
    [
      [3, 'Fizz'],
      [5, 'Buzz']
    ],
    15
  ),
  'FizzBuzz'
);
```

`genFizzBuzz([[3, "Fizz"],[5, "Buzz"],[7, "Baxx"]], 105)` ควร return `"FizzBuzzBaxx"`.

```js
assert.equal(
  genFizzBuzz(
    [
      [3, 'Fizz'],
      [5, 'Buzz'],
      [7, 'Baxx']
    ],
    105
  ),
  'FizzBuzzBaxx'
);
```

# --seed--

## --seed-contents--

```js
function genFizzBuzz(rules, num) {

}
```

# --solutions--

```js
function genFizzBuzz(rules, num) {
  let res='';
  rules.forEach(function (e) {
    if(num % e[0] == 0)
      res+=e[1];
  })

  if(res==''){
    res=num.toString();
  }

  return res;
}
```
