import { UserRoleModel } from ".";

export class UserModel {
    public id: string;
    public username: string;
    public displayName: string;
    public roles: UserRoleModel[];
}