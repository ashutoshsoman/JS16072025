const  {expect}  = require('@playwright/test')

class HomePage{
    constructor(page){
        this.page = page;
        this.loginlink =  this.page.getByRole('link', { name: 'Log in' });
    }

    async validateHomePage(){
      await expect(this.loginlink).toBeVisible();
     
   }
}

module.exports = {HomePage}