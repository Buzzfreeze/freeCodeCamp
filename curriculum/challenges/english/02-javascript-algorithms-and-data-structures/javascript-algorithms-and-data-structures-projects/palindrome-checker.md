---
id: aaa48de84e1ecc7c742e1124
title: Palindrome Checker
challengeType: 5
forumTopicId: 16004
dashedName: palindrome-checker
---

# --description--

ให้เขียนฟังก์ชันที่คืนค่าเป็น `true` เมื่อ string ที่ส่งเข้าไปเป็น palindrome และคืนค่า `false` ถ้าไม่ใช่

<dfn>palindrome</dfn> คือคำหรือประโยคที่อ่านได้เหมือนกันทั้งจากหน้าและหลัง โดยไม่สนใจเครื่องหมายวรรคตอน ตัวพิมพ์เล็กตัวพิมพ์ใหญ่ และเว้นวรรค

**หมายเหตุ:** คุณต้องลบ **สิ่งที่ไม่ใช่ตัวอักษรและตัวเลขทั้งหมดออกจาก string** (เครื่องหมายวรรคตอน, ช่องว่าง และสัญลักษณ์ต่างๆ) แล้วแปลงให้เป็นตัวอักษรพิมพ์เล็กหรือพิมพ์ใหญ่ทั้งหมด เพื่อจะได้เช็ค palindrome ได้

เราจะส่ง string ที่มีรูปแบบต่างๆ เข้าไป เช่น `racecar`, `RaceCar` และ `race CAR`

เราจะส่ง string ที่มีอักขระพิเศษต่างๆ เข้าไปด้วย เช่น `2A3*3a2`, `2A3 3a2` และ `2_A3*3#A2`

# --hints--

`palindrome("eye")` ต้องคืนค่าเป็น boolean

```js
assert(typeof palindrome('eye') === 'boolean');
```

`palindrome("eye")` ต้องคืนค่าเป็น `true`

```js
assert(palindrome('eye') === true);
```

`palindrome("_eye")` ต้องคืนค่าเป็น `true`

```js
assert(palindrome('_eye') === true);
```

`palindrome("race car")` ต้องคืนค่าเป็น `true`

```js
assert(palindrome('race car') === true);
```

`palindrome("not a palindrome")` ต้องคืนค่าเป็น `false`

```js
assert(palindrome('not a palindrome') === false);
```

`palindrome("A man, a plan, a canal. Panama")` ต้องคืนค่าเป็น `true`

```js
assert(palindrome('A man, a plan, a canal. Panama') === true);
```

`palindrome("never odd or even")` ต้องคืนค่าเป็น `true`

```js
assert(palindrome('never odd or even') === true);
```

`palindrome("nope")` ต้องคืนค่าเป็น `false`

```js
assert(palindrome('nope') === false);
```

`palindrome("almostomla")` ต้องคืนค่าเป็น `false`

```js
assert(palindrome('almostomla') === false);
```

`palindrome("My age is 0, 0 si ega ym.")` ต้องคืนค่าเป็น `true`

```js
assert(palindrome('My age is 0, 0 si ega ym.') === true);
```

`palindrome("1 eye for of 1 eye.")` ต้องคืนค่าเป็น `false`

```js
assert(palindrome('1 eye for of 1 eye.') === false);
```

`palindrome("0_0 (: /-\ :) 0-0")` ต้องคืนค่าเป็น `true`

```js
assert(palindrome('0_0 (: /- :) 0-0') === true);
```

`palindrome("five|\_/|four")` ต้องคืนค่าเป็น `false`

```js
assert(palindrome('five|_/|four') === false);
```

# --seed--

## --seed-contents--

```js
function palindrome(str) {
  return true;
}



palindrome("eye");
```

# --solutions--

```js
function palindrome(str) {
  var string = str.toLowerCase().split(/[^A-Za-z0-9]/gi).join('');
  var aux = string.split('');
  if (aux.join('') === aux.reverse().join('')){
    return true;
  }

  return false;
}
```
