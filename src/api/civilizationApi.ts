import { get, post } from '../utils/httpUtils';

class CivilizationApi {
    getCivilizations() {
        return get('https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations')
    }
}
 

export const civilizationApi = new CivilizationApi();
