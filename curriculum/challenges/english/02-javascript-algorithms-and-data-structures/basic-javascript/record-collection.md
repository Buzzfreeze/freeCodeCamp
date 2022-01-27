---
id: 56533eb9ac21ba0edf2244cf
title: Record Collection
challengeType: 1
forumTopicId: 18261
dashedName: record-collection
---

# --description--

ตอนนี้คุณจะมี object รายการอัลบั้มเพลงของคุณ แต่ละอัลบั้มจะมี key เป็นตัวเลขที่ไม่ซ้ำกัน และมี value เป็น object ที่มี property อื่นๆ อีกหลายตัว แต่จะมีบางอัลบั้มที่มีข้อมูลไม่ครบ

ให้สร้างฟังก์ชัน `updateRecords` ที่รับค่า object `records` (รายการอัลบั้มเพลงของคุณ), `id`, `prop` (เช่น `artist` หรือ `tracks`) และ `value` โดยให้ทำตามเงื่อนไขด้านล่างเพื่อแก้ไข object ที่ส่งเข้ามาในฟังก์ชัน


- ฟังก์ชันของคุณต้องคืนค่ารายการอัลบั้มเพลงของคุณออกมาทั้งก้อนเสมอ
- ถ้า `prop` ไม่ได้มีค่าเป็น `tracks` และ `value` ไม่ได้เป็น empty string (ค่าว่าง) ให้เปลี่ยน `prop` ของอัลบั้ม ให้มีค่าเป็น `value` ที่ระบุเข้ามา
- ถ้า `prop` มีค่าเป็น `tracks` แต่อัลบั้มไม่มี property ที่ชื่อ `tracks` ให้สร้าง empty array และเพิ่ม `value` เข้าไปใน array นั้น
- ถ้า  `prop` มีค่าเป็น `tracks` และ `value` ที่เข้ามาไม่ได้เป็น empty string ให้นำ `value` ไปต่อท้าย array ของ `tracks`
- ถ้า `value` เป็น empty string ให้ลบ property ตามที่ระบุเข้ามาใน `prop` 


**หมายเหตุ:** เราจะใช้ object ที่มีข้อมูลเหมือนกับ `recordCollection` ในการทดสอบโค้ด


# --hints--

หลังจากรัน `updateRecords(recordCollection, 5439, "artist", "ABBA")` แล้ว property `artist` ควรเป็น string ที่มีค่าเป็น `ABBA`

```js
assert(
  updateRecords(_recordCollection, 5439, 'artist', 'ABBA')[5439]['artist'] ===
    'ABBA'
);
```

หลังจากรัน `updateRecords(recordCollection, 5439, "tracks", "Take a Chance on Me")` แล้ว property `tracks` ควรมี string `Take a Chance on Me` เป็น element สุดท้าย

```js
assert(
  updateRecords(_recordCollection, 5439, 'tracks', 'Take a Chance on Me')[5439][
    'tracks'
  ].pop() === 'Take a Chance on Me'
);
```

หลังจากรัน `updateRecords(recordCollection, 2548, "artist", "")` แล้ว property `artist` ควรถูกลบ

```js
updateRecords(_recordCollection, 2548, 'artist', '');
assert(!_recordCollection[2548].hasOwnProperty('artist'));
```

หลังจากรัน `updateRecords(recordCollection, 1245, "tracks", "Addicted to Love")` แล้ว property `tracks` ควรมี string `Addicted to Love` เป็น element สุดท้าย

```js
assert(
  updateRecords(_recordCollection, 1245, 'tracks', 'Addicted to Love')[1245][
    'tracks'
  ].pop() === 'Addicted to Love'
);
```

หลังจากรัน `updateRecords(recordCollection, 2468, "tracks", "Free")` แล้ว property `tracks` ควรมี string `1999` เป็น element แรก

```js
assert(
  updateRecords(_recordCollection, 2468, 'tracks', 'Free')[2468][
    'tracks'
  ][0] === '1999'
);
```

หลังจากรัน `updateRecords(recordCollection, 2548, "tracks", "")` แล้ว property `tracks` ควรถูกลบ

```js
updateRecords(_recordCollection, 2548, 'tracks', '');
assert(!_recordCollection[2548].hasOwnProperty('tracks'));
```

หลังจากรัน `updateRecords(recordCollection, 1245, "albumTitle", "Riptide")` แล้ว property `albumTitle` ควรเป็น string ที่มีค่าเป็น `Riptide`

```js
assert(
  updateRecords(_recordCollection, 1245, 'albumTitle', 'Riptide')[1245][
    'albumTitle'
  ] === 'Riptide'
);
```

# --seed--

## --before-user-code--

```js
const _recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};
```

## --seed-contents--

```js
// เตรียมข้อมูล
var recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

// แก้ไขโค้ดใต้บรรทัดนี้เท่านั้น
function updateRecords(records, id, prop, value) {
  return records;
}

updateRecords(recordCollection, 5439, 'artist', 'ABBA');
```

# --solutions--

```js
var recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

// แก้ไขโค้ดใต้บรรทัดนี้เท่านั้น
function updateRecords(records, id, prop, value) {
  if (value === '') delete records[id][prop];
  else if (prop === 'tracks') {
    records[id][prop] = records[id][prop] || [];
    records[id][prop].push(value);
  } else {
    records[id][prop] = value;
  }

  return records;
}
```
