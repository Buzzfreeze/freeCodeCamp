---
id: 5eaf48389ee512d4d103684b
title: Self Describing Numbers
challengeType: 5
forumTopicId: 385289
dashedName: self-describing-numbers
---

# --description--

 "self describing" หรือ ["self-descriptive"](https://en.wikipedia.org/wiki/Self-descriptive_number) integers

จำนวนเต็มเรียกว่า "self describing" หากมีคุณสมบัติที่เมื่อตำแหน่งหลักเป็น 0 ถึง N-1 ตัวเลขในแต่ละตำแหน่งจะเท่ากับจำนวนครั้งที่ตัวเลขนั้นปรากฏในตัวเลข

เช่น **2020** มี 4-digit self describing number:

<ul>
    <li> position 0 has value 2 and there are two 0s in the number; </li>
    <li> position 1 has value 0 and there are no 1s in the number; </li>
    <li> position 2 has value 2 and there are two 2s; </li>
    <li> position 3 has value 0 and there are zero 3s; </li>
</ul>

Self-describing numbers &lt; 100,000,000 มี: 1210, 2020, 21200, 3211000, 42101000.

# --instructions--

เขียนฟังก์ชันที่ใช้จำนวนเต็มบวกเป็นพารามิเตอร์ หากเป็น"self describing" ให้ return true ถ้าไม่ใช่ให้ return false

# --hints--

`isSelfDescribing` ควรเป็น function.

```js
assert(typeof isSelfDescribing == 'function');
```

`isSelfDescribing()` ควร return boolean.

```js
assert(typeof isSelfDescribing(2020) == 'boolean');
```

`isSelfDescribing(2020)` ควร return `true`.

```js
assert.equal(isSelfDescribing(2020), true);
```

`isSelfDescribing(3021)` ควร return `false`.

```js
assert.equal(isSelfDescribing(3021), false);
```

`isSelfDescribing(3211000)` ควร return `true`.

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
