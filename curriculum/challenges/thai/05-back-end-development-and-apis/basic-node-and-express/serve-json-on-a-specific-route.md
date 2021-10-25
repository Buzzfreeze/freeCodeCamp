---
id: 587d7fb1367417b2b2512bf1
title: Serve JSON on a Specific Route
challengeType: 2
forumTopicId: 301517
dashedName: serve-json-on-a-specific-route
---

# --description--

แม้ว่าเซิร์ฟเวอร์ HTML จะให้บริการ HTML แต่ว่า API จะให้บริการแค่ข้อมูล คำสั่งนี้ <dfn>REST</dfn> (REpresentational State Transfer) API ช่วยให้การแลกเปลี่ยนข้อมูลง่ายมากขึ้น โดยที่ลูกค้าไม่จำเป็นต้องทราบรายละเอียดใดๆ เกี่ยวกับเซิร์ฟเวอร์เลย ลูกค้าเพียงต้องการทราบแค่ว่ารีซอร์สอยู่ที่ไหน (URL) และการดำเนินการเกิดขึ้นที่ไหน (verb) เราจะใช้ GET verb เมื่อต้องดึงข้อมูลบางอย่างโดยไม่ต้องแก้ไข ปัจจุบันนี้ รูปแบบข้อมูลสำหรับการย้ายข้อมูลในเว็บที่นิยมคือ JSON  หรือพูดง่ายๆ คือ JSON เป็นวิธีที่สะดวกในการแสดงออบเจ็กต์ของ JavaScript เป็นแบบสตริง ดังนั้นจึงสามารถส่งผ่านข้อมูลได้อย่างง่ายดาย

ต่อมาเรามาสร้าง API อย่างง่าย โดยการสร้างเส้นทางที่ตอบสนองต่อ JSON ด้วยคำสั่ง `/json` ซึ่งคุณสามารถทำได้ตามปกติโดยใช้ `app.get()` ส่วนภายในตัวจัดการเส้นทาง(route handler) ใช้ `res.json()` ส่งผ่านอ็อบเจ็กต์เพื่อเป็นอาร์กิวเมนต์ วิธีนี้ทำให้ปิดลูปการตอบกลับคำขอและการส่งคืนข้อมูล วิธีนี้ทำงานโดย แปลงออบเจ็กต์ JavaScript เป็นสตริง จากนั้นตั้งค่าเฮดเดอร์ที่เหมาะสมเพื่อบอกเบราว์เซอร์ของคุณว่าคุณกำลัทำงานบน JSON อยู่และส่งข้อมูลกลับมา ออบเจ็กต์ที่ถูกต้องจะมีโครงสร้าง `{key: data}` และ`data` เป็นตัวเลข, สตริง, วัตถุที่ซ้อนกัน หรืออาร์เรย์ก็ได้ ซึ่ง `data` ยังสามารถเป็นตัวแปรหรือผลลัพธ์ของการเรียกใช้ฟังก์ชันก็ได้ สำหรับในกรณีนี้ ข้อมูลจะถูกประเมินก่อนที่จะแปลงเป็นสตริง

# --instructions--

ในการให้บริการอ็อบเจ็กต์ `{"message": "Hello json"}` จะเป็นการตอบกลับในรูปแบบ JSON เพื่อทำการรับคำขอไปยังเส้นทาง `/json` หลังจากนั้นค่อยชี้เบราว์เซอร์ของคุณไปที่ `your-app-url/json` เสร็จแล้ว คุณควรเห็นข้อความปรากฎอยู่บนหน้าจอ

# --hints--

จุดปลายทาง `/json` ควรที่จะให้บริการกับอ็อบเจ็กต์ JSON ตามคำสั่ง `{"message": "Hello json"}`

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/json').then(
    (data) => {
      assert.equal(
        data.message,
        'Hello json',
        "The '/json' endpoint does not serve the right data"
      );
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

# --solutions--

```js
/**
  Backend challenges don't need solutions, 
  because they would need to be tested against a full working project. 
  Please check our contributing guidelines to learn more.
*/
```
