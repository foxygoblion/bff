import { IApi } from '@interface/IApi';
import { IData } from '@interface/IData';

class ApiService implements IApi {
    getInfo() {
        return new Promise<IData>((resolve) => {
            resolve({
                item: "我是后台数据",
                result: [1, "next"]
            });
        });
    }
        
}
export default ApiService;