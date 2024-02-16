// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"fCdMe":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "b1751876f35c64fb";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && ![
        "localhost",
        "127.0.0.1",
        "0.0.0.0"
    ].includes(hostname) ? "wss" : "ws";
    var ws;
    try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        if (e.message) console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"7arQN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _amapJsapiLoader = require("@amap/amap-jsapi-loader");
var _amapJsapiLoaderDefault = parcelHelpers.interopDefault(_amapJsapiLoader);
window._AMapSecurityConfig = {
    securityJsCode: "483e5dd19e5e5d56e653d3c59fa970d2"
};
const heatmapData = [
    {
        "lng": 120.08926731029,
        "lat": 30.3032554653414,
        "count": 263
    },
    {
        "lng": 120.088500653241,
        "lat": 30.3026636110714,
        "count": 229
    },
    {
        "lng": 120.090009354893,
        "lat": 30.30362227005,
        "count": 130
    },
    {
        "lng": 120.091325191581,
        "lat": 30.3010586214479,
        "count": 5
    },
    {
        "lng": 120.083574971596,
        "lat": 30.3025666779356,
        "count": 132
    },
    {
        "lng": 120.086971871142,
        "lat": 30.2959927434171,
        "count": 273
    },
    {
        "lng": 120.087850604277,
        "lat": 30.2963707079977,
        "count": 294
    },
    {
        "lng": 120.084527315283,
        "lat": 30.2966775718647,
        "count": 23
    },
    {
        "lng": 120.090632987494,
        "lat": 30.2970126726438,
        "count": 284
    },
    {
        "lng": 120.091523480881,
        "lat": 30.2967903481151,
        "count": 241
    },
    {
        "lng": 120.089931356294,
        "lat": 30.2985807777726,
        "count": 274
    },
    {
        "lng": 120.091105599598,
        "lat": 30.298519508297,
        "count": 289
    },
    {
        "lng": 120.089993525612,
        "lat": 30.3044055231713,
        "count": 42
    },
    {
        "lng": 120.09088528503,
        "lat": 30.297428802197,
        "count": 295
    },
    {
        "lng": 120.082690204427,
        "lat": 30.2999043162018,
        "count": 278
    },
    {
        "lng": 120.082965758275,
        "lat": 30.2979930708041,
        "count": 210
    },
    {
        "lng": 120.083770361996,
        "lat": 30.2991926381275,
        "count": 247
    },
    {
        "lng": 120.083945823339,
        "lat": 30.3082190857748,
        "count": 57
    },
    {
        "lng": 120.084867296353,
        "lat": 30.3082480741075,
        "count": 245
    },
    {
        "lng": 120.081381496161,
        "lat": 30.3069788393356,
        "count": 223
    },
    {
        "lng": 120.081853564981,
        "lat": 30.3053393507661,
        "count": 227
    },
    {
        "lng": 120.083141025253,
        "lat": 30.3054227152526,
        "count": 158
    }
];
(0, _amapJsapiLoaderDefault.default).load({
    key: "3ef81d2c32c177578d31c9734e8267bf",
    version: "2.0",
    plugins: [
        "AMap.HeatMap"
    ]
}).then((AMap)=>{
    var map = new AMap.Map("heatmap", {
        resizeEnable: true,
        center: [
            120.0893,
            30.3033
        ],
        zoom: 16
    });
    if (!isSupportCanvas()) alert("\u70ED\u529B\u56FE\u4EC5\u5BF9\u652F\u6301canvas\u7684\u6D4F\u89C8\u5668\u9002\u7528,\u60A8\u6240\u4F7F\u7528\u7684\u6D4F\u89C8\u5668\u4E0D\u80FD\u4F7F\u7528\u70ED\u529B\u56FE\u529F\u80FD");
    var heatmap;
    map.plugin([
        "AMap.HeatMap"
    ], function() {
        heatmap = new AMap.Heatmap(map, {
            radius: 100,
            opacity: [
                0,
                0.6
            ],
            gradient: {
                0.5: "blue",
                0.65: "rgb(117,211,248)",
                0.7: "rgb(0, 255, 0)",
                0.9: "#ffea00",
                1.0: "red"
            }
        });
        heatmap.setDataSet({
            data: heatmapData,
            max: 300
        });
    });
    function isSupportCanvas() {
        var elem = document.createElement("canvas");
        return !!(elem.getContext && elem.getContext("2d"));
    }
});

},{"@amap/amap-jsapi-loader":"ejnHS","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ejnHS":[function(require,module,exports) {
"use strict";
(function(m, p) {
    module.exports = p();
})(this, function() {
    function m(a) {
        var b = [];
        a.AMapUI && b.push(p(a.AMapUI));
        a.Loca && b.push(r(a.Loca));
        return Promise.all(b);
    }
    function p(a) {
        return new Promise(function(h, c) {
            var f = [];
            if (a.plugins) for(var e = 0; e < a.plugins.length; e += 1)-1 == d.AMapUI.plugins.indexOf(a.plugins[e]) && f.push(a.plugins[e]);
            if (g.AMapUI === b.failed) c("\u524D\u6B21\u8BF7\u6C42 AMapUI \u5931\u8D25");
            else if (g.AMapUI === b.notload) {
                g.AMapUI = b.loading;
                d.AMapUI.version = a.version || d.AMapUI.version;
                e = d.AMapUI.version;
                var l = document.body || document.head, k = document.createElement("script");
                k.type = "text/javascript";
                k.src = "https://webapi.amap.com/ui/" + e + "/main.js";
                k.onerror = function(a) {
                    g.AMapUI = b.failed;
                    c("\u8BF7\u6C42 AMapUI \u5931\u8D25");
                };
                k.onload = function() {
                    g.AMapUI = b.loaded;
                    if (f.length) window.AMapUI.loadUI(f, function() {
                        for(var a = 0, b = f.length; a < b; a++){
                            var c = f[a].split("/").slice(-1)[0];
                            window.AMapUI[c] = arguments[a];
                        }
                        for(h(); n.AMapUI.length;)n.AMapUI.splice(0, 1)[0]();
                    });
                    else for(h(); n.AMapUI.length;)n.AMapUI.splice(0, 1)[0]();
                };
                l.appendChild(k);
            } else g.AMapUI === b.loaded ? a.version && a.version !== d.AMapUI.version ? c("\u4E0D\u5141\u8BB8\u591A\u4E2A\u7248\u672C AMapUI \u6DF7\u7528") : f.length ? window.AMapUI.loadUI(f, function() {
                for(var a = 0, b = f.length; a < b; a++){
                    var c = f[a].split("/").slice(-1)[0];
                    window.AMapUI[c] = arguments[a];
                }
                h();
            }) : h() : a.version && a.version !== d.AMapUI.version ? c("\u4E0D\u5141\u8BB8\u591A\u4E2A\u7248\u672C AMapUI \u6DF7\u7528") : n.AMapUI.push(function(a) {
                a ? c(a) : f.length ? window.AMapUI.loadUI(f, function() {
                    for(var a = 0, b = f.length; a < b; a++){
                        var c = f[a].split("/").slice(-1)[0];
                        window.AMapUI[c] = arguments[a];
                    }
                    h();
                }) : h();
            });
        });
    }
    function r(a) {
        return new Promise(function(h, c) {
            if (g.Loca === b.failed) c("\u524D\u6B21\u8BF7\u6C42 Loca \u5931\u8D25");
            else if (g.Loca === b.notload) {
                g.Loca = b.loading;
                d.Loca.version = a.version || d.Loca.version;
                var f = d.Loca.version, e = d.AMap.version.startsWith("2"), l = f.startsWith("2");
                if (e && !l || !e && l) c("JSAPI \u4E0E Loca \u7248\u672C\u4E0D\u5BF9\u5E94\uFF01\uFF01");
                else {
                    e = d.key;
                    l = document.body || document.head;
                    var k = document.createElement("script");
                    k.type = "text/javascript";
                    k.src = "https://webapi.amap.com/loca?v=" + f + "&key=" + e;
                    k.onerror = function(a) {
                        g.Loca = b.failed;
                        c("\u8BF7\u6C42 AMapUI \u5931\u8D25");
                    };
                    k.onload = function() {
                        g.Loca = b.loaded;
                        for(h(); n.Loca.length;)n.Loca.splice(0, 1)[0]();
                    };
                    l.appendChild(k);
                }
            } else g.Loca === b.loaded ? a.version && a.version !== d.Loca.version ? c("\u4E0D\u5141\u8BB8\u591A\u4E2A\u7248\u672C Loca \u6DF7\u7528") : h() : a.version && a.version !== d.Loca.version ? c("\u4E0D\u5141\u8BB8\u591A\u4E2A\u7248\u672C Loca \u6DF7\u7528") : n.Loca.push(function(a) {
                a ? c(a) : c();
            });
        });
    }
    if (!window) throw Error("AMap JSAPI can only be used in Browser.");
    var b;
    (function(a) {
        a.notload = "notload";
        a.loading = "loading";
        a.loaded = "loaded";
        a.failed = "failed";
    })(b || (b = {}));
    var d = {
        key: "",
        AMap: {
            version: "1.4.15",
            plugins: []
        },
        AMapUI: {
            version: "1.1",
            plugins: []
        },
        Loca: {
            version: "1.3.2"
        }
    }, g = {
        AMap: b.notload,
        AMapUI: b.notload,
        Loca: b.notload
    }, n = {
        AMap: [],
        AMapUI: [],
        Loca: []
    }, q = [], t = function(a) {
        "function" == typeof a && (g.AMap === b.loaded ? a(window.AMap) : q.push(a));
    };
    return {
        load: function(a) {
            return new Promise(function(h, c) {
                if (g.AMap == b.failed) c("");
                else if (g.AMap == b.notload) {
                    var f = a.key, e = a.version, l = a.plugins;
                    f ? (window.AMap && "lbs.amap.com" !== location.host && c("\u7981\u6B62\u591A\u79CDAPI\u52A0\u8F7D\u65B9\u5F0F\u6DF7\u7528"), d.key = f, d.AMap.version = e || d.AMap.version, d.AMap.plugins = l || d.AMap.plugins, g.AMap = b.loading, e = document.body || document.head, window.___onAPILoaded = function(d) {
                        delete window.___onAPILoaded;
                        if (d) g.AMap = b.failed, c(d);
                        else for(g.AMap = b.loaded, m(a).then(function() {
                            h(window.AMap);
                        })["catch"](c); q.length;)q.splice(0, 1)[0]();
                    }, l = document.createElement("script"), l.type = "text/javascript", l.src = "https://webapi.amap.com/maps?callback=___onAPILoaded&v=" + d.AMap.version + "&key=" + f + "&plugin=" + d.AMap.plugins.join(","), l.onerror = function(a) {
                        g.AMap = b.failed;
                        c(a);
                    }, e.appendChild(l)) : c("\u8BF7\u586B\u5199key");
                } else if (g.AMap == b.loaded) {
                    if (a.key && a.key !== d.key) c("\u591A\u4E2A\u4E0D\u4E00\u81F4\u7684 key");
                    else if (a.version && a.version !== d.AMap.version) c("\u4E0D\u5141\u8BB8\u591A\u4E2A\u7248\u672C JSAPI \u6DF7\u7528");
                    else {
                        f = [];
                        if (a.plugins) for(e = 0; e < a.plugins.length; e += 1)-1 == d.AMap.plugins.indexOf(a.plugins[e]) && f.push(a.plugins[e]);
                        if (f.length) window.AMap.plugin(f, function() {
                            m(a).then(function() {
                                h(window.AMap);
                            })["catch"](c);
                        });
                        else m(a).then(function() {
                            h(window.AMap);
                        })["catch"](c);
                    }
                } else if (a.key && a.key !== d.key) c("\u591A\u4E2A\u4E0D\u4E00\u81F4\u7684 key");
                else if (a.version && a.version !== d.AMap.version) c("\u4E0D\u5141\u8BB8\u591A\u4E2A\u7248\u672C JSAPI \u6DF7\u7528");
                else {
                    var k = [];
                    if (a.plugins) for(e = 0; e < a.plugins.length; e += 1)-1 == d.AMap.plugins.indexOf(a.plugins[e]) && k.push(a.plugins[e]);
                    t(function() {
                        if (k.length) window.AMap.plugin(k, function() {
                            m(a).then(function() {
                                h(window.AMap);
                            })["catch"](c);
                        });
                        else m(a).then(function() {
                            h(window.AMap);
                        })["catch"](c);
                    });
                }
            });
        },
        reset: function() {
            delete window.AMap;
            delete window.AMapUI;
            delete window.Loca;
            d = {
                key: "",
                AMap: {
                    version: "1.4.15",
                    plugins: []
                },
                AMapUI: {
                    version: "1.1",
                    plugins: []
                },
                Loca: {
                    version: "1.3.2"
                }
            };
            g = {
                AMap: b.notload,
                AMapUI: b.notload,
                Loca: b.notload
            };
            n = {
                AMap: [],
                AMapUI: [],
                Loca: []
            };
        }
    };
});

},{}]},["fCdMe","7arQN"], "7arQN", "parcelRequiref35e")

//# sourceMappingURL=index.f35c64fb.js.map
