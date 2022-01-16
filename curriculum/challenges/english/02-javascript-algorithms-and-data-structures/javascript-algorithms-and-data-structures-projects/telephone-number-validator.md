---
id: aff0395860f5d3034dc0bfc9
title: Telephone Number Validator
challengeType: 5
forumTopicId: 16090
dashedName: telephone-number-validator
---

# --description--

ให้เขียนฟังก์ชันที่คืนค่าเป็น `true` ถ้า string ที่ส่งผ่านเข้าไปมีรูปแบบของเบอร์โทรของประเทศอเมริกาที่ถูกต้อง

ในแบบทดสอบนี้จะสมมติว่าผู้ใช้งานกรอกแบบฟอร์มเข้ามา แล้วเราต้องเอาข้อมูลนั้นไปประมวลผล ซึ้งผู้ใช้จะกรอกมาแบบไหนก็ได้ ถ้ารูปแบบของตัวเลขยังเป็นรูปแบบที่ถูกต้องอยู่ ตัวอย่างนี้เป็นรูปแบบเบอร์โทรศัพท์ของประเทศอเมริกาที่ถูกต้อง (ในส่วนทดสอบโค้ดด้านล่างจะแสดงรูปแบบอื่นด้วย)

<blockquote>555-555-5555<br>(555)555-5555<br>(555) 555-5555<br>555 555 5555<br>5555555555<br>1 555 555 5555</blockquote>

แบบทดสอบนี้จะส่ง string เช่น `800-692-7753` หรือ `8oo-six427676;laskdjf` เข้าไปในฟังก์ชัน 
คุณต้องตรวจสอบเบอร์โทรศัพท์ว่าตรงกับรูปแบบที่กำหนดให้หรือไม่ 
โดยต้องระบุรหัสพื้นที่เสมอ และถ้ามีการระบุรหัสประเทศ ให้ตรวจสอบว่า ต้องมีค่าเป็น `1` 
ถ้า string เป็นรูปแบบเบอร์โทรที่ถูกต้อง ให้คืนค่าเป็น `true`  ถ้าไม่ถูกต้องให้คืนค่าเป็น `false`

รหัสพื้นที่คือ: เลขสามตัวแรกถ้าตัวเลขยาว 10 หลัก
รหัสประเทศคือ: เลขชุดแรกที่ยาว 1-3 ตัวและอยู่หน้าตัวเลขเบอร์โทร 10 หลัก วิธีสังเกตุคือให้ดูว่าถ้าตัวเลขยาวเกิน 10 ตัว แปลว่าจะมีการระบุรหัสประเทศด้วย และเลขชุดแรกจะเป็นรหัสประเทศ

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
