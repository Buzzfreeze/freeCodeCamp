---
id: 9d7123c8c441eeafaeb5bdef
title: Remove Elements from an Array Using slice Instead of splice
challengeType: 1
forumTopicId: 301236
dashedName: remove-elements-from-an-array-using-slice-instead-of-splice
---

# --description--

ปกติแล้วเราจะมีโค้ดส่วนที่ทำการดึง element ออกจาก array โดยที่ไม่เปลี่ยนค่าของ array เดิม  
ซึ่ง JavaScript มี method `splice` ที่ทำงานแบบนี้ได้ โดยจะรับ argument แรก เป็น index ที่ต้องการเริ่มดึงค่า และ argument ที่สองเป็น จำนวน element ที่ต้องการดึงออกมา แต่เราถ้าไม่ระบุ argument ที่สอง ฟังก์ชันจะดึงทุก element ตั้งแต่ index ที่ระบุไปจนถึง element สุดท้าย  
แต่ method `splice` ก็จะลบค่าที่ดึงออกมาจาก array เดิมด้วย ลองดูตัวอย่าง:

```js
var cities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
cities.splice(3, 1);
```

ในตัวอย่างนี้ method `splice` จะคืนค่าเป็น string `London` และจะลบ string นี้ออกจาก array `cities` จะทำให้ค่าของ `cities` เปลี่ยนเป็น `["Chicago", "Delhi", "Islamabad", "Berlin"]`

ในแบบทดสอบที่แล้วเราได้เห็นว่า method `slice` จะไม่เปลี่ยนค่าของ array เดิม และจะคืนค่าเป็น array ตัวใหม่ ที่เราจะเก็บเข้าไปในตัวแปรอื่นได้  
ถ้ายังจำได้ method `slice` รับ argument 2 ตัว คือ index เริ่มต้น และ index ที่ต้องการจบการ slice (ค่าที่ได้จะไม่รวม element ที่ตำแหน่งนี้) และคืนค่าออกมาเป็น element ที่เลือกใน array ตัวใหม่ เพราะฉะนั้นการใช้ method `slice` แทนการใช้ `splice` จะช่วยป้องกันการเกิด side effect จากการที่ array เปลี่ยนไปได้

# --instructions--

ให้แก้ฟังก์ชัน `nonMutatingSplice` โดยใช้ `slice` แทนการใช้ `splice`  
ฟังก์ชันนี้จะต้องทำงานโดยการรับ array `cities` เข้ามา และคืนค่าเป็น array ที่มีค่าเป็น 3 element แรกของ array `cities`

ห้ามทำให้ array เดิมเปลี่ยนแปลง

# --hints--

ต้องใช้ method `slice`

```js
assert(code.match(/\.slice/g));
```

ห้ามใช้ method `splice`

```js
assert(!code.match(/\.?[\s\S]*?splice/g));
```

array `inputCities` ต้องมีค่าเหมือนเดิม

```js
assert(
  JSON.stringify(inputCities) ===
    JSON.stringify(['Chicago', 'Delhi', 'Islamabad', 'London', 'Berlin'])
);
```

การเรียกใช้ฟังก์ชัน `nonMutatingSplice(["Chicago", "Delhi", "Islamabad", "London", "Berlin"])` ต้องคืนค่าเป็น `["Chicago", "Delhi", "Islamabad"]`

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
  // แก้ไขโค้ดใต้บรรทัดนี้เท่านั้น
  return cities.splice(3);

  // แก้ไขโค้ดเหนือบรรทัดนี้เท่านั้น
}
var inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
nonMutatingSplice(inputCities);
```

# --solutions--

```js
function nonMutatingSplice(cities) {
  // แก้ไขโค้ดใต้บรรทัดนี้เท่านั้น
  return cities.slice(0,3);
  // แก้ไขโค้ดเหนือบรรทัดนี้เท่านั้น
}
var inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
nonMutatingSplice(inputCities);
```
