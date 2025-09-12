it('Crear un usuario', function(){

        cy.request({
            url: 'https://petstore.swagger.io/v2/user/createWithList',
            method: 'POST',
            body: [ {
               "id": 1,
                "username": "Henaojua",
                "firstName": "Juan",
                "lastName": "Henao",
                "email": "henaoariza2@gmail.com",
                "password": "abc123",
                "phone": "3004883452",
                "userStatus": 1
            }
        ]
    }).then(response => {
        cy.log(JSON.stringify(response.body))
        expect(response.status).to.eq(200)
        
    })
})

it('Buscar el usuario creado', function(){

        cy.request({
        url:`https://petstore.swagger.io/v2/user/Henaojua`,
        method: 'GET'
    }).then(response =>{
        cy.log(JSON.stringify(response.body))
        expect(response.status).to.eq(200)
        

    })
    

})

it('Actualizar nombre y correo del usuario', function () {
    cy.request({
        url: 'https://petstore.swagger.io/v2/user/Henaojua',
        method: 'PUT',
        body: {
            "id": 1,                      
            "firstName": "Carlos",         
            "lastName": "Henao",          
            "email": "h2@gmail.com",       
            "password": "abc123",          
            "phone": "3004883452",         
            "userStatus": 1                
        }
    }).then(response => {
        cy.log(JSON.stringify(response.body));
        expect(response.status).to.eq(200);
    });
});

it('Buscar el usuario modificado', function(){

        cy.request({
        url:`https://petstore.swagger.io/v2/user/Henaojua`,
        method: 'GET'
    }).then(response =>{
        cy.log(JSON.stringify(response.body))
        expect(response.status).to.eq(200)

    })
    

})

it('Eliminar el usuario,' ,function(){
    cy.request({
        url:`https://petstore.swagger.io/v2/user/Henaojua`,
        method: 'DELETE'
    }).then(response =>{
        cy.log(JSON.stringify(response.body))
        expect(response.status).to.eq(200)
    })
})


Hola
