# React 基础

```js
var HelloComponent = React.createClass({
    render() {
        return React.createElement('h1', null, 'Hello World !')
    }
})

ReactDOM.render(
    React.createElement(HelloComponent, null),
    document.getElementById('reactContainer')
)
```
> 全都使用 js 来写，js 代码和标签混写，缺乏模板支持，这种方式不友好，所以引入 JSX

## JSX (JavaScript XML)
> 使用 XML 标记来创建虚拟 DOM 和声明组件，通过 babel 转化

JSX 优点：
- 仿照 HTML 语法定义虚拟 DOM
- 直观
- 支持 {} 使用表达式

```js
<script type="text/babel">
    var HelloComponent = React.createClass({
        render() {
            return <h1>Hello { this.props.name }</h1>
        }
    })
    ReactDOM.render(
        <HelloComponent name="bulijiujiu" />,
        document.getElementById('reactContainer')
    )
</script>
```