<h1 align="center">eslint-plugin-lodashs</h1>

<!-- Badge -->
![npm badge](https://img.shields.io/npm/v/eslint-plugin-lodashs)
![gitHub release badge](https://img.shields.io/github/v/release/Gavin-yh/eslint-plugin-lodashs)
![gitHub tag badge](https://img.shields.io/github/v/tag/Gavin-yh/eslint-plugin-lodashs)
![gitHub repo size badge](https://img.shields.io/github/repo-size/Gavin-yh/eslint-plugin-lodashs)
![jest badge badge](https://img.shields.io/badge/unit%20test-jest-yellowgreen)

</br>

## 简介
关于lodash工具函数的lint。

如：get函数，取默认值。

```js
import _ from 'lodash'

let a = {
  b: "值"
}

let c = _.get(a, 'b', '默认值')

if (c.length) {
  // TODO
}
```

上面的写法看似没问题。但是有种情况，当 `b` 的值为：`null` 时，上面的写法就取不到默认值。


```js
import _ from 'lodash'

let a = {
  b: null
}

let c = _.get(a, 'b', '默认值')

if (c.length) {  // Error: Uncaught TypeError: Cannot read properties of null (reading 'length')
  // TODO
}
```

在常规的业务里很经常用到get函数，但是写法不注意，可能会导致代码不够健壮，会有隐患存在。这时项目如果有eslint，我们就可以让工具帮我们`检测`和`修复`有问题的代码。

</br>

## Installation

先安装 [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

接下来安装 `eslint-plugin-lodashs`:

```
$ npm install eslint-plugin-lodashs --save-dev
```


## Usage

添加 `lodashs` 在你的配置文件里： `.eslintrc`

可以省略前缀： `eslint-plugin-`

```json
{
  "plugins": [
    "lodashs"
  ]
}
```


配置对应的规则：`lodash-get`

```json
{
    "rules": {
        "lodashs/lodash-get": 2
    }
}
```

## 贡献规则
如果有感兴趣，在使用lodash的时候发现的问题可以用工具解决的，欢迎提 `pr` 。


## 问题
有问题的可以在这里提issue: [issue](https://github.com/Gavin-yh/eslint-plugin-lodashs/issues)





