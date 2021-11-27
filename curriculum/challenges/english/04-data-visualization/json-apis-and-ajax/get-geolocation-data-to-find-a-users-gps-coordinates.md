---
id: 587d7faf367417b2b2512be8
title: Get Geolocation Data to Find A User's GPS Coordinates
challengeType: 6
forumTopicId: 18188
dashedName: get-geolocation-data-to-find-a-users-gps-coordinates
---

# --description--

เพื่อเข้าถึง user's location ปัจจุบัน browser สมารถสร้าง navigator ที่ให้ข้อมูลเหล่านี้ได้

navigator จะ get ค่า longitude และ latitude ของ user

เราสามารถ allow หรือ block จาก knowing your current location ได้
ถ้าเลือก allow เราจะเห็น text บนหน้าจอโทรศัทท์เพื่อเปลี่ยนค่า latitude และ longitude

นี่คือตัวอย่าง Code ที่ใช้ทำงานนี้:

```js
if (navigator.geolocation){
  navigator.geolocation.getCurrentPosition(function(position) {
    document.getElementById('data').innerHTML="latitude: " + position.coords.latitude + "<br>longitude: " + position.coords.longitude;
  });
}
```

แรกสุด Code ทำการตรวจสอบว่า Object `navigator.geolocation` มีอยู่หรือไม่ โดยถ้า Object นี้มี Code จะทำการเรียก `getCurrentPosition` method ที่จะทำการส่ง Request ค่าที่อยู่ของ user แบบ Asynchronous 
ถ้า Request นี้ทำงานเสร็จสมบูรณ์ ตัว funtion callback จะถูกเรียก โดยจะมีค่าของ `position` object ส่งมา และเราสามารถนำค่า latitude และ longitude มาใช้ได้ โดยการใช้ dot notation 
จากนั้นเราจึงไป update ค่า HTML

# --instructions--

เพิ่ม code ภายใน `script` tags เพื่อตรวจสอบ location ของ user ปัจจุบันและ insert ไปใน HTML

# --hints--

ควรใช้ `navigator.geolocation` เพื่อเข้าถึง user's current location

```js
assert(code.match(/navigator\.geolocation\.getCurrentPosition/g));
```

ควรใช้ `position.coords.latitude` เพื่อแสดงค่า user's latitudinal location

```js
assert(code.match(/position\.coords\.latitude/g));
```

ควรใช้ `position.coords.longitude` เพื่อแสดงค่า user's longitudinal location

```js
assert(code.match(/position\.coords\.longitude/g));
```

เพื่อแสดงค่า user's position ภายใน `div` element กับ `id="data"`

```js
assert(
  code.match(/document\.getElementById\(\s*?('|")data\1\s*?\)\.innerHTML/g)
);
```

# --seed--

## --seed-contents--

```html
<script>
  // Add your code below this line


  // Add your code above this line
</script>
<h4>You are here:</h4>
<div id="data">

</div>
```

# --solutions--

```html
<script>
  // Add your code below this line
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      document.getElementById('data').innerHTML = "latitude: " + position.coords.latitude + "<br>longitude: " + position.coords.longitude;
    });
  }
  // Add your code above this line
</script>
<h4>You are here:</h4>
<div id="data">

</div>

</section>
```
