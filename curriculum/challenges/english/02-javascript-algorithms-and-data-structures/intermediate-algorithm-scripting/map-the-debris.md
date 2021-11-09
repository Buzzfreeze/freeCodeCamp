---
id: af4afb223120f7348cdfc9fd
title: Map the Debris
challengeType: 5
forumTopicId: 16021
dashedName: map-the-debris
---

# --description--

ให้คืนค่าเป็น array ตัวใหม่ ที่แปลงความสูงเฉลี่ยของ elements เป็นระยะเวลาการโคจร (วินาที)

array ประกอบด้วย objects ที่อยู่ในรูปแบบ `{name: 'name', avgAlt: avgAlt}`

คุณสามารถอ่านเกี่ยวกับระยะเวลาโคจรได้ที่ [on Wikipedia](http://en.wikipedia.org/wiki/Orbital_period).

ควรปัดเศษผลลัพธ์ให้เป็นจำนวนเต็มที่ใกล้ที่สุด การโคจรนั้นเป็นการโคจรรอบโลก

เส้นผ่านศูนย์กลางของโลกคือ 6367.4447 km และค่า GM ของโลกคือ 398600.4418 km<sup>3</sup>s<sup>-2</sup>.

# --hints--

`orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}])` ควรคืนค่าเป็น `[{name: "sputnik", orbitalPeriod: 86400}]`

```js
assert.deepEqual(orbitalPeriod([{ name: 'sputnik', avgAlt: 35873.5553 }]), [
  { name: 'sputnik', orbitalPeriod: 86400 }
]);
```

`orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}])` ควรคืนค่าเป็น `[{name : "iss", orbitalPeriod: 5557}, {name: "hubble", orbitalPeriod: 5734}, {name: "moon", orbitalPeriod: 2377399}]`

```js
assert.deepEqual(
  orbitalPeriod([
    { name: 'iss', avgAlt: 413.6 },
    { name: 'hubble', avgAlt: 556.7 },
    { name: 'moon', avgAlt: 378632.553 }
  ]),
  [
    { name: 'iss', orbitalPeriod: 5557 },
    { name: 'hubble', orbitalPeriod: 5734 },
    { name: 'moon', orbitalPeriod: 2377399 }
  ]
);
```

# --seed--

## --seed-contents--

```js
function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  return arr;
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
```

# --solutions--

```js
function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  var TAU = 2 * Math.PI;
  return arr.map(function(obj) {
    return {
      name: obj.name,
      orbitalPeriod: Math.round(TAU * Math.sqrt(Math.pow(obj.avgAlt+earthRadius, 3)/GM))
    };
  });
}

orbitalPeriod([{name : "sputkin", avgAlt : 35873.5553}]);
```
