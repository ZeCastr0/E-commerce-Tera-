function fnBuscaCep(cep) {
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then((resp) => resp.json())
      .catch(() => console.log(Error))
      .then((dados) => {
        console.log(dados);
  
        document.querySelector("#txtEndereco").value = dados.logradouro;
        document.querySelector("#txtBairro").value = dados.bairro;
        document.querySelector("#txtUF").value = dados.uf;
      });
  }