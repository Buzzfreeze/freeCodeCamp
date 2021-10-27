---
id: 5a24c314108439a4d4036180
title: Optimize Re-Renders with shouldComponentUpdate
challengeType: 6
forumTopicId: 301398
dashedName: optimize-re-renders-with-shouldcomponentupdate
---

# --description--

จนถึงตอนนี้หาก component ใดได้รับ `state` ใหม่หรือ `props` ใหม่ component นั้นจะเรนเดอร์ตัวเองและ child ทั้งหมดอีกครั้ง นี่เป็นเรื่องปกติ แต่ React มี lifecycle method ที่คุณสามารถเรียกใช้งานได้เมื่อ child component ได้รับ `state` ใหม่หรือ `props` ใหม่และประกาศเฉพาะว่า component ควรอัปเดตหรือไม่ method นั้นคือ `shouldComponentUpdate()` และใช้ `nextProps` และ `nextState` เป็นพารามิเตอร์

วิธีนี้เป็นวิธีที่มีประโยชน์ในการเพิ่มประสิทธิภาพ ตัวอย่างเช่นลักษณะการทำงานเริ่มต้นคือ component ของคุณเรนเดอร์ใหม่เมื่อได้รับ `props` ใหม่ แม้ว่า `props` จะไม่มีการเปลี่ยนแปลงก็ตาม คุณสามารถใช้ `shouldComponentUpdate()` เพื่อป้องกันเหตุการณ์นี้โดยการเปรียบเทียบ `props` method นี้ต้อง return ค่า `Boolean` ที่บอก React ว่าจะอัพเดต component หรือไม่ คุณสามารถเปรียบเทียบ props ปัจจุบัน (`this.props`) กับ props ถัดไป (`nextProps`) เพื่อตรวจสอบว่าคุณจำเป็นต้องอัปเดตหรือไม่ และ return เป็น `true` หรือ `false` ตามตามเงื่อนไขนั้นๆ

# --instructions--

เพิ่ม`shouldComponentUpdate()` method ใน component ที่เรียกว่า `OnlyEvens` ในขณะนี้ method นี้ return `true` ดังนั้น `OnlyEvens` จะเรนเดอร์ใหม่ทุกครั้งที่ได้รับ `props` ใหม่ แก้ไข method เพื่อให้ `OnlyEvens` อัปเดตก็ต่อเมื่อ `value` ของ props ใหม่นั้นเท่ากัน คลิกปุ่ม `add` และดูลำดับของ event ในคอนโซลของเบราว์เซอร์ของคุณเมื่อมีการทำให้ lifecycle hook ทำงาน

# --hints--

`Controller` component ควรเรนเดอร์ `OnlyEvens` component เป็น child

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

`shouldComponentUpdate` method ควรถูกกำหนดบน `OnlyEvens` component

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

`OnlyEvens` component ควร return `h1` tag ที่เรนเดอร์ค่าของ `this.props.value`

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

`OnlyEvens` ควรเรนเดอร์ใหม่เมื่อ `nextProps.value` เป็นจำนวนคู่

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
    // Change code below this line
    return true;
    // Change code above this line
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
    // Change code below this line
    return nextProps.value % 2 === 0;
    // Change code above this line
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
