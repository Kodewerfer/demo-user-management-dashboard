// type defs for https://randomuser.me/api/?inc=gender,name,email,phone,picture,nat&page=1&results=10&seed=42

export type TUserName = {
    title: string;
    first: string;
    last: string;
};

export type TUserPicture = {
    large: string;
    medium: string;
    thumbnail: string;
};

export interface TUserLogin {
    uuid: string;
    username: string;
    password: string;
    salt: string;
    md5: string;
    sha1: string;
    sha256: string;
}

export type TUser = {
    gender: string;
    login: TUserLogin;
    name: TUserName;
    email: string;
    phone: string;
    picture: TUserPicture;
    nat: string;
};

export type TPagingInfo = {
    seed: string;
    results: number;
    page: number;
    version: string;
};

export type RandomUserResponse = {
    results: TUser[];
    info: TPagingInfo;
};