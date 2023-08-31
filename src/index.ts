import { IBaseApiErrorResponse, IPlayerNicknamesResponse, ISumDataResponse, ITopPlayer, ITopPlayersResponse, IUserDataResponse } from "./types";

class KaczkolandAPIError extends Error {
    public constructor(public message: string) {
        super(message);
        Error.captureStackTrace(this, KaczkolandAPIError);
    }
}


class KaczkolandAPIClient {
    private baseUrl = 'https://api.kaczkoland.pl';
    private version = 'v2';

    public constructor() { }

    /**
     * Get all player data
     * @param {string} playerName - Player nickname
     * @returns {IUserDataResponse} - All player data
     */
    public async getPlayerStats(playerName: string): Promise<IUserDataResponse> {
        const fetchData = await fetch(`${this.baseUrl}/${this.version}/u/${playerName}`).then(x => x.json()).catch((e) => e) as unknown as (IUserDataResponse | IBaseApiErrorResponse | Error);

        if (fetchData instanceof Error)
            throw new KaczkolandAPIError('Error: ' + fetchData.message);

        if (!fetchData.success)
            throw new KaczkolandAPIError((<IBaseApiErrorResponse>fetchData).error);

        return fetchData;
    }

    /**
     * Get all server stats
     * @returns {ISumDataResponse} - Statistics of all players
     */
    public async getAllPlayersStats(): Promise<ISumDataResponse> {
        const fetchData = await fetch(`${this.baseUrl}/${this.version}/getSumData`).then(x => x.json()).catch((e) => e) as unknown as (ISumDataResponse | IBaseApiErrorResponse | Error);

        if (fetchData instanceof Error)
            throw new KaczkolandAPIError('Error: ' + fetchData.message);

        if (!fetchData.success)
            throw new KaczkolandAPIError((<IBaseApiErrorResponse>fetchData).error);

        return fetchData;
    }
    /**
     * Get all top players
     * @returns {ITopPlayersResponse} - All top players list
     */
    public async getTopPlayersStats(): Promise<ITopPlayersResponse> {
        const fetchData = await fetch(`${this.baseUrl}/${this.version}/getTopPlayers`).then(x => x.json()).catch((e) => e) as unknown as (ITopPlayersResponse | IBaseApiErrorResponse | Error);

        if (fetchData instanceof Error)
            throw new KaczkolandAPIError('Error: ' + fetchData.message);

        if (!fetchData.success)
            throw new KaczkolandAPIError((<IBaseApiErrorResponse>fetchData).error);

        return fetchData;
    }
    /**
     * Get player nicknames list
     * @param {string} playerName - Player's Minecraft nickname, SEARCHES ONLY IF OVER 2 CHARACTERS!
     * @returns {IPlayerNicknamesResponse} - Player nicknames list
     */
    public async getPlayerNicknamesList(playerName: string): Promise<IPlayerNicknamesResponse> {
        const fetchData = await fetch(`${this.baseUrl}/${this.version}/getPlayers?player=${playerName}`).then(x => x.json()).catch((e) => e) as unknown as (IPlayerNicknamesResponse | IBaseApiErrorResponse | Error);

        if (fetchData instanceof Error)
            throw new KaczkolandAPIError('Error: ' + fetchData.message);

        if (!fetchData.success)
            throw new KaczkolandAPIError((<IBaseApiErrorResponse>fetchData).error);

        return fetchData;
    }
}


export { KaczkolandAPIClient, KaczkolandAPIError };
export default { KaczkolandAPIClient, KaczkolandAPIError };

export * from './types';