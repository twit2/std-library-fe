export interface PartialUser {
    id: string;
    displayName?: string | null;
    username: string;
    avatarURL?: string | null;
    bannerURL?: string | null;
    biography?: string | null;
    dateJoined: string;
    verified: boolean;
    followCount: number;
    followingCount: number;
}