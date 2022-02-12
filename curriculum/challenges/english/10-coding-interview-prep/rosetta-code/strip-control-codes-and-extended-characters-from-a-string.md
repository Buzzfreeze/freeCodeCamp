---
id: 5a23c84252665b21eecc8036
title: Strip control codes and extended characters from a string
challengeType: 5
forumTopicId: 302327
dashedName: strip-control-codes-and-extended-characters-from-a-string
---

# --description--

ให้ทำการคือ control code และ extended character ออกจากสตริง 

โดยให้ทำงานตามนี้:  
Control Code ของ ASCII คือตัวเลขตั้งแต่ 0 ถึง 31 และ 127
และสำหรับสตริงที่ไม่ใช่ ASCII ให้ถือว่าตัวอักษรที่ไม่ได้อยู่ในช่วง ASCII ตั้งแต่ 32 ถึง 126 เป็น extended character

# --hints--

`strip` ต้องเป็นฟังก์ชัน

```js
assert(typeof strip == 'function');
```

`strip("abc")` ต้องคืนค่าเป็นสตริง

```js
assert(typeof strip('abc') == 'string');
```

`strip("\ba\x00b\n\rc\fd\xc3")` ต้องคืนค่าเป็น `"abcd"`

```js
assert.equal(strip('\ba\x00b\n\rc\fd\xc3'), 'abcd');
```

`strip("\u0000\n abc\u00E9def\u007F")` ต้องคืนค่าเป็น `" abcdef"`

```js
assert.equal(strip('\u0000\n abc\u00E9def\u007F'), ' abcdef');
```

`strip("a\n\tb\u2102d\u2147f")` ต้องคืนค่าเป็น `"abdf"`

```js
assert.equal(strip('a\n\tb\u2102d\u2147f'), 'abdf');
```

`strip("Français.")` ต้องคืนค่าเป็น `"Franais."`

```js
assert.equal(strip('Français.'), 'Franais.');
```

`strip("123\tabc\u0007DEF\u007F+-*/€æŧðłþ")` ต้องคืนค่าเป็น `"123abcDEF+-*/"`

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
