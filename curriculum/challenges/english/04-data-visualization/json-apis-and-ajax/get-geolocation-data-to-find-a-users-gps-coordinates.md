---
id: 587d7faf367417b2b2512be8
title: Get Geolocation Data to Find A User's GPS Coordinates
challengeType: 6
forumTopicId: 18188
dashedName: get-geolocation-data-to-find-a-users-gps-coordinates
---

# --description--

เรามีอะไรคูลๆอีกอย่างที่จะให้คุณลองทำ ซึ่งคือการเข้าถึงตำแหน่งปัจจุบันของผู้ใช้ 
ในตอนนี้เบราว์เซอร์ทุกตัวจะมี navigator ที่ส่งข้อมูลพวกนี้ให้คุณได้

navigator จะดึงค่า latitude และ longitude ของผู้ใช้มาให้

คุณจะเห็นว่าเบาว์เซอร์จะทำการขอที่อยู่ปัจจุบันของคุณ คุณสามารถเลือกที่จะ อนุญาต หรือปิดกั้น การที่เบราว์เซอร์จะขอเข้าถึงตำแหน่งของคุณก็ได้ (ในแบบทดสอบนี้คุณจะอนุญาตหรือปิดกั้นก็ได้ ถ้าโค้ดคุณถูกเราก็จะให้คุณผ่านอยู่ดี)
ถ้าคุณอนุญาต คุณจะเห็นข้อความบนหน้าจอที่แสดง latitude และ longitude ของคุณ

เราจะดึงข้อมูลตำแหน่งของผู้ใช้ได้โดยใช้โค้ดนี้:

```js
if (navigator.geolocation){
  navigator.geolocation.getCurrentPosition(function(position) {
    document.getElementById('data').innerHTML="latitude: " + position.coords.latitude + "<br>longitude: " + position.coords.longitude;
  });
}
```

ในขั้นแรก โค้ดของเราจะดูว่ามี object `navigator.geolocation` อยู่หรือไม่ 
ถ้ามี object นี้ โค้กของเราก็จะเรียกใช้ method `getCurrentPosition` ที่จะทำการส่ง request ไปเพื่อขอตำแหน่งปัจจุบันของผู้ใช้แบบ asynchronous 
ถ้า request นี้ทำงานเสร็จ ตัว callback funtion จะถูกเรียก โดยจะได้ object `position` กลับมา และเราสามารถนำค่า latitude และ longitude มาใช้ได้ โดยการใช้ dot notation 
จากนั้นเราจึงไปอัปเดท HTML เพื่อแสดงข้อมูล

# --instructions--

ให้เขียนโค้ดในแท็ก `script` เพื่อ่านตำแหน่งปัจจุบันของผู้ใช้ และแสดงค่านั้นบน HTML

# --hints--

ต้องใช้ `navigator.geolocation` เพื่ออ่านค่าตำแหน่งปัจจุบันของผู้ใช้

```js
assert(code.match(/navigator\.geolocation\.getCurrentPosition/g));
```

ต้องใช้ `position.coords.latitude` เพื่ออ่านค่า latitude ปัจจุบันของผู้ใช้

```js
assert(code.match(/position\.coords\.latitude/g));
```

ต้องใช้ `position.coords.longitude` เพื่ออ่านค่า longitude ปัจจุบันของผู้ใช้

```js
assert(code.match(/position\.coords\.longitude/g));
```

ต้องแสดงค่าตำแหน่งปัจจุบันของผู้ใช้ใน `div` ที่มี id เป็น `"data"`

```js
assert(
  code.match(/document\.getElementById\(\s*?('|")data\1\s*?\)\.innerHTML/g)
);
```

# --seed--

## --seed-contents--

```html
<script>
  // เขียนโค้ดใต้บรรทัดนี้


  // เขียนโค้ดเหนือบรรทัดนี้
</script>
<h4>You are here:</h4>
<div id="data">

</div>
```

# --solutions--

```html
<script>
  // เขียนโค้ดใต้บรรทัดนี้
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      document.getElementById('data').innerHTML = "latitude: " + position.coords.latitude + "<br>longitude: " + position.coords.longitude;
    });
  }
  // เขียนโค้ดเหนือบรรทัดนี้
</script>
<h4>You are here:</h4>
<div id="data">

</div>

</section>
```
