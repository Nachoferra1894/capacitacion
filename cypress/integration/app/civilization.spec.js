
describe('Civilization page', () => {
    let civilization_0;
    let civilization_1;

    before(() => {
        cy.request('/civilizations').then(response => {
            const civilizations = response?.body?.civilizations
            civilization_0 = civilizations[0]
            civilization_1 = civilizations[1]
        })
    })
   
    it('Throws error for unkwown civilization',() => {
        cy.visit('/civilization/' + 121232134213213421)

        cy.get('#navbar-main-container').should('be.visible')
        cy.get('.home-div-all').should('have.css', 'background-image')
        cy.contains("Couldn't find the civilization").should('be.visible')
    })

    it('Renders the first civilization',() => {
        cy.visit('/civilization/' + civilization_0.id)

        cy.get('#navbar-main-container').should('be.visible')
        cy.get('.home-div-all').should('have.css', 'background-image')
        cy.get('#navbar-search-input').should('not.exist')

        cy.contains(civilization_1.name).should('not.exist')
        cy.contains(civilization_0.name).should('be.visible')

        cy.contains(civilization_0.expansion).should('be.visible')
        cy.contains(civilization_0.army_type).should('be.visible')
        cy.contains(civilization_0.team_bonus).should('be.visible')
    })

    it('Renders the second civilization',() => {
        cy.visit('/civilization/' + civilization_1.id)

        cy.get('#navbar-main-container').should('be.visible')
        cy.get('.home-div-all').should('have.css', 'background-image')
        cy.get('#navbar-search-input').should('not.exist')

        cy.contains(civilization_0.name).should('not.exist')
        cy.contains(civilization_1.name).should('be.visible')

        cy.contains(civilization_1.expansion).should('be.visible')
        cy.contains(civilization_1.army_type).should('be.visible')
        cy.contains(civilization_1.team_bonus).should('be.visible')
    })

    it('Shows more info',() => {

        cy.contains('Civilization bonus:').should('be.visible')
        cy.contains(civilization_1.civilization_bonus.at(0)).should('not.exist')

        cy.get('#civilization-card-show-more').click()
        cy.contains(civilization_1.civilization_bonus.at(0)).should('be.visible')
    })

    it('Redirects to new page',() => {
        cy.window().then((win) => {
            cy.spy(win, 'open').as('windowOpen');
        });

        cy.get('#civilization-card-learn-more').click()
        cy.get('@windowOpen').should('be.called'); // A window is opened
    })
  })

  