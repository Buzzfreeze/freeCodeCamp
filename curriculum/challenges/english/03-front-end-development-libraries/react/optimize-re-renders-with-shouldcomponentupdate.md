---
id: 5a24c314108439a4d4036180
title: Optimize Re-Renders with shouldComponentUpdate
challengeType: 6
forumTopicId: 301398
dashedName: optimize-re-renders-with-shouldcomponentupdate
---

# --description--

จนถึงตอนนี้ ถ้ามี component ไหนที่ได้ `state` ตัวใหม่หรือ `props` ตัวใหม่ component นั้นจะเรนเดอร์ทั้งตัวเองและ child ทั้งหมดอีกครั้ง  
การเรนเดอร์ใหม่แบบนี้เป็นเรื่องปกติ แต่ React ก็มี lifecycle method ที่คุณสามารถเรียกใช้งานได้เมื่อ child component ได้รับ `state` ตัวใหม่หรือ `props` ตัวใหม่ และกำหนดว่า component นั้นจะต้องอัปเดตหรือไม่
โดย method นั้นคือ `shouldComponentUpdate()` ซึ่งรับค่าของ `nextProps` และ `nextState` เป็นพารามิเตอร์

เราใช้ method ตัวนี้เพื่อเพิ่มประสิทธิภาพของแอพเราได้  
เช่น ถ้าปกติแล้ว component ของคุณจะเรนเดอร์ใหม่ทุกครั้งที่ได้รับ `props` ตัวใหม่ ถึงแม้ว่า `props` จะมีค่าเหมือนเดิมก็ตาม 
ในกรณีนี้คุณจะใช้ `shouldComponentUpdate()` ได้ โดยการเปรียบเทียบ `props` ที่เข้ามา 
โดย method นี้ต้องคืนค่าเป็น `Boolean` ที่บอก React ว่าจะอัพเดต component หรือไม่ คุณสามารถเปรียบเทียบ props ตัวปัจจุบัน (`this.props`) กับ props ตัวใหม่ (`nextProps`) เพื่อดูว่าคุณจำเป็นต้องอัปเดตหรือไม่ และคืนค่าออกมาเป็น `true` หรือ `false`

# --instructions--

เรามี method `shouldComponentUpdate()` ใน component ชื่อ `OnlyEvens` ตอนนี้ method นี้จะคืนค่าเป็น `true` ดังนั้น `OnlyEvens` จะเรนเดอร์ใหม่ทุกครั้งที่ได้รับ `props` ตัวใหม่ 

ให้แก้ไข method เพื่อให้ `OnlyEvens` อัปเดตก็ต่อเมื่อ `value` ของ props ใหม่เป็นเลขคู่ ลองคลิกปุ่ม `add` และดูลำดับของ event ใน console เมื่อ lifecycle hook ทำงาน

# --hints--

`Controller` ต้องเรนเดอร์ `OnlyEvens` เป็น child

```js
assert(
  (() => {
    const mockedComponent = Enzyme.mount(React.createElement(Controller));
    return (
      mockedComponent.find('Controller').length === 1 &&
      mockedComponent.find('OnlyEvens').length === 1
    );
  })()
);
```

ต้องใช้ method `shouldComponentUpdate` ใน `OnlyEvens`

```js
assert(
  (() => {
    const child = React.createElement(OnlyEvens)
      .type.prototype.shouldComponentUpdate.toString()
      .replace(/s/g, '');
    return child !== 'undefined';
  })()
);
```

`OnlyEvens` ต้องเรนเดอร์แท็ก `h1` ที่แสดงค่าของ `this.props.value`

```js
(() => {
  const mockedComponent = Enzyme.mount(React.createElement(Controller));
  const first = () => {
    mockedComponent.setState({ value: 1000 });
    return mockedComponent.find('h1').html();
  };
  const second = () => {
    mockedComponent.setState({ value: 10 });
    return mockedComponent.find('h1').html();
  };
  const firstValue = first();
  const secondValue = second();
  assert(firstValue === '<h1>1000</h1>' && secondValue === '<h1>10</h1>');
})();
```

`OnlyEvens` ต้องเรนเดอร์ใหม่เมื่อ `nextProps.value` เป็นเลขคู่เท่านั้น

```js
(() => {
  const mockedComponent = Enzyme.mount(React.createElement(Controller));
  const first = () => {
    mockedComponent.setState({ value: 8 });
    return mockedComponent.find('h1').text();
  };
  const second = () => {
    mockedComponent.setState({ value: 7 });
    return mockedComponent.find('h1').text();
  };
  const third = () => {
    mockedComponent.setState({ value: 42 });
    return mockedComponent.find('h1').text();
  };
  const firstValue = first();
  const secondValue = second();
  const thirdValue = third();
  assert(firstValue === '8' && secondValue === '8' && thirdValue === '42');
})();
```

# --seed--

## --after-user-code--

```jsx
ReactDOM.render(<Controller />, document.getElementById('root'));
```

## --seed-contents--

```jsx
class OnlyEvens extends React.Component {
  constructor(props) {
    super(props);
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log('Should I update?');
    // แก้ไขโค้ดใต้บรรทัดนี้
    return true;
    // แก้ไขโค้ดเหนือบรรทัดนี้
  }
  componentDidUpdate() {
    console.log('Component re-rendered.');
  }
  render() {
    return <h1>{this.props.value}</h1>;
  }
}

class Controller extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    };
    this.addValue = this.addValue.bind(this);
  }
  addValue() {
    this.setState(state => ({
      value: state.value + 1
    }));
  }
  render() {
    return (
      <div>
        <button onClick={this.addValue}>Add</button>
        <OnlyEvens value={this.state.value} />
      </div>
    );
  }
}
```

# --solutions--

```jsx
class OnlyEvens extends React.Component {
  constructor(props) {
    super(props);
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log('Should I update?');
    // แก้ไขโค้ดใต้บรรทัดนี้
    return nextProps.value % 2 === 0;
    // แก้ไขโค้ดเหนือบรรทัดนี้
  }
  componentDidUpdate() {
    console.log('Component re-rendered.');
  }
  render() {
    return <h1>{this.props.value}</h1>;
  }
}

class Controller extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    };
    this.addValue = this.addValue.bind(this);
  }
  addValue() {
    this.setState(state => ({
      value: state.value + 1
    }));
  }
  render() {
    return (
      <div>
        <button onClick={this.addValue}>Add</button>
        <OnlyEvens value={this.state.value} />
      </div>
    );
  }
}
```
