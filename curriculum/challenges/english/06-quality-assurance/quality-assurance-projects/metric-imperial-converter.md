---
id: 587d8249367417b2b2512c41
title: Metric-Imperial Converter
challengeType: 4
forumTopicId: 301570
dashedName: metric-imperial-converter
---

# --description--

ให้สร้างแอปแบบ full stack โดยใช้ JavaScript ที่ทำงานคล้ายกับเว็บไซต์นี้ <https://metric-imperial-converter.freecodecamp.rocks/>  
ในการทำโปรเจคนี้ คุณจะต้องเขียนโค้ดโดยใช้วิธีใดวิธีหนึ่งดังต่อไปนี้

- ให้ Clone repoisitory จาก [GitHub](https://github.com/freeCodeCamp/boilerplate-project-metricimpconverter/) มา และทำแบบทดสอบบนเครื่องของคุณเอง
- สร้างจากโปรเจกต์ของเราในเว็บไซต์ [Replit](https://replit.com/github/freeCodeCamp/boilerplate-project-metricimpconverter)
- ใช้เครื่องมือสร้างเว็บอื่นๆ และอย่าลืมเก็บไฟล์ไว้ใน GitHub repo ของคุณด้วย

เมื่อคุณทำเสร็จแล้ว ให้อัปโหลดโปรเจกต์ของคุณขึ้นโฮสต์ และเปิดเป็น public จากนั้นให้ส่งลิงก์เข้าไปใน `Link คำตอบ` และจะส่งลิงก์ของ source code เข้าไปใน `GitHub Link` ด้วยก็ได้

# --instructions--

- สร้าง logic ที่ใช้แปลงหน่วยใน `/controllers/convertHandler.js`
- สร้าง route ที่จำเป็นใน `/routes/api.js`
- Copy ข้อมูลในไฟล์ `sample.env` ไปวางใน `.env` และตั้งค่าตัวแปรให้เหมาะสม 
- หากต้องการใช้ test ให้ uncomment `NODE_ENV=test` ในไฟล์ `.env`
- หากต้องการใช้ test ใน console ให้ใช้คำสั่ง `npm run test` หากต้องการเปิด console ของ Replit ให้ใช้คีย์ลัด Ctrl+Shift+P (Cmd หากใช้ Mac) แล้วพิมพ์คำว่า "open shell" 

เขียนการทดสอบต่อไปนี้ใน `tests/1_unit-tests.js`:

- `convertHandler` ต้องอ่าน input ที่เป็นจำนวนเต็มอย่างถูกต้อง
- `convertHandler` ต้องอ่าน input ที่เป็นตัวเลขทศนิยมอย่างถูกต้อง
- `convertHandler` ต้องอ่าน input ที่เป็นเศษส่วนอย่างถูกต้อง
- `convertHandler` ต้องอ่าน input ที่เป็นเศษส่วนทศนิยมอย่างถูกต้อง
- `convertHandler` ต้องคืนค่าเป็น Errror เมื่อใช้เศษส่วนซ้อนกัน (เช่น `3/2/3`)
- `convertHandler` ต้องตั้งค่า default ของ input ตัวเลขเป็น '1' เมื่อไม่มีการป้อนตัวเลข
- `convertHandler` ต้องอ่านค่าหน่วยของ input อย่างถูกต้อง
- `convertHandler` ต้องคืนค่าเป็น Errror เมื่อหน่วยของ input ไม่ถูกต้อง
- `convertHandler` หน่วยที่คืนค่าออกมาต้องถูกต้อง
- `convertHandler` หน่วยที่ไม่ใช่ตัวย่อต้องถูกต้อง
- `convertHandler` ต้องแปลง `gal` เป็น `L` อย่างถูกต้อง
- `convertHandler` ต้องแปลง `L` เป็น `gal` อย่างถูกต้อง
- `convertHandler` ต้องแปลง `mi` เป็น `km` อย่างถูกต้อง
- `convertHandler` ต้องแปลง `km` เป็น `mi` อย่างถูกต้อง
- `convertHandler` ต้องแปลง `lbs` เป็น `kg` อย่างถูกต้อง
- `convertHandler` ต้องแปลง `kg` เป็น `lbs` อย่างถูกต้อง 

เขียนการทดสอบต่อไปนี้ใน `tests/2_functional-tests.js`:

- แปลงอินพุตที่ถูกต้อง เช่น `10L`: ส่ง `GET` request ไปยัง `/api/convert`
- แปลงอินพุตที่ไม่ถูกต้อง เช่น `32g`: ส่ง `GET` request ไปยัง `/api/convert`
- แปลงตัวเลขที่ไม่ถูกต้อง เช่น `3/7.2/4kg`: ส่ง `GET` request ไปยัง `/api/convert`
- แปลงตัวเลขและหน่วยที่ไม่ถูกต้อง เช่น `3/7.2/4kilomegagram`: ส่ง `GET` request ไปยัง `/api/convert`
- แปลงโดยไม่มีตัวเลข เช่น `kg`: ส่ง `GET` request ไปยัง `/api/convert` 

# --hints--

ให้ส่งลิงก์โปรเจกต์ของคุณ ไม่ใช่ URL ตัวอย่างของเรา

```js
getUserInput => {
  assert(
    !/.*\/metric-imperial-converter\.freecodecamp\.rocks/.test(
      getUserInput('url')
    )
  );
};
```

ในการส่ง `GET` request ไปยัง `/api/convert` โดยใช้พารามิเตอร์เดียวที่ใช้ตัวเลขและหน่วยที่ถูกต้อง ต้องแปลงหน่วยได้ (Hint: ให้ split input และหา index ของตัวอักษรตัวแรก โดยตำแหน่งนี้จะเป็นตำแหน่งเริ่มต้นของหน่วยวัด) 

```js

```

ต้องแปลง `'gal'` เป็น `'L'` และแปลงกลับได้ (1 gal เป็น 3.78541 L) 

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

ต้องแปลง `'lbs'` เป็น `'kg'`  และแปลงกลับได้ (1 lbs เป็น 0.453592 kg) 

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

ต้องแปลง `'mi'` เป็น `'km'` และแปลงกลับได้ (1 mi เป็น 1.60934 km) 

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

หน่วยของ input ต้องเป็นได้ทั้งทั้งตัวพิมพ์ใหญ่และตัวพิมพ์เล็ก แต่ค่าที่คืนออกมาใน "initUnit" และ "returnUnit" ต้องเป็นตัวพิมพ์เล็ก ยกเว้นลิตร (liter) ซึ่งควรแสดงเป็นตัวพิมพ์ใหญ่ `'L'` 

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

สามารถใช้เศษส่วน ทศนิยม หรือทั้งสองอย่างในพารามิเตอร์ได้ (เช่น 5, 1/2, 2.5/6) แต่ถ้าไม่ได้ระบุอะไรเลย ค่า default จะเป็น 1 

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

ค่าที่คืนมาจะต้องมี property `initNum`, `initUnit`, `returnNum`, `returnUnit` และ `string` ที่สะกดหน่วยในรูปแบบ `'{initNum} {initUnitString} ที่แปลงเป็น {returnNum} {returnUnitString}'` โดยให้ผลลัพย์เป็นทศนิยม 5 ตำแหน่ง 

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

การทดสอบทั้ง 16 ตัวต้องเสร็จสมบูรณ์และผ่าน 

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

functional test ทั้งหมด 5 ตัวต้องเสร็จสมบูรณ์และผ่าน
 
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
