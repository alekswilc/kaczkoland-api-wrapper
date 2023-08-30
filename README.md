
# Kaczkoland API Wrapper

Example code:

```ts
import { KaczkolandAPIClient } from 'kaczkoland';

const client = new KaczkolandAPIClient();

const rkubaplUserData = client.getPlayerStats('rkubapl');
const rkubaplNicknames = client.getPlayerNicknamesList('rkubapl');
const serverStats = client.getAllPlayersStats();
const topPlayersStats = client.getTopPlayersStats();

console.log(rkubaplUserData);
console.log(rkubaplNicknames);
console.log(serverStats);
console.log(topPlayersStats);
```

## Authors

- [@alekswilc](https://www.github.com/alekswilc)


## License

[MIT License](hhttps://choosealicense.com/licenses/mit/)


## Support

For support, join [My Discord Server](https://discord.gg/2apRS9aSAV) or contact me via [My Website](https://alekswilc.dev/)
