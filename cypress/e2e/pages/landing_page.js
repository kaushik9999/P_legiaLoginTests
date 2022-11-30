class LandingPage {


    elements = {
       
        loginButton: () => cy.get("a[href='/login']").contains('Einloggen'),
        username: () => cy.get("input[name='email']"),
        password: () => cy.get("input[name='password']"),
        signInButton: () => cy.get("span[class='my-auto']").contains('Anmelden'),
        coockiesMethod: () => cy.get('div[data-testid="modal"]').contains('Alle Cookies akzeptieren')


    }

    get acceptCookies() {
        return this.elements.coockiesMethod;
    }
    get getUserName() {
        return this.elements.username;
    }
    get getPassword() {
        return this.elements.password;
    }
    get getLoginButton() {
        return this.elements.loginButton;
    }
    get getSignInButton() {
        return this.elements.signInButton;
    }


}


export default LandingPage;