let link_api = "http://localhost:300"
async function buscar_produtos(busca = "", ordenacao = ""){
    const resposta = await(fecht(link_api + "/produto"))
    const resposta_json = await resposta.json()}
    if(!resposta.ok){
        throw new Error("Eroo ao buscar produto")
    }
    return resposta_json