---
id: 587d7fb1367417b2b2512bf3
title: Implement a Root-Level Request Logger Middleware
challengeType: 2
forumTopicId: 301514
dashedName: implement-a-root-level-request-logger-middleware
---

# --description--

ในบทเรียนที่แล้ว คุณได้เรียนเรื่อง middleware `express.static()` ไปแล้ว 
ถึงเวลาที่จะเรียนรายละเอียดของ middleware กันแล้ว 

Middleware Function คือฟังก์ชันที่รับ argument 3 ตัว คือ request object, response object, และฟังก์ชันต่อไป ที่จะทำงานในวงจรของการรับ-ส่ง request และ response (request-response cycle) ของแอป  
เราจะเขียนโค้ดที่มีผลกระทบกับแอปในฟังก์ชัน middleware ได้ และมักใช้เพื่อเพิ่มข้อมูลไปใน request หรือ response  
และ middleware ยังใช้เพื่อส่ง response กลับไปได้เลย โดยไม่ต้องเข้าถึงฟังก์ชันภายในได้อีกด้วย  
แต่ถ้า middleware นี้ไม่ต้องส่ง response กลับไป ฟังก์ชันนี้จะเรียกใช้ฟังก์ชันถัดไปเลย ซึ่งก็คือ argument ตัวที่ 3 หรือ `next()` นั่นเอง

ลองดูตัวอย่างการใช้งานด้านล่าง:

```js
function(req, res, next) {
  console.log("I'm a middleware...");
  next();
}
```

สมมติว่าคุณเขียน middleware ตัวนี้ไปคั่นไว้ที่ route ใด route หนึ่ง เมื่อคุณส่ง request มายัง route นี้ จะมีข้อความ “I'm a middleware...” ขึ้นใน console แล้วหลังจากนั้นจึงจะเรียกใช้ฟังก์ชันถัดไป 

ในแบบฝึกหัดนี้ คุณจะต้องสร้าง middleware ระดับบนสุด (root-level) ในแบบทดสอบที่ 4 เราได้สอนเรื่องการใช้ middleware ที่ระดับบนสุดไปแล้ว โดยจะใช้ method `app.use(<mware-function>)` ได้ 
ในกรณีนี้ ทุก request ที่ส่งมาหาแอปของคุณจะต้องผ่าน middleware ตัวนี้ทั้งหมด และคุณก็สามารถกำหนดเงื่อนไขเพิ่มเติมได้เช่นกัน  
เช่น ถ้าต้องการให้ middleware ทำงานแค่กับ POST request คุณสามารถใช้ `app.post(<mware-function>)` ได้ นอกจากนี้ก็ยังใช้กับ HTTP request method ตัวอื่นได้หมด (เช่น GET, DELETE, PUT, ฯลฯ)

# --instructions--

ให้สร้าง logger Middleware ที่จะ log request ทั้งหมดที่เข้ามาในแอปของคุณบน console 
โดยจะมีรูปแบบข้อมูลที่ log เป็น  `method path - ip`  
เช่น `GET /json - ::ffff:127.0.0.1`  
ให้สังเกตว่าระหว่าง `method` กับ `path` จะมีการเว้นวรรคด้วย และจะมี dash (`-`) คั่นระหว่าง `path` กับ `ip` โดยต้องเว้นวรรคหน้าและหลัง dash ตัวนี้ด้วย  
โดยคุณจะดึงค่าของ `method` `path` และ `ip` ได้จากการอ่านค่าของ `req.method`, `req.path` และ `req.ip` 

อย่าลืมว่า ต้องเรียกใช้ `next()` ทุกครั้งเมื่อ middleware ทำงานเสร็จแล้ว ไม่อย่างนั้นเซิร์ฟเวอร์ของคุณจะค้างอยู่อย่างนั้นไปตลอด 
และสุดท้าย อย่าลืมเปิดหน้าต่าง console ไว้ด้วย จะได้เห็นว่า reqeuest ที่เข้ามาจะแสดงผลอย่างไร

**Note:** Express จะเรียกใช้ฟังก์ชันตามลำดับที่ปรากฏในโค้ด ซึ่งรวมถึงกรณีของมิดเดิลแวร์ด้วย ถ้าต้องการให้ middleware ที่เขียนทำงานได้กับทุก route คุณจะต้องประกาศใช้ middleware ไว้บรรทัดเหนือการประกาศ route

# --hints--

Logger Middleware ต้องทำงานได้

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/root-middleware-logger').then(
    (data) => {
      assert.isTrue(
        data.passed,
        'root-level logger is not working as expected'
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
