 
describe('Search Test Case :', () => {
    it('Visits skillsmatch ', () => {
      cy.visit('https://skillsmatch.mdx.ac.uk/ar/search/')
    })
    it('should pass', () => {
        expect(true).to.equal(true);
      });

it('has a visible star logo', function() {
    cy.get('img').should('be.visible');
  });
  
  it("Login",()=>
  {

    cy.visit("https://skillsmatch.mdx.ac.uk/")
    cy.get("#username").type("maymonaY").should("have.value","maymonaY")
    cy.get("input[name='password']").type("12345")
    cy.get(".btn").click()
     
  })


  
  it('show the search result',()=>{
      cy.visit("https://skillsmatch.mdx.ac.uk/")
      cy.get("#username").type("maymonaY").should("have.value","maymonaY")
      cy.get("input[name='password']").type("12345")
      cy.get(".btn").click()
      cy.get(':nth-child(3) > .nav-link').click()
      cy.get('.tagify__input').type('Planning{enter}')
      cy.get(".btn").click()
      cy.get('#search-result').should('be.visible')


       
  })


 

  it('search result case1:With all of the keywords ',()=>{
    cy.visit("https://skillsmatch.mdx.ac.uk/")
    cy.get("#username").type("maymonaY").should("have.value","maymonaY")
    cy.get("input[name='password']").type("12345")
    cy.get(".btn").click()
    cy.get(':nth-child(3) > .nav-link').click()
    cy.get('.tagify__input').type('sharing{enter}')
    cy.get('.tagify__input').type('Planning{enter}')
    cy.get('.collapsed').click()
    cy.get('#match_all').click()
    cy.get(".btn").click()
    cy.get('[test-data="searchItem_1"] > :nth-child(4)').should("have.value",'sharing')
    cy.get(' [test-data="searchItem_1"] >:nth-child(5)').should("have.value",'Planning')
   
  }) 
  
 
   it('search result case3:Sort based on user reviews  ',()=>{
    cy.visit("https://skillsmatch.mdx.ac.uk/")
    cy.get("#username").type("maymonaY").should("have.value","maymonaY")
    cy.get("input[name='password']").type("12345")
    cy.get(".btn").click()
    cy.get(':nth-child(3) > .nav-link').click()
    cy.get('.tagify__input').type('Planning{enter}')
    cy.get('.collapsed').click()
    cy.get('#sort_by_user_reviews').click()

        cy.get(".btn").click()
    
    const NextFeedback = cy.get('[test-data="searchItem_2"] > [test-data="UserFeedback"] > .fill')
    cy.get('[test-data="searchItem_1"] > [test-data="UserFeedback"] > .fill').should('have.length.greaterThan',NextFeedback)
  })  

  it('search result case4:Translate  ',()=>{
    cy.visit("https://skillsmatch.mdx.ac.uk/")
    cy.get("#username").type("maymonaY").should("have.value","maymonaY")
    cy.get("input[name='password']").type("12345")
    cy.get(".btn").click()
    cy.get(':nth-child(3) > .nav-link').click()
    cy.get('.tagify__input').type('برمجيات{enter}')
    cy.get('.collapsed').click()
    cy.get(' #translateInput ').select('en')
    cy.get(".btn").click()
    cy.get('[test-data="searchItem_1"] > .badge-info').should("have.value","software")

    
  })
  });
  describe('Update my skills Test Case :', () => {

    it("Update my skills",()=>
    {
  
      cy.visit("https://skillsmatch.mdx.ac.uk/")
      cy.get("#username").type("maymonaY").should("have.value","maymonaY")
      cy.get("input[name='password']").type("12345")
      cy.get(".btn").click()
      cy.get(':nth-child(2) > .nav-link').click()
      cy.get(".btn").click()
      cy.get(".btn").click()
      cy.get(':nth-child(3) > .form-card > :nth-child(10) > .row > .col-1 >input[name="2"] ').click()
      cy.get(":nth-child(3) > .next").click()
      cy.get('[style="display: block; opacity: 1;"] > .form-card > :nth-child(9) > .row > .col-1 >input[name="3"] ').click()
      cy.get('[style="display: block; opacity: 1;"] > .form-card > :nth-child(16) > .row > .col-1 >input[name="4"]').click()
      cy.get('[style="display: block; opacity: 1;"] > .form-card > :nth-child(23) > .row > .col-1 >input[name="5"] ').click()
      cy.get('[style="display: block; opacity: 1;"] > .form-card > :nth-child(30) > .row > .col-1 >input[name="6"] ').click()
      cy.get('[style="display: block; opacity: 1;"] > .next').click()
      cy.get('[style="display: block; opacity: 1;"] > .form-card > :nth-child(9) > .row > .col-1 >input[name="7"]').click()
      cy.get('[style="display: block; opacity: 1;"] > .form-card > :nth-child(16) > .row > .col-1>input[name="8"] ').click()
      cy.get('[style="display: block; opacity: 1;"] > .form-card > :nth-child(23) > .row > .col-1>input[name="9"] ').click()
      cy.get('[style="display: block; opacity: 1;"] > .next').click()
      cy.get('[style="display: block; opacity: 1;"] > .form-card > :nth-child(9) > .row > .col-1 >input[name="10"] ').click()
      cy.get('[style="display: block; opacity: 1;"] > .form-card > :nth-child(16) > .row > .col-1 >input[name="11"]').click()
      cy.get('[style="display: block; opacity: 1;"] > .form-card > :nth-child(23) > .row > .col-1 >input[name="12"] ').click()
      cy.get('[style="display: block; opacity: 1;"] > .form-card > :nth-child(30) > .row > .col-1 >input[name="13"] ').click()
      cy.get('[style="display: block; opacity: 1;"] > .next').click()
      cy.get('[style="display: block; opacity: 1;"] > .form-card > :nth-child(9) > .row > .col-1 >input[name="14"]').click()
      cy.get('[style="display: block; opacity: 1;"] > .form-card > :nth-child(16) > .row > .col-1>input[name="15"] ').click()
      cy.get('[style="display: block; opacity: 1;"] > .form-card > :nth-child(23) > .row > .col-1>input[name="16"] ').click()
      cy.get('[style="display: block; opacity: 1;"] > .next').click()
      cy.get('[style="display: block; opacity: 1;"] > .form-card > :nth-child(9) > .row > .col-1 >input[name="17"]').click()
      cy.get('[style="display: block; opacity: 1;"] > .form-card > :nth-child(16) > .row > .col-1>input[name="18"] ').click()
      cy.get('[style="display: block; opacity: 1;"] > .form-card > :nth-child(23) > .row > .col-1>input[name="19"] ').click()
      cy.get('[style="display: block; opacity: 1;"] > .next').click()
      cy.get('[style="display: block; opacity: 1;"] > .form-card > :nth-child(9) > .row > .col-1 >input[name="20"] ').click()
      cy.get('[style="display: block; opacity: 1;"] > .form-card > :nth-child(16) > .row > .col-1 >input[name="21"]').click()
      cy.get('[style="display: block; opacity: 1;"] > .form-card > :nth-child(23) > .row > .col-1 >input[name="22"] ').click()
      cy.get('[style="display: block; opacity: 1;"] > .form-card > :nth-child(30) > .row > .col-1 >input[name="23"] ').click()
      cy.get(':nth-child(37) > .row > .col-1 >input[name="24"] ').click()
      cy.get('[style="display: block; opacity: 1;"] > .next').click()
      cy.get('[style="display: block; opacity: 1;"] > .form-card > :nth-child(7) > .row > .col-1 >input[name="25"]').click()
      cy.get('[style="display: block; opacity: 1;"] > .form-card > :nth-child(16) > .row > .col-1>input[name="26"] ').click()
      cy.get(':nth-child(25) > .row > .col-1>input[name="27"] ').click()
      cy.get('[style="display: block; opacity: 1;"] > .next').click()
      cy.get('[test-data="area_2"] > .row > .rating > :nth-child(5)')
    })


  })
  