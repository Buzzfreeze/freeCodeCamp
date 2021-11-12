---
id: 5ea28156e79528a9ab248f27
title: Luhn test of credit card numbers
challengeType: 5
forumTopicId: 385284
dashedName: luhn-test-of-credit-card-numbers
---

# --description--

[Luhn test](<https://en.wikipedia.org/wiki/Luhn algorithm>) บริษัทบัตรเครดิตบางแห่งใช้เพื่อแยกหมายเลขบัตรเครดิตที่ถูกต้องออกจากตัวเลขที่สุ่มเลือกได้

บริษัทเหล่านั้นที่ใช้หมายเลขบัตรเครดิตที่ผ่านการทดสอบของ Luhn ได้จะมีหมายเลขที่ผ่านการทดสอบดังต่อไปนี้:

<ol>
  <li> Reverse the order of the digits in the number.</li>
  <li> Take the first, third, ... and every other odd digit in the reversed digits and sum them to form the partial sum s1</li>
  <li> Taking the second, fourth ... and every other even digit in the reversed digits:</li>
    <ol>
      <li>Multiply each digit by two and sum the digits if the answer is greater than nine to form partial sums for the even digits.</li>
      <li>Sum the partial sums of the even digits to form s2.</li>
    </ol>
  <li>If s1 + s2 ends in zero then the original number is in the form of a valid credit card number as verified by the Luhn test.</li>
</ol>

ตัวอย่างเช่น ถ้าหมายเลขทดลองคือ 49927398716:

```bash
Reverse the digits:
  61789372994
Sum the odd digits:
  6 + 7 + 9 + 7 + 9 + 4 = 42 = s1
The even digits:
    1, 8, 3, 2, 9
  Two times each even digit:
    2, 16, 6, 4, 18
  Sum the digits of each multiplication:
    2, 7, 6, 4, 9
  Sum the last:
    2 + 7 + 6 + 4 + 9 = 28 = s2

s1 + s2 = 70 which ends in zero which means that 49927398716 passes the Luhn test.
```

# --instructions--

เขียนฟังก์ชันที่จะตรวจสอบตัวเลขด้วยการทดสอบ Luhn return true หากเป็นตัวเลขที่ถูกต้อง มิฉะนั้นให้return false

# --hints--

`luhnTest` ควรเป็น function.

```js
assert(typeof luhnTest === 'function');
```

`luhnTest("4111111111111111")` ควร return boolean.

```js
assert(typeof luhnTest('4111111111111111') === 'boolean');
```

`luhnTest("4111111111111111")` ควร return `true`.

```js
assert.equal(luhnTest('4111111111111111'), true);
```

`luhnTest("4111111111111112")` ควร return `false`.

```js
assert.equal(luhnTest('4111111111111112'), false);
```

`luhnTest("49927398716")` ควร return `true`.

```js
assert.equal(luhnTest('49927398716'), true);
```

`luhnTest("49927398717")` ควร return `false`.

```js
assert.equal(luhnTest('49927398717'), false);
```

`luhnTest("1234567812345678")` ควร return `false`.

```js
assert.equal(luhnTest('1234567812345678'), false);
```

`luhnTest("1234567812345670")` ควร return `true`.

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
