---
id: 5ea28156e79528a9ab248f27
title: Luhn test of credit card numbers
challengeType: 5
forumTopicId: 385284
dashedName: luhn-test-of-credit-card-numbers
---

# --description--

[Luhn test](<https://en.wikipedia.org/wiki/Luhn algorithm>) จะใช้เพื่อแยกหมายเลขบัตรเครดิตที่ถูกต้องออกจากตัวเลขแบบสุ่ม

โดยวิธีการคือ:

<ol>
  <li> เรียงหมายเลขบัตรย้อนกลับ</li>
  <li> นำเลขในตำแหน่งคี่มาบวกกันเป็น s1</li>
  <li> นำเลขในตำแหน่งคู่มา:</li>
    <ol>
      <li>คูณสอง ถ้าคูณแล้ว 9 ให้นำเลขแต่ละหลักมาบวกกัน</li>
      <li>จากนั้นให้บวกเลขทั้งหมดเข้าด้วยกันเป็น s2</li>
    </ol>
  <li>ถ้า s1 + s2 ลงท้ายด้วย 0 จะถือว่าเป็นเลขบัตรที่ถูกต้องตาม Luhn test</li>
</ol>

เช่น ถ้าหมายเลขบัตรเป็น 49927398716:

```bash
นำเลขมาย้อนกลับ:
  61789372994
บวกเลขในตำแหน่งคี่:
  6 + 7 + 9 + 7 + 9 + 4 = 42 = s1
ส่วนเลขในตำแหน่งคู่จะทำการ:
    1, 8, 3, 2, 9
  คุณสอง:
    2, 16, 6, 4, 18
  บวกเลขแต่ละตัวให้เหลือหลักเดียว:
    2, 7, 6, 4, 9
  บวกเลขทั้งหมด:
    2 + 7 + 6 + 4 + 9 = 28 = s2

จะทำให้ s1 + s2 = 70 ซึ่งลงท้ายด้วย 0 แปลว่า 49927398716 จะผ่าน Luhn test
```

# --instructions--

ให้เขียนฟังก์ชันที่รับเลขบัตรเครดิต และนำไปทดสอบกับ Luhn test ถ้าทดสอบผ่านให้คืนค่าเป็น true ถ้าไม่ผ่านให้คืนค่าเป็น false

# --hints--

`luhnTest` ต้องเป็นฟังก์ชัน

```js
assert(typeof luhnTest === 'function');
```

`luhnTest("4111111111111111")` ต้องคืนค่าเป็น boolean

```js
assert(typeof luhnTest('4111111111111111') === 'boolean');
```

`luhnTest("4111111111111111")` ต้องคืนค่าเป็น `true`

```js
assert.equal(luhnTest('4111111111111111'), true);
```

`luhnTest("4111111111111112")` ต้องคืนค่าเป็น `false`

```js
assert.equal(luhnTest('4111111111111112'), false);
```

`luhnTest("49927398716")` ต้องคืนค่าเป็น `true`

```js
assert.equal(luhnTest('49927398716'), true);
```

`luhnTest("49927398717")` ต้องคืนค่าเป็น `false`

```js
assert.equal(luhnTest('49927398717'), false);
```

`luhnTest("1234567812345678")` ต้องคืนค่าเป็น `false`

```js
assert.equal(luhnTest('1234567812345678'), false);
```

`luhnTest("1234567812345670")` ต้องคืนค่าเป็น `true`

```js
assert.equal(luhnTest('1234567812345670'), true);
```

# --seed--

## --seed-contents--

```js
function luhnTest(str) {

}
```

# --solutions--

```js
function luhnTest(str) {
  var luhnArr = [0, 2, 4, 6, 8, 1, 3, 5, 7, 9];
  var counter = 0;
  var incNum;
  var odd = false;
  var temp = String(str).replace(/[^\d]/g, '');
  if (temp.length == 0) return false;
  for (var i = temp.length - 1; i >= 0; --i) {
    incNum = parseInt(temp.charAt(i), 10);
    counter += (odd = !odd) ? incNum : luhnArr[incNum];
  }
  return counter % 10 == 0;
}
```
