



import { expect, test } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { Homepage } from "../pages/Homepage";


        let loginPage:LoginPage;
        let homepage:Homepage;


       test.beforeEach(async ({page}) => {
         loginPage= new LoginPage(page);
        await loginPage.goToLoginPage();
        await loginPage.doLogin('vaibhav.sumbe97@gmail.com','Welcome@2026');            
        homepage= new Homepage(page);
       });

test('Home page title test @juneBatch',async ({})=> {
        const pageTitle=     await   homepage.getHomePageTitle();
        console.log('home page title', pageTitle);
        expect(pageTitle).toBe('My Account');

});
test('logout link is exist test. @smoke',async ({page})=> {
        expect( await homepage.isLogoutLinkIsPresent()).toBeTruthy();
       // await page.pause();
});



test('home page headers exist test  @regression',async () => {
           let allheaders= await homepage.getHomepageHeaders();
            console.log('home page headers',allheaders);

            expect.soft(allheaders).toHaveLength(3);   // >>> dont use soft 

            expect(allheaders).toEqual([ 'My Account', 'My Orders', 'My Affiliate Account','Newsletter']);

});



//hooks



//june batch , module , regression



//how many project we have craeted ?? >> javacsript >>ntypsceript >> playweright >> framwork



// mandatory >> github account is needed

//


//local >>> remote >> by uisng the git commands






