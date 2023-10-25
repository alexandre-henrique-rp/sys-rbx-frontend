import axios from "axios";


export default async function PostPedidoBling(dados: any) {
  const data = {
    "contato": {
      "nome": "<string>",
      "tipoPessoa": "J",
      "numeroDocumento": "<string>"
    },
    "data": "<date>",
    "dataPrevista": "<date>",
    "dataSaida": "<date>",
    "itens": [
      {
        "id": "<integer>",
        "quantidade": "<float>",
        "valor": "<float>",
        "descricao": "<string>",
        "codigo": "<string>",
        "unidade": "<string>",
        "desconto": "<float>",
        "aliquotaIPI": "<float>",
        "descricaoDetalhada": "<string>",
        "produto": {
          "id": "<integer>"
        },
        "comissao": {
          "base": "<float>",
          "aliquota": "<float>",
          "valor": "<float>"
        }
      },
      {
        "id": "<integer>",
        "quantidade": "<float>",
        "valor": "<float>",
        "descricao": "<string>",
        "codigo": "<string>",
        "unidade": "<string>",
        "desconto": "<float>",
        "aliquotaIPI": "<float>",
        "descricaoDetalhada": "<string>",
        "produto": {
          "id": "<integer>"
        },
        "comissao": {
          "base": "<float>",
          "aliquota": "<float>",
          "valor": "<float>"
        }
      }
    ],
    "parcelas": [
      {
        "id": "<integer>",
        "dataVencimento": "<date>",
        "valor": "<float>",
        "formaPagamento": {
          "id": "<integer>"
        },
        "observacoes": "<string>"
      },
      {
        "id": "<integer>",
        "dataVencimento": "<date>",
        "valor": "<float>",
        "formaPagamento": {
          "id": "<integer>"
        },
        "observacoes": "<string>"
      }
    ],
    "id": "<integer>",
    "numero": "<integer>",
    "numeroLoja": "<string>",
    "totalProdutos": "<float>",
    "total": "<float>",
    "situacao": {
      "id": "<integer>",
      "valor": "<integer>"
    },
    "loja": {
      "id": "<integer>"
    },
    "numeroPedidoCompra": "<string>",
    "outrasDespesas": "<float>",
    "observacoes": "<string>",
    "observacoesInternas": "<string>",
    "desconto": {
      "valor": "<float>",
      "unidade": "REAL"
    },
    "categoria": {
      "id": "<integer>"
    },
    "notaFiscal": {
      "id": "<integer>"
    },
    "tributacao": {
      "totalICMS": "<float>",
      "totalIPI": "<float>"
    },
    "transporte": {
      "fretePorConta": 1,
      "frete": "<float>",
      "quantidadeVolumes": "<integer>",
      "pesoBruto": "<float>",
      "prazoEntrega": "<integer>",
      "contato": {
        "nome": "<string>",
        "id": "<integer>"
      },
      "etiqueta": {
        "nome": "<string>",
        "endereco": "<string>",
        "numero": "<string>",
        "complemento": "<string>",
        "municipio": "<string>",
        "uf": "<string>",
        "cep": "<string>",
        "bairro": "<string>",
        "nomePais": "<string>"
      },
      "volumes": [
        {
          "id": "<integer>",
          "servico": "<string>",
          "codigoRastreamento": "<string>"
        },
        {
          "id": "<integer>",
          "servico": "<string>",
          "codigoRastreamento": "<string>"
        }
      ]
    },
    "vendedor": {
      "id": "<integer>"
    },
    "intermediador": {
      "cnpj": "<string>",
      "nomeUsuario": "<string>"
    }
  };

  let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: 'https://www.bling.com.br/Api/v3/pedidos/vendas',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    data: data
  };

  try {
    const request = await axios(config)
    const reposta = request.data
    console.log(reposta)
    return reposta
  } catch (error) {
    console.log(error);
  }
}
