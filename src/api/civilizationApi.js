import { get, post } from '../utils/httpUtils';

class CivilizationApi {
    getCivilizations() {
        return get('civilizations')
    }
    getCivilizationById(id) {
        return get(`civilization/${id}`)
    }
}
 

export const civilizationApi = new CivilizationApi();
