export interface IBaseApiResponse {
    success: boolean;
}


export interface IBaseApiErrorResponse {
    success: false;
    error: string;
}

export interface IGroup {
    prefix: {
        color: string;
        name: string;
    };
    weight: number;
}

export interface IUserDataGroup {
    id: string;
    expiry: number;
    group: IGroup;
}

export interface IUserDataStatsKiller {
    killerUUID: string;
    killerName: string;
    group: IGroup;
}

export interface IUserDataStatsKilled {
    killedUUID: string;
    killedName: string;
    group: IGroup;
}

export interface IStats {
    minedBlocks: number;
    placedBlocks: number;
    craftedItems: number;
    allDeaths: number;
    killedMobs: number;
    walkedDistance: number;
    playedTime: number;
    killedPlayers: number;
    money: number;
}

export interface IUserDataStats extends IStats {
    uuid: string;
    killers: IUserDataStatsKiller[];
    killed: IUserDataStatsKilled[];
}

export interface IUserData {
    auth: {
        lastLogin: number;
        regdate: number;
        premium: boolean;
    }

    groups: IUserDataGroup[];

    status: {
        online: boolean;
        server: string
    }

    stats: {
        survival: IUserDataStats;
    }

}

export interface ITopPlayer {
    player: {
        name: string;
        rank: {
            id: string;
            expiry: number;
            group: {
                prefix: {
                    color: string;
                    name: string;
                };
                weight: number;
            }
        }
    };
    value: number;
}

export interface IPlayerNicknamesResponse extends IBaseApiResponse {
    data: string[];
}

export interface ISumDataResponse extends IBaseApiResponse {
    data: IStats;
}

export interface IUserDataResponse extends IBaseApiResponse, IUserData { }

export interface ITopPlayersResponse extends IBaseApiResponse {
    data: {
        minedBlocks: ITopPlayer[];
        placedBlocks: ITopPlayer[];
        craftedItems: ITopPlayer[];
        alLDeaths: ITopPlayer[];
        killedMobs: ITopPlayer[];
        walkedDistance: ITopPlayer[];
        playedTime: ITopPlayer[];
        killedPlayers: ITopPlayer[];
        money: ITopPlayer[];
    }
}