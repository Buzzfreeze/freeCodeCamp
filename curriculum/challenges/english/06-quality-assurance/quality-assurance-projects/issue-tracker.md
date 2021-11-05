---
id: 587d8249367417b2b2512c42
title: Issue Tracker
challengeType: 4
forumTopicId: 301569
dashedName: issue-tracker
---

# --description--

สร้างแอพ full stack JavaScript ซึ่งมีฟังก์ชันการทำงานคล้าย link นี้ : <https://issue-tracker.freecodecamp.rocks/>  ทำงานใน project นี้ เขียน code โดยใช้วิธีใดวิธีหนึ่งต่อไปนี้: 

- ทำการ clone repo [GitHub นี้](https://github.com/freeCodeCamp/boilerplate-project-issuetracker/) เพื่อสร้าง project ในนั้นให้สำเร็จ
- ใช้  project เริ่มต้นจาก [Replit](https://replit.com/github/freeCodeCamp/boilerplate-project-issuetracker) เพื่อสร้าง project ให้สำเร็จ
- ใช้ site builder ที่ผู้เรียนเลือก เพื่อสร้าง project ให้เสร็จ อย่าลืมรวมไฟล์ทั้งหมดจาก repo GitHub 

เมื่อผู้เรียนทำเสร็จแล้ว ตรวจสอบให้แน่ใจว่าตัว Demo ของ project ของคุณตั้งค่า Host เป็น Public จากนั้นส่ง URL ไปที่ช่อง `Solution Link` หรือส่งลิงก์ไปยัง source code ของ project ผู้เรียน ตรง `GitHub Link`

# --instructions--

- logic ทั้งหมดสามารถเข้าไปดูที่ `/components/translator.js`
- สร้าง route ที่จำเป็นใน `/routes/api.js`
- สร้างการทดสอบการทำงาน (functional tests) ทั้งหมดใน `tests/2_functional-tests.js`
- Copy ไฟล์ `sample.env` ไปที่ `.env` และตั้งตัวแปรอย่างเหมาะสม 
- หากต้องการ run code ทดสอบ uncomment ให้ตั้งค่า `NODE_ENV=test` ในไฟล์ ".env"
- ในการ run code ทดสอบใน console ให้ใช้คำสั่ง `npm run test` หากต้องการเปิด console ของ Replit ให้ใช้คีย์ลัด Ctrl+Shift+P (Cmd หากใช้ Mac) แล้วพิมพ์คำว่า "open shell" 

เขียนการทดสอบต่อไปนี้ใน `tests/2_functional-tests.js`: 

- สร้าง issue กับทุก field: POST คำขอไปยัง `/api/issues/{project}`
- สร้าง issue กับ field ที่จำเป็นเท่านั้น: POST คำขอไปยัง `/api/issues/{project}`
- สร้าง issue กับ field จำเป็นที่ขาดหายไป: POST คำขอไปยัง `/api/issues/{project}`
- ดูหลาย issue ที่เกิดบน Project: GET รับคำขอไปที่ `/api/issues/{project}`
- ดูหลาย issue ที่เกิดบน Project ที่มีตัวกรองเดียว (filter): GET รับคำขอไปที่ `/api/issues/{project}`
- ดูหลาย issue ที่เกิดบน Project ที่มีตัวกรองหลายตัว (multiple filters): GET  รับคำขอไปที่ `/api/issues/{project}`
- อัปเดตหนึ่ง field ที่เกี่ยวกับ issue : PUT คำขอไปที่ `/api/issues/{project}`
- อัปเดตหลาย field ที่เกี่ยวกับ issue: PUT คำขอไปที่ `/api/issues/{project}`
- อัปเดต issue ที่ไม่มี `_id': PUT คำขอไปที่ `/api/issues/{project}`
- อัปเดต issue ที่ไม่มีช่องให้อัปเดต: PUT คำขอไปที่ `/api/issues/{project}`
- อัปเดต issue ด้วย `_id' ที่ไม่ถูกต้อง: PUT คำขอไปที่ `/api/issues/{project}`
- Delete ตัว issue: DELETE คำขอไปยัง `/api/issues/{project}`
- Delete ตัว issueที่มี `_id' ไม่ถูกต้อง: DELETE คำขอไปยัง `/api/issues/{project}`
- Delete ตัว issueที่ไม่มี `_id': DELETE คำขอไปยัง `/api/issues/{project}` 

# --hints--

ผู้เรียนสามารถจัดหา project ของผู้เรียนเองได้ โดยไม่ใช้ URL ตัวอย่าง 

```js
(getUserInput) => {
  assert(!/.*\/issue-tracker\.freecodecamp\.rocks/.test(getUserInput('url')));
};
```

ผู้เรียนส่งคำขอ "POST" ไปที่ "/api/issues/{projectname}" ได้ด้วยข้อมูลในแบบฟอร์มที่มีช่องที่ต้องระบุ "issue_title", "issue_text", "created_by" และ "assigned_to" และ "status_text" หรือไม่ก็ได้ 

```js
async (getUserInput) => {
  try {
    let test_data = {
      issue_title: 'Faux Issue Title',
      issue_text: 'Functional Test - Required Fields Only',
      created_by: 'fCC'
    };
    const data = await $.post(
      getUserInput('url') + '/api/issues/fcc-project',
      test_data
    );
    assert.isObject(data);
    assert.nestedInclude(data, test_data);
  } catch (err) {
    throw new Error(err.responseText || err.message);
  }
};
```

คำขอ `POST` ถึง `/api/issues/{projectname}` จะส่งคืน object ที่สร้างขึ้น และต้องรวม field ที่ส่งทั้งหมด field ตัวเลือกที่ยกเว้นจะถูกคืนค่าเป็น string ว่าง นอกจากนี้ ให้รวม `created_on` (วันที่/เวลา), `updated_on` (วันที่/เวลา), `open' open` (boolean, `true` for open - default value, `false` for closed) และ `_id` 

```js
async (getUserInput) => {
  try {
    let test_data = {
      issue_title: 'Faux Issue Title 2',
      issue_text: 'Functional Test - Every field filled in',
      created_by: 'fCC',
      assigned_to: 'Chai and Mocha'
    };
    const data = await $.post(
      getUserInput('url') + '/api/issues/fcc-project',
      test_data
    );
    assert.isObject(data);
    assert.nestedInclude(data, test_data);
    assert.property(data, 'created_on');
    assert.isNumber(Date.parse(data.created_on));
    assert.property(data, 'updated_on');
    assert.isNumber(Date.parse(data.updated_on));
    assert.property(data, 'open');
    assert.isBoolean(data.open);
    assert.isTrue(data.open);
    assert.property(data, '_id');
    assert.isNotEmpty(data._id);
    assert.property(data, 'status_text');
    assert.isEmpty(data.status_text);
  } catch (err) {
    throw new Error(err.responseText || err.message);
  }
};
```

หากผู้เรียนส่งคำขอ "POST" ไปยัง `/api/issues/{projectname}` โดยไม่มี field ที่จำเป็น การส่งคืนจะเกิด error `{ error: 'required field(s) missing' }` 

```js
async (getUserInput) => {
  try {
    let test_data = { created_by: 'fCC' };
    const data = await $.post(getUserInput('url') + '/api/issues/fcc-project', {
      created_by: 'fCC'
    });
    assert.isObject(data);
    assert.property(data, 'error');
    assert.equal(data.error, 'required field(s) missing');
  } catch (err) {
    throw new Error(err.responseText || err.message);
  }
};
```

ผู้เรียนสามารถส่งคำขอ `GET` ไปที่ `/api/issues/{projectname}` สำหรับarray ของissues ทั้งหมดสำหรับเฉพาะ `projectname' นั้น โดยมี field ทั้งหมดสำหรับแต่ละissue

```js
async (getUserInput) => {
  try {
    let test_data = { issue_text: 'Get Issues Test', created_by: 'fCC' };
    const url =
      getUserInput('url') +
      '/api/issues/get_issues_test_' +
      Date.now().toString().substring(7);
    const data1 = await $.post(
      url,
      Object.assign(test_data, { issue_title: 'Faux Issue 1' })
    );
    assert.isObject(data1);
    const data2 = await $.post(
      url,
      Object.assign(test_data, { issue_title: 'Faux Issue 2' })
    );
    assert.isObject(data2);
    const data3 = await $.post(
      url,
      Object.assign(test_data, { issue_title: 'Faux Issue 3' })
    );
    assert.isObject(data3);
    const getIssues = await $.get(url);
    assert.isArray(getIssues);
    assert.lengthOf(getIssues, 3);
    let re = new RegExp('Faux Issue \\d');
    getIssues.forEach((issue) => {
      assert.property(issue, 'issue_title');
      assert.match(issue.issue_title, re);
      assert.property(issue, 'issue_text');
      assert.property(issue, 'created_by');
      assert.property(issue, 'assigned_to');
      assert.property(issue, 'status_text');
      assert.property(issue, 'open');
      assert.property(issue, 'created_on');
      assert.property(issue, 'updated_on');
      assert.property(issue, '_id');
    });
  } catch (err) {
    throw new Error(err.responseText || err.message);
  }
};
```

ผู้เรียนสามารถส่งคำขอ `GET` ไปที่ `/api/issues/{projectname}` และกรอง (filter) คำขอโดยส่งผ่าน field และ value ใดๆ ไปเป็นข้อความค้นหา URL (เช่น `/api/issues/{project}?open= false`) ผู้เรียนสามารถส่งคู่ field/value ได้ตั้งแต่หนึ่งคู่ขึ้นไปในครั้งเดียว 

```js
async (getUserInput) => {
  try {
    let test_data = {
      issue_title: 'To be Filtered',
      issue_text: 'Filter Issues Test'
    };
    const url =
      getUserInput('url') +
      '/api/issues/get_issues_test_' +
      Date.now().toString().substring(7);
    const data1 = await $.post(
      url,
      Object.assign(test_data, { created_by: 'Alice', assigned_to: 'Bob' })
    );
    const data2 = await $.post(
      url,
      Object.assign(test_data, { created_by: 'Alice', assigned_to: 'Bob' })
    );
    const data3 = await $.post(
      url,
      Object.assign(test_data, { created_by: 'Alice', assigned_to: 'Eric' })
    );
    const data4 = await $.post(
      url,
      Object.assign(test_data, { created_by: 'Carol', assigned_to: 'Eric' })
    );
    const getSingle = await $.get(url + '?created_by=Alice');
    assert.isArray(getSingle);
    assert.lengthOf(getSingle, 3);
    const getMultiple = await $.get(url + '?created_by=Alice&assigned_to=Bob');
    assert.isArray(getMultiple);
    assert.lengthOf(getMultiple, 2);
  } catch (err) {
    throw new Error(err.responseText || err.message);
  }
};
```

ผู้เรียนส่งคำขอ "PUT" ไปที่ "/api/issues/{projectname}" ได้ โดยใช้ "_id" และช่องที่จะอัปเดตอย่างน้อย 1 field // เมื่อทำสำเร็จ ตรง field `updated_on` ควรได้รับการอัปเดต และค่าที่ส่งคืนควรเป็น `{ result: 'successfully updated', '_id': _id }` 

```js
async (getUserInput) => {
  try {
    let initialData = {
      issue_title: 'Issue to be Updated',
      issue_text: 'Functional Test - Put target',
      created_by: 'fCC'
    };
    const url = getUserInput('url') + '/api/issues/fcc-project';
    const itemToUpdate = await $.post(url, initialData);
    const updateSucccess = await $.ajax({
      url: url,
      type: 'PUT',
      data: { _id: itemToUpdate._id, issue_text: 'New Issue Text' }
    });
    assert.isObject(updateSucccess);
    assert.deepEqual(updateSucccess, {
      result: 'successfully updated',
      _id: itemToUpdate._id
    });
    const getUpdatedId = await $.get(url + '?_id=' + itemToUpdate._id);
    assert.isArray(getUpdatedId);
    assert.isObject(getUpdatedId[0]);
    assert.isAbove(
      Date.parse(getUpdatedId[0].updated_on),
      Date.parse(getUpdatedId[0].created_on)
    );
  } catch (err) {
    throw new Error(err.responseText || err.message);
  }
};
```

เมื่อคำขอ "PUT" ที่ส่งไปยัง `/api/issues/{projectname}` ไม่รวม `_id` .ให้ค่าที่ส่งคืนคือ `{ error: 'missing _id' }` 

```js
async (getUserInput) => {
  try {
    const url = getUserInput('url') + '/api/issues/fcc-project';
    const badUpdate = await $.ajax({ url: url, type: 'PUT' });
    assert.isObject(badUpdate);
    assert.property(badUpdate, 'error');
    assert.equal(badUpdate.error, 'missing _id');
  } catch (err) {
    throw new Error(err.responseText || err.message);
  }
};
```

เมื่อคำขอ "PUT" ที่ส่งไปยัง `/api/issues/{projectname}` ไม่มีช่องอัปเดต ค่าที่ส่งคืนคือ `{ error: 'no update field(s) send', '_id': _id }` สำหรับ error อื่นๆ ค่าที่ส่งคืนคือ `{ error: 'could not update', '_id': _id }` 

```js
async (getUserInput) => {
  try {
    const url = getUserInput('url') + '/api/issues/fcc-project';
    const badUpdate = await $.ajax({
      url: url,
      type: 'PUT',
      data: { _id: '5f665eb46e296f6b9b6a504d' }
    });
    assert.deepEqual(badUpdate, {
      error: 'no update field(s) sent',
      _id: '5f665eb46e296f6b9b6a504d'
    });
    const badIdUpdate = await $.ajax({
      url: url,
      type: 'PUT',
      data: { _id: '5f665eb46e296f6b9b6a504d', issue_text: 'New Issue Text' }
    });
    assert.deepEqual(badIdUpdate, {
      error: 'could not update',
      _id: '5f665eb46e296f6b9b6a504d'
    });
  } catch (err) {
    throw new Error(err.responseText || err.message);
  }
};

```

ผู้เรียนสามารถส่งคำขอ `DELETE` ไปที่ `/api/issues/{projectname}` ด้วย `_id` เพื่อลบ issue ที่เกิด หากไม่มีการส่ง `_id' ค่าที่ส่งคืนจะเป็น `{ error: 'missing _id' }` เมื่อสำเร็จ ค่าที่ส่งคืนคือ `{ result: 'successfully deleted', '_id': _id }` หากล้มเหลว ค่าที่ส่งคืนคือ `{ error: 'could not delete', '_id': _id }` 

```js
async (getUserInput) => {
  try {
    let initialData = {
      issue_title: 'Issue to be Deleted',
      issue_text: 'Functional Test - Delete target',
      created_by: 'fCC'
    };
    const url = getUserInput('url') + '/api/issues/fcc-project';
    const itemToDelete = await $.post(url, initialData);
    assert.isObject(itemToDelete);
    const deleteSuccess = await $.ajax({
      url: url,
      type: 'DELETE',
      data: { _id: itemToDelete._id }
    });
    assert.isObject(deleteSuccess);
    assert.deepEqual(deleteSuccess, {
      result: 'successfully deleted',
      _id: itemToDelete._id
    });
    const noId = await $.ajax({ url: url, type: 'DELETE' });
    assert.isObject(noId);
    assert.deepEqual(noId, { error: 'missing _id' });
    const badIdDelete = await $.ajax({
      url: url,
      type: 'DELETE',
      data: { _id: '5f665eb46e296f6b9b6a504d', issue_text: 'New Issue Text' }
    });
    assert.isObject(badIdDelete);
    assert.deepEqual(badIdDelete, {
      error: 'could not delete',
      _id: '5f665eb46e296f6b9b6a504d'
    });
  } catch (err) {
    throw new Error(err.responseText || err.message);
  }
};
```

การทดสอบการใช้งาน (functional tests) ทั้งหมด 14 รายการเสร็จสมบูรณ์และผ่าน 

```js
async (getUserInput) => {
  try {
    const getTests = await $.get(getUserInput('url') + '/_api/get-tests');
    assert.isArray(getTests);
    assert.isAtLeast(getTests.length, 14, 'At least 14 tests passed');
    getTests.forEach((test) => {
      assert.equal(test.state, 'passed', 'Test in Passed State');
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
