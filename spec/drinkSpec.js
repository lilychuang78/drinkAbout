describe("what can I drink", function() {
    beforeEach(function(){
        drink = new whatCanIdrink
    });


    describe("check age", function() {
        it("should be over 0 years old", function() {
            expect(whatCanIdrink).toBeDefined();
        });

        it("should return Toddy when WhatCanIdrink(13)", function() {
           var result = whatCanIdrink(13)
            expect(result).toBe("Drink Toddy");
        });
        it("should return Toddy when WhatCanIdrink(17)", function() {
           var result = whatCanIdrink(17)
            expect(result).toBe("Drink Coke");
        });
        it("should return Toddy when WhatCanIdrink(20)", function() {
           var result = whatCanIdrink(20)
            expect(result).toBe("Drink Beer");
        });
        it("should return Toddy when WhatCanIdrink(40)", function() {
           var result = whatCanIdrink(40)
            expect(result).toBe("Drink Whisky");
        });
    });
});