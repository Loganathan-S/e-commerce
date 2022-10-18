const base    = '/';
const baseApi = "http://115.160.243.131:64937/";
// ${process.env.REACT_APP_URL}
export const routePath = {
    home: base,
    logout: base + 'logout', 
    auth: {
        home: base + 'auth',
        login: base + 'auth/login',
        register: base + 'auth/register'
    },
   
    dashboard: base + 'dashboard',
}

export const routeApi = {
     signin: baseApi + "Api/sign_in_page",
     register:baseApi +"Api/create_new_account"
}