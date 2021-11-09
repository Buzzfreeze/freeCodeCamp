---
id: 9d7123c8c441eeafaeb5bdef
title: Remove Elements from an Array Using slice Instead of splice
challengeType: 1
forumTopicId: 301236
dashedName: remove-elements-from-an-array-using-slice-instead-of-splice
---

# --description--

รูปแบบทั่วไปเวลาทำงานกับ array ก็คือ คุณต้องการดึง items ออกและให้ item ที่เหลือยังคงเก็บไว้ใน array ตัวเดิม ซึ่ง JavaScript มี `splice` method ที่ทำงานดังกล่าวได้ โดยรับ argument แรก เป็น index เริ่มต้นที่ต้องการดึง item และ argument ที่สองเป็น จำนวน item ที่ต้องการดึงออก แต่เราถ้าไม่ระบุ argument ที่สอง มันจะดึง items ให้จนจบ array อย่างไรก็ตาม `splice` method จะทำการเปลี่ยนแปลง array เริ่มต้น ดังตัวอย่างต่อไปนี้

```js
var cities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
cities.splice(3, 1);
```

ในที่นี้ `splice` คืนค่าเป็น string `London` ลบค่า string นี้ออกจาก cities array ดังนั้น `cities` จะมีค่าเป็น `["Chicago", "Delhi", "Islamabad", "Berlin"]`

จากแบบทดสอบที่แล้ว เราเห็นได้ว่า `slice` method ไม่ได้เปลี่ยนแปลงค่าของ array เริ่มต้น แต่จะคืนค่าเป็น array ใหม่ที่สามารถเก็บไว้ในตัวแปรอีกตัวนึง หากยังจำได้ `slice` method รับค่า 2 arguments คือ index เริ่มต้น และ index สิ้นสุดการ slice (ไม่รวมค่าของ index สิ้นสุด) และคืนค่า items ไว้ใน array ตัวใหม่ อย่างไรก็ตาม การใช้ `slice` method แทนการใช้ `splice` จะช่วยป้องกันการเกิด side effect จากการเปลี่ยนแปลง array

# --instructions--

จงปรับแก้ฟังก์ชัน `nonMutatingSplice` โดยใช้ `slice` แทนการใช้ `splice` และภายในฟังก์ชันนี้ ให้กำหนด `cities` array จำกัดความยาวเป็น 3 และคืนค่าเป็น array ตัวใหม่ที่มีเพียง 3 items แรก

ห้ามทำให้ array ตั้งต้นเปลี่ยนแปลง

# --hints--

โค้ดของคุณควรใช้ `slice` method

```js
assert(code.match(/\.slice/g));
```

โค้ดของคุณไม่ควรใช้ `splice` method

```js
assert(!code.match(/\.?[\s\S]*?splice/g));
```

`inputCities` array ไม่ควรมีการแก้ไขเปลี่ยนแปลง

```js
assert(
  JSON.stringify(inputCities) ===
    JSON.stringify(['Chicago', 'Delhi', 'Islamabad', 'London', 'Berlin'])
);
```

`nonMutatingSplice(["Chicago", "Delhi", "Islamabad", "London", "Berlin"])` ควรคืนค่าเป็น `["Chicago", "Delhi", "Islamabad"]`.

```js
assert(
  JSON.stringify(
    nonMutatingSplice(['Chicago', 'Delhi', 'Islamabad', 'London', 'Berlin'])
  ) === JSON.stringify(['Chicago', 'Delhi', 'Islamabad'])
);
```

# --seed--

## --seed-contents--

```js
function nonMutatingSplice(cities) {
  // Only change code below this line
  return cities.splice(3);

  // Only change code above this line
}
var inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
nonMutatingSplice(inputCities);
```

# --solutions--

```js
function nonMutatingSplice(cities) {
  // Only change code below this line
  return cities.slice(0,3);
  // Only change code above this line
}
var inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
nonMutatingSplice(inputCities);
```
