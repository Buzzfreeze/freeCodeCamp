---
id: 587d778b367417b2b2512aa8
title: Add an Accessible Date Picker
challengeType: 0
videoUrl: "https://scrimba.com/c/cR3bRbCV"
forumTopicId: 301008
dashedName: add-an-accessible-date-picker
---

# --description--

ปกติเราจะใช้ฟิลด์ `input` ในฟอร์มด้วย ซึ่งฟิลด์นี้สามารถเอาไปสร้างการวิธีการส่งข้อมูลจากผู้ใช้ได้หลายแบบ
โดย `input` จะมี attribute ชื่อ `type` ที่จะเป็นตัวควบคุมว่าจะรับข้อมูลแบบไหนจากผู้ใช้

ถ้ายังจำได้ คุณจะเห็นว่าเรามี input ประเภท `text` และ `submit` ในแบบฝึกหัดที่ผ่านมาไปแล้ว
โดยคราวนี้ HTML5 ได้เพิ่มประเภท input แบบใหม่เข้ามาคือ `date`
โดย input แบบนี้เรียกว่า date picker ซึ่งจะทำให้ผู้ใช้เลือกข้อมูลวันที่ เดือน ปี ได้ เมื่อผู้ใช้คลิกที่ input

ในเบราว์เซอร์รุ่นเก่า ผู้ใช้จะไม่เห็น date picker แต่จะเห็นเป็นช่องกรอกข้อความธรรมดา ดังนั้นเราต้องบอกผู้ใช้ว่าอยากได้รูปแบบวันที่แบบไหน โดยใช้ข้อความใน `label` หรือ `placeholder`

ลองดูตัวอย่าง:

```html
<label for="input1">Enter a date:</label>
<input type="date" id="input1" name="input1" />
```

# --instructions--

คราวนี้ นาย Camper Cat ได้จัดการแข่งขัน Mortal Kombat และต้องการถามผู้เข้าแข่งขันว่าเขาควรจัดงานวันไหน
ให้เพิ่มแท็ก `input` ที่มี `type` เป็น `date` และมี `id` เป็น `pickdate` และมี `name` เป็น `date`

# --hints--

ต้องเพิ่มแท็ก `input` เพื่อใช้เป็น date picker

```js
assert($("input").length == 2);
```

แท็ก `input` ต้องมี `type` เป็น `date`

```js
assert($("input").attr("type") == "date");
```

แท็ก `input` ต้องมี `id` เป็น `pickdate`

```js
assert($("input").attr("id") == "pickdate");
```

แท็ก `input` ต้องมี `name` เป็น `date`

```js
assert($("input").attr("name") == "date");
```

# --seed--

## --seed-contents--

```html
<body>
  <header>
    <h1>Tournaments</h1>
  </header>
  <main>
    <section>
      <h2>Mortal Kombat Tournament Survey</h2>
      <form>
        <p>Tell us the best date for the competition</p>
        <label for="pickdate">Preferred Date:</label>

        <!-- แก้ไขโค้ดใต้บรรทัดนี้เท่านั้น -->

        <!-- แก้ไขโค้ดเหนือบรรทัดนี้เท่านั้น -->

        <input type="submit" name="submit" value="Submit" />
      </form>
    </section>
  </main>
  <footer>&copy; 2018 Camper Cat</footer>
</body>
```

# --solutions--

```html
<body>
  <header>
    <h1>Tournaments</h1>
  </header>
  <main>
    <section>
      <h2>Mortal Kombat Tournament Survey</h2>
      <form>
        <p>Tell us the best date for the competition</p>
        <label for="pickdate">Preferred Date:</label>
        <input type="date" id="pickdate" name="date" />
        <input type="submit" name="submit" value="Submit" />
      </form>
    </section>
  </main>
  <footer>&copy; 2018 Camper Cat</footer>
</body>
```
