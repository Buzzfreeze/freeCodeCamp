---
id: 5a24c314108439a4d403618c
title: Use Array.filter() to Dynamically Filter an Array
challengeType: 6
forumTopicId: 301416
dashedName: use-array-filter-to-dynamically-filter-an-array
---

# --description--

`map` array method เป็นเครื่องมืออันทรงพลังที่คุณจะใช้บ่อยเมื่อทำงานกับ React อีก method หนึ่งที่เกี่ยวข้องกับ `map` คือ `filter` ซึ่งกรองเนื้อหาของ array ตามเงื่อนไข แล้ว return array ใหม่ ตัวอย่างเช่น หากคุณมี array ของ users ที่ทุกคนมี property `online` ซึ่งสามารถตั้งค่าเป็น `true` หรือ `false` คุณสามารถกรองเฉพาะ users ที่ออนไลน์โดยการเขียน:

```js
let onlineUsers = users.filter(user => user.online);
```

# --instructions--

ใน code editor นั้น `state` ของ `MyComponent` จะเริ่มต้นด้วย array ของ users ซึ่ง users บางคนออนไลน์และบางคนไม่ได้ออนไลน์ ให้ลองกรอง array เพื่อให้คุณเห็นเฉพาะ users ที่ออนไลน์ ลองทำโดยก่อนอื่นให้ใช้ `filter` เพื่อ return array ใหม่ที่มีเฉพาะ users ที่มี`online` property เป็น `true` จากนั้นในตัวแปร `renderOnline` ให้ map array ที่กรองแล้ว return `li` element สำหรับ user แต่ละรายที่มีข้อความของ `username` อย่าลืมใส่ `key` เฉพาะที่ไม่ซ้ำใครด้วย เช่นเดียวกับในแบบทดสอบครั้งก่อน

# --hints--

`MyComponent` ควรมีและเรนเดอร์ไปยังเพจ

```js
assert.strictEqual(
  Enzyme.mount(React.createElement(MyComponent)).find('MyComponent').length,
  1
);
```

State ของ `MyComponent` ควรเริ่มต้นด้วย array ของ 6 users

```js
assert(
  Array.isArray(
    Enzyme.mount(React.createElement(MyComponent)).state('users')
  ) === true &&
    Enzyme.mount(React.createElement(MyComponent)).state('users').length === 6
);
```

`MyComponent` ควร return `div`, `h1` และตามด้วย `ul` ที่มี `li` element สำหรับแต่ละ user ที่สถานะออนไลน์ถูกตั้งไว้ที่ `true`

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

`MyComponent` ควรเรนเดอร์ `li` elements ที่มี `username` ของแต่ละ user ที่ ออนไลน์

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

แต่ละ list item element ควรมี `key` attribute เฉพาะไม่ซ้ำกัน


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
    const usersOnline = null; // Change this line
    const renderOnline = null; // Change this line
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
