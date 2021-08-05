import { get, post } from '../utils/httpUtils';

class CivilizationApi {
    getCivilizations(): Promise<any[]> {
        let url = `https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations`;
        return get(url)
    }
}
 

export const civilizationApi = new CivilizationApi();
