describe('API Tests', () => {
    it('GET Request - Check Status', () => {
        cy.request({
            method: "GET",
            url: 'https://catfact.ninja/fact'
        }).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body.fact).to.not.be.empty
        })
    })
    it('GET Request - Check body.fact if empty', () => {
        cy.request({
            method: "GET",
            url: 'https://catfact.ninja/fact'
        }).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body.fact).to.not.be.empty
        })
    })
})