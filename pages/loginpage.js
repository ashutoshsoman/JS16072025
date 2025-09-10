class LoginPage{
    constructor(page){
        this.page = page;
        this.login= this.page.getByRole('link', { name: 'Log in' })
        this.clickUserName= this.page.locator('#loginusername');
        this.fillUserName= this.page.locator('#loginusername');
        this.FillPassword= this.page.locator('#loginpassword');
        this.clickLogin = this.page.getByRole('button', { name: 'Log in' })
        this.pressTab = this.page.locator('#loginusername');
    }
 async  performLogin(){
  await this.login.click();
  await this.clickUserName.click();
  await this.fillUserName.fill('pavanol');
  await this.pressTab.press('Tab');
  await this.FillPassword.fill('test@123');
  await this.clickLogin.click();
}
}

module.exports = {LoginPage}