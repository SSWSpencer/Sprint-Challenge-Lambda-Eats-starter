describe("Test our inputs and submit our form", function(){
    beforeEach(function(){
        cy.visit("http://localhost:3000");
    })

    it("Add test to inputs and submit form", function(){
        cy.get("#pizzaNavButton").click();

        cy.get('input[name="name"]')
        .type("Generic Name")
        .should("have.value", "Generic Name")
        cy.get('#size')
        .select("Small")
        .should("have.value", "Small")
        cy.get('[type="radio"]').first().check()
        cy.get('#topping1').check();
        cy.get("#SpecialInstructions")
        .type("Make it pizza")

        cy.get('#submitButton').click();
    })
});