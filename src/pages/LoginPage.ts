import { Locator, Page } from "@playwright/test";
import { Basepage } from "./Basepage";


export class LoginPage extends Basepage{

    //private locators



   private readonly emailId:Locator;
   private readonly password:Locator;
private readonly loginBtn:Locator;
  private  readonly forgotPasswordLink:Locator;
   // private  readonly logoutlink:Locator;





        constructor(page:Page){

            super(page);
        this.emailId=         page.getByRole('textbox', { name: 'E-Mail Address' });
        this.password=         page.getByRole('textbox', { name: 'Password' });
         this.loginBtn=       page.getByRole('button', { name: 'Login' });
        this.forgotPasswordLink= page.getByRole('link', { name: 'Forgotten Password' }).first();
       // this.logoutlink=page.getByRole('link', { name: 'Logout' });

        };


        //page actions methods

         async   goToLoginPage():Promise<void>{
             await   this.page.goto('opencart/index.php?route=account/login') ;

            }


         async getLoginPageTitle(): Promise<string>{
             return  this.page.title();
            }


        async    isForgotPwdLinksExist():Promise<boolean>{
              return  await this.forgotPasswordLink.isVisible();
            }


         async  doLogin(username:string,password:string){
            console.log(`user creds: ${username}  :${password}`);
                    await    this.emailId.fill(username);
                    await    this.password.fill(password);
                    await this.loginBtn.click();

           } 



            // async    isLogoutLinkIsPresent():Promise<boolean>{
            //   return  await this.logoutlink.isVisible();
            // }






 }