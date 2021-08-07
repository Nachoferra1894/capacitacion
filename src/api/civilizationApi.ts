import { get, post } from '../utils/httpUtils';

class CivilizationApi {
    getCivilizations() {
        return get('http://localhost:8080/hello')
    }
}
 

export const civilizationApi = new CivilizationApi();
