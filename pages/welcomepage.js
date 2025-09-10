const  {expect}  = require('@playwright/test')

class WelcomePage{
    constructor(page){
        this.page = page;
        this.loginVisibility=  this.page.getByRole('link', { name: 'Log in' });
    }
 async validateWelcomePage(){
 await expect( this.loginVisibility).toBeVisible();
}
}

module.exports = {WelcomePage}