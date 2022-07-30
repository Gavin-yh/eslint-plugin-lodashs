#!/usr/bin/env node

/**
 * @fileoverview eslint-plugin-lodash
 * @author Gavin
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var requireIndex = require("requireindex");

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------

module.exports = {
  // import all rules in lib/rules
  rules: requireIndex(__dirname + "/rules"),
  configs: {
  },
  processors: {},
}
