---
id: 5eaf48389ee512d4d103684b
title: Self Describing Numbers
challengeType: 5
forumTopicId: 385289
dashedName: self-describing-numbers
---

# --description--

"self describing" หรือ ["self-descriptive"](https://en.wikipedia.org/wiki/Self-descriptive_number) integers

จำนวนเต็มจะเป็น "self describing" ถ้าเลขแต่ละตำแหน่งสื่อถึงจำนวนครั้งที่เลขนั้นปรากฏในชุดตัวเลข 

เช่น **2020** เป็น self describing number ที่มี 4 หลัก โดย:

<ul>
    <li> ตำแหน่ง 0 มีค่าเป็น 2 และมีเลข   0 สองตัว ในชุดตัวเลข; </li>
    <li> ตำแหน่ง 1 มีค่าเป็น 0 และไม่มีเลข 1 ในชุดตัวเลข; </li>
    <li> ตำแหน่ง 2 มีค่าเป็น 2 และมีเลข   2 สองตัว ในชุดตัวเลข; </li>
    <li> ตำแหน่ง 3 มีค่าเป็น 0 และไม่มีเลข 3 ในชุดตัวเลข; </li>
</ul>

Self-describing number ที่น้อยกว่า 100,000,000 คือ 1210, 2020, 21200, 3211000, 42101000

# --instructions--

ให้เขียนฟังก์ชันที่รับค่าจำนวนเต็มบวก และตรวจสอบว่าเลขนั้นเป็น  "self describing" หรือไม่

# --hints--

`isSelfDescribing` ต้องเป็นฟังก์ชัน

```js
assert(typeof isSelfDescribing == 'function');
```

`isSelfDescribing()` ต้องคืนค่าเป็น boolean

```js
assert(typeof isSelfDescribing(2020) == 'boolean');
```

`isSelfDescribing(2020)` ต้องคืนค่าเป็น `true`

```js
assert.equal(isSelfDescribing(2020), true);
```

`isSelfDescribing(3021)` ต้องคืนค่าเป็น `false`

```js
assert.equal(isSelfDescribing(3021), false);
```

`isSelfDescribing(3211000)` ต้องคืนค่าเป็น `true`

```js
assert.equal(isSelfDescribing(3211000), true);
```

# --seed--

## --seed-contents--

```js
function isSelfDescribing(n) {

}
```

# --solutions--

```js
function isSelfDescribing(n) {
    let digits = String(n).split("");
    digits = digits.map(function(e) {return parseInt(e)});
    let count = digits.map((x) => {return 0})
    digits.forEach((d) =>{
        if (d >= count.length) {
            return false
        }
        count[d] += 1;
    });

     if (digits === count) {
        return true;
    }
    if (digits.length != count.length) {
        return false;
    }
    
    for (let i=0; i< digits.length; i++){
      if (digits[i] !== count[i]) {
        return false;
      }
    }
    return true;
}
```
