["^ ","~:resource-id",["~:shadow.build.classpath/resource","goog/dom/htmlelement.js"],"~:js","goog.provide(\"goog.dom.HtmlElement\");\ngoog.dom.HtmlElement = function() {\n};\n","~:source","/**\n * @license\n * Copyright The Closure Library Authors.\n * SPDX-License-Identifier: Apache-2.0\n */\n\ngoog.provide('goog.dom.HtmlElement');\n\n\n\n/**\n * This subclass of HTMLElement is used when only a HTMLElement is possible and\n * not any of its subclasses. Normally, a type can refer to an instance of\n * itself or an instance of any subtype. More concretely, if HTMLElement is used\n * then the compiler must assume that it might still be e.g. HTMLScriptElement.\n * With this, the type check knows that it couldn't be any special element.\n *\n * @constructor\n * @extends {HTMLElement}\n */\ngoog.dom.HtmlElement = function() {};\n","~:compiled-at",1682448774707,"~:source-map-json","{\n\"version\":3,\n\"file\":\"goog.dom.htmlelement.js\",\n\"lineCount\":4,\n\"mappings\":\"AAMAA,IAAKC,CAAAA,OAAL,CAAa,sBAAb,CAAA;AAcAD,IAAKE,CAAAA,GAAIC,CAAAA,WAAT,GAAuBC,QAAQ,EAAG;CAAlC;;\",\n\"sources\":[\"goog/dom/htmlelement.js\"],\n\"sourcesContent\":[\"/**\\n * @license\\n * Copyright The Closure Library Authors.\\n * SPDX-License-Identifier: Apache-2.0\\n */\\n\\ngoog.provide('goog.dom.HtmlElement');\\n\\n\\n\\n/**\\n * This subclass of HTMLElement is used when only a HTMLElement is possible and\\n * not any of its subclasses. Normally, a type can refer to an instance of\\n * itself or an instance of any subtype. More concretely, if HTMLElement is used\\n * then the compiler must assume that it might still be e.g. HTMLScriptElement.\\n * With this, the type check knows that it couldn't be any special element.\\n *\\n * @constructor\\n * @extends {HTMLElement}\\n */\\ngoog.dom.HtmlElement = function() {};\\n\"],\n\"names\":[\"goog\",\"provide\",\"dom\",\"HtmlElement\",\"goog.dom.HtmlElement\"]\n}\n"]