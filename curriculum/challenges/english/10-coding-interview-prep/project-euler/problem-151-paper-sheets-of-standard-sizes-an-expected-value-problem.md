---
id: 5900f4031000cf542c50ff16
title: 'Problem 151: Paper sheets of standard sizes: an expected-value problem'
challengeType: 5
forumTopicId: 301782
dashedName: problem-151-paper-sheets-of-standard-sizes-an-expected-value-problem
---

# --description--

โรงพิมพ์แห่งหนึ่งดำเนินการ 16 ชุด (งาน) ทุกสัปดาห์ และแต่ละชุดต้องใช้กระดาษป้องกันสีพิเศษขนาด A5 แผ่นหนึ่ง

ทุกเช้าวันจันทร์ หัวหน้าจะเปิดซองใหม่ซึ่งมีกระดาษพิเศษขนาด A1 แผ่นใหญ่

เขาดำเนินการผ่าครึ่งจึงได้ขนาด A2 สองแผ่น จากนั้นเขาก็ผ่าครึ่งแผ่นเพื่อให้ได้ขนาด A3 สองแผ่น และต่อไปเรื่อยๆ จนกว่าเขาจะได้แผ่นขนาด A5 ที่จำเป็นสำหรับชุดแรกของสัปดาห์

แผ่นที่ไม่ได้ใช้ทั้งหมดจะถูกใส่กลับเข้าไปในซองจดหมาย

<img class="img-responsive center-block" alt="A1-size sheet split into: A2, A3, A4 and two A5 sheets" src="https://cdn.freecodecamp.org/curriculum/project-euler/paper-sheets-of-standard-sizes-an-expected-value-problem.png" style="background-color: white; padding: 10px;">

นตอนต้นของแต่ละชุดต่อๆ มา เขาสุ่มหยิบกระดาษหนึ่งแผ่นจากซองจดหมาย ถ้าเป็นขนาด A5 เขาจะใช้มัน หากมีขนาดใหญ่ขึ้น เขาจะทำซ้ำขั้นตอน 'ตัดครึ่ง' จนกว่าเขาจะได้สิ่งที่ต้องการ และกระดาษที่เหลือจะถูกใส่กลับเข้าไปในซองจดหมายเสมอ

ไม่รวมชุดแรกและชุดสุดท้ายของสัปดาห์ ให้หาจำนวนครั้งที่คาดหวัง (ในแต่ละสัปดาห์) ที่หัวหน้าคนงานพบกระดาษแผ่นเดียวในซองจดหมาย

ให้คำตอบของคุณเป็นทศนิยมหกตำแหน่งโดยใช้รูปแบบ "x.xxxxxx"

# --hints--

`expectedValueProblem()` ควร return `0.464399`.

```js
assert.strictEqual(expectedValueProblem(), 0.464399);
```

# --seed--

## --seed-contents--

```js
function expectedValueProblem() {

  return true;
}

expectedValueProblem();
```

# --solutions--

```js
// solution required
```
