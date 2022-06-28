
describe('Home page', () => {
    let civilization_0;
    let civilization_1;

    it('Renders Home and NavBar correctly',() => {
        cy.visit('/')
        cy.get('#navbar-main-container').should('be.visible')

        cy.get('.home-div-all').should('have.css', 'background-image')
    })

    it('Renders Home With the loader until the request',() => {
        cy.intercept('GET', Cypress.env('apiUrl') + '/civilizations', req => {
            req.reply({
                statusCode: 200, 
                delay: 2000
            })
        }).as('get_civilizations')

        cy.visit('/')
        cy.get('#home-circular-progress',{timeout: 5000}).should('be.visible')
        cy.wait('@get_civilizations')
        cy.get('home-circular-progress').should('not.exist')  
    })

    it('Renders Error for bad request',() => {
        cy.intercept('GET', Cypress.env('apiUrl') + '/civilizations', req => {
            req.reply({
                statusCode: 400, 
            })
        }).as('get_civilizations')

        cy.visit('/')
        cy.wait('@get_civilizations')
        cy.get('.armycard-card').should('not.exist')  
        cy.contains("Couldn't find any civilizations").should('be.visible')  
    })

    it('Renders Each Civilization',() => {
        cy.visit('/')
        cy.request('/civilizations').then(response => {
            const civilizations = response?.body?.civilizations
            cy.get('.armycard-card').should('have.length', civilizations?.length)
            civilizations.forEach(civilization => {
                cy.get('.armycard-card').contains(civilization?.name)
            })

            civilization_0 = civilizations[0]
            civilization_1 = civilizations[1]
        })
    })

    it('Can filter by civilization',() => {
        cy.get('#navbar-search-input').type(civilization_0.name)

        cy.contains(civilization_0.name).should('be.visible')
        cy.contains(civilization_1.name).should('not.exist')

        cy.get('#navbar-search-input').clear()
        cy.get('#navbar-search-input').type(civilization_1.name)

        cy.contains(civilization_0.name).should('not.exist')
        cy.contains(civilization_1.name).should('be.visible')
    })

    it('Can Navigate to the civilization page',() => {
       cy.get('.armycard-card').contains(civilization_1.name).click()
       cy.url().should('include', '/civilization/' + civilization_1.id)
    })

  })
  