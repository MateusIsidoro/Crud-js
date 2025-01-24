console.log("tarefas")

let tarefa = []

function getList() {
    try {
        tarefa = JSON.parse(localStorage.getItem("tarefas"));
        if (tarefa == '') {
            throw "Valor inválido"
        }
    } catch (e) {
        localStorage.setItem("tarefas", JSON.stringify([]));
        let tarefa = []
        console.log(tarefa)
    }
}
getList()

function setList() {
    localStorage.setItem("tarefas", JSON.stringify(tarefa));
}

criarTela()
class Tarefas {
    constructor() {
        this.idex_temp = 0
        this.id_teste = 0
        this.data = 0;
        // this.data = new date();

    }
    // adicionar
    calcular_id() {
        let novo_id
        try {
            novo_id = parseInt(tarefa[0]['id'])
        } catch (e) {
            novo_id = 1
        }
        tarefa.map((x) => {
            let idn = parseInt(x['id'])
            if (idn >= novo_id) {
                novo_id = idn + 1
            }
            this.id_teste = novo_id
        });

    }

    defdata(){
        const date = new Date()
        this.data = `${date.getDay()}/${date.getMonth()}/${date.getFullYear()}`
    }
    adicionar(nome_user, desc_user) {
        this.calcular_id();
        this.defdata();
        tarefa.push({ id: this.id_teste, nome: nome_user, desc: desc_user, data: this.data, situacao: 0 })
        setList()
        criarTela()
    }
    // excluir
    excluir(id_set) {
        if (id_set >= 0) {
            this.id_to_index(id_set);
            tarefa.splice(this.idex_temp, 1)
        }
        setList()

    }
    id_to_index(id_set) {
        tarefa.map((x) => {
            if (x.id == id_set) {
                this.idex_temp = tarefa.indexOf(x)
            }
        }
        )
    }
    // visualizar
    ver(id_set) {
        this.id_to_index(id_set);
        console.log(tarefa[this.idex_temp])
    }
    // visualizar udo
    ver_tudo() {
        console.log(tarefa)
    }
    // atualizar
    atualizar(id_set, nome_user, desc_user) {
        this.id_to_index(id_set);
        tarefa.map((x) => {
            if (x.id == id_set) {
                if (nome_user == "" || nome_user == " ") {
                    let vazio = 1
                } else {
                    tarefa[this.idex_temp].nome = nome_user
                };
                if (desc_user == "" || desc_user == " ") {
                    let vazio = 2
                } else {
                    tarefa[this.idex_temp].desc = desc_user
                };
            }
        });
        setList()

    }
    // alterar siutação
    alt_situa(id_set, val) {
        this.id_to_index(id_set);
        let val_sit = parseInt(val)
        tarefa.map((x) => {
            if (x.id == id_set) {
                tarefa[this.idex_temp].situacao = val_sit
            }
        });
        setList()

    }
}
// criar
const tarefa1 = new Tarefas()
// tarefa1.adicionar("escovar","escove!!!")
// tarefa1.adicionar("escovar","escove!!!")
// tarefa1.adicionar("escovar","iaojsdoasdoasd!!!")
// tarefa1.adicionar("casa","casa!!!")
// tarefa1.adicionar("escovar","escove!!!")
console.log(tarefa)
// // excluir
// tarefa1.excluir("3")
// // visualizar
// tarefa1.ver_tudo()
// // atualizar
// tarefa1.atualizar("1"," ","ae")
// tarefa1.ver("1")
// // situação
// tarefa1.alt_situa("1","2")
// tarefa1.ver("1")




// situacao
console.log("situações")
let situacao = [
    { id: 0, situacao: "", },
]
class situacoes {
    constructor() {
        this.idex_temp = 0
        this.id_teste = 0
    }
    // adicionar
    calcular_id() {
        let novo_id = parseInt(situacao[0]['id'])
        situacao.map((x) => {
            let idn = parseInt(x['id'])
            if (idn >= novo_id) {
                novo_id = idn + 1
            }
            this.id_teste = novo_id
        });
    }

    adicionar(situa) {
        this.calcular_id();
        situacao.push({ id: this.id_teste, situacao: situa, })
    }
    // excluir
    excluir(id_set) {
        if (id_set >= 0) {
            this.id_to_index(id_set);
            situacao.splice(this.idex_temp, 1)
        }
    }
    id_to_index(id_set) {
        situacao.map((x) => {
            if (x.id == id_set) {
                this.idex_temp = situacao.indexOf(x)
            }
        }
        )
    }
    // visualizar
    ver(id_set) {
        this.id_to_index(id_set);
        console.log(situacao[this.idex_temp])
    }
    // visualizar udo
    ver_tudo() {
        console.log(situacao)
    }
    // atualizar
    atualizar(id_set, situa) {
        this.id_to_index(id_set);
        let id_raw = parseInt(id_set)
        situacao.map((x) => {
            if (x.id == id_set) {
                situacao[this.idex_temp] = { id: id_raw, situacao: situa }
            }
        });
    }
}
// criar
const situacao1 = new situacoes()
situacao1.atualizar("0", "Em Andamento")
situacao1.adicionar("Finalizado")
situacao1.adicionar("Em espera")
// visualizar
situacao1.ver_tudo()
criarSelect()



