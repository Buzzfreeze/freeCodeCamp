---
id: 5a23c84252665b21eecc7e78
title: General FizzBuzz
challengeType: 5
forumTopicId: 302273
dashedName: general-fizzbuzz
---

# --description--

ให้เขียน [FizzBuzz](https://rosettacode.org/wiki/FizzBuzz) ที่ทำงานได้กับเงื่อนไขทุกรูปแบบ

โดยฟังก์ชันนี้จะรับพารามิเตอร์แรกเป็นเงื่อนไขแบบนี้ `[ [3, "Fizz"] , [5, "Buzz"] ]`

ซึ่งหมายความว่า ถ้าเลขหาร 3 ลงตัว ให้คืนค่าเป็นสตริง `Fizz` ถ้าหาร 5 ลงตัว ให้คืนค่าเป็น `Buzz` ถ้าหารทั้ง 3 และ 5 ลงตัว ให้คืนค่าเป็น `FizzBuzz`

และฟังก์ชันจะรับพารามิเตอร์ที่สองเป็นตัวเลขที่จะนำไปเข้าเงื่อนไข

# --hints--

`genFizzBuzz` ต้องเป็นฟังก์ชัน

```js
assert(typeof genFizzBuzz == 'function');
```

`genFizzBuzz([[3, "Fizz"],[5, "Buzz"]], 6)` ต้องคืนค่าเป็นสตริง

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

`genFizzBuzz([[3, "Fizz"],[5, "Buzz"]], 6)` ต้องคืนค่าเป็น `"Fizz"`

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

`genFizzBuzz([[3, "Fizz"],[5, "Buzz"]], 10)` ต้องคืนค่าเป็น `"Buzz"`

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

`genFizzBuzz([[3, "Buzz"],[5, "Fizz"]], 12)` ต้องคืนค่าเป็น `"Buzz"`

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

`genFizzBuzz([[3, "Buzz"],[5, "Fizz"]], 13)` ต้องคืนค่าเป็น `"13"`

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

`genFizzBuzz([[3, "Buzz"],[5, "Fizz"]], 15)` ต้องคืนค่าเป็น `"BuzzFizz"`

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

`genFizzBuzz([[3, "Fizz"],[5, "Buzz"]], 15)` ต้องคืนค่าเป็น `"FizzBuzz"`

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

`genFizzBuzz([[3, "Fizz"],[5, "Buzz"],[7, "Baxx"]], 105)` ต้องคืนค่าเป็น `"FizzBuzzBaxx"`

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
