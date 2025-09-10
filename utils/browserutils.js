const testdata =  require('../config/global.json');

class BrowserUtils{

    constructor(page){
        this.page = page;
    }

    static async invokeApp(page){
       await page.goto(testdata.url); 
    
    }
}

module.exports =  {BrowserUtils};