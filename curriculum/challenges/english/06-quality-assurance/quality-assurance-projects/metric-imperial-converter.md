---
id: 587d8249367417b2b2512c41
title: Metric-Imperial Converter
challengeType: 4
forumTopicId: 301570
dashedName: metric-imperial-converter
---

# --description--

สร้างแอพ full stack JavaScript ซึ่งมีฟังก์ชันการทำงานคล้าย link นี้ : <https://issue-tracker.freecodecamp.rocks/>  ทำงานใน project นี้ เขียน code โดยใช้วิธีใดวิธีหนึ่งต่อไปนี้: 

- ทำการ clone repo [GitHub นี้](https://github.com/freeCodeCamp/boilerplate-project-metricimpconverter/) เพื่อสร้าง project ในนั้นให้สำเร็จ
- ใช้  project เริ่มต้นจาก [Replit](https://replit.com/github/freeCodeCamp/boilerplate-project-metricimpconverter) เพื่อสร้าง project ให้สำเร็จ
- ใช้ site builder ที่ผู้เรียนเลือก เพื่อสร้าง project ให้เสร็จ อย่าลืมรวมไฟล์ทั้งหมดจาก repo GitHub 

เมื่อผู้เรียนทำเสร็จแล้ว ตรวจสอบให้แน่ใจว่าตัว Demo ของ project ของคุณตั้งค่า Host เป็น Public จากนั้นส่ง URL ไปที่ช่อง `Solution Link` หรือส่งลิงก์ไปยัง source code ของ project ผู้เรียน ตรง `GitHub Link`

# --instructions--

- สร้าง conversion logic ที่จำเป็น ใน `/controllers/convertHandler.js`
- สร้าง route ที่จำเป็นใน `/routes/api.js`
- Copy ไฟล์ `sample.env` ไปที่ `.env` และตั้งตัวแปรอย่างเหมาะสม 
- หากต้องการ run code ทดสอบ uncomment ให้ตั้งค่า `NODE_ENV=test` ในไฟล์ ".env"
- ในการ run code ทดสอบใน console ให้ใช้คำสั่ง `npm run test` หากต้องการเปิด console ของ Replit ให้ใช้คีย์ลัด Ctrl+Shift+P (Cmd หากใช้ Mac) แล้วพิมพ์คำว่า "open shell" 

เขียนการทดสอบต่อไปนี้ใน `tests/1_unit-tests.js`:

- `convertHandler' ควรอ่านอินพุตจำนวนเต็มอย่างถูกต้อง
- `convertHandler' ควรอ่านอินพุตตัวเลขทศนิยมอย่างถูกต้อง
- `convertHandler' ควรอ่านอินพุตที่เป็นเศษส่วนอย่างถูกต้อง
- `convertHandler' ควรอ่านอินพุตที่เป็นเศษส่วนด้วยทศนิยมอย่างถูกต้อง
- `convertHandler' ควรส่งคืนค่า Errror ในเศษส่วนสองครั้งอย่างถูกต้อง (เช่น `3/2/3`)
- `convertHandler' ควรตั้งค่าเริ่มต้นเป็นอินพุตตัวเลขอย่างถูกต้องเป็น '1' เมื่อไม่มีการป้อนตัวเลข
- `convertHandler' ควรอ่านแต่ละหน่วยอินพุตที่ถูกต้องอย่างถูกต้อง
- `convertHandler' ควรส่งคืนข้อผิดพลาดอย่างถูกต้องสำหรับหน่วยอินพุตที่ไม่ถูกต้อง
- `convertHandler' ควรส่งคืนหน่วยส่งคืนที่ถูกต้องสำหรับแต่ละหน่วยอินพุตที่ถูกต้อง
- `convertHandler' ควรส่งคืนหน่วยสตริงที่สะกดอย่างถูกต้องสำหรับแต่ละหน่วยอินพุตที่ถูกต้อง
- `convertHandler' ควรแปลง 'gal' เป็น 'L' อย่างถูกต้อง
- `convertHandler' ควรแปลง 'L' เป็น 'gal' อย่างถูกต้อง
- `convertHandler' ควรแปลง 'mi' เป็น 'km' อย่างถูกต้อง
- `convertHandler' ควรแปลง 'km' เป็น 'mi' อย่างถูกต้อง
- `convertHandler' ควรแปลง `lbs' เป็น 'kg' อย่างถูกต้อง
- `convertHandler' ควรแปลง 'kg' เป็น 'lbs' อย่างถูกต้อง 

เขียนการทดสอบต่อไปนี้ใน `tests/2_functional-tests.js`:

- แปลงอินพุตที่ถูกต้อง เช่น `10L`: `GET` request ไปยัง `/api/convert`
- แปลงอินพุตที่ไม่ถูกต้อง เช่น `32g`: `GET` request ไปยัง `/api/convert`
- แปลงตัวเลขที่ไม่ถูกต้อง เช่น `3/7.2/4kg`: `GET` request ไปยัง `/api/convert`
- แปลงตัวเลขและหน่วยที่ไม่ถูกต้อง เช่น `3/7.2/4kilomegagram`: `GET` request ไปยัง `/api/convert`
- แปลงโดยไม่มีตัวเลข เช่น `kg`: `GET` request ไปยัง `/api/convert` 

# --hints--

ผู้เรียนควรจัดทำ project ของผู้เรียนเอง โดยไม่ใช้ URL ตัวอย่าง 

```js
getUserInput => {
  assert(
    !/.*\/metric-imperial-converter\.freecodecamp\.rocks/.test(
      getUserInput('url')
    )
  );
};
```

ผู้เรียนสามารถ `GET` `/api/convert` ด้วยพารามิเตอร์เดียวที่มีตัวเลขและหน่วยที่ยอมรับและแปลงได้ (Hint: แยกอินพุตโดยมองหา index ของอักขระตัวแรกที่จะเป็นจุดเริ่มต้นของหน่วย) 

```js

```

ผู้เรียนสามารถแปลง `'gal'` เป็น `'L'` และในทางกลับกันได้ (1 แกลลอน เท่ากับ 3.78541 ลิตร) 

```js
async getUserInput => {
  try {
    const data1 = await $.get(getUserInput('url') + '/api/convert?input=1gal');
    assert.equal(data1.returnNum, 3.78541);
    assert.equal(data1.returnUnit, 'L');
    const data2 = await $.get(getUserInput('url') + '/api/convert?input=10gal');
    assert.equal(data2.returnNum, 37.8541);
    assert.equal(data2.returnUnit, 'L');
    const data3 = await $.get(getUserInput('url') + '/api/convert?input=1l');
    assert.equal(data3.returnNum, 0.26417);
    assert.equal(data3.returnUnit, 'gal');
    const data4 = await $.get(getUserInput('url') + '/api/convert?input=10l');
    assert.equal(data4.returnNum, 2.64172);
    assert.equal(data4.returnUnit, 'gal');
  } catch (xhr) {
    throw new Error(xhr.responseText || xhr.message);
  }
};
```

ผู้เรียนสามารถแปลง `'lbs'` เป็น `'kg'`  และในทางกลับกันได้ (1 ปอนด์ เท่ากับ 0.453592 กก.) 

```js
async getUserInput => {
  try {
    const data1 = await $.get(getUserInput('url') + '/api/convert?input=1lbs');
    assert.equal(data1.returnNum, 0.45359);
    assert.equal(data1.returnUnit, 'kg');
    const data2 = await $.get(getUserInput('url') + '/api/convert?input=10lbs');
    assert.equal(data2.returnNum, 4.53592);
    assert.equal(data2.returnUnit, 'kg');
    const data3 = await $.get(getUserInput('url') + '/api/convert?input=1kg');
    assert.equal(data3.returnNum, 2.20462);
    assert.equal(data3.returnUnit, 'lbs');
    const data4 = await $.get(getUserInput('url') + '/api/convert?input=10kg');
    assert.equal(data4.returnNum, 22.04624);
    assert.equal(data4.returnUnit, 'lbs');
  } catch (xhr) {
    throw new Error(xhr.responseText || xhr.message);
  }
};
```

ผู้เรียนสามารถแปลง `'mi'` เป็น `'km'` และในทางกลับกันได้ (1 ไมล์ เท่ากับ 1.60934 km) 

```js
async getUserInput => {
  try {
    const data1 = await $.get(getUserInput('url') + '/api/convert?input=1mi');
    assert.equal(data1.returnNum, 1.60934);
    assert.equal(data1.returnUnit, 'km');
    const data2 = await $.get(getUserInput('url') + '/api/convert?input=10mi');
    assert.equal(data2.returnNum, 16.0934);
    assert.equal(data2.returnUnit, 'km');
    const data3 = await $.get(getUserInput('url') + '/api/convert?input=1km');
    assert.equal(data3.returnNum, 0.62137);
    assert.equal(data3.returnUnit, 'mi');
    const data4 = await $.get(getUserInput('url') + '/api/convert?input=10km');
    assert.equal(data4.returnNum, 6.21373);
    assert.equal(data4.returnUnit, 'mi');
  } catch (xhr) {
    throw new Error(xhr.responseText || xhr.message);
  }
};
```

หน่วยรับเข้าทั้งหมดควรรับทั้งตัวพิมพ์ใหญ่และตัวพิมพ์เล็กได้ แต่ควรส่งคืนทั้ง "initUnit" และ "returnUnit" เป็นตัวพิมพ์เล็ก ยกเว้นลิตร (liter) ซึ่งควรแสดงเป็นตัวพิมพ์ใหญ่ "L" 

```js
async getUserInput => {
  try {
    const data1 = await $.get(getUserInput('url') + '/api/convert?input=1gal');
    assert.equal(data1.initUnit, 'gal');
    assert.equal(data1.returnUnit, 'L');
    const data2 = await $.get(getUserInput('url') + '/api/convert?input=10L');
    assert.equal(data2.initUnit, 'L');
    assert.equal(data2.returnUnit, 'gal');
    const data3 = await $.get(getUserInput('url') + '/api/convert?input=1l');
    assert.equal(data3.initUnit, 'L');
    assert.equal(data3.returnUnit, 'gal');
    const data4 = await $.get(getUserInput('url') + '/api/convert?input=10KM');
    assert.equal(data4.initUnit, 'km');
    assert.equal(data4.returnUnit, 'mi');
  } catch (xhr) {
    throw new Error(xhr.responseText || xhr.message);
  }
};
```

หากหน่วยวัดไม่ถูกต้อง จะคืนค่าเป็น `'invalid unit'`

```js
async getUserInput => {
  try {
    const data = await $.get(getUserInput('url') + '/api/convert?input=1min');
    assert(data.error === 'invalid unit' || data === 'invalid unit');
  } catch (xhr) {
    throw new Error(xhr.responseText || xhr.message);
  }
};
```

หากเลขไม่ถูกต้อง จะคืนค่าเป็น  `'invalid number'`

```js
async getUserInput => {
  try {
    const data = await $.get(
      getUserInput('url') + '/api/convert?input=1//2gal'
    );
    assert(data.error === 'invalid number' || data === 'invalid number');
  } catch (xhr) {
    throw new Error(xhr.responseText || xhr.message);
  }
};
```

If both the unit and number are invalid, returned will be `'invalid number and unit'`.
หากทั้งหน่วยและเลขไม่ถูกต้อง จะคืนค่าเป็น `'invalid number and unit'`

```js
async getUserInput => {
  try {
    const data = await $.get(
      getUserInput('url') + '/api/convert?input=1//2min'
    );
    assert(
      data.error === 'invalid number and unit' ||
        data === 'invalid number and unit'
    );
  } catch (xhr) {
    throw new Error(xhr.responseText || xhr.message);
  }
};
```

สามารถใช้เศษส่วน ทศนิยม หรือทั้งสองอย่างในพารามิเตอร์ (เช่น 5, 1/2, 2.5/6) แต่ถ้าไม่ได้ระบุอะไรเลย ค่าเริ่มต้นจะอยู่ที่ 1 

```js
async getUserInput => {
  try {
    const data1 = await $.get(getUserInput('url') + '/api/convert?input=mi');
    assert.approximately(data1.initNum, 1, 0.001);
    assert.approximately(data1.returnNum, 1.60934, 0.001);
    assert.equal(data1.returnUnit, 'km');
    const data2 = await $.get(getUserInput('url') + '/api/convert?input=1/5mi');
    assert.approximately(data2.initNum, 1 / 5, 0.1);
    assert.approximately(data2.returnNum, 0.32187, 0.001);
    assert.equal(data2.returnUnit, 'km');
    const data3 = await $.get(
      getUserInput('url') + '/api/convert?input=1.5/7km'
    );
    assert.approximately(data3.initNum, 1.5 / 7, 0.001);
    assert.approximately(data3.returnNum, 0.13315, 0.001);
    assert.equal(data3.returnUnit, 'mi');
    const data4 = await $.get(
      getUserInput('url') + '/api/convert?input=3/2.7km'
    );
    assert.approximately(data4.initNum, 3 / 2.7, 0.001);
    assert.approximately(data4.returnNum, 0.69041, 0.001);
    assert.equal(data4.returnUnit, 'mi');
  } catch (err) {
    throw new Error(err.responseText || err.message);
  }
};
```

การคืนค่าของจะประกอบด้วย `initNum`, `initUnit`, `returnNum`, `returnUnit` และ `string' ที่สะกดหน่วยในรูปแบบ `'{initNum} {initUnitString} ที่แปลงเป็น {returnNum} {returnUnitString}'` โดยให้ผลเป็นทศนิยม 5 ตำแหน่ง 

```js
async getUserInput => {
  try {
    const data = await $.get(getUserInput('url') + '/api/convert?input=2mi');
    assert.equal(data.initNum, 2);
    assert.equal(data.initUnit, 'mi');
    assert.approximately(data.returnNum, 3.21868, 0.001);
    assert.equal(data.returnUnit, 'km', 'returnUnit did not match');
    assert.equal(data.string, '2 miles converts to 3.21868 kilometers');
  } catch (xhr) {
    throw new Error(xhr.responseText || xhr.message);
  }
};
```

การทดสอบทั้ง 16 หน่วยเสร็จสมบูรณ์และผ่าน 

```js
async getUserInput => {
  try {
    const getTests = await $.get(getUserInput('url') + '/_api/get-tests');
    assert.isArray(getTests);
    const unitTests = getTests.filter(test => {
      return !!test.context.match(/Unit Tests/gi);
    });
    assert.isAtLeast(unitTests.length, 16, 'At least 16 tests passed');
    unitTests.forEach(test => {
      assert.equal(test.state, 'passed', 'Tests in Passed State');
      assert.isAtLeast(
        test.assertions.length,
        1,
        'At least one assertion per test'
      );
    });
  } catch (err) {
    throw new Error(err.responseText || err.message);
  }
};
```

การทดสอบการใช้งาน (functional tests) ทั้งหมด 5 รายการเสร็จสมบูรณ์และผ่าน
 
```js
async getUserInput => {
  try {
    const getTests = await $.get(getUserInput('url') + '/_api/get-tests');
    assert.isArray(getTests);
    const functTests = getTests.filter(test => {
      return !!test.context.match(/Functional Tests/gi);
    });
    assert.isAtLeast(functTests.length, 5, 'At least 5 tests passed');
    functTests.forEach(test => {
      assert.equal(test.state, 'passed', 'Tests in Passed State');
      assert.isAtLeast(
        test.assertions.length,
        1,
        'At least one assertion per test'
      );
    });
  } catch (err) {
    throw new Error(err.responseText || err.message);
  }
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
