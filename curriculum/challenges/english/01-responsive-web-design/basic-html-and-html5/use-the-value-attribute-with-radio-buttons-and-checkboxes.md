---
id: 5c6c06847491271903d37cfd
title: Use the value attribute with Radio Buttons and Checkboxes
challengeType: 0
forumTopicId: 301099
dashedName: use-the-value-attribute-with-radio-buttons-and-checkboxes
---

# --description--

เมื่อแบบฟอร์มถูกส่งไปแล้ว ข้อมูลจะถูกส่งไปที่ server และรวม entries ให้กับตัวเลือกที่ถูกเลือกไป
Inputs ประเภท `radio` และ `checkbox` จะรายงานค่าของมันตาม `value` attribute.

ยกตัวอย่างเช่น:

```html
<label for="indoor">
  <input id="indoor" value="indoor" type="radio" name="indoor-outdoor">Indoor
</label>
<label for="outdoor">
  <input id="outdoor" value="outdoor" type="radio" name="indoor-outdoor">Outdoor
</label>
```

ตุณจะมี 2 `radio` inputs
เมื่อผู้ใช้ส่งแบบฟอร์มที่ตัวเลือก `indoor` option ถูกเลือก, ข้อมูลจากแบบฟอร์มจะมีการเพิ่มบรรทัดที่เขียนว่า: `indoor-outdoor=indoor`
โดยนี่มาจาก `name` และ `value` attributes ของ "indoor" input

ถ้าคุณเอา `value` attribute ออกไป ข้อมูลของแบบฟอร์มที่ถูกส่งมาจะใช้ค่าเริ่มต้น ซึ่งเป็น `on`
ในกรณีนี้ ถ้าผู้ใช้คลิกที่ตัวเลือก "indoor" และส่งแบบฟอร์มนั้น ผลของข้อมูลจากแบบฟอร์มจะเป็น `indoor-outdoor=on` ซึ่งมันไม่มีประโยชน์อะไร
ดังนั้น `value` attribute จำเป็นจะต้องถูกตั้งเป็นค่าหนึ่งไว้เพื่อระบุว่าตัวเลือกนั้นคืออะไร

# --instructions--

จงกำหนดให้แต่ละ `radio` และ `checkbox` inputs มี `value` attribute
ห้ามสร้าง radio หรือ checkbox element ขึ้นมาใหม่ จงใช้ input label text ที่เป็นตัวพิมพ์เล็กเป็นค่าของ attribute

# --hints--

หนึ่งใน radio button ของคุณควรมี `value` attribute เป็น `indoor`.

```js
assert(
  $('label:contains("Indoor") > input[type="radio"]').filter("[value='indoor']")
    .length > 0
);
```

One of your radio buttons should have the `value` attribute of `outdoor`.

```js
assert(
  $('label:contains("Outdoor") > input[type="radio"]').filter(
    "[value='outdoor']"
  ).length > 0
);
```

One of your checkboxes should have the `value` attribute of `loving`.

```js
assert(
  $('label:contains("Loving") > input[type="checkbox"]').filter(
    "[value='loving']"
  ).length > 0
);
```

One of your checkboxes should have the `value` attribute of `lazy`.

```js
assert(
  $('label:contains("Lazy") > input[type="checkbox"]').filter("[value='lazy']")
    .length > 0
);
```

One of your checkboxes should have the `value` attribute of `energetic`.

```js
assert(
  $('label:contains("Energetic") > input[type="checkbox"]').filter(
    "[value='energetic']"
  ).length > 0
);
```

# --seed--

## --seed-contents--

```html
<h2>CatPhotoApp</h2>
<main>
  <p>Click here to view more <a href="#">cat photos</a>.</p>

  <a href="#"><img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back."></a>

  <p>Things cats love:</p>
  <ul>
    <li>cat nip</li>
    <li>laser pointers</li>
    <li>lasagna</li>
  </ul>
  <p>Top 3 things cats hate:</p>
  <ol>
    <li>flea treatment</li>
    <li>thunder</li>
    <li>other cats</li>
  </ol>
  <form action="https://www.freecatphotoapp.com/submit-cat-photo">
    <label for="indoor"><input id="indoor" type="radio" name="indoor-outdoor"> Indoor</label>
    <label for="outdoor"><input id="outdoor" type="radio" name="indoor-outdoor"> Outdoor</label><br>
    <label for="loving"><input id="loving" type="checkbox" name="personality"> Loving</label>
    <label for="lazy"><input id="lazy" type="checkbox" name="personality"> Lazy</label>
    <label for="energetic"><input id="energetic" type="checkbox" name="personality"> Energetic</label><br>
    <input type="text" placeholder="cat photo URL" required>
    <button type="submit">Submit</button>
  </form>
</main>
```

# --solutions--

```html
<h2>CatPhotoApp</h2>
<main>
  <p>Click here to view more <a href="#">cat photos</a>.</p>

  <a href="#"><img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back."></a>

  <p>Things cats love:</p>
  <ul>
    <li>cat nip</li>
    <li>laser pointers</li>
    <li>lasagna</li>
  </ul>
  <p>Top 3 things cats hate:</p>
  <ol>
    <li>flea treatment</li>
    <li>thunder</li>
    <li>other cats</li>
  </ol>
  <form action="https://www.freecatphotoapp.com/submit-cat-photo">
    <label for="indoor"><input id="indoor" type="radio" name="indoor-outdoor" value="indoor"> Indoor</label>
    <label for="outdoor"><input id="outdoor" type="radio" name="indoor-outdoor" value="outdoor"> Outdoor</label><br>
    <label for="loving"><input id="loving" type="checkbox" name="personality" value="loving"> Loving</label>
    <label for="lazy"><input id="lazy" type="checkbox" name="personality" value="lazy"> Lazy</label>
    <label for="energetic"><input id="energetic" type="checkbox" name="personality" value="energetic"> Energetic</label><br>
    <input type="text" placeholder="cat photo URL" required>
    <button type="submit">Submit</button>
  </form>
</main>
```
