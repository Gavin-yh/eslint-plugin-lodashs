import _ from 'lodash'

var a = {
    name: {
        age: 12
    }
}

// 后端传null时，取不到默认值
// 官方：获取 处的path值object。如果解析的值为undefined，defaultValue则在其位置返回 

const b = _.get(a, 'name.age') || 9