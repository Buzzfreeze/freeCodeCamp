---
id: 5c6c06847491271903d37cfd
title: Use the value attribute with Radio Buttons and Checkboxes
challengeType: 0
forumTopicId: 301099
dashedName: use-the-value-attribute-with-radio-buttons-and-checkboxes
---

# --description--

เมื่อกดส่งแบบฟอร์ม ข้อมูลก็จะถูกส่งไปที่เซิร์ฟเวอร์ โดยจะส่งข้อมูลของตัวเลือกที่เราเลือกไปด้วย
โดยค่าของ input ประเภท `radio` และ `checkbox` ที่ส่งไปยังเซิร์ฟเวอร์ จะดึงมาจาก `value` attribute

ตัวอย่างเช่น:

```html
<label for="indoor"> <input id="indoor" value="indoor" type="radio" name="indoor-outdoor" />Indoor </label>
<label for="outdoor"> <input id="outdoor" value="outdoor" type="radio" name="indoor-outdoor" />Outdoor </label>
```

ในตัวอย่างด้านบน คุณจะมี `radio` input 2 ตัว
เมื่อผู้ใช้กดส่งแบบฟอร์มโดยเลือก `indoor` เว็บของเราจะส่งข้อมูลไปยังเซิร์ฟเวอร์โดยมีข้อมูลนี้ไปด้วย `indoor-outdoor=indoor`
โดยค่าของข้อมูลนี้มาจาก attribute `name` และ `value` ของ "indoor" input

ถ้าคุณไม่ระบุ `value` attribute ข้อมูลที่ส่งไปจะมีค่าเป็น `on` แทน
ในกรณีนี้ ถ้าผู้ใช้คลิกที่ตัวเลือก "indoor" และส่งแบบฟอร์มนั้น ผลของข้อมูลจากแบบฟอร์มจะเป็น `indoor-outdoor=on` ซึ่งจะเอาไปใช้ประโยชน์อะไรไม่ได้
ดังนั้นการระบุค่าของ `value` attribute จึงจำเป็น จะได้รู้ว่าตัวเลือกนั้นคืออะไร

# --instructions--

ให้กำหนดค่าของ `value` attribute ใน input ที่เป็น `radio` และ `checkbox` 
โดยห้ามสร้าง radio หรือ checkbox element ขึ้นมาใหม่ 
และให้ใช้ข้อความใน label ที่เป็นตัวพิมพ์เล็กเป็นค่าของ `value` attribute

# --hints--

ต้องมี radio button ตัวหนึ่ง ที่มี `value` attribute เป็น `indoor`

```js
assert($('label:contains("Indoor") > input[type="radio"]').filter("[value='indoor']").length > 0);
```

ต้องมี radio button ตัวหนึ่ง ที่มี `value` attribute เป็น `outdoor`

```js
assert($('label:contains("Outdoor") > input[type="radio"]').filter("[value='outdoor']").length > 0);
```

ต้องมี checkbox ตัวหนึ่ง ที่มี `value` attribute เป็น `loving`

```js
assert($('label:contains("Loving") > input[type="checkbox"]').filter("[value='loving']").length > 0);
```

ต้องมี checkbox ตัวหนึ่ง ที่มี `value` attribute เป็น `lazy`

```js
assert($('label:contains("Lazy") > input[type="checkbox"]').filter("[value='lazy']").length > 0);
```

ต้องมี checkbox ตัวหนึ่ง ที่มี `value` attribute เป็น `energetic`

```js
assert($('label:contains("Energetic") > input[type="checkbox"]').filter("[value='energetic']").length > 0);
```

# --seed--

## --seed-contents--

```html
<h2>CatPhotoApp</h2>
<main>
  <p>Click here to view more <a href="#">cat photos</a>.</p>

  <a href="#"
    ><img
      src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg"
      alt="A cute orange cat lying on its back."
  /></a>

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
    <label for="indoor"><input id="indoor" type="radio" name="indoor-outdoor" /> Indoor</label>
    <label for="outdoor"><input id="outdoor" type="radio" name="indoor-outdoor" /> Outdoor</label><br />
    <label for="loving"><input id="loving" type="checkbox" name="personality" /> Loving</label>
    <label for="lazy"><input id="lazy" type="checkbox" name="personality" /> Lazy</label>
    <label for="energetic"><input id="energetic" type="checkbox" name="personality" /> Energetic</label><br />
    <input type="text" placeholder="cat photo URL" required />
    <button type="submit">Submit</button>
  </form>
</main>
```

# --solutions--

```html
<h2>CatPhotoApp</h2>
<main>
  <p>Click here to view more <a href="#">cat photos</a>.</p>

  <a href="#"
    ><img
      src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg"
      alt="A cute orange cat lying on its back."
  /></a>

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
    <label for="indoor"><input id="indoor" type="radio" name="indoor-outdoor" value="indoor" /> Indoor</label>
    <label for="outdoor"><input id="outdoor" type="radio" name="indoor-outdoor" value="outdoor" /> Outdoor</label><br />
    <label for="loving"><input id="loving" type="checkbox" name="personality" value="loving" /> Loving</label>
    <label for="lazy"><input id="lazy" type="checkbox" name="personality" value="lazy" /> Lazy</label>
    <label for="energetic"
      ><input id="energetic" type="checkbox" name="personality" value="energetic" /> Energetic</label
    ><br />
    <input type="text" placeholder="cat photo URL" required />
    <button type="submit">Submit</button>
  </form>
</main>
```
