import { Timestamp } from "rxjs";
import { Role } from "./role";

export class User {
    id: number;
    client_id: number;
    name: string;
    email: string;
    roles: Role;
    is_active: number;
    is_intercom: number;
    email_verified_at: string;
    created_at: string;
    updated_at: string;
    deleted_at: string;
   
}