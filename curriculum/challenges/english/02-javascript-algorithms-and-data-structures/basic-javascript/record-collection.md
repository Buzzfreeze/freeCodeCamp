---
id: 56533eb9ac21ba0edf2244cf
title: Record Collection
challengeType: 1
forumTopicId: 18261
dashedName: record-collection
---

# --description--

คุณมี object ซึ่งเป็นส่วนหนึ่งของคอลเล็กชันอัลบั้มเพลง (musical album collection) ของคุณ แต่ละอัลบั้มมี key เป็น id number ที่ไม่ซ้ำกัน และมี property อื่นๆ อีกหลายตัว อย่างไรก็ตาม ไม่ใช่ทุกอัลบั้มที่มีข้อมูลครบถ้วน

คุณเริ่มต้นจากฟังก์ชัน `updateRecords` ที่รับค่า object `records` (ประกอบด้วยคอลเล็กชันอัลบั้มเพลง), `id`, `prop` (เช่น `artist` หรือ `tracks`) และ `value` จงทำ function ให้สมบูรณ์ โดยใช้กฎด้านล่างเพื่อแก้ไข object ที่ส่งผ่านไปยัง function


- function ของคุณต้องคืนค่า record collection object ทั้งรายการเสมอ

- ถ้า `prop` ไม่ใช่ `tracks` และ `value` ไม่ใช่ empty string ให้อัปเดต หรือกำหนด `prop` ของอัลบั้ม ให้มีค่าเป็น `value`

- ถ้า `prop` เป็น `tracks` แต่อัลบั้มไม่มี property `tracks` ให้สร้าง empty array และเพิ่ม `value` เข้าไป

- ถ้า  `prop` เป็น `tracks` และ `value` ไม่ใช่ empty string ให้เพิ่ม `value` ไปยังท้ายอัลบั้มที่มี array `tracks` อยู่

- ถ้า `value` เป็น empty string ให้ลบ property `prop` ออกจากอัลบั้ม 


**หมายเหตุ:** สำเนาของ object `recordCollection` ใช้สำหรับการทดสอบ


# --hints--

หลังจากรัน `updateRecords(recordCollection, 5439, "artist", "ABBA")`, `artist` ควรเป็น string `ABBA`

```js
assert(
  updateRecords(_recordCollection, 5439, 'artist', 'ABBA')[5439]['artist'] ===
    'ABBA'
);
```

หลังจากรัน `updateRecords(recordCollection, 5439, "tracks", "Take a Chance on Me")`, `tracks` ควรมี string `Take a Chance on Me` เป็น element สุดท้าย

```js
assert(
  updateRecords(_recordCollection, 5439, 'tracks', 'Take a Chance on Me')[5439][
    'tracks'
  ].pop() === 'Take a Chance on Me'
);
```

หลังจากรัน `updateRecords(recordCollection, 2548, "artist", "")`, `artist` ไม่ควรถูก set

```js
updateRecords(_recordCollection, 2548, 'artist', '');
assert(!_recordCollection[2548].hasOwnProperty('artist'));
```

หลังจากรัน `updateRecords(recordCollection, 1245, "tracks", "Addicted to Love")`, `tracks` ควรมี string `Addicted to Love` ที่ element ท้ายสุด

```js
assert(
  updateRecords(_recordCollection, 1245, 'tracks', 'Addicted to Love')[1245][
    'tracks'
  ].pop() === 'Addicted to Love'
);
```

หลังจากรัน `updateRecords(recordCollection, 2468, "tracks", "Free")`, `tracks` ควรมี string `1999` ที่ element แรก

```js
assert(
  updateRecords(_recordCollection, 2468, 'tracks', 'Free')[2468][
    'tracks'
  ][0] === '1999'
);
```

หลังจากรัน `updateRecords(recordCollection, 2548, "tracks", "")`, `tracks` ไม่ควรถูก set

```js
updateRecords(_recordCollection, 2548, 'tracks', '');
assert(!_recordCollection[2548].hasOwnProperty('tracks'));
```

หลังจากรัน `updateRecords(recordCollection, 1245, "albumTitle", "Riptide")`, `albumTitle` ควรเป็น string `Riptide`

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
// Setup
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

// Only change code below this line
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

// Only change code below this line
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
