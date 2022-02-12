---
id: 5951815dd895584b06884620
title: Circles of given radius through two points
challengeType: 5
forumTopicId: 302231
dashedName: circles-of-given-radius-through-two-points
---

# --description--

ถ้ามีจุดสองจุดบนระนาบและมีรัศมี โดยปกติเราจะสามารถวาดวงกลมที่มีรัศมีที่กำหนดได้สองวง โดยให้เส้นรอบวงของวงกลมทั้งสองวงนั้นทับจุดสองจุดนั้นได้

**Exceptions:**

<ul>
  <li>ถ้ารัศมีเป็น 0 ต้องตีความว่าวาดวงกลมไม่ได้ (ยกเว้นในกรณีที่จุดสองจุดทับกัน).</li>
  <li>ถ้าจุดสองจุดทับกัน จะทำให้วาดวงกลมที่ทับกับจุดนั้นได้ไม่จำกัด ยกเว้นในกรณีที่รัศมีเป็น 0 ซึ่งจะทำให้วงกลมกลายเป็นจุด</li>
  <li>ถ้าระยะระหว่างจุดสองจุดนั้นเป็นเส้นผ่านศูนย์กลาง ให้คืนค่าเป็นวงกลมวงเดียว</li>
  <li>ถ้าสองจุดนั้นอยู่ห่างกันเกินไปจะวาดวงกลมไม่ได้</li>
</ul>

# --instructions--

ให้เขียนฟังก์ชันที่รับค่าจุดสองจุดและรัศมี และคืนค่าเป็นวงกลมที่มีรัศมีทับจุดสองจุดนั้น

สำหรับวงกลมผลลัพธ์แต่ละวง ให้ระบุพิกัดสำหรับจุดศูนย์กลางของแต่ละวงกลมที่ปัดเศษเป็นทศนิยมสี่หลัก และคืนค่าแต่ละพิกัดเป็น array และคืนค่าพิกัดทั้งหมดเป็น array ของ array

**สำหรับกรณีพิเศษ ให้คืนค่าดังนี้:**

<ul>
  <li>ถ้าจุดนั้นอยู่บนเส้นผ่านศูนย์กลางให้คืนค่าแค่จุดเดียว แต่ถ้ารัศมีเป็น 0 ให้คืนค่าเป็น <code>"Radius Zero"</code></li>
  <li>ถ้าจุดอยู่ทับกัน ให้คืนค่าเป็น <code>"Coincident point. Infinite solutions"</code></li>
  <li>ถ้าจุดอยู่ห่างกันเกินกว่าความยาวของเส้นผ่านศูนย์กลาง ให้คืนค่าเป็น <code>"No intersection. Points further apart than circle diameter"</code></li>
</ul>

**Sample inputs:**

<pre>      p1                p2           r
0.1234, 0.9876    0.8765, 0.2345    2.0
0.0000, 2.0000    0.0000, 0.0000    1.0
0.1234, 0.9876    0.1234, 0.9876    2.0
0.1234, 0.9876    0.8765, 0.2345    0.5
0.1234, 0.9876    0.1234, 0.9876    0.0
</pre>

# --hints--

`getCircles` ต้องเป็นฟังก์ชัน

```js
assert(typeof getCircles === 'function');
```

`getCircles([0.1234, 0.9876], [0.8765, 0.2345], 2.0)` ต้องคืนค่าเป็น `[[1.8631, 1.9742], [-0.8632, -0.7521]]`

```js
assert.deepEqual(getCircles(...testCases[0]), answers[0]);
```

`getCircles([0.0000, 2.0000], [0.0000, 0.0000], 1.0)` ต้องคืนค่าเป็น `[0, 1]`

```js
assert.deepEqual(getCircles(...testCases[1]), answers[1]);
```

`getCircles([0.1234, 0.9876], [0.1234, 0.9876], 2.0)` ต้องคืนค่าเป็น `Coincident point. Infinite solutions`

```js
assert.deepEqual(getCircles(...testCases[2]), answers[2]);
```

`getCircles([0.1234, 0.9876], [0.8765, 0.2345], 0.5)` ต้องคืนค่าเป็น `No intersection. Points further apart than circle diameter`

```js
assert.deepEqual(getCircles(...testCases[3]), answers[3]);
```

`getCircles([0.1234, 0.9876], [0.1234, 0.9876], 0.0)` ต้องคืนค่าเป็น `Radius Zero`

```js
assert.deepEqual(getCircles(...testCases[4]), answers[4]);
```

# --seed--

## --after-user-code--

```js
const testCases = [
  [[0.1234, 0.9876], [0.8765, 0.2345], 2.0],
  [[0.0000, 2.0000], [0.0000, 0.0000], 1.0],
  [[0.1234, 0.9876], [0.1234, 0.9876], 2.0],
  [[0.1234, 0.9876], [0.8765, 0.2345], 0.5],
  [[0.1234, 0.9876], [0.1234, 0.9876], 0.0]
];
const answers = [
  [[1.8631, 1.9742], [-0.8632, -0.7521]],
  [0, 1],
  'Coincident point. Infinite solutions',
  'No intersection. Points further apart than circle diameter',
  'Radius Zero'
];
```

## --seed-contents--

```js
function getCircles(...args) {

  return true;
}
```

# --solutions--

```js
const hDist = (p1, p2) => Math.hypot(...p1.map((e, i) => e - p2[i])) / 2;
const pAng = (p1, p2) => Math.atan(p1.map((e, i) => e - p2[i]).reduce((p, c) => c / p, 1));
const solveF = (p, r) => t => [parseFloat((r * Math.cos(t) + p[0]).toFixed(4)), parseFloat((r * Math.sin(t) + p[1]).toFixed(4))];
const diamPoints = (p1, p2) => p1.map((e, i) => parseFloat((e + (p2[i] - e) / 2).toFixed(4)));

function getCircles(...args) {
  const [p1, p2, s] = args;
  const solve = solveF(p1, s);
  const halfDist = hDist(p1, p2);

  let msg = [];
  switch (Math.sign(s - halfDist)) {
    case 0:
      msg = s ? diamPoints(p1, p2) :
        'Radius Zero';
      break;
    case 1:
      if (!halfDist) {
        msg = 'Coincident point. Infinite solutions';
      }
      else {
        const theta = pAng(p1, p2);
        const theta2 = Math.acos(halfDist / s);
        [1, -1].map(e => solve(theta + e * theta2)).forEach(
          e => msg.push(e));
      }
      break;
    case -1:
      msg = 'No intersection. Points further apart than circle diameter';
      break;
    default:
      msg = 'Reached the default';
  }
  return msg;
}
```
