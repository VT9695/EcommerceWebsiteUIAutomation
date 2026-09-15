


import { Locator, Page } from "@playwright/test";
import { Basepage } from "./Basepage";



export class Homepage extends Basepage{
    getHomepageTitle() {
        throw new Error("Method not implemented.");
    }

    //private locators


    private  readonly logoutlink:Locator;

    private readonly headers:Locator;


        constructor(page:Page){
            super(page);
        this.logoutlink=page.getByRole('link', { name: 'Logout' });
        this.headers=page.getByRole('heading', { level:2 });

        };

            async    isLogoutLinkIsPresent():Promise<boolean>{
              return  await this.logoutlink.isVisible();
            }

             async getHomePageTitle(): Promise<string>{
             return  this.page.title();
            }


               async getHomepageHeaders():Promise<string[]>{
               return  await   this.headers.allInnerTexts();
               }





 }