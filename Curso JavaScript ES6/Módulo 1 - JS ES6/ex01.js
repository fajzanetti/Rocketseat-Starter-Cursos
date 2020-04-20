class Usuario {
    constructor(email, senha){
        this.email,
        this.nome,
        this.admin =  false
    }

    isAdmin(){
        // if (this.admin === true)
        //     return true
        // else
        //     return false
        return this.admin === true ? true : false
    }
}

class Admin extends Usuario{
    constructor() {
        super()

        this.admin = true
    }
}

const User1 = new Usuario('email@teste.com', 'senha123');
const Adm1 = new Admin('email@teste.com', 'senha123');
console.log(User1.isAdmin()) // false
console.log(Adm1.isAdmin()) // true
