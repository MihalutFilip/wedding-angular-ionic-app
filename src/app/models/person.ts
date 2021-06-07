import { InvitationType } from "./enums/invitation-type";

export interface Person {
    id: number;
    name: string;
    invitationType: InvitationType;
}