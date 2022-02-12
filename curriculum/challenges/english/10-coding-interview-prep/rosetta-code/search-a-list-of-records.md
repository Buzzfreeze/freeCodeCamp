---
id: 5eb3e497b8d6d7f63c5517ea
title: Search a list of records
challengeType: 5
forumTopicId: 385315
dashedName: search-a-list-of-records
---

# --description--

record ประกอบด้วย attribute ที่อธิบาย entity  
โดยแต่ละ attribute จะมีชื่อและค่า เช่น คนจะมี attribute  `age` โดยมีค่าเท่ากับ 25  
การดำเนินการที่สำคัญในรายการ record คือการค้นหา record ที่มีค่า attribute ตามที่ระบุ

# --instructions--

ให้เขียนฟังก์ชันที่รับสตริงเป็นพารามิเตอร์ และคืนค่าเป็น index ของข้อมูลใน `list` ที่มี attribute `name` ตรงกับสตริงที่ระบุ

# --hints--

`searchCity` ต้องเป็นฟังก์ชัน

```js
assert(typeof searchCity === 'function');
```

`searchCity("Dar Es Salaam")` ต้องคืนค่าเป็นตัวเลข

```js
assert(typeof searchCity('Dar Es Salaam') === 'number');
```

`searchCity("Dar Es Salaam")` ต้องคืนค่าเป็น `6`

```js
assert.equal(searchCity('Dar Es Salaam'), 6);
```

`searchCity("Casablanca")` ต้องคืนค่าเป็น `9`

```js
assert.equal(searchCity('Casablanca'), 9);
```

`searchCity("Cairo")` ต้องคืนค่าเป็น `1`

```js
assert.equal(searchCity('Cairo'), 1);
```

`searchCity("Mogadishu")` ต้องคืนค่าเป็น `4`

```js
assert.equal(searchCity('Mogadishu'), 4);
```

`searchCity("Lagos")` ต้องคืนค่าเป็น `0`

```js
assert.equal(searchCity('Lagos'), 0);
```

# --seed--

## --seed-contents--

```js
function searchCity(name) {

}

const list = [
  { name: 'Lagos', population: 21.0 },
  { name: 'Cairo', population: 15.2 },
  { name: 'Kinshasa-Brazzaville', population: 11.3 },
  { name: 'Greater Johannesburg', population: 7.55 },
  { name: 'Mogadishu', population: 5.85 },
  { name: 'Khartoum-Omdurman', population: 4.98 },
  { name: 'Dar Es Salaam', population: 4.7 },
  { name: 'Alexandria', population: 4.58 },
  { name: 'Abidjan', population: 4.4 },
  { name: 'Casablanca', population: 3.98 }
];
```

# --solutions--

```js
function searchCity(name) {
  return list.findIndex(item => item.name === name);
}

const list = [
  { name: 'Lagos', population: 21.0 },
  { name: 'Cairo', population: 15.2 },
  { name: 'Kinshasa-Brazzaville', population: 11.3 },
  { name: 'Greater Johannesburg', population: 7.55 },
  { name: 'Mogadishu', population: 5.85 },
  { name: 'Khartoum-Omdurman', population: 4.98 },
  { name: 'Dar Es Salaam', population: 4.7 },
  { name: 'Alexandria', population: 4.58 },
  { name: 'Abidjan', population: 4.4 },
  { name: 'Casablanca', population: 3.98 }
];
```
