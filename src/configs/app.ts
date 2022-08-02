export const app = {
  patchVersionsLol: 'https://ddragon.leagueoflegends.com/api/versions.json',
  apiToken: process.env.REACT_APP_LOL_API_KEY,
  languagem: process.env.REACT_API_LANGAGE,
  tagLine: [
    'BR1',
    'EUN1',
    'EUW1',
    'JP1',
    'KR',
    'LA1',
    'LA2',
    'NA1',
    'OC1',
    'TR1',
    'RU'
  ],
urlRoutings: {
  'BR1': 'br1.api.riotgames.com',
    'EUN1': 'eun1.api.riotgames.com',
      'EUW1': 'euw1.api.riotgames.com',
        'JP1': 'jp1.api.riotgames.com',
          'KR': 'kr.api.riotgames.com',
            'LA1': 'la1.api.riotgames.com',
              'LA2': 'la2.api.riotgames.com',
                'NA1': 'na1.api.riotgames.com',
                  'OC1': 'oc1.api.riotgames.com',
                    'TR1': 'tr1.api.riotgames.com',
                      'RU': 'ru.api.riotgames.com',
  },
profileIconsUrl: 'http://ddragon.leagueoflegends.com/cdn/12.14.1/img/profileicon/',
  championsData: `http://ddragon.leagueoflegends.com/cdn/12.14.1/data/${process.env.REACT_API_LANGAGE}/champion.json`,
    champiomIconsUrl: 'http://ddragon.leagueoflegends.com/cdn/12.14.1/img/champion/',
      champiomLoadingsUrl: 'http://ddragon.leagueoflegends.com/cdn/img/champion/loading/'

}
