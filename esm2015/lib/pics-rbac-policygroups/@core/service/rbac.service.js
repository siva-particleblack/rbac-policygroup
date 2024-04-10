import { Injectable } from '@angular/core';
// import { HttpService } from './http.service';
import { AttachmentConfig, PermissionsURL, PolicyGroupConfig, RoleConfig, UserConfig } from '../urls/rbac-url.config';
import * as i0 from "@angular/core";
import * as i1 from "./data-store.service";
export class RbacService {
    constructor(_storeservice) {
        this._storeservice = _storeservice;
        this._storeservice.currentStore.subscribe((res) => {
            if (res) {
                this.httpService = res['HTTPSERVICE'];
            }
        });
    }
    // constructor(private httpService: HttpService) {}
    getAllUserList(key) {
        return this.httpService.get(`${UserConfig.EndPoint.User.getAllUserList}/${key}`);
    }
    getAllUserOrgList(orgid) {
        return this.httpService.get(UserConfig.EndPoint.User.getAllUserOrgList + orgid);
    }
    saveUser(data) {
        return this.httpService.post(UserConfig.EndPoint.User.createUser, data);
    }
    updateUser(data, userid) {
        return this.httpService.put(`${UserConfig.EndPoint.User.getAllUserList}/${userid}`, data);
    }
    deleteUser(id) {
        return this.httpService.delete(`${UserConfig.EndPoint.User.getAllUserList}/${id}`);
    }
    activateUser(data) {
        return this.httpService.post(UserConfig.EndPoint.User.activateUser, data);
    }
    addProviderUser(data) {
        return this.httpService.post(UserConfig.EndPoint.Provider.addProviderUser, data);
    }
    addUserRole(data) {
        return this.httpService.post(UserConfig.EndPoint.User.userRole, data);
    }
    uploadKey(objparams) {
        return this.httpService.post(AttachmentConfig.EndPoint.Attachments.UploadKey, objparams);
    }
    getOrgPolicyGroupList(orgid) {
        return this.httpService.get(PolicyGroupConfig.EndPoint.policyGroup.getOrgPolicyGroups.replace('{organizationid}', String(orgid)));
    }
    getAllPolicyGroupList(policyGroupId) {
        const endPoint = policyGroupId
            ? `${PolicyGroupConfig.EndPoint.policyGroup.getPolicyGroupList}/${policyGroupId}`
            : PolicyGroupConfig.EndPoint.policyGroup.getAllPolicyGroupList;
        return this.httpService.get(endPoint);
    }
    getPolicyGroupById(id) {
        return this.httpService.get(PolicyGroupConfig.EndPoint.policyGroup.getPolicyGroupList + '/' + id);
    }
    getPolicyGroupsByManagementGroup(policyGroupId) {
        return this.httpService.get(`/org/policyGroup/managementgroup/${policyGroupId}`);
    }
    createPolicyGroup(data) {
        return this.httpService.post(PolicyGroupConfig.EndPoint.policyGroup.createPolicyGroup, data);
    }
    updatePolicyGroup(id, item) {
        return this.httpService.put(`${PolicyGroupConfig.EndPoint.policyGroup.getPolicyGroupList}/${id}`, item);
    }
    deletePolicyGroup(id) {
        return this.httpService.delete(`${PolicyGroupConfig.EndPoint.policyGroup.getPolicyGroupList}/${id}`);
    }
    getAllUserRole(id) {
        return this.httpService.get(RoleConfig.EndPoint.role.getAllOrgRole.replace('{orgid}', String(id)));
    }
    deleteRole(id) {
        return this.httpService.delete(`${RoleConfig.EndPoint.role.getAllUserRole}/${id}`);
    }
    getRoleById(roleid) {
        return this.httpService.get(`${RoleConfig.EndPoint.role.getAllUserRole}/${roleid}`);
    }
    createRole(data) {
        return this.httpService.post(RoleConfig.EndPoint.role.createRole, data);
    }
    updateRole(roleId, data) {
        return this.httpService.put(`${RoleConfig.EndPoint.role.getAllUserRole}/${roleId}`, data);
    }
    getLandingPage(id) {
        return this.httpService.get(`${RoleConfig.EndPoint.role.getLandingPage}/${id}`);
    }
    createPolicyGroupForRole(roleId, data) {
        return this.httpService.post(`${RoleConfig.EndPoint.role.addPolicyGroup}/${roleId}/policygroups`, data);
    }
    updatePolicyGroupForRole(roleId, data) {
        return this.httpService.put(`${RoleConfig.EndPoint.role.addPolicyGroup}/${roleId}/policygroups`, data);
    }
    getReportDashbaord() {
        return this.httpService.get(`${RoleConfig.EndPoint.role.dossier}`);
    }
    getPermissionRoleById(id) {
        return this.httpService.get(PermissionsURL.EndPoints.permission.permissionRoleById.replace('{id}', id));
    }
    getManagementGroupTree(_organizationid) {
        return this.httpService.get('/org/management-group/organization/tree');
    }
    getPermissionsTree(applicationid) {
        return this.httpService.get(PermissionsURL.EndPoints.permission.applicationPermissionsTree.replace('{applicationid}', applicationid));
    }
}
RbacService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: RbacService, deps: [{ token: i1.DataStoreService }], target: i0.ɵɵFactoryTarget.Injectable });
RbacService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: RbacService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: RbacService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.DataStoreService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmJhYy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcGljcy1jb3JlL3JiYWMtcG9saWN5Z3JvdXBzL3NyYy9saWIvcGljcy1yYmFjLXBvbGljeWdyb3Vwcy9AY29yZS9zZXJ2aWNlL3JiYWMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLGdEQUFnRDtBQUNoRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsY0FBYyxFQUFFLGlCQUFpQixFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7O0FBTXRILE1BQU0sT0FBTyxXQUFXO0lBRXRCLFlBQW9CLGFBQStCO1FBQS9CLGtCQUFhLEdBQWIsYUFBYSxDQUFrQjtRQUNqRCxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQyxHQUFRLEVBQUUsRUFBRTtZQUNyRCxJQUFHLEdBQUcsRUFBQztnQkFDTCxJQUFJLENBQUMsV0FBVyxHQUFHLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQTthQUN0QztRQUNILENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUNELG1EQUFtRDtJQUVuRCxjQUFjLENBQUMsR0FBWTtRQUN6QixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLEdBQUcsVUFBVSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsY0FBYyxJQUFJLEdBQUcsRUFBRSxDQUFDLENBQUM7SUFDbkYsQ0FBQztJQUNELGlCQUFpQixDQUFDLEtBQVU7UUFDMUIsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxLQUFLLENBQUMsQ0FBQztJQUNsRixDQUFDO0lBQ0QsUUFBUSxDQUFDLElBQVM7UUFD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SUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQ3pCLGNBQWMsQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLDBCQUEwQixDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsRUFBRSxhQUFhLENBQUMsQ0FDekcsQ0FBQztJQUNKLENBQUM7O3lHQWhIVSxXQUFXOzZHQUFYLFdBQVcsY0FGVixNQUFNOzRGQUVQLFdBQVc7a0JBSHZCLFVBQVU7bUJBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcbi8vIGltcG9ydCB7IEh0dHBTZXJ2aWNlIH0gZnJvbSAnLi9odHRwLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBBdHRhY2htZW50Q29uZmlnLCBQZXJtaXNzaW9uc1VSTCwgUG9saWN5R3JvdXBDb25maWcsIFJvbGVDb25maWcsIFVzZXJDb25maWcgfSBmcm9tICcuLi91cmxzL3JiYWMtdXJsLmNvbmZpZyc7XHJcbmltcG9ydCB7IERhdGFTdG9yZVNlcnZpY2UgfSBmcm9tICcuL2RhdGEtc3RvcmUuc2VydmljZSc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBSYmFjU2VydmljZSB7XHJcbiAgaHR0cFNlcnZpY2U6YW55O1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3N0b3Jlc2VydmljZTogRGF0YVN0b3JlU2VydmljZSkge1xyXG4gICAgdGhpcy5fc3RvcmVzZXJ2aWNlLmN1cnJlbnRTdG9yZS5zdWJzY3JpYmUoKHJlczogYW55KSA9PiB7XHJcbiAgICAgIGlmKHJlcyl7XHJcbiAgICAgICAgdGhpcy5odHRwU2VydmljZSA9IHJlc1snSFRUUFNFUlZJQ0UnXVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH1cclxuICAvLyBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHBTZXJ2aWNlOiBIdHRwU2VydmljZSkge31cclxuXHJcbiAgZ2V0QWxsVXNlckxpc3Qoa2V5Pzogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgIHJldHVybiB0aGlzLmh0dHBTZXJ2aWNlLmdldChgJHtVc2VyQ29uZmlnLkVuZFBvaW50LlVzZXIuZ2V0QWxsVXNlckxpc3R9LyR7a2V5fWApO1xyXG4gIH1cclxuICBnZXRBbGxVc2VyT3JnTGlzdChvcmdpZDogYW55KSB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwU2VydmljZS5nZXQoVXNlckNvbmZpZy5FbmRQb2ludC5Vc2VyLmdldEFsbFVzZXJPcmdMaXN0ICsgb3JnaWQpO1xyXG4gIH1cclxuICBzYXZlVXNlcihkYXRhOiBhbnkpIHtcclxuICAgIHJldHVybiB0aGlzLmh0dHBTZXJ2aWNlLnBvc3QoVXNlckNvbmZpZy5FbmRQb2ludC5Vc2VyLmNyZWF0ZVVzZXIsIGRhdGEpO1xyXG4gIH1cclxuICB1cGRhdGVVc2VyKGRhdGE6IGFueSwgdXNlcmlkOiBzdHJpbmcpIHtcclxuICAgIHJldHVybiB0aGlzLmh0dHBTZXJ2aWNlLnB1dChgJHtVc2VyQ29uZmlnLkVuZFBvaW50LlVzZXIuZ2V0QWxsVXNlckxpc3R9LyR7dXNlcmlkfWAsIGRhdGEpO1xyXG4gIH1cclxuICBkZWxldGVVc2VyKGlkPzogc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwU2VydmljZS5kZWxldGUoYCR7VXNlckNvbmZpZy5FbmRQb2ludC5Vc2VyLmdldEFsbFVzZXJMaXN0fS8ke2lkfWApO1xyXG4gIH1cclxuICBhY3RpdmF0ZVVzZXIoZGF0YTogYW55KSB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwU2VydmljZS5wb3N0KFVzZXJDb25maWcuRW5kUG9pbnQuVXNlci5hY3RpdmF0ZVVzZXIsIGRhdGEpO1xyXG4gIH1cclxuICBhZGRQcm92aWRlclVzZXIoZGF0YTogYW55KSB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwU2VydmljZS5wb3N0KFVzZXJDb25maWcuRW5kUG9pbnQuUHJvdmlkZXIuYWRkUHJvdmlkZXJVc2VyLCBkYXRhKTtcclxuICB9XHJcbiAgYWRkVXNlclJvbGUoZGF0YTogYW55KSB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwU2VydmljZS5wb3N0KFVzZXJDb25maWcuRW5kUG9pbnQuVXNlci51c2VyUm9sZSwgZGF0YSk7XHJcbiAgfVxyXG4gIHVwbG9hZEtleShvYmpwYXJhbXM6IGFueSkge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cFNlcnZpY2UucG9zdChBdHRhY2htZW50Q29uZmlnLkVuZFBvaW50LkF0dGFjaG1lbnRzLlVwbG9hZEtleSwgb2JqcGFyYW1zKTtcclxuICB9XHJcbiAgZ2V0T3JnUG9saWN5R3JvdXBMaXN0KG9yZ2lkOiBhbnkpIHtcclxuICAgIHJldHVybiB0aGlzLmh0dHBTZXJ2aWNlLmdldChcclxuICAgICAgUG9saWN5R3JvdXBDb25maWcuRW5kUG9pbnQucG9saWN5R3JvdXAuZ2V0T3JnUG9saWN5R3JvdXBzLnJlcGxhY2UoJ3tvcmdhbml6YXRpb25pZH0nLCBTdHJpbmcob3JnaWQpKVxyXG4gICAgKTtcclxuICB9XHJcbiAgZ2V0QWxsUG9saWN5R3JvdXBMaXN0KHBvbGljeUdyb3VwSWQ/OiBudW1iZXIpIHtcclxuICAgIGNvbnN0IGVuZFBvaW50ID0gcG9saWN5R3JvdXBJZFxyXG4gICAgICA/IGAke1BvbGljeUdyb3VwQ29uZmlnLkVuZFBvaW50LnBvbGljeUdyb3VwLmdldFBvbGljeUdyb3VwTGlzdH0vJHtwb2xpY3lHcm91cElkfWBcclxuICAgICAgOiBQb2xpY3lHcm91cENvbmZpZy5FbmRQb2ludC5wb2xpY3lHcm91cC5nZXRBbGxQb2xpY3lHcm91cExpc3Q7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwU2VydmljZS5nZXQoZW5kUG9pbnQpO1xyXG4gIH1cclxuICBnZXRQb2xpY3lHcm91cEJ5SWQoaWQ6IGFueSkge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cFNlcnZpY2UuZ2V0KFBvbGljeUdyb3VwQ29uZmlnLkVuZFBvaW50LnBvbGljeUdyb3VwLmdldFBvbGljeUdyb3VwTGlzdCArICcvJyArIGlkKTtcclxuICB9XHJcblxyXG4gIGdldFBvbGljeUdyb3Vwc0J5TWFuYWdlbWVudEdyb3VwKHBvbGljeUdyb3VwSWQ6IG51bWJlcikge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cFNlcnZpY2UuZ2V0KGAvb3JnL3BvbGljeUdyb3VwL21hbmFnZW1lbnRncm91cC8ke3BvbGljeUdyb3VwSWR9YCk7XHJcbiAgfVxyXG5cclxuICBjcmVhdGVQb2xpY3lHcm91cChkYXRhOiBhbnkpIHtcclxuICAgIHJldHVybiB0aGlzLmh0dHBTZXJ2aWNlLnBvc3QoUG9saWN5R3JvdXBDb25maWcuRW5kUG9pbnQucG9saWN5R3JvdXAuY3JlYXRlUG9saWN5R3JvdXAsIGRhdGEpO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlUG9saWN5R3JvdXAoaWQ6IG51bWJlciwgaXRlbTogYW55KSB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwU2VydmljZS5wdXQoYCR7UG9saWN5R3JvdXBDb25maWcuRW5kUG9pbnQucG9saWN5R3JvdXAuZ2V0UG9saWN5R3JvdXBMaXN0fS8ke2lkfWAsIGl0ZW0pO1xyXG4gIH1cclxuXHJcbiAgZGVsZXRlUG9saWN5R3JvdXAoaWQ6IHN0cmluZykge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cFNlcnZpY2UuZGVsZXRlKGAke1BvbGljeUdyb3VwQ29uZmlnLkVuZFBvaW50LnBvbGljeUdyb3VwLmdldFBvbGljeUdyb3VwTGlzdH0vJHtpZH1gKTtcclxuICB9XHJcbiAgZ2V0QWxsVXNlclJvbGUoaWQ/OiBhbnkpIHtcclxuICAgIHJldHVybiB0aGlzLmh0dHBTZXJ2aWNlLmdldChSb2xlQ29uZmlnLkVuZFBvaW50LnJvbGUuZ2V0QWxsT3JnUm9sZS5yZXBsYWNlKCd7b3JnaWR9JywgU3RyaW5nKGlkKSkpO1xyXG4gIH1cclxuXHJcbiAgZGVsZXRlUm9sZShpZDogc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwU2VydmljZS5kZWxldGUoYCR7Um9sZUNvbmZpZy5FbmRQb2ludC5yb2xlLmdldEFsbFVzZXJSb2xlfS8ke2lkfWApO1xyXG4gIH1cclxuXHJcbiAgZ2V0Um9sZUJ5SWQocm9sZWlkOiBzdHJpbmcpIHtcclxuICAgIHJldHVybiB0aGlzLmh0dHBTZXJ2aWNlLmdldChgJHtSb2xlQ29uZmlnLkVuZFBvaW50LnJvbGUuZ2V0QWxsVXNlclJvbGV9LyR7cm9sZWlkfWApO1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlUm9sZShkYXRhOiBhbnkpIHtcclxuICAgIHJldHVybiB0aGlzLmh0dHBTZXJ2aWNlLnBvc3QoUm9sZUNvbmZpZy5FbmRQb2ludC5yb2xlLmNyZWF0ZVJvbGUsIGRhdGEpO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlUm9sZShyb2xlSWQ6IGFueSwgZGF0YTogYW55KSB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwU2VydmljZS5wdXQoYCR7Um9sZUNvbmZpZy5FbmRQb2ludC5yb2xlLmdldEFsbFVzZXJSb2xlfS8ke3JvbGVJZH1gLCBkYXRhKTtcclxuICB9XHJcblxyXG4gIGdldExhbmRpbmdQYWdlKGlkOiBhbnkpIHtcclxuICAgIHJldHVybiB0aGlzLmh0dHBTZXJ2aWNlLmdldChgJHtSb2xlQ29uZmlnLkVuZFBvaW50LnJvbGUuZ2V0TGFuZGluZ1BhZ2V9LyR7aWR9YCk7XHJcbiAgfVxyXG5cclxuICBjcmVhdGVQb2xpY3lHcm91cEZvclJvbGUocm9sZUlkOiBudW1iZXIsIGRhdGE6IGFueSkge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cFNlcnZpY2UucG9zdChgJHtSb2xlQ29uZmlnLkVuZFBvaW50LnJvbGUuYWRkUG9saWN5R3JvdXB9LyR7cm9sZUlkfS9wb2xpY3lncm91cHNgLCBkYXRhKTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZVBvbGljeUdyb3VwRm9yUm9sZShyb2xlSWQ6IG51bWJlciwgZGF0YTogYW55KSB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwU2VydmljZS5wdXQoYCR7Um9sZUNvbmZpZy5FbmRQb2ludC5yb2xlLmFkZFBvbGljeUdyb3VwfS8ke3JvbGVJZH0vcG9saWN5Z3JvdXBzYCwgZGF0YSk7XHJcbiAgfVxyXG4gIGdldFJlcG9ydERhc2hiYW9yZCgpIHtcclxuICAgIHJldHVybiB0aGlzLmh0dHBTZXJ2aWNlLmdldChgJHtSb2xlQ29uZmlnLkVuZFBvaW50LnJvbGUuZG9zc2llcn1gKTtcclxuICB9XHJcbiAgZ2V0UGVybWlzc2lvblJvbGVCeUlkKGlkOiBzdHJpbmcpIHtcclxuICAgIHJldHVybiB0aGlzLmh0dHBTZXJ2aWNlLmdldChQZXJtaXNzaW9uc1VSTC5FbmRQb2ludHMucGVybWlzc2lvbi5wZXJtaXNzaW9uUm9sZUJ5SWQucmVwbGFjZSgne2lkfScsIGlkKSk7XHJcbiAgfVxyXG4gIGdldE1hbmFnZW1lbnRHcm91cFRyZWUoX29yZ2FuaXphdGlvbmlkOiBhbnkpIHtcclxuICAgIHJldHVybiB0aGlzLmh0dHBTZXJ2aWNlLmdldCgnL29yZy9tYW5hZ2VtZW50LWdyb3VwL29yZ2FuaXphdGlvbi90cmVlJyk7XHJcbiAgfVxyXG4gIGdldFBlcm1pc3Npb25zVHJlZShhcHBsaWNhdGlvbmlkOiBhbnkpIHtcclxuICAgIHJldHVybiB0aGlzLmh0dHBTZXJ2aWNlLmdldChcclxuICAgICAgUGVybWlzc2lvbnNVUkwuRW5kUG9pbnRzLnBlcm1pc3Npb24uYXBwbGljYXRpb25QZXJtaXNzaW9uc1RyZWUucmVwbGFjZSgne2FwcGxpY2F0aW9uaWR9JywgYXBwbGljYXRpb25pZClcclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiJdfQ==