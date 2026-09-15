
import { expect, test } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { Homepage } from "../pages/Homepage";
import { CsvHelper } from "../utils/CsvHelper"


        let loginPage:LoginPage;
        let homepage:Homepage;


         //   const testdata=  CsvHelper.readCsv('src/data/loginData.csv');
        


       test.beforeEach(async ({page}) => {
         loginPage= new LoginPage(page);
           await loginPage.goToLoginPage();
            homepage= new Homepage(page);
       });

test('login page title test @juneBatch',async ({})=> {
        const pageTitle=     await    loginPage.getLoginPageTitle();
        console.log('login page title', pageTitle);
        expect(pageTitle).toBe('Account Login');
});
test('forgot password link is exist test @smoke',async ({})=> {
        expect( await loginPage.isForgotPwdLinksExist()).toBeTruthy();
});


test('user is able to logi to the appllication @regression ',async () => {
        await loginPage.doLogin('vaibhav.sumbe97@gmail.com','Welcome@2026');
        expect(await homepage.isLogoutLinkIsPresent()).toBeTruthy();

 
});

        test('invalid login test @regression '  ,async () => {

           for(let rows of testdata){
        await loginPage.doLogin(rows.username,rows.password);
        expect(await homepage.isLogoutLinkIsPresent()).toBeTruthy();
           }

});


            // let testdata=  CsvHelper.readCsv('src/data/loginData.csv');


        test('login test feeded data '  ,async () => {
           for(let rows of testdata){
        await loginPage.doLogin(rows.username,rows.password);
          expect( await loginPage.isForgotPwdLinksExist()).toBeTruthy();
           }

});



//3 >>> for forloop 

//same thing

            let testdata=  CsvHelper.readCsv('src/data/loginData.csv');



for(const row of testdata){

  test(`@regression logic builling test- ${row.username}`,async({page})=>{


    loginPage.doLogin(row.username,row.password);

    const forgotLinkExist=      await loginPage.isForgotPwdLinksExist();

    if(row.expected=='fail'){

      expect(forgotLinkExist).toBeFalsy();
    }else{
            expect(forgotLinkExist).toBeTruthy();

    }
    

  })

}


//hooks



//npm i -D allure-playwright allure-commandline







//how u guys are passing the data to your scripts >>csv file /excel >> csv > comma sepaarted valus, light weight 
//excel >> to much time ,heavy,to much librabry