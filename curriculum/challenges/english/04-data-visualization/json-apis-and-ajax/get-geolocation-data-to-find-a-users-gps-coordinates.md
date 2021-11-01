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

Here's code that does this:

```js
if (navigator.geolocation){
  navigator.geolocation.getCurrentPosition(function(position) {
    document.getElementById('data').innerHTML="latitude: " + position.coords.latitude + "<br>longitude: " + position.coords.longitude;
  });
}
```

First, it checks if the `navigator.geolocation` object exists. If it does, the `getCurrentPosition` method on that object is called, which initiates an asynchronous request for the user's position. If the request is successful, the callback function in the method runs. This function accesses the `position` object's values for latitude and longitude using dot notation and updates the HTML.

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
