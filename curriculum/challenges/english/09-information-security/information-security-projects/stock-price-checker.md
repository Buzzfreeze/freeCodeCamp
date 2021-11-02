---
id: 587d824a367417b2b2512c44
title: Stock Price Checker
challengeType: 4
forumTopicId: 301572
dashedName: stock-price-checker
---

# --description--

ลองสร้างแอป full stack จาก JavaScript ที่มีฟังก์ชันเหมือนกับ: <https://stock-price-checker.freecodecamp.rocks/>

เนื่องจาก API ราคาหุ้นที่เชื่อถือได้ทั้งหมดต้องใช้คีย์ API เราจึงสร้างวิธีแก้ปัญหาชั่วคราว ให้ใช้ [Link นี้](https://stock-price-checker-proxy.freecodecamp.rocks/) เพื่อรับข้อมูลราคาหุ้นที่อัปเดตแล้วโดยที่ไม่ต้องลงทะเบียนสำหรับคีย์ของคุณเอง

ในการทำโปรเจคนี้จะทำให้คุณเขียนโค้ด ที่มี method ต่างๆ ด้านล่างนี้: 

- Clone [Github repo นี้](https://github.com/freeCodeCamp/boilerplate-project-stockchecker/) แล้วนำมาใช้กับโปรเจคของคุณบนเครื่องของคุณเอง
- ให้ใช้ [โปรเจค  Replit starter ของเรา](https://replit.com/github/freeCodeCamp/boilerplate-project-stockchecker)   กับโปรเจคนี้
- ใช้ตัวสร้างเว็บไซต์ที่คุณต้องการในการทำโปรเจคนี้ อย่าลืมรวมไฟล์ทั้งหมดจาด Github repo ของเราลงไปด้วย

เมื่อทำโปรเจคนี้เสร็จแล้ว ให้อัปโหลดงานเดโมที่ใช้งานได้ไปบนโฮสต์ที่ไหนก็ได้ที่เป็น public หลังจากนั้นส่ง URL นั้นมาในช่อง `Solution Link` และคุณสามารถส่งลิงก์ source code ของโปรเจคคุณมาในช่อง `GitHub Link` ด้วยหรือไม่ก็ได้

# --instructions--

1. ตั้งค่า `NODE_ENV` เพื่อทดสอบโดยไม่ใส่เครื่องหมายคำพูด เมื่อพร้อมที่จะเขียนการทดสอบและ DB ไปยังสตริงการเชื่อมต่อฐานข้อมูลของคุณ 
2. ทำโปรเจคให้เสร็จใน `routes/api.js` หรือ โอยการสร้าง handler/controller
3. คุณสามารถเพิ่มฟีเจอร์ด้านความปลอดภัยต่างๆ ในไฟล์ `server.js`
4. คุณจะต้องเขียน test ฟังก์ชันต่างๆ ทั้งหมดใน `tests/2_functional-tests.js`

**Note** ในข้อพิจารณาด้านความเป็นส่วนตัว: เนื่องจากข้อกำหนดที่ควรยอมรับเพียง 1 ไลค์ต่อ IP คุณจะต้องบันทึกที่อยู่ IP สิ่งสำคัญคือต้องปฏิบัติตามกฎหมายความเป็นส่วนตัวของข้อมูล เช่น ระเบียบว่าด้วยการคุ้มครองข้อมูลทั่วไป ทางเลือกหนึ่งคือการขออนุญาตบันทึกข้อมูลของผู้ใช้ แต่การไม่เปิดเผยชื่อนั้นง่ายกว่ามาก สำหรับแบบทดสอบนี้ อย่าลืมปิดบังที่อยู่ IP ก่อนบันทึกลงในฐานข้อมูล หากคุณต้องการหลักการเกี่ยวกับวิธีการนี้ คุณอาจเลือกที่จะแฮชข้อมูล ตัดทอนข้อมูล หรือตั้งค่าส่วนหนึ่งของที่อยู่ IP เป็น 0

เขียน test ข้างล่างนี้ใน `tests/2_functional-tests.js`:

- การดูหุ้นหนึ่งหุ้น: GET request ไปยัง `/api/stock-prices/`
- การดูหุ้นหนึ่งหุ้นและกดไลค์มัน: GET request ไปยัง `/api/stock-prices/`
- การดูหุ้นเดิมและกดไลค์มันอีกครั้ง: GET request ไปยัง `/api/stock-prices/`
- การดูหุ้นสองหุ้นพร้อมกัน: GET request ไปยัง `/api/stock-prices/`
- การดูหุ้นสองหุ้นและกดไลค์พวกมัน: GET request ไปยัง `/api/stock-prices/`

# --hints--

คุณสามารถสร้างโปรเจ็คของคุณเองได้โดยไม่ต้องใช้ URL ตัวอย่าง

```js
(getUserInput) => {
  assert(
    !/.*\/stock-price-checker\.freecodecamp\.rocks/.test(getUserInput('url'))
  );
};
```

คุณควรตั้งค่านโยบายการรักษาความปลอดภัยของเนื้อหาให้อนุญาตเฉพาะการโหลดสคริปต์และ CSS จากเซิร์ฟเวอร์ของคุณ

```js
async (getUserInput) => {
  const data = await fetch(getUserInput('url') + '/_api/app-info');
  const parsed = await data.json();
  assert.isTrue(
    parsed.headers['content-security-policy'].includes("script-src 'self'")
  );
  assert.isTrue(
    parsed.headers['content-security-policy'].includes("style-src 'self'")
  );
};
```

คุณสามารถส่ง `GET` request ไปยัง `/api/stock-prices` พร้อมส่งสัญลักษณ์หุ้น NASDAQ ไปยัง `stock` query parameter ซึ่งจะ return object ที่มี property ชื่อว่า `stockData`

```js
async (getUserInput) => {
  const data = await fetch(
    getUserInput('url') + '/api/stock-prices?stock=GOOG'
  );
  const parsed = await data.json();
  assert.property(parsed, 'stockData');
};
```

`stockData` property มีสัญลักษณ์ `stock` ที่เป็นสตริง `price` เป็น number และ `likes` เป็น number

```js
async (getUserInput) => {
  const data = await fetch(
    getUserInput('url') + '/api/stock-prices?stock=GOOG'
  );
  const parsed = await data.json();
  const ticker = parsed.stockData;
  assert.typeOf(ticker.price, 'number');
  assert.typeOf(ticker.likes, 'number');
  assert.typeOf(ticker.stock, 'string');
};
```

คุณสามารถส่งผ่านข้อมูลช่อง `like` เป็น `true` (Boolean) เพื่อเพิ่มไลค์ไปยังหุ้น ควรยอมรับได้เพียง 1 ไลค์ต่อ 1 IP

```js

```

ถ้าหากคุณส่งผ่าน 2 หุ้น ค่าที่ return จะเป็น array ที่มีข้อมูลเกี่ยวกับหุ้นทั้งสองนั้น แทนที่จะเป็น `likes` มันจะแสดง `rel_likes` (ความแตกต่างของยอดไลค์ของหุ้นทั้งสอง) สำหรับ `stockData` object ทั้งสอง

```js
async (getUserInput) => {
  const data = await fetch(
    getUserInput('url') + '/api/stock-prices?stock=GOOG&stock=MSFT'
  );
  const parsed = await data.json();
  const ticker = parsed.stockData;
  assert.typeOf(ticker, 'array');
  assert.property(ticker[0], 'rel_likes');
  assert.property(ticker[1], 'rel_likes');
};
```

การทดสอบฟังก์ชันทั้งหมด 5 รายการต้องเสร็จสมบูรณ์ และ test ผ่าน

```js
async (getUserInput) => {
  const tests = await fetch(getUserInput('url') + '/_api/get-tests');
  const parsed = await tests.json();
  assert.isTrue(parsed.length >= 5);
  parsed.forEach((test) => {
    assert.equal(test.state, 'passed');
  });
};
```

# --solutions--

```js
/**
  Backend challenges don't need solutions, 
  because they would need to be tested against a full working project. 
  Please check our contributing guidelines to learn more.
*/
```
