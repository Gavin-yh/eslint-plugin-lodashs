/**
 * @fileoverview lodash-get
 * @author Gavin
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

/**
 *
 * @param {*} context eslint 插件的上下文
 * @param {*} node ast 节点
 * @returns
 */
function getArgumentsByNode(context, node) {
    if (!context || !node) {
        throw new Error('参数错误')
    }

    const nodeArguments = node.arguments

    if (!nodeArguments || nodeArguments.length === 0) {
        throw new Error('传入的节点，没有参数; 或者不是一个函数调用')
    }

    const sourceCode = context.getSourceCode()
    const originCode = sourceCode.getText(node)

    return nodeArguments.map((item) => {
        const argumentLength = item.range[1] - item.range[0]
        const sliceStartPosition = item.range[0] - node.range[0]
        const sliceEndPosition = sliceStartPosition + argumentLength

        return originCode.slice(sliceStartPosition, sliceEndPosition)
    })
}

module.exports = {
    meta: {
        docs: {
            description: 'Lodash.get() 用法检查',
            category: "Fill me in",
            recommended: false
        },
        fixable: 'code',
        schema: [
            // fill in your schema
        ],
        messages: {
            unexpectedThirParameter:'Lodash.get() 第三个参数不建议使用',
            unexpectedParameterLength: 'Lodash.get() 参数数量错误',
        }
    },

    create(context) {
        return {
            CallExpression(node) {
                const nodeCallee = node.callee || {}

                const isLodashGet =
                  nodeCallee.type === 'MemberExpression' &&
                  nodeCallee.object &&
                  nodeCallee.property &&
                  nodeCallee.object.name === '_' &&
                  nodeCallee.property.name === 'get'

                if (!isLodashGet) {
                    return
                }

                if (
                    node.arguments.length === 0 ||
                    node.arguments.length === 1
                ) {
                    context.report({
                        node,
                        messageId: 'unexpectedParameterLength',
                    })

                    return
                }

                if (node.arguments.length > 3) {
                    context.report({
                        node,
                        messageId: 'unexpectedParameterLength',
                    })

                    return
                }

                if (node.arguments.length === 3) {
                    context.report({
                        node,
                        messageId: 'unexpectedThirParameter',
                        fix(fixer) {
                            /**
                             * _.get(object, path, defaultValue)
                             */
                            const [
                                object, path, defaultValue,
                            ] = getArgumentsByNode(context, node)
                            const parentNode = node.parent
                            let newCode = `_.get(${object}, ${path}) || ${defaultValue}`

                            // if (_.get(res, 'data.result', {}) == 0) {}  处理二元表达式在if里，就加()
                            if (
                                parentNode.type === 'BinaryExpression' || 
                                parentNode.type === 'LogicalExpression' ||
                                parentNode.type === 'ForInStatement' ||
                                parentNode.operator === 'typeof'
                            ) {
                                newCode = `(${newCode})`
                            }

                            return fixer.replaceText(node, newCode)
                        },
                    })
                }
            },
        }
    },
};
