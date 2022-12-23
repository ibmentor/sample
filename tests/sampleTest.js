describe("Learn Portal - Adaptive Practice Question test - Free user flow", async () => {
    
    it("smoke test 1", async () => { 
   
        let ans = 4        
        expect(ans).toEqual(4)               
        await browser.url("https://google.com")
        await browser.maximizeWindow()  
       await browser.pause(5000)
       

    })

})
