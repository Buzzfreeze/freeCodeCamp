---
id: 5a23c84252665b21eecc8036
title: Strip control codes and extended characters from a string
challengeType: 5
forumTopicId: 302327
dashedName: strip-control-codes-and-extended-characters-from-a-string
---

# --description--

งานคือการดึงรหัสควบคุมและอักขระขยายออกจากstring วิธีแก้ปัญหาควรสาธิตวิธีการบรรลุผลลัพธ์แต่ละรายการต่อไปนี้: stringที่มีรหัสควบคุมและอักขระที่ขยายออก ใน ASCII รหัสควบคุมมีรหัสทศนิยม 0 ถึง 31 และ 127 บนระบบที่ใช้ ASCII หากถอดรหัสควบคุม stringที่เป็นผลลัพธ์จะมีอักขระทั้งหมดภายในช่วง 32 ถึง 126 ทศนิยมในตาราง ASCII . ในระบบที่ไม่ใช่ ASCII เราถือว่าอักขระที่ไม่มีสัญลักษณ์ที่สอดคล้องกันในตาราง ASCII (ภายในช่วง ASCII ที่ 32 ถึง 126 ทศนิยม) เป็นอักขระเพิ่มเติมสำหรับวัตถุประสงค์ของงานนี้

# --hints--

`strip` ควรเป็น function.

```js
assert(typeof strip == 'function');
```

`strip("abc")` ควร return string.

```js
assert(typeof strip('abc') == 'string');
```

`strip("\ba\x00b\n\rc\fd\xc3")` ควร return `"abcd"`.

```js
assert.equal(strip('\ba\x00b\n\rc\fd\xc3'), 'abcd');
```

`strip("\u0000\n abc\u00E9def\u007F")` ควร return `" abcdef"`.

```js
assert.equal(strip('\u0000\n abc\u00E9def\u007F'), ' abcdef');
```

`strip("a\n\tb\u2102d\u2147f")` ควร return `"abdf"`.

```js
assert.equal(strip('a\n\tb\u2102d\u2147f'), 'abdf');
```

`strip("Français.")` ควร return `"Franais."`.

```js
assert.equal(strip('Français.'), 'Franais.');
```

`strip("123\tabc\u0007DEF\u007F+-*/€æŧðłþ")` ควร return `"123abcDEF+-*/"`.

```js
assert.equal(strip('123\tabc\u0007DEF\u007F+-*/€æŧðłþ'), '123abcDEF+-*/');
```

# --seed--

## --seed-contents--

```js
function strip(s) {

}
```

# --solutions--

```js
function strip(s) {
  return s
    .split('')
    .filter(function(x) {
      var n = x.charCodeAt(0);

      return 31 < n && 127 > n;
    })
    .join('');
}
```
