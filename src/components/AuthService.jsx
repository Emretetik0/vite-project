// AuthService.js

class AuthService {
    static user = {
      username: 'emre',
      password: '123'
    };
  
    static getUser() {
      return this.user;
    }
  }
  
  export default AuthService;
  