---
id: 587d8249367417b2b2512c42
title: Issue Tracker
challengeType: 4
forumTopicId: 301569
dashedName: issue-tracker
---

# --description--

ให้สร้างแอปแบบ full stack โดยใช้ JavaScript ที่ทำงานคล้ายกับเว็บไซต์นี้ <https://issue-tracker.freecodecamp.rocks/>  
ในการทำโปรเจคนี้ คุณจะต้องเขียนโค้ดโดยใช้วิธีใดวิธีหนึ่งดังต่อไปนี้

- ให้ Clone repoisitory จาก [GitHub](https://github.com/freeCodeCamp/boilerplate-project-issuetracker/) มา และทำแบบทดสอบบนเครื่องของคุณเอง
- สร้างจากโปรเจกต์ของเราในเว็บไซต์ [Replit](https://replit.com/github/freeCodeCamp/boilerplate-project-issuetracker)
- ใช้เครื่องมือสร้างเว็บอื่นๆ และอย่าลืมเก็บไฟล์ไว้ใน GitHub repo ของคุณด้วย

เมื่อคุณทำเสร็จแล้ว ให้อัปโหลดโปรเจกต์ของคุณขึ้นโฮสต์ และเปิดเป็น public จากนั้นให้ส่งลิงก์เข้าไปใน `Link คำตอบ` และจะส่งลิงก์ของ source code เข้าไปใน `GitHub Link` ด้วยก็ได้

# --instructions--

- สร้าง route ที่จำเป็นใน `/routes/api.js`
- สร้าง functional test ทั้งหมดใน `tests/2_functional-tests.js`
- Copy ข้อมูลในไฟล์ `sample.env` ไปวางใน `.env` และตั้งค่าตัวแปรให้เหมาะสม 
- หากต้องการใช้ test ให้ uncomment `NODE_ENV=test` ในไฟล์ `.env`
- หากต้องการใช้ test ใน console ให้ใช้คำสั่ง `npm run test` หากต้องการเปิด console ของ Replit ให้ใช้คีย์ลัด Ctrl+Shift+P (Cmd หากใช้ Mac) แล้วพิมพ์คำว่า "open shell" 

เขียนการทดสอบต่อไปนี้ใน `tests/2_functional-tests.js`: 

- สร้าง issue ที่มีข้อมูลครบทุกฟิลด์: ส่ง POST request ไปยัง `/api/issues/{project}`
- สร้าง issue โดยใช้ฟิลด์ที่จำเป็นเท่านั้น: ส่ง POST request ไปยัง `/api/issues/{project}`
- สร้าง issue โดยใช้ฟิลด์ที่จำเป็นไม่ครบ: ส่ง POST request ไปยัง `/api/issues/{project}`
- ดู issue ของ Project: ส่ง GET request ไปยัง `/api/issues/{project}`
- ดู issue ของ Project โดยใช้ filter ตัวเดียว: ส่ง GET request ไปยัง `/api/issues/{project}`
- ดู issue ของ Project โดยใช้ filter หลายตัว: ส่ง GET request ไปยัง `/api/issues/{project}`
- อัปเดตหนึ่งฟิลด์ของ issue : ส่ง PUT request ไปยัง `/api/issues/{project}`
- อัปเดตหลายฟิลด์ของ issue: ส่ง PUT request ไปยัง `/api/issues/{project}`
- อัปเดต issue โดยไม่ส่ง `_id` ไป: ส่ง PUT request ไปยัง `/api/issues/{project}`
- อัปเดต issue โดยไม่ได้เปลี่ยนค่า: ส่ง PUT request ไปยัง `/api/issues/{project}`
- อัปเดต issue โดยใช้ `_id` ที่ไม่ถูกต้อง: ส่ง PUT request ไปยัง `/api/issues/{project}`
- Delete issue: ส่ง DELETE request ไปยัง `/api/issues/{project}`
- Delete issue โดยใช้ `_id` ที่ไม่ถูกต้อง: ส่ง DELETE request ไปยัง `/api/issues/{project}`
- Delete issue โดยไม่ส่ง `_id` ไป: ส่ง DELETE request ไปยัง `/api/issues/{project}` 

# --hints--

ให้ส่งลิงก์โปรเจกต์ของคุณ ไม่ใช่ URL ตัวอย่างของเรา

```js
(getUserInput) => {
  assert(!/.*\/issue-tracker\.freecodecamp\.rocks/.test(getUserInput('url')));
};
```

สามารถส่ง `POST` request ไปยัง `/api/issues/{projectname}` ได้ โดยใช้ form โดยจำเป็นต้องระบุ `issue_title`, `issue_text`, `created_by` และในส่วน `assigned_to` และ `status_text` จะระบุหรือไม่ก็ได้

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

เมื่อส่ง `POST` request ไปยัง `/api/issues/{projectname}` จะได้ object ที่สร้างขึ้นคืนมา ซึ่งมีค่าของฟิลด์ที่ส่งไปทั้งหมด โดยฟิลด์ที่ไม่ระบุจะมีค่าเป็น string ว่าง นอกจากนี้ จะมีฟิลด์ `created_on` (date/time), `updated_on` (date/time), `open' open` (boolean, `true` ถ้า issue เปิดอยู่ - เป็นค่า default, `false` ถ้า issue ถูกปิดแล้ว) และ `_id` ด้วย

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

เมื่อส่ง `POST` request ไปยัง `/api/issues/{projectname}` โดยไม่ระบุฟิลด์ที่จำเป็น จะคืนค่า error กลับมา `{ error: 'required field(s) missing' }` 

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

เมื่อส่ง `GET` request ไปยัง `/api/issues/{projectname}` จะได้ array ของ issue ทั้งหมดของ `projectname` นั้นกลับมา โดยแต่ละ issue จะมีค่าครบทุกฟิลด์

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

สามารถส่ง `GET` request ไปยัง `/api/issues/{projectname}` โดยใช้ filter ด้วยได้ ซึ่ง filter จะเป็น URL query string (เช่น `/api/issues/{project}?open= false`) โดยจะส่ง field/value ของ query string ได้มากกว่าหนึ่งคู่ 

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

สามารถส่ง `PUT` request ไปยัง `/api/issues/{projectname}` ได้ โดยระบุ `_id` และฟิลด์ที่จะอัปเดทอย่างน้อยหนึ่งฟิลด์ เมื่อทำสำเร็จฟิลด์ `updated_on` ต้องถูกอัปเดตด้วย และค่าที่ได้คืนมาต้องเป็น `{ result: 'successfully updated', '_id': _id }` 

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

เมื่อส่ง `PUT` request ไปยัง `/api/issues/{projectname}` โดยไม่ระบุ `_id` ต้องได้ค่าคืนมาเป็น `{ error: 'missing _id' }` 

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

เมื่อส่ง `PUT` request ไปยัง `/api/issues/{projectname}` โดยไม่ระบุฟิลด์ที่จะอัปเดต ค่าที่ได้กลับมาต้องเป็น `{ error: 'no update field(s) send', '_id': _id }` แต่ถ้าเป็น error อื่นๆ ค่าที่ได้กลับมาต้องเป็น `{ error: 'could not update', '_id': _id }` 

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

สามารถส่ง `DELETE` request ไปยัง `/api/issues/{projectname}` ได้ โดยการระบุ `_id` ของ issue ที่ต้องการจะลบไปด้วย ถ้าไม่ระบุ `_id` ค่าที่ได้กลับมาต้องเป็น `{ error: 'missing _id' }` ถ้าลบสำเร็จ ค่าที่ได้กลับมาต้องเป็น `{ result: 'successfully deleted', '_id': _id }` ถ้าลบไม่ได้ ค่าที่ได้กลับมาต้องเป็น `{ error: 'could not delete', '_id': _id }` 

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

functional tests ทั้งหมด 14 ตัวต้องเสร็จสมบูรณ์และผ่าน 

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
