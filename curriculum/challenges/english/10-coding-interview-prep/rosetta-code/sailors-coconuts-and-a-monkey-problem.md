---
id: 59da22823d04c95919d46269
title: 'Sailors, coconuts and a monkey problem'
challengeType: 5
forumTopicId: 302304
dashedName: sailors-coconuts-and-a-monkey-problem
---

# --description--

ลูกเรือห้าคนติดเกาะแห่งหนึ่งและเก็บมะพร้าวกองใหญ่ในระหว่างวัน  
คืนนั้นกะลาสีเรือคนแรกตื่นขึ้นและตัดสินใจจะแบ่งมะพร้าวก่อนจึงพยายามแบ่งกองมะพร้าวออกเป็นห้ากองเท่าๆ กัน แต่พบว่ามีมะพร้าวเหลืออยู่หนึ่งลูก จึงโยนให้ลิงแล้วซ่อน "กองมะพร้าวของเขา" ไว้  
จากนั้นจึงรวมมะพร้าวอีกสี่กองเข้าด้วยกันและเข้านอน  
หลักจากนั้นกะลาสีทุกคนก็ทำแบบเดียวกันในทุกคืน จนกว่าจะไม่ต้องแบ่งมะพร้าวให้ลิงแล้ว (ไม่มีเศษเหลือ)

# --instructions--

ให้เขียนฟังก์ชันที่จะคืนค่าเป็นจำนวนมะพร้าวเริ่มต้นในตอนกลางวัน สำหรับกะลาสี `N` คน

**C.f:**

<ul>
  <li><a href="https://www.youtube.com/watch?v=U9qU20VmvaU" target="_blank"> Monkeys and Coconuts - Numberphile</a> (Video) Analytical solution.</li>
  <li><a href="https://oeis.org/A002021" target="_blank">A002021 Pile of coconuts problem</a> The On-Line Encyclopedia of Integer Sequences. (Although some of its references may use the alternate form of the tale).</li>
</ul>

# --hints--

`splitCoconuts` ต้องเป็นฟังก์ชัน

```js
assert(typeof splitCoconuts === 'function');
```

`splitCoconuts(5)` ต้องคืนค่าเป็น 3121

```js
assert(splitCoconuts(5) === 3121);
```

`splitCoconuts(6)` ต้องคืนค่าเป็น 233275

```js
assert(splitCoconuts(6) === 233275);
```

`splitCoconuts(7)` ต้องคืนค่าเป็น 823537

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
