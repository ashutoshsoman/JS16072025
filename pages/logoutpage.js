const  {expect}  = require('@playwright/test')

class LogoutPage{

    constructor(page){
        this.page=page;
        this.clickLogoutButton =  this.page.getByRole('link', { name: 'Log out' });
        this.loginButtonVisible=  this.page.getByRole('link', { name: 'Log in' });
    }
 async  performLogout(){
  await this.clickLogoutButton.click();
  await expect(this.loginButtonVisible).toBeVisible();
}
}

module.exports = {LogoutPage}