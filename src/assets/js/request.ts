// index.ts
import axios from "axios";

type Result = {
    resultCode: string;
    message: string;
    data: object|string;
    success:boolean;
};

class Request {
    // axios 实例
    Instance: any;
    // 基础配置，url和超时时间
    baseConfig: any = { baseURL: process.env.VUE_APP_BASE_API, timeout: 60000 };

    constructor(config: any) {
        // 使用axios.create创建axios实例
        this.Instance = axios.create(Object.assign(this.baseConfig, config));

        this.Instance.interceptors.request.use(
            (config: any) => {
                // 一般会请求拦截里面加token
                const token = localStorage.getItem("token") as string;
                config.headers!.Authorization = token;

                return config;
            },
            (err: any) => {
                return Promise.reject(err);
            }
        );

        this.Instance.interceptors.response.use(
            (res: any) => {
                // 直接返回res，当然你也可以只返回res.data
                return res.data;
            },
            (err: any) => {
                // 这里用来处理http常见错误，进行全局提示
                let message = "";
                switch (err.response.status) {
                    case 400:
                        message = "请求错误(400)";
                        break;
                    case 401:
                        message = "未授权，请重新登录(401)";
                        // 这里可以做清空storage并跳转到登录页的操作
                        break;
                    case 403:
                        message = "拒绝访问(403)";
                        break;
                    case 404:
                        message = "请求出错(404)";
                        break;
                    case 408:
                        message = "请求超时(408)";
                        break;
                    case 500:
                        message = "服务器错误(500)";
                        break;
                    case 501:
                        message = "服务未实现(501)";
                        break;
                    case 502:
                        message = "网络错误(502)";
                        break;
                    case 503:
                        message = "服务不可用(503)";
                        break;
                    case 504:
                        message = "网络超时(504)";
                        break;
                    case 505:
                        message = "HTTP版本不受支持(505)";
                        break;
                    default:
                        message = `连接出错(${err.response.status})!`;
                }
                // 这里错误消息可以使用全局弹框展示出来
                // 比如element plus 可以使用 ElMessage
                // ElMessage({
                //   showClose: true,
                //   message: `${message}，请检查网络或联系管理员！`,
                //   type: "error",
                // });
                // 这里是AxiosError类型，所以一般我们只reject我们需要的响应即可
                return Promise.reject(err.response);
            }
        );
    }

    // 定义请求方法
    public request(config: any): Promise<Result> {
        return this.Instance.request(config);
    }

    public get<T = any>(
        url: string,
        config?: any
    ): Promise<Result> {
        return this.Instance.get(url, config);
    }

    public post<T = any>(
        url: string,
        data?: any,
        config?: any
    ): Promise<Result> {
        return this.Instance.post(url, data, config);
    }

  
   
}

export default new Request({});