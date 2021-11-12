---
id: 59da22823d04c95919d46269
title: 'Sailors, coconuts and a monkey problem'
challengeType: 5
forumTopicId: 302304
dashedName: sailors-coconuts-and-a-monkey-problem
---

# --description--

ลูกเรือห้าคนถูกเรืออับปางบนเกาะแห่งหนึ่งและเก็บมะพร้าวกองใหญ่ในระหว่างวัน คืนนั้นกะลาสีเรือคนแรกตื่นขึ้นและตัดสินใจจะแบ่งต้นมะพร้าวก่อนจึงพยายามแบ่งกองมะพร้าวออกเป็นห้ากองเท่าๆ กัน แต่พบว่ามีมะพร้าวเหลืออยู่หนึ่งลูก จึงโยนให้ลิงแล้วซ่อน "ของเขา" ไว้ หนึ่งในห้ากองมะพร้าวที่มีขนาดเท่ากันและผลักอีกสี่กองเข้าด้วยกันเพื่อสร้างกองมะพร้าวที่มองเห็นได้อีกครั้งและเข้านอน ในการสรุปเรื่องยาว กะลาสีแต่ละคนจะลุกขึ้นในตอนกลางคืนหนึ่งครั้งและทำแบบเดียวกันในการแบ่งกองมะพร้าวออกเป็นห้า โดยพบว่ามีมะพร้าวเหลืออยู่หนึ่งลูกและให้มะพร้าวที่เหลือเพียงลูกเดียวแก่ลิง ในตอนเช้า (หลังจากแยกจากกันของกะลาสีเรือทั้ง 5 คนในตอนกลางคืน) กะลาสีที่เหลือจะถูกแบ่งออกเป็น 5 กองเท่าๆ กันสำหรับกะลาสีเรือแต่ละคน จากนั้นจึงพบว่ากองมะพร้าวแบ่งกะลาสีเท่าๆ กัน โดยไม่มีเศษเหลือ (ไม่มีอะไรสำหรับลิงในตอนเช้า)

# --instructions--
สร้างฟังก์ชันที่คืนค่าขนาดต่ำสุดที่เป็นไปได้ของกองมะพร้าวเริ่มต้นที่เก็บในระหว่างวันสำหรับลูกเรือ "N" **Note:** แน่นอนว่ามีเรื่องเล่าในโลกที่การรวบรวมมะพร้าวจำนวนเท่าใดก็ได้ในหนึ่งวันและกองหลายกอง ฯลฯ สามารถเกิดขึ้นได้ในเวลาที่เหมาะสมกับเนื้อเรื่อง เพื่อไม่ให้กระทบต่อ คณิตศาสตร์. **C.f:**

<ul>
  <li><a href="https://www.youtube.com/watch?v=U9qU20VmvaU" target="_blank"> Monkeys and Coconuts - Numberphile</a> (Video) Analytical solution.</li>
  <li><a href="https://oeis.org/A002021" target="_blank">A002021 Pile of coconuts problem</a> The On-Line Encyclopedia of Integer Sequences. (Although some of its references may use the alternate form of the tale).</li>
</ul>

# --hints--

`splitCoconuts` ควรเป็น function.

```js
assert(typeof splitCoconuts === 'function');
```

`splitCoconuts(5)` ควร return 3121.

```js
assert(splitCoconuts(5) === 3121);
```

`splitCoconuts(6)` ควร return 233275.

```js
assert(splitCoconuts(6) === 233275);
```

`splitCoconuts(7)` ควร return 823537.

```js
assert(splitCoconuts(7) === 823537);
```

# --seed--

## --seed-contents--

```js
function splitCoconuts(intSailors) {

  return true;
}
```

# --solutions--

```js
function splitCoconuts(intSailors) {
  let intNuts = intSailors;
  let result = splitCoconutsHelper(intNuts, intSailors);
  while (!result) {
    intNuts += 1;
    result = splitCoconutsHelper(intNuts, intSailors);
  }

  return intNuts;
}

function splitCoconutsHelper(intNuts, intSailors, intDepth) {
  const nDepth = intDepth !== undefined ? intDepth : intSailors;
  const portion = Math.floor(intNuts / intSailors);
  const remain = intNuts % intSailors;

  if (portion <= 0 || remain !== (nDepth ? 1 : 0)) {
    return null;
  }

  if (nDepth) {
    return splitCoconutsHelper(
      intNuts - portion - remain, intSailors, nDepth - 1
    );
  }

  return intNuts;
}
```
