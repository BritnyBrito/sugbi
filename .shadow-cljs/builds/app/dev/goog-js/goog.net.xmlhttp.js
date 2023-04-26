["^ ","~:resource-id",["~:shadow.build.classpath/resource","goog/net/xmlhttp.js"],"~:js","goog.provide(\"goog.net.DefaultXmlHttpFactory\");\ngoog.provide(\"goog.net.XmlHttp\");\ngoog.provide(\"goog.net.XmlHttp.OptionType\");\ngoog.provide(\"goog.net.XmlHttp.ReadyState\");\ngoog.provide(\"goog.net.XmlHttpDefines\");\ngoog.require(\"goog.asserts\");\ngoog.require(\"goog.net.WrapperXmlHttpFactory\");\ngoog.require(\"goog.net.XmlHttpFactory\");\ngoog.requireType(\"goog.net.XhrLike\");\ngoog.net.XmlHttp = function() {\n  return goog.net.XmlHttp.factory_.createInstance();\n};\ngoog.net.XmlHttp.ASSUME_NATIVE_XHR = goog.define(\"goog.net.XmlHttp.ASSUME_NATIVE_XHR\", false);\ngoog.net.XmlHttpDefines = {};\ngoog.net.XmlHttpDefines.ASSUME_NATIVE_XHR = goog.define(\"goog.net.XmlHttpDefines.ASSUME_NATIVE_XHR\", false);\ngoog.net.XmlHttp.getOptions = function() {\n  return goog.net.XmlHttp.factory_.getOptions();\n};\ngoog.net.XmlHttp.OptionType = {USE_NULL_FUNCTION:0, LOCAL_REQUEST_ERROR:1,};\ngoog.net.XmlHttp.ReadyState = {UNINITIALIZED:0, LOADING:1, LOADED:2, INTERACTIVE:3, COMPLETE:4,};\ngoog.net.XmlHttp.factory_;\ngoog.net.XmlHttp.setFactory = function(factory, optionsFactory) {\n  goog.net.XmlHttp.setGlobalFactory(new goog.net.WrapperXmlHttpFactory(goog.asserts.assert(factory), goog.asserts.assert(optionsFactory)));\n};\ngoog.net.XmlHttp.setGlobalFactory = function(factory) {\n  goog.net.XmlHttp.factory_ = factory;\n};\ngoog.net.DefaultXmlHttpFactory = function() {\n  goog.net.XmlHttpFactory.call(this);\n};\ngoog.inherits(goog.net.DefaultXmlHttpFactory, goog.net.XmlHttpFactory);\ngoog.net.DefaultXmlHttpFactory.prototype.createInstance = function() {\n  const progId = this.getProgId_();\n  if (progId) {\n    return new ActiveXObject(progId);\n  } else {\n    return new XMLHttpRequest();\n  }\n};\ngoog.net.DefaultXmlHttpFactory.prototype.internalGetOptions = function() {\n  const progId = this.getProgId_();\n  const options = {};\n  if (progId) {\n    options[goog.net.XmlHttp.OptionType.USE_NULL_FUNCTION] = true;\n    options[goog.net.XmlHttp.OptionType.LOCAL_REQUEST_ERROR] = true;\n  }\n  return options;\n};\ngoog.net.DefaultXmlHttpFactory.prototype.ieProgId_;\ngoog.net.DefaultXmlHttpFactory.prototype.getProgId_ = function() {\n  if (goog.net.XmlHttp.ASSUME_NATIVE_XHR || goog.net.XmlHttpDefines.ASSUME_NATIVE_XHR) {\n    return \"\";\n  }\n  if (!this.ieProgId_ && typeof XMLHttpRequest == \"undefined\" && typeof ActiveXObject != \"undefined\") {\n    const ACTIVE_X_IDENTS = [\"MSXML2.XMLHTTP.6.0\", \"MSXML2.XMLHTTP.3.0\", \"MSXML2.XMLHTTP\", \"Microsoft.XMLHTTP\",];\n    for (let i = 0; i < ACTIVE_X_IDENTS.length; i++) {\n      const candidate = ACTIVE_X_IDENTS[i];\n      try {\n        new ActiveXObject(candidate);\n        this.ieProgId_ = candidate;\n        return candidate;\n      } catch (e) {\n      }\n    }\n    throw new Error(\"Could not create ActiveXObject. ActiveX might be disabled,\" + \" or MSXML might not be installed\");\n  }\n  return this.ieProgId_;\n};\ngoog.net.XmlHttp.setGlobalFactory(new goog.net.DefaultXmlHttpFactory());\n","~:source","/**\n * @license\n * Copyright The Closure Library Authors.\n * SPDX-License-Identifier: Apache-2.0\n */\n\n/**\n * @fileoverview Low level handling of XMLHttpRequest.\n */\n\ngoog.provide('goog.net.DefaultXmlHttpFactory');\ngoog.provide('goog.net.XmlHttp');\ngoog.provide('goog.net.XmlHttp.OptionType');\ngoog.provide('goog.net.XmlHttp.ReadyState');\ngoog.provide('goog.net.XmlHttpDefines');\n\ngoog.require('goog.asserts');\ngoog.require('goog.net.WrapperXmlHttpFactory');\ngoog.require('goog.net.XmlHttpFactory');\ngoog.requireType('goog.net.XhrLike');\n\n\n/**\n * Static class for creating XMLHttpRequest objects.\n * @return {!goog.net.XhrLike.OrNative} A new XMLHttpRequest object.\n */\ngoog.net.XmlHttp = function() {\n  'use strict';\n  return goog.net.XmlHttp.factory_.createInstance();\n};\n\n\n/**\n * @define {boolean} Whether to assume XMLHttpRequest exists. Setting this to\n *     true bypasses the ActiveX probing code.\n * NOTE(ruilopes): Due to the way JSCompiler works, this define *will not* strip\n * out the ActiveX probing code from binaries.  To achieve this, use\n * `goog.net.XmlHttpDefines.ASSUME_NATIVE_XHR` instead.\n * TODO(ruilopes): Collapse both defines.\n */\ngoog.net.XmlHttp.ASSUME_NATIVE_XHR =\n    goog.define('goog.net.XmlHttp.ASSUME_NATIVE_XHR', false);\n\n\n/** @const */\ngoog.net.XmlHttpDefines = {};\n\n\n/**\n * @define {boolean} Whether to assume XMLHttpRequest exists. Setting this to\n *     true eliminates the ActiveX probing code.\n */\ngoog.net.XmlHttpDefines.ASSUME_NATIVE_XHR =\n    goog.define('goog.net.XmlHttpDefines.ASSUME_NATIVE_XHR', false);\n\n\n/**\n * Gets the options to use with the XMLHttpRequest objects obtained using\n * the static methods.\n * @return {Object} The options.\n */\ngoog.net.XmlHttp.getOptions = function() {\n  'use strict';\n  return goog.net.XmlHttp.factory_.getOptions();\n};\n\n\n/**\n * Type of options that an XmlHttp object can have.\n * @enum {number}\n */\ngoog.net.XmlHttp.OptionType = {\n  /**\n   * Whether a goog.nullFunction should be used to clear the onreadystatechange\n   * handler instead of null.\n   */\n  USE_NULL_FUNCTION: 0,\n\n  /**\n   * NOTE(user): In IE if send() errors on a *local* request the readystate\n   * is still changed to COMPLETE.  We need to ignore it and allow the\n   * try/catch around send() to pick up the error.\n   */\n  LOCAL_REQUEST_ERROR: 1,\n};\n\n\n/**\n * Status constants for XMLHTTP, matches:\n * https://msdn.microsoft.com/en-us/library/ms534361(v=vs.85).aspx\n * @enum {number}\n */\ngoog.net.XmlHttp.ReadyState = {\n  /**\n   * Constant for when xmlhttprequest.readyState is uninitialized\n   */\n  UNINITIALIZED: 0,\n\n  /**\n   * Constant for when xmlhttprequest.readyState is loading.\n   */\n  LOADING: 1,\n\n  /**\n   * Constant for when xmlhttprequest.readyState is loaded.\n   */\n  LOADED: 2,\n\n  /**\n   * Constant for when xmlhttprequest.readyState is in an interactive state.\n   */\n  INTERACTIVE: 3,\n\n  /**\n   * Constant for when xmlhttprequest.readyState is completed\n   */\n  COMPLETE: 4,\n};\n\n\n/**\n * The global factory instance for creating XMLHttpRequest objects.\n * @type {goog.net.XmlHttpFactory}\n * @private\n */\ngoog.net.XmlHttp.factory_;\n\n\n/**\n * Sets the factories for creating XMLHttpRequest objects and their options.\n * @param {Function} factory The factory for XMLHttpRequest objects.\n * @param {Function} optionsFactory The factory for options.\n * @deprecated Use setGlobalFactory instead.\n */\ngoog.net.XmlHttp.setFactory = function(factory, optionsFactory) {\n  'use strict';\n  goog.net.XmlHttp.setGlobalFactory(new goog.net.WrapperXmlHttpFactory(\n      goog.asserts.assert(factory), goog.asserts.assert(optionsFactory)));\n};\n\n\n/**\n * Sets the global factory object.\n * @param {!goog.net.XmlHttpFactory} factory New global factory object.\n */\ngoog.net.XmlHttp.setGlobalFactory = function(factory) {\n  'use strict';\n  goog.net.XmlHttp.factory_ = factory;\n};\n\n\n\n/**\n * Default factory to use when creating xhr objects.  You probably shouldn't be\n * instantiating this directly, but rather using it via goog.net.XmlHttp.\n * @extends {goog.net.XmlHttpFactory}\n * @constructor\n */\ngoog.net.DefaultXmlHttpFactory = function() {\n  'use strict';\n  goog.net.XmlHttpFactory.call(this);\n};\ngoog.inherits(goog.net.DefaultXmlHttpFactory, goog.net.XmlHttpFactory);\n\n\n/** @override */\ngoog.net.DefaultXmlHttpFactory.prototype.createInstance = function() {\n  'use strict';\n  const progId = this.getProgId_();\n  if (progId) {\n    return new ActiveXObject(progId);\n  } else {\n    return new XMLHttpRequest();\n  }\n};\n\n\n/** @override */\ngoog.net.DefaultXmlHttpFactory.prototype.internalGetOptions = function() {\n  'use strict';\n  const progId = this.getProgId_();\n  const options = {};\n  if (progId) {\n    options[goog.net.XmlHttp.OptionType.USE_NULL_FUNCTION] = true;\n    options[goog.net.XmlHttp.OptionType.LOCAL_REQUEST_ERROR] = true;\n  }\n  return options;\n};\n\n\n/**\n * The ActiveX PROG ID string to use to create xhr's in IE. Lazily initialized.\n * @type {string|undefined}\n * @private\n */\ngoog.net.DefaultXmlHttpFactory.prototype.ieProgId_;\n\n\n/**\n * Initialize the private state used by other functions.\n * @return {string} The ActiveX PROG ID string to use to create xhr's in IE.\n * @private\n */\ngoog.net.DefaultXmlHttpFactory.prototype.getProgId_ = function() {\n  'use strict';\n  if (goog.net.XmlHttp.ASSUME_NATIVE_XHR ||\n      goog.net.XmlHttpDefines.ASSUME_NATIVE_XHR) {\n    return '';\n  }\n\n  // The following blog post describes what PROG IDs to use to create the\n  // XMLHTTP object in Internet Explorer:\n  // http://blogs.msdn.com/xmlteam/archive/2006/10/23/using-the-right-version-of-msxml-in-internet-explorer.aspx\n  // However we do not (yet) fully trust that this will be OK for old versions\n  // of IE on Win9x so we therefore keep the last 2.\n  if (!this.ieProgId_ && typeof XMLHttpRequest == 'undefined' &&\n      typeof ActiveXObject != 'undefined') {\n    // Candidate Active X types.\n    const ACTIVE_X_IDENTS = [\n      'MSXML2.XMLHTTP.6.0',\n      'MSXML2.XMLHTTP.3.0',\n      'MSXML2.XMLHTTP',\n      'Microsoft.XMLHTTP',\n    ];\n    for (let i = 0; i < ACTIVE_X_IDENTS.length; i++) {\n      const candidate = ACTIVE_X_IDENTS[i];\n\n      try {\n        new ActiveXObject(candidate);\n        // NOTE(user): cannot assign progid and return candidate in one line\n        // because JSCompiler complaings: BUG 658126\n        this.ieProgId_ = candidate;\n        return candidate;\n      } catch (e) {\n        // do nothing; try next choice\n      }\n    }\n\n    // couldn't find any matches\n    throw new Error(\n        'Could not create ActiveXObject. ActiveX might be disabled,' +\n        ' or MSXML might not be installed');\n  }\n\n  return /** @type {string} */ (this.ieProgId_);\n};\n\n\n// Set the global factory to an instance of the default factory.\ngoog.net.XmlHttp.setGlobalFactory(new goog.net.DefaultXmlHttpFactory());\n","~:compiled-at",1682448775379,"~:source-map-json","{\n\"version\":3,\n\"file\":\"goog.net.xmlhttp.js\",\n\"lineCount\":70,\n\"mappings\":\"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\",\n\"sources\":[\"goog/net/xmlhttp.js\"],\n\"sourcesContent\":[\"/**\\n * @license\\n * Copyright The Closure Library Authors.\\n * SPDX-License-Identifier: Apache-2.0\\n */\\n\\n/**\\n * @fileoverview Low level handling of XMLHttpRequest.\\n */\\n\\ngoog.provide('goog.net.DefaultXmlHttpFactory');\\ngoog.provide('goog.net.XmlHttp');\\ngoog.provide('goog.net.XmlHttp.OptionType');\\ngoog.provide('goog.net.XmlHttp.ReadyState');\\ngoog.provide('goog.net.XmlHttpDefines');\\n\\ngoog.require('goog.asserts');\\ngoog.require('goog.net.WrapperXmlHttpFactory');\\ngoog.require('goog.net.XmlHttpFactory');\\ngoog.requireType('goog.net.XhrLike');\\n\\n\\n/**\\n * Static class for creating XMLHttpRequest objects.\\n * @return {!goog.net.XhrLike.OrNative} A new XMLHttpRequest object.\\n */\\ngoog.net.XmlHttp = function() {\\n  'use strict';\\n  return goog.net.XmlHttp.factory_.createInstance();\\n};\\n\\n\\n/**\\n * @define {boolean} Whether to assume XMLHttpRequest exists. Setting this to\\n *     true bypasses the ActiveX probing code.\\n * NOTE(ruilopes): Due to the way JSCompiler works, this define *will not* strip\\n * out the ActiveX probing code from binaries.  To achieve this, use\\n * `goog.net.XmlHttpDefines.ASSUME_NATIVE_XHR` instead.\\n * TODO(ruilopes): Collapse both defines.\\n */\\ngoog.net.XmlHttp.ASSUME_NATIVE_XHR =\\n    goog.define('goog.net.XmlHttp.ASSUME_NATIVE_XHR', false);\\n\\n\\n/** @const */\\ngoog.net.XmlHttpDefines = {};\\n\\n\\n/**\\n * @define {boolean} Whether to assume XMLHttpRequest exists. Setting this to\\n *     true eliminates the ActiveX probing code.\\n */\\ngoog.net.XmlHttpDefines.ASSUME_NATIVE_XHR =\\n    goog.define('goog.net.XmlHttpDefines.ASSUME_NATIVE_XHR', false);\\n\\n\\n/**\\n * Gets the options to use with the XMLHttpRequest objects obtained using\\n * the static methods.\\n * @return {Object} The options.\\n */\\ngoog.net.XmlHttp.getOptions = function() {\\n  'use strict';\\n  return goog.net.XmlHttp.factory_.getOptions();\\n};\\n\\n\\n/**\\n * Type of options that an XmlHttp object can have.\\n * @enum {number}\\n */\\ngoog.net.XmlHttp.OptionType = {\\n  /**\\n   * Whether a goog.nullFunction should be used to clear the onreadystatechange\\n   * handler instead of null.\\n   */\\n  USE_NULL_FUNCTION: 0,\\n\\n  /**\\n   * NOTE(user): In IE if send() errors on a *local* request the readystate\\n   * is still changed to COMPLETE.  We need to ignore it and allow the\\n   * try/catch around send() to pick up the error.\\n   */\\n  LOCAL_REQUEST_ERROR: 1,\\n};\\n\\n\\n/**\\n * Status constants for XMLHTTP, matches:\\n * https://msdn.microsoft.com/en-us/library/ms534361(v=vs.85).aspx\\n * @enum {number}\\n */\\ngoog.net.XmlHttp.ReadyState = {\\n  /**\\n   * Constant for when xmlhttprequest.readyState is uninitialized\\n   */\\n  UNINITIALIZED: 0,\\n\\n  /**\\n   * Constant for when xmlhttprequest.readyState is loading.\\n   */\\n  LOADING: 1,\\n\\n  /**\\n   * Constant for when xmlhttprequest.readyState is loaded.\\n   */\\n  LOADED: 2,\\n\\n  /**\\n   * Constant for when xmlhttprequest.readyState is in an interactive state.\\n   */\\n  INTERACTIVE: 3,\\n\\n  /**\\n   * Constant for when xmlhttprequest.readyState is completed\\n   */\\n  COMPLETE: 4,\\n};\\n\\n\\n/**\\n * The global factory instance for creating XMLHttpRequest objects.\\n * @type {goog.net.XmlHttpFactory}\\n * @private\\n */\\ngoog.net.XmlHttp.factory_;\\n\\n\\n/**\\n * Sets the factories for creating XMLHttpRequest objects and their options.\\n * @param {Function} factory The factory for XMLHttpRequest objects.\\n * @param {Function} optionsFactory The factory for options.\\n * @deprecated Use setGlobalFactory instead.\\n */\\ngoog.net.XmlHttp.setFactory = function(factory, optionsFactory) {\\n  'use strict';\\n  goog.net.XmlHttp.setGlobalFactory(new goog.net.WrapperXmlHttpFactory(\\n      goog.asserts.assert(factory), goog.asserts.assert(optionsFactory)));\\n};\\n\\n\\n/**\\n * Sets the global factory object.\\n * @param {!goog.net.XmlHttpFactory} factory New global factory object.\\n */\\ngoog.net.XmlHttp.setGlobalFactory = function(factory) {\\n  'use strict';\\n  goog.net.XmlHttp.factory_ = factory;\\n};\\n\\n\\n\\n/**\\n * Default factory to use when creating xhr objects.  You probably shouldn't be\\n * instantiating this directly, but rather using it via goog.net.XmlHttp.\\n * @extends {goog.net.XmlHttpFactory}\\n * @constructor\\n */\\ngoog.net.DefaultXmlHttpFactory = function() {\\n  'use strict';\\n  goog.net.XmlHttpFactory.call(this);\\n};\\ngoog.inherits(goog.net.DefaultXmlHttpFactory, goog.net.XmlHttpFactory);\\n\\n\\n/** @override */\\ngoog.net.DefaultXmlHttpFactory.prototype.createInstance = function() {\\n  'use strict';\\n  const progId = this.getProgId_();\\n  if (progId) {\\n    return new ActiveXObject(progId);\\n  } else {\\n    return new XMLHttpRequest();\\n  }\\n};\\n\\n\\n/** @override */\\ngoog.net.DefaultXmlHttpFactory.prototype.internalGetOptions = function() {\\n  'use strict';\\n  const progId = this.getProgId_();\\n  const options = {};\\n  if (progId) {\\n    options[goog.net.XmlHttp.OptionType.USE_NULL_FUNCTION] = true;\\n    options[goog.net.XmlHttp.OptionType.LOCAL_REQUEST_ERROR] = true;\\n  }\\n  return options;\\n};\\n\\n\\n/**\\n * The ActiveX PROG ID string to use to create xhr's in IE. Lazily initialized.\\n * @type {string|undefined}\\n * @private\\n */\\ngoog.net.DefaultXmlHttpFactory.prototype.ieProgId_;\\n\\n\\n/**\\n * Initialize the private state used by other functions.\\n * @return {string} The ActiveX PROG ID string to use to create xhr's in IE.\\n * @private\\n */\\ngoog.net.DefaultXmlHttpFactory.prototype.getProgId_ = function() {\\n  'use strict';\\n  if (goog.net.XmlHttp.ASSUME_NATIVE_XHR ||\\n      goog.net.XmlHttpDefines.ASSUME_NATIVE_XHR) {\\n    return '';\\n  }\\n\\n  // The following blog post describes what PROG IDs to use to create the\\n  // XMLHTTP object in Internet Explorer:\\n  // http://blogs.msdn.com/xmlteam/archive/2006/10/23/using-the-right-version-of-msxml-in-internet-explorer.aspx\\n  // However we do not (yet) fully trust that this will be OK for old versions\\n  // of IE on Win9x so we therefore keep the last 2.\\n  if (!this.ieProgId_ && typeof XMLHttpRequest == 'undefined' &&\\n      typeof ActiveXObject != 'undefined') {\\n    // Candidate Active X types.\\n    const ACTIVE_X_IDENTS = [\\n      'MSXML2.XMLHTTP.6.0',\\n      'MSXML2.XMLHTTP.3.0',\\n      'MSXML2.XMLHTTP',\\n      'Microsoft.XMLHTTP',\\n    ];\\n    for (let i = 0; i < ACTIVE_X_IDENTS.length; i++) {\\n      const candidate = ACTIVE_X_IDENTS[i];\\n\\n      try {\\n        new ActiveXObject(candidate);\\n        // NOTE(user): cannot assign progid and return candidate in one line\\n        // because JSCompiler complaings: BUG 658126\\n        this.ieProgId_ = candidate;\\n        return candidate;\\n      } catch (e) {\\n        // do nothing; try next choice\\n      }\\n    }\\n\\n    // couldn't find any matches\\n    throw new Error(\\n        'Could not create ActiveXObject. ActiveX might be disabled,' +\\n        ' or MSXML might not be installed');\\n  }\\n\\n  return /** @type {string} */ (this.ieProgId_);\\n};\\n\\n\\n// Set the global factory to an instance of the default factory.\\ngoog.net.XmlHttp.setGlobalFactory(new goog.net.DefaultXmlHttpFactory());\\n\"],\n\"names\":[\"goog\",\"provide\",\"require\",\"requireType\",\"net\",\"XmlHttp\",\"goog.net.XmlHttp\",\"factory_\",\"createInstance\",\"ASSUME_NATIVE_XHR\",\"define\",\"XmlHttpDefines\",\"getOptions\",\"goog.net.XmlHttp.getOptions\",\"OptionType\",\"USE_NULL_FUNCTION\",\"LOCAL_REQUEST_ERROR\",\"ReadyState\",\"UNINITIALIZED\",\"LOADING\",\"LOADED\",\"INTERACTIVE\",\"COMPLETE\",\"setFactory\",\"goog.net.XmlHttp.setFactory\",\"factory\",\"optionsFactory\",\"setGlobalFactory\",\"WrapperXmlHttpFactory\",\"asserts\",\"assert\",\"goog.net.XmlHttp.setGlobalFactory\",\"DefaultXmlHttpFactory\",\"goog.net.DefaultXmlHttpFactory\",\"XmlHttpFactory\",\"call\",\"inherits\",\"prototype\",\"goog.net.DefaultXmlHttpFactory.prototype.createInstance\",\"progId\",\"getProgId_\",\"ActiveXObject\",\"XMLHttpRequest\",\"internalGetOptions\",\"goog.net.DefaultXmlHttpFactory.prototype.internalGetOptions\",\"options\",\"ieProgId_\",\"goog.net.DefaultXmlHttpFactory.prototype.getProgId_\",\"ACTIVE_X_IDENTS\",\"i\",\"length\",\"candidate\",\"e\",\"Error\"]\n}\n"]