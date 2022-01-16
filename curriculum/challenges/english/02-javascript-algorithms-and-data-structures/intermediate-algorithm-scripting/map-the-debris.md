---
id: af4afb223120f7348cdfc9fd
title: Map the Debris
challengeType: 5
forumTopicId: 16021
dashedName: map-the-debris
---

# --description--

ให้เขียนฟังก์ชันที่แปลงความสูงเฉลี่ยของดาวเทียมเป็นระยะเวลาการโคจรในหน่วยวินาที (Orbital Period)

ฟังก์ชันนี้จะรับค่าเป็น array ของ object ที่อยู่ในรูปแบบนี้ `{name: 'name', avgAlt: avgAlt}` และให้คืนค่าเป็น array ตัวใหม่โดยที่ array เดิมต้องไม่เปลี่ยนแปลง โดย object ใน array ที่คืนค่าออกมาจะต้องอยู่ในรูป `{name: 'name', orbitalPeriod: orbitalPeriod}`

อ่านเรื่องระยะเวลาโคจรของดาวเทียมได้ที่ [on Wikipedia](http://en.wikipedia.org/wiki/Orbital_period)

เงื่อนไขในการคำนวนคือ

- ต้องปัดเศษของผลลัพธ์ให้เป็นจำนวนเต็มที่ใกล้ที่สุด 
- การโคจรของดาวเทียมนั้นเป็นการโคจรรอบโลก
- เส้นผ่านศูนย์กลางของโลกคือ 6367.4447 km และค่า GM ของโลกคือ 398600.4418 km<sup>3</sup>s<sup>-2</sup>
- สูตรในการคำนวนสามารถดูได้จากเว็บไซต์ด้านบน ในหัวข้อ `Small body orbiting a central body` โดยค่าของ `orbitalPeriod` ที่เราต้องหาคือตัวแปร `T` ในสมการแรก

# --hints--

`orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}])` ต้องคืนค่าเป็น `[{name: "sputnik", orbitalPeriod: 86400}]`

```js
assert.deepEqual(orbitalPeriod([{ name: 'sputnik', avgAlt: 35873.5553 }]), [
  { name: 'sputnik', orbitalPeriod: 86400 }
]);
```

`orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}])` ต้องคืนค่าเป็น `[{name : "iss", orbitalPeriod: 5557}, {name: "hubble", orbitalPeriod: 5734}, {name: "moon", orbitalPeriod: 2377399}]`

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
