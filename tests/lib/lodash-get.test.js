const RuleTester = require('eslint').RuleTester

const ruleTester = new RuleTester();
const rules = require('../../lib/rules/lodash-get')

ruleTester.run('lodash-get', rules, {
    valid: [
      {
        code: 'var key = _.get(object, "key") || {}',
      }
    ],
    invalid: [
      {
        code: 'var get = _.get()',
        errors: [{ 
          messageId: 'unexpectedParameterLength'
        }]
      },
      {
        code: 'var key = _.get(object)',
        errors: [{ 
          messageId: 'unexpectedParameterLength'
        }]
      },
      {
        code: 'var key = _.get(object, "key", {}, {})',
        errors: [{ 
          messageId: 'unexpectedParameterLength'
        }]
      },
      {
        code: 'var key = _.get(object, "key", {})',
        output: 'var key = _.get(object, "key") || {}',
        errors: [{
          messageId: 'unexpectedThirParameter',
        }]
      },
      {
        code: 'var key = _.get(object, "key", {}) === {}',
        output: 'var key = (_.get(object, "key") || {}) === {}',
        errors: [{
          messageId: 'unexpectedThirParameter',
        }]
      },
      {
        code: 'var key = _.get(object, "key", 0) | 1',
        output: 'var key = (_.get(object, "key") || 0) | 1',
        errors: [{
          messageId: 'unexpectedThirParameter',
        }]
      },
      {
        code: 'var key = _.get(object, "key", 0) - 1',
        output: 'var key = (_.get(object, "key") || 0) - 1',
        errors: [{
          messageId: 'unexpectedThirParameter',
        }]
      },
      {
        code: 'var key = _.get(object, "key", {}) && {}',
        output: 'var key = (_.get(object, "key") || {}) && {}',
        errors: [{
          messageId: 'unexpectedThirParameter',
        }]
      },
      {
        code: 'var key = key in _.get(object, "key", {})',
        output: 'var key = key in (_.get(object, "key") || {})',
        errors: [{
          messageId: 'unexpectedThirParameter',
        }]
      },
      {
        code: 'typeof _.get(object, "key", {})',
        output: 'typeof (_.get(object, "key") || {})',
        errors: [{
          messageId: 'unexpectedThirParameter',
        }]
      },
      {
        code: 'if (_.get(object, "key", {})) {}',
        output: 'if (_.get(object, "key") || {}) {}',
        errors: [{
          messageId: 'unexpectedThirParameter',
        }]
      },
      {
        code: 'if (_.get(object, "key", {}) === {}) {}',
        output: 'if ((_.get(object, "key") || {}) === {}) {}',
        errors: [{
          messageId: 'unexpectedThirParameter',
        }]
      },
      {
        code: 'if (_.get(object, "key", 0) | 1) {}',
        output: 'if ((_.get(object, "key") || 0) | 1) {}',
        errors: [{
          messageId: 'unexpectedThirParameter',
        }]
      },
      {
        code: 'if (_.get(object, "key", 0) - 1) {}',
        output: 'if ((_.get(object, "key") || 0) - 1) {}',
        errors: [{
          messageId: 'unexpectedThirParameter',
        }]
      },
      {
        code: 'if (_.get(object, "key", {}) && {}) {}',
        output: 'if ((_.get(object, "key") || {}) && {}) {}',
        errors: [{
          messageId: 'unexpectedThirParameter',
        }]
      },
      {
        code: 'if (typeof _.get(object, "key", {})) {}',
        output: 'if (typeof (_.get(object, "key") || {})) {}',
        errors: [{
          messageId: 'unexpectedThirParameter',
        }]
      },
      {
        code: 'if (key in _.get(object, "key", {})) {}',
        output: 'if (key in (_.get(object, "key") || {})) {}',
        errors: [{
          messageId: 'unexpectedThirParameter',
        }]
      },
      {
        code: 'while (_.get(object, "key", {})) {}',
        output: 'while (_.get(object, "key") || {}) {}',
        errors: [{
          messageId: 'unexpectedThirParameter',
        }]
      },
      {
        code: 'while (_.get(object, "key", {}) === {}) {}',
        output: 'while ((_.get(object, "key") || {}) === {}) {}',
        errors: [{
          messageId: 'unexpectedThirParameter',
        }]
      },
      {
        code: 'switch (_.get(object, "key", {})) {}',
        output: 'switch (_.get(object, "key") || {}) {}',
        errors: [{
          messageId: 'unexpectedThirParameter',
        }]
      },
      {
        code: 'switch (_.get(object, "key", {}) === {}) {}',
        output: 'switch ((_.get(object, "key") || {}) === {}) {}',
        errors: [{
          messageId: 'unexpectedThirParameter',
        }]
      },
      {
        code: 'for (var i = 0; i < _.get(object, "key", 1); i ++) {}',
        output: 'for (var i = 0; i < (_.get(object, "key") || 1); i ++) {}',
        errors: [{
          messageId: 'unexpectedThirParameter',
        }]
      },
      {
        code: 'for (var key in _.get(object, "key", {})) {}',
        output: 'for (var key in (_.get(object, "key") || {})) {}',
        errors: [{
          messageId: 'unexpectedThirParameter',
        }]
      },
    ]
});