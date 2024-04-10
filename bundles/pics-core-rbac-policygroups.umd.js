(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('rxjs'), require('@angular/forms'), require('@angular/router'), require('rxjs/add/operator/map'), require('@angular/common'), require('primeng/card'), require('primeng/inputtext'), require('@angular/common/http'), require('@ng-bootstrap/ng-bootstrap'), require('primeng/accordion'), require('primeng/api'), require('primeng/avatar'), require('primeng/badge'), require('primeng/button'), require('primeng/calendar'), require('primeng/checkbox'), require('primeng/confirmdialog'), require('primeng/confirmpopup'), require('primeng/contextmenu'), require('primeng/dialog'), require('primeng/dropdown'), require('primeng/editor'), require('primeng/fieldset'), require('primeng/fileupload'), require('primeng/inputmask'), require('primeng/inputswitch'), require('primeng/inputtextarea'), require('primeng/knob'), require('primeng/message'), require('primeng/multiselect'), require('primeng/orderlist'), require('primeng/password'), require('primeng/progressspinner'), require('primeng/radiobutton'), require('primeng/ripple'), require('primeng/sidebar'), require('primeng/speeddial'), require('primeng/steps'), require('primeng/table'), require('primeng/tabmenu'), require('primeng/tabview'), require('primeng/toast'), require('primeng/treeselect')) :
    typeof define === 'function' && define.amd ? define('@pics-core/rbac-policygroups', ['exports', '@angular/core', 'rxjs', '@angular/forms', '@angular/router', 'rxjs/add/operator/map', '@angular/common', 'primeng/card', 'primeng/inputtext', '@angular/common/http', '@ng-bootstrap/ng-bootstrap', 'primeng/accordion', 'primeng/api', 'primeng/avatar', 'primeng/badge', 'primeng/button', 'primeng/calendar', 'primeng/checkbox', 'primeng/confirmdialog', 'primeng/confirmpopup', 'primeng/contextmenu', 'primeng/dialog', 'primeng/dropdown', 'primeng/editor', 'primeng/fieldset', 'primeng/fileupload', 'primeng/inputmask', 'primeng/inputswitch', 'primeng/inputtextarea', 'primeng/knob', 'primeng/message', 'primeng/multiselect', 'primeng/orderlist', 'primeng/password', 'primeng/progressspinner', 'primeng/radiobutton', 'primeng/ripple', 'primeng/sidebar', 'primeng/speeddial', 'primeng/steps', 'primeng/table', 'primeng/tabmenu', 'primeng/tabview', 'primeng/toast', 'primeng/treeselect'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global["pics-core"] = global["pics-core"] || {}, global["pics-core"]["rbac-policygroups"] = {}), global.ng.core, global.rxjs, global.ng.forms, global.ng.router, global.rxjs["add/operator/map"], global.ng.common, global.i6, global.i10, global.ng.common.http, global.ngBootstrap, global.accordion, global.api, global.avatar, global.badge, global.button, global.calendar, global.checkbox, global.confirmdialog, global.confirmpopup, global.contextmenu, global.dialog, global.dropdown, global.editor, global.fieldset, global.fileupload, global.inputmask, global.inputswitch, global.inputtextarea, global.knob, global.message, global.multiselect, global.orderlist, global.password, global.progressspinner, global.radiobutton, global.ripple, global.sidebar, global.speeddial, global.steps, global.table, global.tabmenu, global.tabview, global.toast, global.treeselect));
})(this, (function (exports, i0, rxjs, i1$1, i1, map, i8, i6, i10, i1$2, ngBootstrap, accordion, api, avatar, badge, button, calendar, checkbox, confirmdialog, confirmpopup, contextmenu, dialog, dropdown, editor, fieldset, fileupload, inputmask, inputswitch, inputtextarea, knob, message, multiselect, orderlist, password, progressspinner, radiobutton, ripple, sidebar, speeddial, steps, table, tabmenu, tabview, toast, treeselect) { 'use strict';

    function _interopNamespace(e) {
        if (e && e.__esModule) return e;
        var n = Object.create(null);
        if (e) {
            Object.keys(e).forEach(function (k) {
                if (k !== 'default') {
                    var d = Object.getOwnPropertyDescriptor(e, k);
                    Object.defineProperty(n, k, d.get ? d : {
                        enumerable: true,
                        get: function () { return e[k]; }
                    });
                }
            });
        }
        n["default"] = e;
        return Object.freeze(n);
    }

    var i0__namespace = /*#__PURE__*/_interopNamespace(i0);
    var i1__namespace$1 = /*#__PURE__*/_interopNamespace(i1$1);
    var i1__namespace = /*#__PURE__*/_interopNamespace(i1);
    var i8__namespace = /*#__PURE__*/_interopNamespace(i8);
    var i6__namespace = /*#__PURE__*/_interopNamespace(i6);
    var i10__namespace = /*#__PURE__*/_interopNamespace(i10);
    var i1__namespace$2 = /*#__PURE__*/_interopNamespace(i1$2);

    var RbacPolicygroupsService = /** @class */ (function () {
        function RbacPolicygroupsService() {
        }
        return RbacPolicygroupsService;
    }());
    RbacPolicygroupsService.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: RbacPolicygroupsService, deps: [], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    RbacPolicygroupsService.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: RbacPolicygroupsService, providedIn: 'root' });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: RbacPolicygroupsService, decorators: [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], ctorParameters: function () { return []; } });

    var RoleConfig = /** @class */ (function () {
        function RoleConfig() {
        }
        return RoleConfig;
    }());
    RoleConfig.EndPoint = {
        role: {
            getAllUserRole: '/access-control/role',
            createRole: '/access-control/role/create',
            getLandingPage: '/platform/menu/application',
            addPolicyGroup: '/access-control/role',
            getAllOrgRole: '/access-control/role/organization/{orgid}',
            dossier: '/dossier'
        }
    };
    var UserConfig = /** @class */ (function () {
        function UserConfig() {
        }
        return UserConfig;
    }());
    UserConfig.EndPoint = {
        User: {
            getAllUserList: '/org/user',
            getAllUserActiveInactive: '/org/user?includeInactiveUsers=true',
            activateUser: '/org/user/activate',
            createUser: '/org/user/create',
            userRole: '/org/user/role',
            managementgroup: '/org/team/managementgroup',
            getAllUserOrgList: '/org/user/organization/'
        },
        Provider: {
            getProviderList: '/ref/provider',
            searchProviderList: '/ref/provider/search',
            addProviderUser: '/ref/provider/create/account'
        }
    };
    var AttachmentConfig = /** @class */ (function () {
        function AttachmentConfig() {
        }
        return AttachmentConfig;
    }());
    AttachmentConfig.EndPoint = {
        Attachments: {
            GetAttachmentReferral: '/ref/attachment/referral',
            GetCategoryLookup: '/platform/master/lookup/lookupbycategoryname',
            UploadKey: '/common/files/upload-key',
            DownloadKey: '/common/files/download-key',
            PostAttachment: '/ref/attachment/create',
            PutAttachment: '/ref/attachment'
        }
    };
    var PolicyGroupConfig = /** @class */ (function () {
        function PolicyGroupConfig() {
        }
        return PolicyGroupConfig;
    }());
    PolicyGroupConfig.EndPoint = {
        policyGroup: {
            getPolicyGroupList: '/platform/page-designer/policyGroup',
            getAllPolicyGroupList: '/platform/page-designer/policyGroup/all',
            createPolicyGroup: '/platform/page-designer/policyGroup',
            getOrgPolicyGroups: '/platform/page-designer/policyGroup/organization/{organizationid}'
        }
    };
    var PermissionsURL = /** @class */ (function () {
        function PermissionsURL() {
        }
        return PermissionsURL;
    }());
    PermissionsURL.EndPoints = {
        permission: {
            permissionRoleById: '/access-control/permission/role/{id}',
            pagePermission: '/access-control/permission/page',
            getPermission: '/access-control/permission/{id}',
            createPermission: '/access-control/permission/create',
            updateDeletePermission: '/access-control/permission/{permissionid}',
            getPermissionTree: '/access-control/permission/page/{pageid}/{parentid}',
            getPermissionTypes: '/access-control/permission/type/{applicationid}',
            applicationPermissionsTree: '/access-control/permission/application/{applicationid}'
        },
        page: {
            createPage: '/platform/menu/create',
            updateDeletePage: '/platform/menu/{pageid}',
            AllPageTree: '/platform/menu/tree/{applicationid}'
        }
    };
    var AccessManagementConfig$1 = /** @class */ (function () {
        function AccessManagementConfig() {
        }
        return AccessManagementConfig;
    }());
    AccessManagementConfig$1.EndPoint = {
        Organization: {
            getOrganizationList: '/org/organization/all',
            getOrganization: '/platform/page-designer/page/organization/{orgId}?returnUserPage=false&excludeNoActiveVersionPages=true'
        }
    };
    var RBACINFO = /** @class */ (function () {
        function RBACINFO() {
            this.apiHost = '';
            this.tokenKey = '';
        }
        return RBACINFO;
    }());
    var Environment = /** @class */ (function () {
        function Environment() {
        }
        return Environment;
    }());

    /******************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise, SuppressedError, Symbol */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (Object.prototype.hasOwnProperty.call(b, p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    function __rest(s, e) {
        var t = {};
        for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }
    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
        else
            for (var i = decorators.length - 1; i >= 0; i--)
                if (d = decorators[i])
                    r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); };
    }
    function __esDecorate(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
        function accept(f) { if (f !== void 0 && typeof f !== "function")
            throw new TypeError("Function expected"); return f; }
        var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
        var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
        var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
        var _, done = false;
        for (var i = decorators.length - 1; i >= 0; i--) {
            var context = {};
            for (var p in contextIn)
                context[p] = p === "access" ? {} : contextIn[p];
            for (var p in contextIn.access)
                context.access[p] = contextIn.access[p];
            context.addInitializer = function (f) { if (done)
                throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
            var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
            if (kind === "accessor") {
                if (result === void 0)
                    continue;
                if (result === null || typeof result !== "object")
                    throw new TypeError("Object expected");
                if (_ = accept(result.get))
                    descriptor.get = _;
                if (_ = accept(result.set))
                    descriptor.set = _;
                if (_ = accept(result.init))
                    initializers.unshift(_);
            }
            else if (_ = accept(result)) {
                if (kind === "field")
                    initializers.unshift(_);
                else
                    descriptor[key] = _;
            }
        }
        if (target)
            Object.defineProperty(target, contextIn.name, descriptor);
        done = true;
    }
    ;
    function __runInitializers(thisArg, initializers, value) {
        var useValue = arguments.length > 2;
        for (var i = 0; i < initializers.length; i++) {
            value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
        }
        return useValue ? value : void 0;
    }
    ;
    function __propKey(x) {
        return typeof x === "symbol" ? x : "".concat(x);
    }
    ;
    function __setFunctionName(f, name, prefix) {
        if (typeof name === "symbol")
            name = name.description ? "[".concat(name.description, "]") : "";
        return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
    }
    ;
    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(metadataKey, metadataValue);
    }
    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            } }
            function rejected(value) { try {
                step(generator["throw"](value));
            }
            catch (e) {
                reject(e);
            } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }
    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function () { if (t[0] & 1)
                throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f)
                throw new TypeError("Generator is already executing.");
            while (g && (g = 0, op[0] && (_ = 0)), _)
                try {
                    if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                        return t;
                    if (y = 0, t)
                        op = [op[0] & 2, t.value];
                    switch (op[0]) {
                        case 0:
                        case 1:
                            t = op;
                            break;
                        case 4:
                            _.label++;
                            return { value: op[1], done: false };
                        case 5:
                            _.label++;
                            y = op[1];
                            op = [0];
                            continue;
                        case 7:
                            op = _.ops.pop();
                            _.trys.pop();
                            continue;
                        default:
                            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                _ = 0;
                                continue;
                            }
                            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                _.label = op[1];
                                break;
                            }
                            if (op[0] === 6 && _.label < t[1]) {
                                _.label = t[1];
                                t = op;
                                break;
                            }
                            if (t && _.label < t[2]) {
                                _.label = t[2];
                                _.ops.push(op);
                                break;
                            }
                            if (t[2])
                                _.ops.pop();
                            _.trys.pop();
                            continue;
                    }
                    op = body.call(thisArg, _);
                }
                catch (e) {
                    op = [6, e];
                    y = 0;
                }
                finally {
                    f = t = 0;
                }
            if (op[0] & 5)
                throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
        }
    }
    var __createBinding = Object.create ? (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
            desc = { enumerable: true, get: function () { return m[k]; } };
        }
        Object.defineProperty(o, k2, desc);
    }) : (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        o[k2] = m[k];
    });
    function __exportStar(m, o) {
        for (var p in m)
            if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p))
                __createBinding(o, m, p);
    }
    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m)
            return m.call(o);
        if (o && typeof o.length === "number")
            return {
                next: function () {
                    if (o && i >= o.length)
                        o = void 0;
                    return { value: o && o[i++], done: !o };
                }
            };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    /** @deprecated */
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }
    /** @deprecated */
    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
            s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    }
    function __spreadArray(to, from, pack) {
        if (pack || arguments.length === 2)
            for (var i = 0, l = from.length, ar; i < l; i++) {
                if (ar || !(i in from)) {
                    if (!ar)
                        ar = Array.prototype.slice.call(from, 0, i);
                    ar[i] = from[i];
                }
            }
        return to.concat(ar || Array.prototype.slice.call(from));
    }
    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }
    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n])
            i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try {
            step(g[n](v));
        }
        catch (e) {
            settle(q[0][3], e);
        } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length)
            resume(q[0][0], q[0][1]); }
    }
    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: false } : f ? f(v) : v; } : f; }
    }
    function __asyncValues(o) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
    }
    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) {
            Object.defineProperty(cooked, "raw", { value: raw });
        }
        else {
            cooked.raw = raw;
        }
        return cooked;
    }
    ;
    var __setModuleDefault = Object.create ? (function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function (o, v) {
        o["default"] = v;
    };
    function __importStar(mod) {
        if (mod && mod.__esModule)
            return mod;
        var result = {};
        if (mod != null)
            for (var k in mod)
                if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
                    __createBinding(result, mod, k);
        __setModuleDefault(result, mod);
        return result;
    }
    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }
    function __classPrivateFieldGet(receiver, state, kind, f) {
        if (kind === "a" && !f)
            throw new TypeError("Private accessor was defined without a getter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
            throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    }
    function __classPrivateFieldSet(receiver, state, value, kind, f) {
        if (kind === "m")
            throw new TypeError("Private method is not writable");
        if (kind === "a" && !f)
            throw new TypeError("Private accessor was defined without a setter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
            throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
    }
    function __classPrivateFieldIn(state, receiver) {
        if (receiver === null || (typeof receiver !== "object" && typeof receiver !== "function"))
            throw new TypeError("Cannot use 'in' operator on non-object");
        return typeof state === "function" ? receiver === state : state.has(receiver);
    }
    function __addDisposableResource(env, value, async) {
        if (value !== null && value !== void 0) {
            if (typeof value !== "object" && typeof value !== "function")
                throw new TypeError("Object expected.");
            var dispose;
            if (async) {
                if (!Symbol.asyncDispose)
                    throw new TypeError("Symbol.asyncDispose is not defined.");
                dispose = value[Symbol.asyncDispose];
            }
            if (dispose === void 0) {
                if (!Symbol.dispose)
                    throw new TypeError("Symbol.dispose is not defined.");
                dispose = value[Symbol.dispose];
            }
            if (typeof dispose !== "function")
                throw new TypeError("Object not disposable.");
            env.stack.push({ value: value, dispose: dispose, async: async });
        }
        else if (async) {
            env.stack.push({ async: true });
        }
        return value;
    }
    var _SuppressedError = typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
        var e = new Error(message);
        return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
    };
    function __disposeResources(env) {
        function fail(e) {
            env.error = env.hasError ? new _SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
            env.hasError = true;
        }
        function next() {
            while (env.stack.length) {
                var rec = env.stack.pop();
                try {
                    var result = rec.dispose && rec.dispose.call(rec.value);
                    if (rec.async)
                        return Promise.resolve(result).then(next, function (e) { fail(e); return next(); });
                }
                catch (e) {
                    fail(e);
                }
            }
            if (env.hasError)
                throw env.error;
        }
        return next();
    }
    var tslib_es6 = {
        __extends: __extends,
        __assign: __assign,
        __rest: __rest,
        __decorate: __decorate,
        __param: __param,
        __metadata: __metadata,
        __awaiter: __awaiter,
        __generator: __generator,
        __createBinding: __createBinding,
        __exportStar: __exportStar,
        __values: __values,
        __read: __read,
        __spread: __spread,
        __spreadArrays: __spreadArrays,
        __spreadArray: __spreadArray,
        __await: __await,
        __asyncGenerator: __asyncGenerator,
        __asyncDelegator: __asyncDelegator,
        __asyncValues: __asyncValues,
        __makeTemplateObject: __makeTemplateObject,
        __importStar: __importStar,
        __importDefault: __importDefault,
        __classPrivateFieldGet: __classPrivateFieldGet,
        __classPrivateFieldSet: __classPrivateFieldSet,
        __classPrivateFieldIn: __classPrivateFieldIn,
        __addDisposableResource: __addDisposableResource,
        __disposeResources: __disposeResources,
    };

    var Store = /** @class */ (function () {
        function Store(initialState) {
            this._state$ = new rxjs.BehaviorSubject(initialState);
            this.state$ = this._state$.asObservable();
        }
        Object.defineProperty(Store.prototype, "state", {
            get: function () {
                return this._state$.getValue();
            },
            enumerable: false,
            configurable: true
        });
        Store.prototype.setState = function (nextState) {
            this._state$.next(nextState);
        };
        return Store;
    }());

    var PermissionStore = /** @class */ (function (_super) {
        __extends(PermissionStore, _super);
        function PermissionStore() {
            return _super.call(this, {}) || this;
        }
        PermissionStore.prototype.setStore = function (data) {
            if (data) {
                this.setState(Object.assign(Object.assign({}, this.state), data));
            }
        };
        PermissionStore.prototype.getStore = function (type) {
            if (type === void 0) { type = 'P'; }
            if (type === 'P')
                return rxjs.of(this.state);
            else
                return rxjs.of(this.state);
        };
        PermissionStore.prototype.flat = function (array) {
            var _this = this;
            var result = [];
            if (array) {
                array.forEach(function (item) {
                    result.push(item);
                    if (item && Array.isArray(item)) {
                        result = result.concat(_this.flat(item));
                    }
                });
            }
            return result;
        };
        return PermissionStore;
    }(Store));
    PermissionStore.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: PermissionStore, deps: [], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    PermissionStore.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: PermissionStore });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: PermissionStore, decorators: [{
                type: i0.Injectable
            }], ctorParameters: function () { return []; } });

    var DataStoreService = /** @class */ (function () {
        function DataStoreService() {
            this.currentStoreSubject = new rxjs.BehaviorSubject({});
            this.currentStore = this.currentStoreSubject.asObservable();
            // test code
        }
        DataStoreService.prototype.setData = function (key, value) {
            var currentStore = this.getCurrentStore();
            currentStore[key] = value;
            this.currentStoreSubject.next(currentStore);
        };
        DataStoreService.prototype.setObject = function (value) {
            this.currentStoreSubject.next(value);
        };
        DataStoreService.prototype.getData = function (key) {
            var currentStore = this.getCurrentStore();
            return currentStore[key];
        };
        DataStoreService.prototype.clearStore = function () {
            var currentStore = this.getCurrentStore();
            Object.keys(currentStore).forEach(function (key) {
                delete currentStore[key];
            });
            this.currentStoreSubject.next(currentStore);
        };
        DataStoreService.prototype.getCurrentStore = function () {
            return this.currentStoreSubject.value;
        };
        return DataStoreService;
    }());
    DataStoreService.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: DataStoreService, deps: [], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    DataStoreService.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: DataStoreService });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: DataStoreService, decorators: [{
                type: i0.Injectable
            }], ctorParameters: function () { return []; } });

    var AlertService = /** @class */ (function () {
        function AlertService(router) {
            var _this = this;
            this.router = router;
            this.subject = new rxjs.Subject();
            this.keepAfterRouteChange = false;
            // clear alert messages on route change unless 'keepAfterRouteChange' flag is true
            router.events.subscribe(function (event) {
                if (event instanceof i1.NavigationStart) {
                    if (_this.keepAfterRouteChange) {
                        // only keep for a single route change
                        _this.keepAfterRouteChange = false;
                    }
                    else {
                        // clear alert messages
                        _this.clear();
                    }
                }
            });
        }
        AlertService.prototype.getAlert = function () {
            return this.subject.asObservable();
        };
        AlertService.prototype.success = function (message, keepAfterRouteChange) {
            if (keepAfterRouteChange === void 0) { keepAfterRouteChange = false; }
            this.alert(AlertType.Success, message, keepAfterRouteChange);
        };
        AlertService.prototype.error = function (message, keepAfterRouteChange) {
            if (keepAfterRouteChange === void 0) { keepAfterRouteChange = false; }
            this.alert(AlertType.Error, message, keepAfterRouteChange);
        };
        AlertService.prototype.info = function (message, keepAfterRouteChange) {
            if (keepAfterRouteChange === void 0) { keepAfterRouteChange = false; }
            this.alert(AlertType.Info, message, keepAfterRouteChange);
        };
        AlertService.prototype.warn = function (message, keepAfterRouteChange) {
            if (keepAfterRouteChange === void 0) { keepAfterRouteChange = false; }
            this.alert(AlertType.Warning, message, keepAfterRouteChange);
        };
        AlertService.prototype.alert = function (type, message, keepAfterRouteChange) {
            if (keepAfterRouteChange === void 0) { keepAfterRouteChange = false; }
            this.keepAfterRouteChange = keepAfterRouteChange;
            this.subject.next({ type: type, message: message });
        };
        AlertService.prototype.clear = function () {
            // clear alerts
            this.subject.next({});
        };
        return AlertService;
    }());
    AlertService.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: AlertService, deps: [{ token: i1__namespace.Router }], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    AlertService.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: AlertService });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: AlertService, decorators: [{
                type: i0.Injectable
            }], ctorParameters: function () { return [{ type: i1__namespace.Router }]; } });
    var AlertType;
    (function (AlertType) {
        AlertType[AlertType["Success"] = 0] = "Success";
        AlertType[AlertType["Error"] = 1] = "Error";
        AlertType[AlertType["Info"] = 2] = "Info";
        AlertType[AlertType["Warning"] = 3] = "Warning";
    })(AlertType || (AlertType = {}));
    var Alert = /** @class */ (function () {
        function Alert() {
        }
        return Alert;
    }());
    var UserGroupDto = /** @class */ (function () {
        function UserGroupDto(data) {
            Object.assign(this, data);
        }
        return UserGroupDto;
    }());
    var UserRolePageDto = /** @class */ (function () {
        function UserRolePageDto(data) {
            Object.assign(this, data);
        }
        return UserRolePageDto;
    }());
    var UserRoleDto = /** @class */ (function () {
        function UserRoleDto(data) {
            Object.assign(this, data);
        }
        return UserRoleDto;
    }());
    var UserDto = /** @class */ (function () {
        function UserDto(data) {
            Object.assign(this, data);
        }
        return UserDto;
    }());
    var AccessManagementConfig = /** @class */ (function () {
        function AccessManagementConfig() {
        }
        return AccessManagementConfig;
    }());
    AccessManagementConfig.EndPoint = {
        Organization: {
            getOrganizationList: '/org/organization/all',
            getOrganization: '/platform/page-designer/page/organization/{orgId}?returnUserPage=false&excludeNoActiveVersionPages=true'
        }
    };

    var RbacService = /** @class */ (function () {
        function RbacService(_storeservice) {
            var _this = this;
            this._storeservice = _storeservice;
            this._storeservice.currentStore.subscribe(function (res) {
                if (res) {
                    _this.httpService = res['HTTPSERVICE'];
                }
            });
        }
        // constructor(private httpService: HttpService) {}
        RbacService.prototype.getAllUserList = function (key) {
            return this.httpService.get(UserConfig.EndPoint.User.getAllUserList + "/" + key);
        };
        RbacService.prototype.getAllUserOrgList = function (orgid) {
            return this.httpService.get(UserConfig.EndPoint.User.getAllUserOrgList + orgid);
        };
        RbacService.prototype.saveUser = function (data) {
            return this.httpService.post(UserConfig.EndPoint.User.createUser, data);
        };
        RbacService.prototype.updateUser = function (data, userid) {
            return this.httpService.put(UserConfig.EndPoint.User.getAllUserList + "/" + userid, data);
        };
        RbacService.prototype.deleteUser = function (id) {
            return this.httpService.delete(UserConfig.EndPoint.User.getAllUserList + "/" + id);
        };
        RbacService.prototype.activateUser = function (data) {
            return this.httpService.post(UserConfig.EndPoint.User.activateUser, data);
        };
        RbacService.prototype.addProviderUser = function (data) {
            return this.httpService.post(UserConfig.EndPoint.Provider.addProviderUser, data);
        };
        RbacService.prototype.addUserRole = function (data) {
            return this.httpService.post(UserConfig.EndPoint.User.userRole, data);
        };
        RbacService.prototype.uploadKey = function (objparams) {
            return this.httpService.post(AttachmentConfig.EndPoint.Attachments.UploadKey, objparams);
        };
        RbacService.prototype.getOrgPolicyGroupList = function (orgid) {
            return this.httpService.get(PolicyGroupConfig.EndPoint.policyGroup.getOrgPolicyGroups.replace('{organizationid}', String(orgid)));
        };
        RbacService.prototype.getAllPolicyGroupList = function (policyGroupId) {
            var endPoint = policyGroupId
                ? PolicyGroupConfig.EndPoint.policyGroup.getPolicyGroupList + "/" + policyGroupId
                : PolicyGroupConfig.EndPoint.policyGroup.getAllPolicyGroupList;
            return this.httpService.get(endPoint);
        };
        RbacService.prototype.getPolicyGroupById = function (id) {
            return this.httpService.get(PolicyGroupConfig.EndPoint.policyGroup.getPolicyGroupList + '/' + id);
        };
        RbacService.prototype.getPolicyGroupsByManagementGroup = function (policyGroupId) {
            return this.httpService.get("/org/policyGroup/managementgroup/" + policyGroupId);
        };
        RbacService.prototype.createPolicyGroup = function (data) {
            return this.httpService.post(PolicyGroupConfig.EndPoint.policyGroup.createPolicyGroup, data);
        };
        RbacService.prototype.updatePolicyGroup = function (id, item) {
            return this.httpService.put(PolicyGroupConfig.EndPoint.policyGroup.getPolicyGroupList + "/" + id, item);
        };
        RbacService.prototype.deletePolicyGroup = function (id) {
            return this.httpService.delete(PolicyGroupConfig.EndPoint.policyGroup.getPolicyGroupList + "/" + id);
        };
        RbacService.prototype.getAllUserRole = function (id) {
            return this.httpService.get(RoleConfig.EndPoint.role.getAllOrgRole.replace('{orgid}', String(id)));
        };
        RbacService.prototype.deleteRole = function (id) {
            return this.httpService.delete(RoleConfig.EndPoint.role.getAllUserRole + "/" + id);
        };
        RbacService.prototype.getRoleById = function (roleid) {
            return this.httpService.get(RoleConfig.EndPoint.role.getAllUserRole + "/" + roleid);
        };
        RbacService.prototype.createRole = function (data) {
            return this.httpService.post(RoleConfig.EndPoint.role.createRole, data);
        };
        RbacService.prototype.updateRole = function (roleId, data) {
            return this.httpService.put(RoleConfig.EndPoint.role.getAllUserRole + "/" + roleId, data);
        };
        RbacService.prototype.getLandingPage = function (id) {
            return this.httpService.get(RoleConfig.EndPoint.role.getLandingPage + "/" + id);
        };
        RbacService.prototype.createPolicyGroupForRole = function (roleId, data) {
            return this.httpService.post(RoleConfig.EndPoint.role.addPolicyGroup + "/" + roleId + "/policygroups", data);
        };
        RbacService.prototype.updatePolicyGroupForRole = function (roleId, data) {
            return this.httpService.put(RoleConfig.EndPoint.role.addPolicyGroup + "/" + roleId + "/policygroups", data);
        };
        RbacService.prototype.getReportDashbaord = function () {
            return this.httpService.get("" + RoleConfig.EndPoint.role.dossier);
        };
        RbacService.prototype.getPermissionRoleById = function (id) {
            return this.httpService.get(PermissionsURL.EndPoints.permission.permissionRoleById.replace('{id}', id));
        };
        RbacService.prototype.getManagementGroupTree = function (_organizationid) {
            return this.httpService.get('/org/management-group/organization/tree');
        };
        RbacService.prototype.getPermissionsTree = function (applicationid) {
            return this.httpService.get(PermissionsURL.EndPoints.permission.applicationPermissionsTree.replace('{applicationid}', applicationid));
        };
        return RbacService;
    }());
    RbacService.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: RbacService, deps: [{ token: DataStoreService }], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    RbacService.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: RbacService, providedIn: 'root' });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: RbacService, decorators: [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], ctorParameters: function () { return [{ type: DataStoreService }]; } });

    var DISPLAY_IN_SECONDS = 8;
    var AlertComponent = /** @class */ (function () {
        function AlertComponent(alertService) {
            this.alertService = alertService;
            this.alerts = [];
        }
        AlertComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.alertService.getAlert().subscribe(function (alert) {
                if (!alert) {
                    // clear alerts when an empty alert is received
                    _this.alerts = [];
                    return;
                }
                // add alert to array
                _this.alerts.push(alert);
                // remove alert after 5 seconds
                setTimeout(function () { return _this.removeAlert(alert); }, DISPLAY_IN_SECONDS * 1000);
            });
        };
        AlertComponent.prototype.removeAlert = function (alert) {
            this.alerts = this.alerts.filter(function (x) { return x !== alert; });
        };
        AlertComponent.prototype.cssClass = function (alert) {
            if (!alert) {
                return;
            }
            // return css class based on alert type
            switch (alert.type) {
                case AlertType.Success:
                    return 'alert alert-success';
                case AlertType.Error:
                    return 'alert alert-danger';
                case AlertType.Info:
                    return 'alert alert-info';
                case AlertType.Warning:
                    return 'alert alert-warning';
            }
        };
        return AlertComponent;
    }());
    AlertComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: AlertComponent, deps: [{ token: AlertService }], target: i0__namespace.ɵɵFactoryTarget.Component });
    AlertComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: AlertComponent, selector: "app-alert", ngImport: i0__namespace, template: "<div *ngFor=\"let alert of alerts\" class=\"alert-animate {{ cssClass(alert) }} alert-dismissable\">\r\n  {{ alert.message }}\r\n  <a class=\"close\" (click)=\"removeAlert(alert)\">&times;</a>\r\n</div>\r\n", styles: [".alert-animate{position:fixed;top:10px;left:auto;right:10px;z-index:999999;min-width:400px;text-transform:capitalize;margin:0 auto;animation-name:slideInDown;animation-duration:1s;animation-fill-mode:both}.alert-animate .close{padding:3px;border-radius:2px;color:#fff;opacity:1;text-align:center;line-height:17px;font-size:24px}@keyframes slideInDown{0%{transform:translateY(-100%);visibility:visible}to{transform:translateY(0)}}.alert-animate.alert-success{background:#04844b;color:#fff;border-color:#04844b}.alert-danger{background:#b92b28;border-color:#b92b28;color:#fff}.alert-info{color:#fff;background:#0f3164;border-color:#0f3164}\n"], directives: [{ type: i8__namespace.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: AlertComponent, decorators: [{
                type: i0.Component,
                args: [{
                        // moduleId: module.id,
                        selector: 'app-alert',
                        templateUrl: 'alert.component.html',
                        styleUrls: ['./alert.component.scss']
                    }]
            }], ctorParameters: function () { return [{ type: AlertService }]; } });

    var PermissionDirective = /** @class */ (function () {
        function PermissionDirective(renderer, elementRef, dataStore) {
            this.renderer = renderer;
            this.elementRef = elementRef;
            this.dataStore = dataStore;
        }
        PermissionDirective.prototype.ngAfterViewInit = function () {
            var _this = this;
            var permissions = this.dataStore.state;
            if (permissions) {
                if (!permissions[this.fieldKey]) {
                    var template = this.elementRef.nativeElement;
                    if (template.tagName === 'A') {
                        if (template) {
                            var r = document.createElement(this.elementRef.nativeElement.tagName.toLowerCase());
                            r.innerHTML = template.innerHTML;
                            r.href = 'javascript:void(0);';
                            r['disabled'] = true;
                            r.className = template.className;
                            this.elementRef.nativeElement.parentNode.replaceChild(r, template);
                        }
                    }
                    else if (template.tagName === 'P-MULTISELECT' ||
                        template.tagName === 'P-DROPDOWN' ||
                        template.tagName === 'P-CHECKBOX' ||
                        template.tagName === 'P-TREESELECT' ||
                        template.tagName === 'P-RADIOBUTTON' ||
                        template.tagName === 'P-CALENDAR') {
                        if (template) {
                            var r = document.createElement(this.elementRef.nativeElement.tagName.toLowerCase());
                            r.innerHTML = template.innerHTML;
                            r.className = template.className;
                            r.className += ' p-disabled';
                            this.elementRef.nativeElement.parentNode.replaceChild(r, template);
                        }
                    }
                    else {
                        this.renderer.setProperty(this.elementRef.nativeElement, 'disabled', 'true');
                        var childInputNodes = this.elementRef.nativeElement.querySelectorAll('input, select, textarea, button, a, ng-select, div, lable');
                        childInputNodes.forEach(function (elem) {
                            _this.renderer.setAttribute(elem, 'disabled', 'true');
                        });
                    }
                }
            }
        };
        return PermissionDirective;
    }());
    PermissionDirective.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: PermissionDirective, deps: [{ token: i0__namespace.Renderer2 }, { token: i0__namespace.ElementRef }, { token: PermissionStore }], target: i0__namespace.ɵɵFactoryTarget.Directive });
    PermissionDirective.ɵdir = i0__namespace.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "12.2.17", type: PermissionDirective, selector: "[fieldKey]", inputs: { fieldKey: "fieldKey" }, ngImport: i0__namespace });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: PermissionDirective, decorators: [{
                type: i0.Directive,
                args: [{
                        selector: '[fieldKey]'
                    }]
            }], ctorParameters: function () { return [{ type: i0__namespace.Renderer2 }, { type: i0__namespace.ElementRef }, { type: PermissionStore }]; }, propDecorators: { fieldKey: [{
                    type: i0.Input
                }] } });

    var ShowFieldDirective = /** @class */ (function () {
        function ShowFieldDirective(templateRef, viewContainer, dataStore) {
            this.templateRef = templateRef;
            this.viewContainer = viewContainer;
            this.dataStore = dataStore;
        }
        ShowFieldDirective.prototype.ngOnInit = function () {
            var _this = this;
            var permissions = this.dataStore.state;
            if (!permissions || !permissions[this.showField]) {
                this.viewContainer.clear();
            }
            else {
                this.viewContainer.createEmbeddedView(this.templateRef);
                var lookupIds = sessionStorage.getItem('LOOKUP_IDS');
                if (lookupIds) {
                    var lookupIdArray_1 = lookupIds.split(',');
                    Object.entries(permissions)
                        .filter(function (item) { return item[0].startsWith('GALKP_'); })
                        .forEach(function (_a) {
                        var e_1, _b;
                        var _c = __read(_a, 2), key = _c[0], value = _c[1];
                        try {
                            for (var value_1 = __values(value), value_1_1 = value_1.next(); !value_1_1.done; value_1_1 = value_1.next()) {
                                var _value = value_1_1.value;
                                var _key = key.replace('GALKP_', '');
                                if (_key === _this.showField &&
                                    lookupIdArray_1.includes(String(_value['lookupid'])) &&
                                    _value['action'] === 'H') {
                                    _this.viewContainer.clear();
                                }
                            }
                        }
                        catch (e_1_1) { e_1 = { error: e_1_1 }; }
                        finally {
                            try {
                                if (value_1_1 && !value_1_1.done && (_b = value_1.return)) _b.call(value_1);
                            }
                            finally { if (e_1) throw e_1.error; }
                        }
                    });
                }
            }
        };
        return ShowFieldDirective;
    }());
    ShowFieldDirective.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ShowFieldDirective, deps: [{ token: i0__namespace.TemplateRef }, { token: i0__namespace.ViewContainerRef }, { token: PermissionStore }], target: i0__namespace.ɵɵFactoryTarget.Directive });
    ShowFieldDirective.ɵdir = i0__namespace.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "12.2.17", type: ShowFieldDirective, selector: "[showField]", inputs: { showField: "showField" }, ngImport: i0__namespace });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ShowFieldDirective, decorators: [{
                type: i0.Directive,
                args: [{
                        selector: '[showField]'
                    }]
            }], ctorParameters: function () { return [{ type: i0__namespace.TemplateRef }, { type: i0__namespace.ViewContainerRef }, { type: PermissionStore }]; }, propDecorators: { showField: [{
                    type: i0.Input
                }] } });

    var PolicygroupsComponent = /** @class */ (function () {
        function PolicygroupsComponent(fb, alertService, groupsService, _storeservice) {
            this.fb = fb;
            this.alertService = alertService;
            this.groupsService = groupsService;
            this._storeservice = _storeservice;
            this.RBACORG = new RBACINFO();
            this.filteredPolicyGroupList = [];
            this.modelPolicyName = '';
            this.deleteactive_role = false;
            this.deleteactive_buttonok = false;
            this.validationErrors = {};
            this.formSubmit = false;
            this.initializeForm();
        }
        PolicygroupsComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.orgSubs = this._storeservice.currentStore.subscribe(function (res) {
                _this.inputValidationMethod = res['INPUTVALIDATIONMETHOD'];
                if (res['RBACORG'] && res['RBACORG'] !== '') {
                    _this.RBACORG = res['RBACORG'];
                    _this.orgId = parseInt(_this.RBACORG['orgID']);
                    _this.httpService = res['HTTPSERVICE'];
                    if (_this.orgId) {
                        _this.getPolicyGroupList();
                        _this.getManagementGroupTree(_this.orgId);
                    }
                }
            });
        };
        PolicygroupsComponent.prototype.initializeForm = function () {
            this.policyGroupForm = this.fb.group({
                id: [null],
                policygroupname: ['', i1$1.Validators.required],
                description: ['']
            });
        };
        Object.defineProperty(PolicygroupsComponent.prototype, "formValidate", {
            get: function () {
                return this.policyGroupForm.controls;
            },
            enumerable: false,
            configurable: true
        });
        PolicygroupsComponent.prototype.ngOnDestroy = function () {
            this.orgSubs.unsubscribe();
        };
        PolicygroupsComponent.prototype.onInput = function (event, fieldtype, label, required) {
            var error = this.inputValidationMethod(event, fieldtype, label, required);
            if (error && typeof error === 'string') {
                this.validationErrors[label] = error;
            }
            else {
                delete this.validationErrors[label];
            }
        };
        PolicygroupsComponent.prototype.getPolicyGroupList = function (_managementGroupId) {
            var _this = this;
            if (this.orgId) {
                this.groupsService.getOrgPolicyGroupList(this.orgId).subscribe(function (res) {
                    _this.policyGroupList = res['data'];
                    _this.filteredPolicyGroupList = _this.policyGroupList;
                }, function (err) { return console.log(err); });
            }
        };
        PolicygroupsComponent.prototype.getManagementGroupTree = function (organizationid) {
            var _this = this;
            this.groupsService.getManagementGroupTree(organizationid).subscribe(function (items) {
                _this.managementGroups = items.data;
            });
        };
        PolicygroupsComponent.prototype.searchPolicyGroup = function (event) {
            var value = event.target.value.toLowerCase();
            this.filteredPolicyGroupList = this.policyGroupList.filter(function (a) { var _a; return (_a = a === null || a === void 0 ? void 0 : a.policygroupname) === null || _a === void 0 ? void 0 : _a.toLowerCase().startsWith(value); });
        };
        PolicygroupsComponent.prototype.getPolicyGroupInfo = function (policyGroup) {
            var _this = this;
            this.validationErrors = {};
            this.formSubmit = false;
            this.policyGroupId = policyGroup.id;
            this.groupsService.getPolicyGroupById(this.policyGroupId).subscribe(function (res) {
                res['data'].managementgroupid = _this.managementGroups.find(function (item) { return item.id === res['data'].managementgroupid; });
                _this.policyGroupForm.patchValue(res['data']);
                _this.attachedUsers = res['data'].users;
            });
        };
        PolicygroupsComponent.prototype.addPolicyGroup = function () {
            var _this = this;
            var requestBody = [];
            this.formSubmit = true;
            this.policyGroupForm.patchValue({
                policygroupname: this.policyGroupForm.value.policygroupname.trim()
            });
            var data = this.policyGroupForm.getRawValue();
            data = Object.assign({ organizationid: this.orgId }, data);
            requestBody.push(data);
            if (this.policyGroupForm.valid) {
                if (this.policyGroupId) {
                    this.groupsService.updatePolicyGroup(this.policyGroupId, data).subscribe(function () {
                        _this.getPolicyGroupList();
                        _this.alertService.success('Policy Group updated successfully');
                    }, function (_err) { return _this.alertService.error('Failed to update Policy Group'); });
                }
                else {
                    this.groupsService.createPolicyGroup(requestBody).subscribe(function () {
                        _this.cancel();
                        _this.getPolicyGroupList();
                        _this.alertService.success('Policy Group created successfully');
                    }, function (err) {
                        var _a;
                        if (err === null || err === void 0 ? void 0 : err.error) {
                            _this.alertService.error((_a = err === null || err === void 0 ? void 0 : err.error) === null || _a === void 0 ? void 0 : _a.message);
                        }
                        else {
                            _this.alertService.error('Failed to add Policy Group');
                        }
                    });
                }
            }
        };
        PolicygroupsComponent.prototype.delete = function (event, id, item) {
            if ((item === null || item === void 0 ? void 0 : item.active_role) !== null) {
                this.deleteactive_role = false;
                this.deleteactive_buttonok = false;
                // Perform action when active_role is not null
                console.log('Deleting policy group with active user');
                this.modalContent = 'This group is currently associated with active roles. De-link roles from this Policy Group, to proceed with deleting.';
            }
            else {
                // Perform action when active_role is null
                console.log('Deleting policy group');
                this.modalContent = 'Are you sure you want to delete the Policy Group?';
                this.deleteactive_role = true;
                this.deleteactive_buttonok = true;
            }
            event.stopPropagation();
            this.deletedId = id;
            $('#Deleteuser').modal('show');
        };
        PolicygroupsComponent.prototype.clearSearch = function (event) {
            var inputElement = document.querySelector('.form-control');
            if (inputElement) {
                inputElement.value = '';
                this.filteredPolicyGroupList = this.policyGroupList;
            }
        };
        PolicygroupsComponent.prototype.cancel = function () {
            this.formSubmit = false;
            this.policyGroupForm.reset();
            this.policyGroupForm.markAsUntouched();
            this.policyGroupForm.markAsPristine();
            this.attachedUsers = [];
            this.policyGroupId = 0;
            this.validationErrors = {};
        };
        PolicygroupsComponent.prototype.onClickAddPolicygroup = function () {
            this.formSubmit = false;
            this.initializeForm();
            this.policyGroupId = 0;
            this.validationErrors = {};
        };
        PolicygroupsComponent.prototype.deletePolicyGroup = function () {
            var _this = this;
            this.groupsService.deletePolicyGroup(this.deletedId).subscribe(function () {
                _this.cancel();
                _this.alertService.success('Policy Group deleted successfully');
                $('#Deleteuser').modal('hide');
                _this.getPolicyGroupList();
            }, function (_err) { return _this.alertService.error('Failed to delete Policy Group'); });
        };
        PolicygroupsComponent.prototype.onModelPolicy = function (value) {
            this.modelPolicyName = value;
        };
        return PolicygroupsComponent;
    }());
    PolicygroupsComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: PolicygroupsComponent, deps: [{ token: i1__namespace$1.FormBuilder }, { token: AlertService }, { token: RbacService }, { token: DataStoreService }], target: i0__namespace.ɵɵFactoryTarget.Component });
    PolicygroupsComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: PolicygroupsComponent, selector: "policygroups", ngImport: i0__namespace, template: "<app-alert></app-alert>\r\n<div class=\"permission\">\r\n  <div class=\"row\" [formGroup]=\"policyGroupForm\">\r\n    <div class=\"col-lg-4 col-md-6 col-12\">\r\n      <div class=\"clearfix\"></div>\r\n      <div class=\"tab-content py-2\">\r\n        <div class=\"tab-pane fade show active\">\r\n            <div class=\"form-group bgiconsearch d-flex align-items-center\"> <!-- Modified line -->\r\n                <span class=\"p-input-icon-right w-100\">\r\n                    <i class=\"pi pi-times-circle\" (click)=\"clearSearch($event)\"></i>\r\n                    <input class=\"form-control\" fieldKey=\"SETTINGS_PGP_SEARCH_BY_NAME\" placeholder=\"Search by Name\" type=\"text\"\r\n                           (keyup)=\"searchPolicyGroup($event)\" />\r\n                </span>\r\n                <button type=\"button\" class=\"btn btn-primary btncommon ml-2\" (click)=\"onClickAddPolicygroup()\">Add</button> <!-- Modified line -->\r\n            </div>\r\n            <div class=\"clearfix\"></div>\r\n            <div class=\"useracess\">\r\n                <div class=\"d-flex align-items-center justify-content-center h-100 w-100 ng-star-inserted\"\r\n                     *ngIf=\"!filteredPolicyGroupList.length\">\r\n                    <p>No Record Found</p>\r\n                </div>\r\n                <ng-container *ngFor=\"let item of filteredPolicyGroupList\">\r\n                    <div class=\"row userdata align-items-center\" (click)=\"getPolicyGroupInfo(item)\" [ngClass]=\"{ active: item.id === policyGroupId }\">\r\n                        <!-- <div class=\"col-lg-2 col-md-3 col-3\">\r\n                            <img src=\"assets/images/user-empty.png\" alt=\"user\" class=\"userempty\" />\r\n                        </div> -->\r\n                        <div class=\"col-md-10 col-sm-10 col-10 overflow_txt\">\r\n                            <span class=\"nameuser\">{{ item.policygroupname }}</span> <br />\r\n                        </div>\r\n                        <div class=\"col-md-2 text-right\">\r\n                            <span class=\"right-icons\">\r\n                                <em class=\"fa fa-trash text-primary\" *showField=\"'SETTINGS_PGP_DELETE'\"\r\n                                    (click)=\"delete($event, item.id, item)\" aria-hidden=\"true\"></em>\r\n                            </span>\r\n                        </div>\r\n                    </div>\r\n                </ng-container>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    </div>\r\n    <div class=\"col-lg-8 col-md-6 col-12 mt-2 group-role\">\r\n      <p-card class=\"rbac-card\" styleClass=\"w-100 mb-2\">\r\n        <div class=\"strip_head toggleleft\">\r\n          <span class=\"report_head font-weight-bold\">Policy Group Details</span>\r\n        </div>\r\n        <div class=\"p-fluid p-formgrid p-grid\">\r\n          <div class=\"col-lg-6 col-md-12 col-12 mb-2\">\r\n            <label for=\"policyGroup\" class=\"referral-form-labels\">Policy Group Name\r\n              <span class=\"requiredfield text-danger\">*</span>\r\n            </label>\r\n            <input id=\"policyGroup\" type=\"text\" formControlName=\"policygroupname\" placeholder=\"Enter Policy Group Name\"\r\n              aria-describedby=\"policyGroup\" fieldKey=\"SETTINGS_PGP_POLICY_GROUP_NAME\" [(ngModel)]=\"modelPolicyName\"\r\n              (ngModelChange)=\"onModelPolicy($event)\"\r\n              (input)=\"onInput($event, 'name', 'Policy Group Name', true)\" pInputText />\r\n              <div *ngIf=\"validationErrors['Policy Group Name']\" class=\"p-error block mt-1\">{{validationErrors['Policy Group Name']}}</div>\r\n            <div *ngIf=\"!validationErrors['Policy Group Name'] && formValidate['policygroupname'].errors && formSubmit\">\r\n              <div *ngIf=\"formValidate['policygroupname'].invalid\" class=\"p-error block mt-1\">Policy Group Name is required\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-lg-6 col-md-12 col-12 mb-2\">\r\n            <label for=\"policyDescription\" class=\"referral-form-labels\">Description </label>\r\n            <input id=\"policyDescription\" fieldKey=\"SETTINGS_PGP_DESCRIPTION\" type=\"text\" formControlName=\"description\"\r\n              placeholder=\"Description\" aria-describedby=\"policyDescription\"\r\n              (input)=\"onInput($event, 'description', 'Description', false)\" pInputText />\r\n              <div *ngIf=\"validationErrors['Description']\" class=\"p-error block mt-1\">{{validationErrors['Description']}}</div>\r\n          </div>\r\n        </div>\r\n        <div class=\"mt-2\">\r\n          <button class=\"pull-right mb-2 btn btn-primary btncommon\" fieldKey=\"SETTINGS_PGP_ADD_POLICY_GROUP\"\r\n            (click)=\"addPolicyGroup()\">\r\n            {{ policyGroupId ? 'Update Policy Group' : 'Add Policy Group' }}\r\n          </button>\r\n          <button class=\"pull-right mb-2 mr-2 btn bg-white text-primary border border-primary btncancel\"\r\n            fieldKey=\"SETTINGS_PGP_CANCEL\" (click)=\"cancel()\">\r\n            Clear\r\n          </button>\r\n          <br />\r\n          <br />\r\n        </div>\r\n        <br />\r\n      </p-card>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"modal\" id=\"Deleteuser\" tabindex=\"-1\" role=\"dialog\">\r\n  <div class=\"modal-dialog\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h5 class=\"modal-title\" *ngIf = \"deleteactive_role\">Delete Policy Group</h5>\r\n        <h5 class=\"modal-title\" *ngIf = \"!deleteactive_role\">Warning - Policy Group</h5>\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        {{ modalContent }}\r\n        <div class=\"clearfix\"></div>\r\n        <div class=\"mt-2\">\r\n          <button class=\"pull-right mb-2 btn btn-primary btncommon delete\" data-dismiss=\"modal\"\r\n            (click)=\"deletePolicyGroup()\" *ngIf = \"deleteactive_role\">\r\n            Delete\r\n          </button>\r\n          <button class=\"pull-right mb-2 mr-2 btn bg-white text-primary btncancel\" data-dismiss=\"modal\" *ngIf = \"deleteactive_buttonok\">\r\n            Cancel\r\n          </button>\r\n          <button class=\"pull-right mb-2 mr-2 btn bg-white text-primary btncancel\" data-dismiss=\"modal\" *ngIf = \"!deleteactive_buttonok\">\r\n            OK\r\n          </button>\r\n        </div>\r\n        <div class=\"clearfix\"></div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n", styles: [".head-div{padding-top:9px;padding-left:7px}.bgiconsearch{margin-bottom:5px;padding-bottom:0;font-size:13px}.useracess{border-radius:2px;padding:5px 0;overflow-y:auto}.userempty{max-width:none;border-radius:50%;height:35px;width:35px}.row.userdata{margin:0;border-bottom:solid 1px var(--table-border);padding:5px 0;cursor:pointer}.overflow_txt{overflow:hidden;text-overflow:ellipsis}span.nameuser{font-size:var(--font-13);color:var(--label-text);font-weight:600}.userid,span.emailuser{font-size:var(--font-13);color:#838383}.toggleleft{font-size:14px;font-weight:600;display:block;margin-top:-12px;padding-bottom:13px}.rbac-card .p-fluid .p-inputtext{padding:8px}.right-icons .fa{margin-top:3px;display:inline-block;z-index:9}.right-icons .fa-trash{font-size:18px}@media screen and (max-width: 767px){.useracess{max-height:400px}}@media screen and (min-width: 768px){.useracess{height:calc(100vh - 188px)}}@media screen and (min-width: 990px) and (max-width: 1024px){.useracess .userempty{height:100%;width:100%}}\n"], components: [{ type: AlertComponent, selector: "app-alert" }, { type: i6__namespace.Card, selector: "p-card", inputs: ["header", "subheader", "style", "styleClass"] }], directives: [{ type: i1__namespace$1.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i1__namespace$1.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: PermissionDirective, selector: "[fieldKey]", inputs: ["fieldKey"] }, { type: i8__namespace.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i8__namespace.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i8__namespace.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: ShowFieldDirective, selector: "[showField]", inputs: ["showField"] }, { type: i1__namespace$1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { type: i1__namespace$1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i1__namespace$1.FormControlName, selector: "[formControlName]", inputs: ["disabled", "formControlName", "ngModel"], outputs: ["ngModelChange"] }, { type: i10__namespace.InputText, selector: "[pInputText]" }] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: PolicygroupsComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'policygroups',
                        templateUrl: './policygroups.component.html',
                        styleUrls: ['./policygroups.component.scss']
                    }]
            }], ctorParameters: function () { return [{ type: i1__namespace$1.FormBuilder }, { type: AlertService }, { type: RbacService }, { type: DataStoreService }]; } });

    var RbacPolicygroupsComponent = /** @class */ (function () {
        function RbacPolicygroupsComponent(permissionStore, _storeservice) {
            this.permissionStore = permissionStore;
            this._storeservice = _storeservice;
            this.RBACORG = new RBACINFO();
        }
        RbacPolicygroupsComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.groupEvent.subscribe(function (val) {
                _this.RBACORG = val.RBACORG;
                _this.PERMISSION = val.PERMISSION;
                _this._storeservice.setData('RBACORG', _this.RBACORG);
                _this.permissionStore.setStore(_this.PERMISSION);
                _this._storeservice.setData('HTTPSERVICE', val.httpService);
                _this._storeservice.setData('INPUTVALIDATIONMETHOD', _this.INPUTVALIDATIONMETHOD);
            });
        };
        return RbacPolicygroupsComponent;
    }());
    RbacPolicygroupsComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: RbacPolicygroupsComponent, deps: [{ token: PermissionStore }, { token: DataStoreService }], target: i0__namespace.ɵɵFactoryTarget.Component });
    RbacPolicygroupsComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: RbacPolicygroupsComponent, selector: "rbac-policygroups", inputs: { RBACORG: "RBACORG", PERMISSION: "PERMISSION", groupEvent: "groupEvent", INPUTVALIDATIONMETHOD: "INPUTVALIDATIONMETHOD" }, ngImport: i0__namespace, template: "\n     <policygroups></policygroups>\n  ", isInline: true, components: [{ type: PolicygroupsComponent, selector: "policygroups" }] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: RbacPolicygroupsComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'rbac-policygroups',
                        template: "\n     <policygroups></policygroups>\n  ",
                        styles: []
                    }]
            }], ctorParameters: function () { return [{ type: PermissionStore }, { type: DataStoreService }]; }, propDecorators: { RBACORG: [{
                    type: i0.Input
                }], PERMISSION: [{
                    type: i0.Input
                }], groupEvent: [{
                    type: i0.Input
                }], INPUTVALIDATIONMETHOD: [{
                    type: i0.Input
                }] } });

    var DirectivesModule = /** @class */ (function () {
        function DirectivesModule() {
        }
        return DirectivesModule;
    }());
    DirectivesModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: DirectivesModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    DirectivesModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: DirectivesModule, declarations: [PermissionDirective, ShowFieldDirective], imports: [i8.CommonModule], exports: [PermissionDirective, ShowFieldDirective] });
    DirectivesModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: DirectivesModule, imports: [[i8.CommonModule]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: DirectivesModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        declarations: [PermissionDirective, ShowFieldDirective],
                        imports: [i8.CommonModule],
                        exports: [PermissionDirective, ShowFieldDirective]
                    }]
            }] });

    var MicrostrategyService = /** @class */ (function () {
        function MicrostrategyService(http, alertService, permissionStore, _storeservice) {
            var _this = this;
            this.http = http;
            this.alertService = alertService;
            this.permissionStore = permissionStore;
            this._storeservice = _storeservice;
            this._storeservice.currentStore.subscribe(function (res) {
                if (res['RBACORG'] && res['RBACORG'] !== '') {
                    _this.RBACORG = res['RBACORG'];
                    _this.environment = _this.RBACORG['environment'] ? _this.RBACORG['environment'] : '';
                }
            });
        }
        MicrostrategyService.prototype.getAuthToken = function () {
            var body = {
                username: this.environment.mstrUsername,
                password: this.environment.mstrPassword,
                loginMode: 1
            };
            return this.http.post(this.environment.mstrURL + "/api/auth/login", body, {
                withCredentials: true,
                headers: { 'Content-type': 'application/json' },
                observe: 'response'
            });
        };
        MicrostrategyService.prototype.getDossier = function (projectId, dossierId, pageNo) {
            var _this = this;
            var permissions = this.permissionStore.state;
            var projectUrl = this.environment.mstrURL + "/app/" + projectId;
            var dossierUrl = projectUrl + "/" + dossierId + "/" + pageNo;
            microstrategy.dossier
                .create({
                placeholder: document.getElementById('dossierContainer'),
                url: dossierUrl,
                navigationBar: {
                    enabled: true,
                    gotoLibrary: permissions === null || permissions === void 0 ? void 0 : permissions.ANA_LIBRARY,
                    title: true,
                    toc: true,
                    reset: true,
                    reprompt: true,
                    share: true,
                    comment: true,
                    notification: true,
                    filter: true,
                    options: true,
                    search: true,
                    bookmark: true
                },
                enableCustomAuthentication: true,
                enableResponsive: false,
                containerWidth: 400,
                containerHeight: 400,
                customAuthenticationType: microstrategy.dossier.CustomAuthenticationType.AUTH_TOKEN,
                getLoginToken: function () { return __awaiter(_this, void 0, void 0, function () {
                    var response;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, this.getAuthToken().toPromise()];
                            case 1:
                                response = _a.sent();
                                return [2 /*return*/, response.headers.get('x-mstr-authtoken')];
                        }
                    });
                }); }
            })
                .catch(function (_err) { return _this.alertService.error("Failed to connect " + _this.environment.mstrURL); });
        };
        MicrostrategyService.prototype.getLibraryDetails = function () {
            return __awaiter(this, void 0, void 0, function () {
                var token, authtoken, headerInfo;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.getAuthToken().toPromise()];
                        case 1:
                            token = _a.sent();
                            authtoken = token.headers.get('x-mstr-authtoken');
                            headerInfo = {
                                'Content-Type': 'application/json',
                                'Accept': 'application/json',
                                'X-MSTR-AuthToken': authtoken ? authtoken : '',
                                'X-MSTR-ProjectID': this.environment.mstrProjectID
                            };
                            return [2 /*return*/, this.http
                                    .get(this.environment.mstrURL + "/api/library", {
                                    withCredentials: true,
                                    headers: headerInfo
                                })
                                    .toPromise()
                                    .then(function (response) {
                                    return response.map(function (mstr) { return ({
                                        id: mstr.target.id,
                                        projectId: mstr.projectId,
                                        name: mstr.target.name
                                    }); });
                                })];
                    }
                });
            });
        };
        return MicrostrategyService;
    }());
    MicrostrategyService.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: MicrostrategyService, deps: [{ token: i1__namespace$2.HttpClient }, { token: AlertService }, { token: PermissionStore }, { token: DataStoreService }], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    MicrostrategyService.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: MicrostrategyService, providedIn: 'root' });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: MicrostrategyService, decorators: [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], ctorParameters: function () { return [{ type: i1__namespace$2.HttpClient }, { type: AlertService }, { type: PermissionStore }, { type: DataStoreService }]; } });

    var AlertModule = /** @class */ (function () {
        function AlertModule() {
        }
        return AlertModule;
    }());
    AlertModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: AlertModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    AlertModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: AlertModule, declarations: [AlertComponent], imports: [i8.CommonModule], exports: [AlertComponent] });
    AlertModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: AlertModule, imports: [[i8.CommonModule]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: AlertModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        imports: [i8.CommonModule],
                        declarations: [AlertComponent],
                        exports: [AlertComponent]
                    }]
            }] });

    var PicsRbacPolicygroupsModule = /** @class */ (function () {
        function PicsRbacPolicygroupsModule() {
        }
        return PicsRbacPolicygroupsModule;
    }());
    PicsRbacPolicygroupsModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: PicsRbacPolicygroupsModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    PicsRbacPolicygroupsModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: PicsRbacPolicygroupsModule, declarations: [PolicygroupsComponent], imports: [i8.CommonModule,
            i1$1.FormsModule,
            i1$1.ReactiveFormsModule,
            ngBootstrap.NgbModule,
            tabmenu.TabMenuModule,
            tabview.TabViewModule,
            treeselect.TreeSelectModule,
            // HttpClientModule,
            checkbox.CheckboxModule,
            dropdown.DropdownModule,
            i6.CardModule,
            confirmdialog.ConfirmDialogModule,
            accordion.AccordionModule,
            message.MessageModule,
            table.TableModule,
            i10.InputTextModule,
            calendar.CalendarModule,
            editor.EditorModule,
            fieldset.FieldsetModule,
            button.ButtonModule,
            radiobutton.RadioButtonModule,
            inputtextarea.InputTextareaModule,
            inputmask.InputMaskModule,
            steps.StepsModule,
            toast.ToastModule,
            ripple.RippleModule,
            avatar.AvatarModule,
            badge.BadgeModule,
            multiselect.MultiSelectModule,
            inputswitch.InputSwitchModule,
            progressspinner.ProgressSpinnerModule,
            speeddial.SpeedDialModule,
            orderlist.OrderListModule,
            fileupload.FileUploadModule,
            dialog.DialogModule,
            password.PasswordModule,
            knob.KnobModule,
            sidebar.SidebarModule,
            contextmenu.ContextMenuModule,
            confirmpopup.ConfirmPopupModule,
            DirectivesModule,
            AlertModule], exports: [PolicygroupsComponent] });
    PicsRbacPolicygroupsModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: PicsRbacPolicygroupsModule, providers: [RbacService, MicrostrategyService, i1$2.HttpClient, AlertService, api.ConfirmationService, PermissionStore, DataStoreService], imports: [[
                i8.CommonModule,
                i1$1.FormsModule,
                i1$1.ReactiveFormsModule,
                ngBootstrap.NgbModule,
                tabmenu.TabMenuModule,
                tabview.TabViewModule,
                treeselect.TreeSelectModule,
                // HttpClientModule,
                checkbox.CheckboxModule,
                dropdown.DropdownModule,
                i6.CardModule,
                confirmdialog.ConfirmDialogModule,
                accordion.AccordionModule,
                message.MessageModule,
                table.TableModule,
                i10.InputTextModule,
                calendar.CalendarModule,
                editor.EditorModule,
                fieldset.FieldsetModule,
                button.ButtonModule,
                radiobutton.RadioButtonModule,
                inputtextarea.InputTextareaModule,
                inputmask.InputMaskModule,
                steps.StepsModule,
                toast.ToastModule,
                ripple.RippleModule,
                avatar.AvatarModule,
                badge.BadgeModule,
                multiselect.MultiSelectModule,
                inputswitch.InputSwitchModule,
                progressspinner.ProgressSpinnerModule,
                speeddial.SpeedDialModule,
                orderlist.OrderListModule,
                fileupload.FileUploadModule,
                dialog.DialogModule,
                password.PasswordModule,
                knob.KnobModule,
                sidebar.SidebarModule,
                contextmenu.ContextMenuModule,
                confirmpopup.ConfirmPopupModule,
                DirectivesModule,
                AlertModule
            ]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: PicsRbacPolicygroupsModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        declarations: [
                            PolicygroupsComponent
                        ],
                        imports: [
                            i8.CommonModule,
                            i1$1.FormsModule,
                            i1$1.ReactiveFormsModule,
                            ngBootstrap.NgbModule,
                            tabmenu.TabMenuModule,
                            tabview.TabViewModule,
                            treeselect.TreeSelectModule,
                            // HttpClientModule,
                            checkbox.CheckboxModule,
                            dropdown.DropdownModule,
                            i6.CardModule,
                            confirmdialog.ConfirmDialogModule,
                            accordion.AccordionModule,
                            message.MessageModule,
                            table.TableModule,
                            i10.InputTextModule,
                            calendar.CalendarModule,
                            editor.EditorModule,
                            fieldset.FieldsetModule,
                            button.ButtonModule,
                            radiobutton.RadioButtonModule,
                            inputtextarea.InputTextareaModule,
                            inputmask.InputMaskModule,
                            steps.StepsModule,
                            toast.ToastModule,
                            ripple.RippleModule,
                            avatar.AvatarModule,
                            badge.BadgeModule,
                            multiselect.MultiSelectModule,
                            inputswitch.InputSwitchModule,
                            progressspinner.ProgressSpinnerModule,
                            speeddial.SpeedDialModule,
                            orderlist.OrderListModule,
                            fileupload.FileUploadModule,
                            dialog.DialogModule,
                            password.PasswordModule,
                            knob.KnobModule,
                            sidebar.SidebarModule,
                            contextmenu.ContextMenuModule,
                            confirmpopup.ConfirmPopupModule,
                            DirectivesModule,
                            AlertModule
                        ],
                        exports: [PolicygroupsComponent],
                        schemas: [i0.NO_ERRORS_SCHEMA, i0.CUSTOM_ELEMENTS_SCHEMA],
                        providers: [RbacService, MicrostrategyService, i1$2.HttpClient, AlertService, api.ConfirmationService, PermissionStore, DataStoreService]
                    }]
            }] });

    var RbacPolicygroupsModule = /** @class */ (function () {
        function RbacPolicygroupsModule() {
        }
        return RbacPolicygroupsModule;
    }());
    RbacPolicygroupsModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: RbacPolicygroupsModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    RbacPolicygroupsModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: RbacPolicygroupsModule, declarations: [RbacPolicygroupsComponent], imports: [PicsRbacPolicygroupsModule], exports: [RbacPolicygroupsComponent] });
    RbacPolicygroupsModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: RbacPolicygroupsModule, imports: [[
                PicsRbacPolicygroupsModule
            ]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: RbacPolicygroupsModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        declarations: [
                            RbacPolicygroupsComponent
                        ],
                        imports: [
                            PicsRbacPolicygroupsModule
                        ],
                        exports: [
                            RbacPolicygroupsComponent
                        ]
                    }]
            }] });

    /*
     * Public API Surface of rbac-policygroups
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.RbacPolicygroupsComponent = RbacPolicygroupsComponent;
    exports.RbacPolicygroupsModule = RbacPolicygroupsModule;
    exports.RbacPolicygroupsService = RbacPolicygroupsService;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=pics-core-rbac-policygroups.umd.js.map
