// @ts-check
import { test, expect } from '@playwright/test';
import { BrowserUtils } from '../utils/browserutils';
import { HomePage } from '../pages/homepage';
import { LoginPage } from '../pages/loginpage';
import { WelcomePage } from '../pages/welcomepage';
import { LogoutPage } from '../pages/logoutpage';

test('test', async ({ page }) => {

  const homePage = new HomePage(page);
  const loginPage =  new LoginPage(page);
  const welcomePage =  new WelcomePage(page);
  const logoutPage = new LogoutPage(page);
   
  await  BrowserUtils.invokeApp(page); //browserutils
  await  homePage.validateHomePage();//homepage
  await  loginPage.performLogin();//logonpage
  await  welcomePage.validateWelcomePage();//welcomepage
  await  logoutPage.performLogout();//welcomepage

});
