---
id: 5eb3e497b8d6d7f63c5517ea
title: Search a list of records
challengeType: 5
forumTopicId: 385315
dashedName: search-a-list-of-records
---

# --description--

record ประกอบด้วยattributeที่อธิบายentity แต่ละattributeมีชื่อและค่า ตัวอย่างเช่น บุคคลสามารถมีattribute `age` โดยมีค่าเท่ากับ 25 การดำเนินการที่สำคัญในรายการrecodeคือการค้นหาrecodeที่มีค่าattributeเฉพาะ

# --instructions--

เขียนฟังก์ชันที่รับstringเป็นพารามิเตอร์ ฟังก์ชันควรส่งคืนindexของรายการใน `list` ซึ่งค่าของattribute `name` ตรงกับstringที่ระบุ

# --hints--

`searchCity` ควรเป็น function.

```js
assert(typeof searchCity === 'function');
```

`searchCity("Dar Es Salaam")` ควร return number.

```js
assert(typeof searchCity('Dar Es Salaam') === 'number');
```

`searchCity("Dar Es Salaam")` ควร return `6`.

```js
assert.equal(searchCity('Dar Es Salaam'), 6);
```

`searchCity("Casablanca")` ควร return `9`.

```js
assert.equal(searchCity('Casablanca'), 9);
```

`searchCity("Cairo")` ควร return `1`.

```js
assert.equal(searchCity('Cairo'), 1);
```

`searchCity("Mogadishu")` ควร return `4`.

```js
assert.equal(searchCity('Mogadishu'), 4);
```

`searchCity("Lagos")` ควร return `0`.

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
