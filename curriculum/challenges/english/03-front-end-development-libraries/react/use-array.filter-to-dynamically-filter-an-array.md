---
id: 5a24c314108439a4d403618c
title: Use Array.filter() to Dynamically Filter an Array
challengeType: 6
forumTopicId: 301416
dashedName: use-array-filter-to-dynamically-filter-an-array
---

# --description--

method `map` ของ array เป็นสิ่งที่จะใช้ประโยชน์ได้มากใน React 
อีก method หนึ่งที่เกี่ยวข้องกับ `map` คือ `filter` ซึ่งจะกรองข้อมูลใน array ตามเงื่อนไข แล้วคืนค่าออกมาเป็น array ใหม่ 
เช่น ถ้าคุณมี array ของ user ที่ทุกคนมี property `online` ที่มีค่าเป็น `true` หรือ `false` ได้ 
คุณจะกรองเฉพาะ user ที่ออนไลน์ได้โดยการเขียน:

```js
let onlineUsers = users.filter(user => user.online);
```

# --instructions--

ใน code editor `state` ของ `MyComponent` จะมีค่าเริ่มต้นเป็น array ของ user ซึ่ง user บางคนออนไลน์และบางคนไม่ได้ออนไลน์ 
ให้กรอง array เพื่อให้คุณเห็นเฉพาะ user ที่ออนไลน์ 
การกรองทำได้โดยการใช้ method `filter` ให้ได้ array ที่มีแค่ user ที่มี property `online` เป็น `true` 
จากนั้น ให้ map array ที่กรองแล้วและคืนค่าออกมาเป็นรายการของ `li` ที่มีข้อความข้างในเป็น username ของ user และเก็บลงในตัวแปร `renderOnline`
และอย่าลืมใส่ `key` เฉพาะที่ไม่ซ้ำกันสำหรับแต่ละ `li` ด้วย

# --hints--

ต้องมี `MyComponent` และต้องเรนเดอร์ได้

```js
assert.strictEqual(
  Enzyme.mount(React.createElement(MyComponent)).find('MyComponent').length,
  1
);
```

state ของ `MyComponent` ต้องมีค่าเริ่มต้นเป็น array ที่มี user 6 คน

```js
assert(
  Array.isArray(
    Enzyme.mount(React.createElement(MyComponent)).state('users')
  ) === true &&
    Enzyme.mount(React.createElement(MyComponent)).state('users').length === 6
);
```

`MyComponent` ต้องมี `div`, `h1` และตามด้วย `ul` ที่มี `li` สำหรับ user แต่ละคนที่มี `online` เป็น `true`

```js
(() => {
  const comp = Enzyme.mount(React.createElement(MyComponent));
  const users = (bool) => ({
    users: [
      { username: 'Jeff', online: bool },
      { username: 'Alan', online: bool },
      { username: 'Mary', online: bool },
      { username: 'Jim', online: bool },
      { username: 'Laura', online: bool }
    ]
  });
  const result = () => comp.find('li').length;
  const _1 = result();
  const _2 = () => {
    comp.setState(users(true));
    return result();
  };
  const _3 = () => {
    comp.setState(users(false));
    return result();
  };
  const _4 = () => {
    comp.setState({ users: [] });
    return result();
  };
  const _2_val = _2();
  const _3_val = _3();
  const _4_val = _4();
  assert(
    comp.find('div').length === 1 &&
      comp.find('h1').length === 1 &&
      comp.find('ul').length === 1 &&
      _1 === 4 &&
      _2_val === 5 &&
      _3_val === 0 &&
      _4_val === 0
  );
})();
```

`MyComponent` ต้องเรนเดอร์ `li` ที่มีข้อความข้างในเป็น `username` ของแต่ละ user ที่ออนไลน์

```js
(() => {
  const comp = Enzyme.mount(React.createElement(MyComponent));
  const users = (bool) => ({
    users: [
      { username: 'Jeff', online: bool },
      { username: 'Alan', online: bool },
      { username: 'Mary', online: bool },
      { username: 'Jim', online: bool },
      { username: 'Laura', online: bool }
    ]
  });
  const ul = () => {
    comp.setState(users(true));
    return comp.find('ul').html();
  };
  const html = ul();
  assert(
    html ===
      '<ul><li>Jeff</li><li>Alan</li><li>Mary</li><li>Jim</li><li>Laura</li></ul>'
  );
})();
```

แต่ละ `li` ต้องมี attribute `key` ที่ไม่ซ้ำกัน


```js
assert(
  (() => {
    const ul = Enzyme.mount(React.createElement(MyComponent)).find('ul');
    console.log(ul.debug());
    const keys = new Set([
      ul.childAt(0).key(),
      ul.childAt(1).key(),
      ul.childAt(2).key(),
      ul.childAt(3).key()
    ]);
    return keys.size === 4;
  })()
);
```

# --seed--

## --after-user-code--

```jsx
ReactDOM.render(<MyComponent />, document.getElementById('root'));
```

## --seed-contents--

```jsx
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {
          username: 'Jeff',
          online: true
        },
        {
          username: 'Alan',
          online: false
        },
        {
          username: 'Mary',
          online: true
        },
        {
          username: 'Jim',
          online: false
        },
        {
          username: 'Sara',
          online: true
        },
        {
          username: 'Laura',
          online: true
        }
      ]
    };
  }
  render() {
    const usersOnline = null; // แก้ไขโค้ดบรรทัดนี้
    const renderOnline = null; // แก้ไขโค้ดบรรทัดนี้
    return (
      <div>
        <h1>Current Online Users:</h1>
        <ul>{renderOnline}</ul>
      </div>
    );
  }
}
```

# --solutions--

```jsx
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {
          username: 'Jeff',
          online: true
        },
        {
          username: 'Alan',
          online: false
        },
        {
          username: 'Mary',
          online: true
        },
        {
          username: 'Jim',
          online: false
        },
        {
          username: 'Sara',
          online: true
        },
        {
          username: 'Laura',
          online: true
        }
      ]
    };
  }
  render() {
    const usersOnline = this.state.users.filter(user => {
      return user.online;
    });
    const renderOnline = usersOnline.map(user => {
      return <li key={user.username}>{user.username}</li>;
    });
    return (
      <div>
        <h1>Current Online Users:</h1>
        <ul>{renderOnline}</ul>
      </div>
    );
  }
}
```
