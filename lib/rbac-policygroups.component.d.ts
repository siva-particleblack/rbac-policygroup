import { OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PermissionStore } from './pics-rbac-policygroups/@core/permissions/permission.store';
import { DataStoreService } from './pics-rbac-policygroups/@core/service/data-store.service';
import { RBACINFO } from './pics-rbac-policygroups/@core/urls/rbac-url.config';
import * as i0 from "@angular/core";
export declare class RbacPolicygroupsComponent implements OnInit {
    private permissionStore;
    private _storeservice;
    RBACORG?: RBACINFO;
    PERMISSION?: any;
    groupEvent: Observable<any>;
    INPUTVALIDATIONMETHOD?: any;
    constructor(permissionStore: PermissionStore, _storeservice: DataStoreService);
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<RbacPolicygroupsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<RbacPolicygroupsComponent, "rbac-policygroups", never, { "RBACORG": "RBACORG"; "PERMISSION": "PERMISSION"; "groupEvent": "groupEvent"; "INPUTVALIDATIONMETHOD": "INPUTVALIDATIONMETHOD"; }, {}, never, never>;
}
