import { KaczkolandAPIClient } from "./index";

const client = new KaczkolandAPIClient();

test('KaczkolandAPIClient is defined', () => {
    expect(KaczkolandAPIClient).toBeDefined();
})

test('api client is defined', () => {
    expect(client).toBeDefined();
})

test('get player stats', async () => {
    const data = await client.getPlayerStats('rkubapl')
    
    expect(data.success).toBe(true);
    expect(typeof(data.stats.survival.uuid)).toBe('string');
    expect(data.groups[0].id).toBe('wlasciciel');
})

test('get all players stats', async () => {
    const data = await client.getAllPlayersStats();
    
    expect(data.success).toBe(true);
})

test('get top players', async () => {
    const data = await client.getAllPlayersStats();
    
    expect(data.success).toBe(true);
})

test('get player nicknames', async () => {
    const data = await client.getPlayerNicknamesList('rkubapl');
    expect(data.success).toBe(true);
    expect(data.data[0]).toBe('rkubapl');
})