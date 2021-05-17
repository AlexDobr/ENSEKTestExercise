
it('Gas assertions', ()=>{
    cy.visit('https://ensekautomationcandidatetest.azurewebsites.net/Energy/Buy')
    cy.get(':nth-child(1) > :nth-child(6) > #energyType_AmountPurchased')
        .should('be.empty')
        .should('be.visible')
        .should('be.enabled')
    cy.get(':nth-child(1) > :nth-child(6) > #energyType_AmountPurchased').type('2000')
    cy.get(':nth-child(1) > :nth-child(7) > .btn').click()
    
})

it('Oil assertions', ()=>{
    cy.visit('https://ensekautomationcandidatetest.azurewebsites.net/Energy/Buy')
    cy.get(':nth-child(3) > :nth-child(6) > #energyType_AmountPurchased')
        .should('be.empty')
        .should('be.visible')
        .should('be.enabled')
    cy.get(':nth-child(3) > :nth-child(6) > #energyType_AmountPurchased').type('3000')
    cy.get(':nth-child(3) > :nth-child(7) > .btn').click()
    
})

it('Electricity assertions', ()=>{
    cy.visit('https://ensekautomationcandidatetest.azurewebsites.net/Energy/Buy')
    cy.get(':nth-child(4) > :nth-child(6) > #energyType_AmountPurchased')
        .should('be.empty')
        .should('be.visible')
        .should('be.enabled')
    cy.get(':nth-child(4) > :nth-child(6) > #energyType_AmountPurchased').type('15')
    cy.get(':nth-child(4) > :nth-child(7) > .btn').click()
    
})