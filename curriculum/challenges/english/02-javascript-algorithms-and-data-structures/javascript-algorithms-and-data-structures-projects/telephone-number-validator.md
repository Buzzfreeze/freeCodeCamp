---
id: aff0395860f5d3034dc0bfc9
title: Telephone Number Validator
challengeType: 5
forumTopicId: 16090
dashedName: telephone-number-validator
---

# --description--

ให้คืนค่า `true` ถ้า string ที่ส่งผ่านเข้าไปมีรูปแบบเบอร์โทรประเทศสหรัฐอเมริกาที่ถูกต้อง

ผู้ใช้งานสามารถกรอกแบบฟอร์มในฟิลด์อย่างไรก็ได้ตราบเท่ารูปแบบของหมายเลขสหรัฐอเมริกายังคงถูกต้อง ตัวอย่างต่อไปนี้เป็นรูปแบบหมายเลขโทรศัพท์สหรัฐอเมริกาที่ถูกต้อง (โปรดดูการทดสอบด้านล่างสำหรับตัวแปรอื่นๆ)

<blockquote>555-555-5555<br>(555)555-5555<br>(555) 555-5555<br>555 555 5555<br>5555555555<br>1 555 555 5555</blockquote>

แบบทดสอบนี้คุณจะได้รับ string เช่น `800-692-7753` หรือ `8oo-six427676;laskdjf` คุณต้องตรวจสอบเบอร์โทรศัพท์ว่าตรงกับรูปแบบดังกล่าวหรือไม่ โดยเลขพื้นที่ (area code) จำเป็นต้องระบุ และหากมีการระบุเลขประเทศ (country code) ให้ตรวจสอบว่า ต้องเป็น `1` เสมอ ถ้า string เป็นรูปแบบเบอร์โทรที่ถูกต้อง ให้คืนค่า `true`  ถ้าไม่ถูกต้อง คืนค่า `false`

# --hints--

`telephoneCheck("555-555-5555")` ควรคืนค่าเป็น boolean

```js
assert(typeof telephoneCheck('555-555-5555') === 'boolean');
```

`telephoneCheck("1 555-555-5555")` ควรคืนค่าเป็น `true`

```js
assert(telephoneCheck('1 555-555-5555') === true);
```

`telephoneCheck("1 (555) 555-5555")` ควรคืนค่าเป็น `true`

```js
assert(telephoneCheck('1 (555) 555-5555') === true);
```

`telephoneCheck("5555555555")` ควรคืนค่าเป็น `true`

```js
assert(telephoneCheck('5555555555') === true);
```

`telephoneCheck("555-555-5555")` ควรคืนค่าเป็น `true`

```js
assert(telephoneCheck('555-555-5555') === true);
```

`telephoneCheck("(555)555-5555")` ควรคืนค่าเป็น `true`

```js
assert(telephoneCheck('(555)555-5555') === true);
```

`telephoneCheck("1(555)555-5555")` ควรคืนค่าเป็น `true`

```js
assert(telephoneCheck('1(555)555-5555') === true);
```

`telephoneCheck("555-5555")` ควรคืนค่าเป็น `false`

```js
assert(telephoneCheck('555-5555') === false);
```

`telephoneCheck("5555555")` ควรคืนค่าเป็น `false`

```js
assert(telephoneCheck('5555555') === false);
```

`telephoneCheck("1 555)555-5555")` ควรคืนค่าเป็น `false`

```js
assert(telephoneCheck('1 555)555-5555') === false);
```

`telephoneCheck("1 555 555 5555")` ควรคืนค่าเป็น `true`

```js
assert(telephoneCheck('1 555 555 5555') === true);
```

`telephoneCheck("1 456 789 4444")` ควรคืนค่าเป็น `true`

```js
assert(telephoneCheck('1 456 789 4444') === true);
```

`telephoneCheck("123**&!!asdf#")` ควรคืนค่าเป็น `false`

```js
assert(telephoneCheck('123**&!!asdf#') === false);
```

`telephoneCheck("55555555")` ควรคืนค่าเป็น `false`

```js
assert(telephoneCheck('55555555') === false);
```

`telephoneCheck("(6054756961)")` ควรคืนค่าเป็น `false`

```js
assert(telephoneCheck('(6054756961)') === false);
```

`telephoneCheck("2 (757) 622-7382")` ควรคืนค่าเป็น `false`

```js
assert(telephoneCheck('2 (757) 622-7382') === false);
```

`telephoneCheck("0 (757) 622-7382")` ควรคืนค่าเป็น `false`

```js
assert(telephoneCheck('0 (757) 622-7382') === false);
```

`telephoneCheck("-1 (757) 622-7382")` ควรคืนค่าเป็น `false`

```js
assert(telephoneCheck('-1 (757) 622-7382') === false);
```

`telephoneCheck("2 757 622-7382")` ควรคืนค่าเป็น `false`

```js
assert(telephoneCheck('2 757 622-7382') === false);
```

`telephoneCheck("10 (757) 622-7382")` ควรคืนค่าเป็น `false`

```js
assert(telephoneCheck('10 (757) 622-7382') === false);
```

`telephoneCheck("27576227382")` ควรคืนค่าเป็น `false`

```js
assert(telephoneCheck('27576227382') === false);
```

`telephoneCheck("(275)76227382")` ควรคืนค่าเป็น `false`

```js
assert(telephoneCheck('(275)76227382') === false);
```

`telephoneCheck("2(757)6227382")` ควรคืนค่าเป็น `false`

```js
assert(telephoneCheck('2(757)6227382') === false);
```

`telephoneCheck("2(757)622-7382")` ควรคืนค่าเป็น `false`

```js
assert(telephoneCheck('2(757)622-7382') === false);
```

`telephoneCheck("555)-555-5555")` ควรคืนค่าเป็น `false`

```js
assert(telephoneCheck('555)-555-5555') === false);
```

`telephoneCheck("(555-555-5555")` ควรคืนค่าเป็น `false`

```js
assert(telephoneCheck('(555-555-5555') === false);
```

`telephoneCheck("(555)5(55?)-5555")` ควรคืนค่าเป็น `false`

```js
assert(telephoneCheck('(555)5(55?)-5555') === false);
```

`telephoneCheck("55 55-55-555-5")` ควรคืนค่าเป็น `false`

```js
assert(telephoneCheck('55 55-55-555-5') === false);
```

# --seed--

## --seed-contents--

```js
function telephoneCheck(str) {
  return true;
}

telephoneCheck("555-555-5555");
```

# --solutions--

```js
var re = /^([+]?1[\s]?)?((?:[(](?:[2-9]1[02-9]|[2-9][02-8][0-9])[)][\s]?)|(?:(?:[2-9]1[02-9]|[2-9][02-8][0-9])[\s.-]?)){1}([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2}[\s.-]?){1}([0-9]{4}){1}$/;

function telephoneCheck(str) {
  return re.test(str);
}

telephoneCheck("555-555-5555");
```
