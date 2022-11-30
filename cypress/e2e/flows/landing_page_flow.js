import LandingPage from "../pages/landing_page.js";

class LandingPageFlow{
     landing_page = new LandingPage();

    acceptCookiesMethod(){
        this.landing_page.acceptCookies().click()
    }
     goToSignIn(){
        
        this.landing_page.getLoginButton().click();
     }

     login(u,p){
        this.landing_page.getUserName().type(u);
        this.landing_page.getPassword().type(p);
        this.landing_page.getSignInButton().click();
     }

}

export default LandingPageFlow;