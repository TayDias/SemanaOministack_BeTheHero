const request = require('supertest')
const app = require('../../src/app')
const connection = require('../../src/database/connection')

describe('ONG', () => {
    beforeEach(async () => {
        await connection.migrate.rollback() //Zerando o banco de testes antes
        await connection.migrate.latest()
    })

    afterAll(async() => (
        await connection.destroy()
    ))

    it('should be able to create a new ONG', async () => {
        const response = await request(app)
            .post('/ongs')
            //.set('Authorization', 'idOng')  //Para validação dos headers
            .send({
                name: "Teste",
	            email: "teste.teste@email.com",
	            whatsapp: "48999000000",
	            city: "São José",
	            uf: "SC"
            })
        
        expect(response.body).toHaveProperty('id')
        expect(response.body.id).toHaveLength(8)
    })
})