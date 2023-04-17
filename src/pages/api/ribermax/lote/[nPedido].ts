/* eslint-disable no-undef */
import axios, { AxiosRequestConfig } from "axios";
import { NextApiRequest, NextApiResponse } from "next";
import { GetLoteProposta } from "../../lib/get_lote_nProposta";
import { ErroPHP } from "../../lib/erroPHP";

const PHP = axios.create({
  baseURL: process.env.RIBERMAX_API_URL,
  headers: {
    Token: process.env.ATORIZZATION_TOKEN_RIBERMAX,
    Email: process.env.ATORIZZATION_EMAIL,
  },
});

export default async function postLotePHP(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { nPedido } = req.query;

    const lote = await GetLoteProposta(nPedido);
    const items = lote;
    const promessas = [];

    for (const i of items) {
      const formData = new FormData();
      formData.append("cliente[CNPJ]", i.attributes.CNPJClinet);
      formData.append("emitente[CNPJ]", i.attributes.CNPJEmitente);
      formData.append("idProduto", i.attributes.produtosId);
      formData.append("nLote", i.attributes.lote);
      formData.append("qtde", i.attributes.qtde);

      const promessa = PHP.post("/lotes", formData)
        .then(async (response) => {
          return {
            msg: await response.data.message,
            lote: await response.data.lote.lote,
          };
        })
        .catch(async(error) => {
          const data = {
            log: {
              "cliente[CNPJ]": i.attributes.CNPJClinet,
              "emitente[CNPJ]": i.attributes.CNPJEmitente,
              idProduto: i.attributes.produtosId,
              nLote: i.attributes.lote,
              qtde: i.attributes.qtde,
              pedido: nPedido,
              error: error.response.data,
            },
          };
          return await ErroPHP(data);
        });

      promessas.push(promessa);
    }

    const resposta = await Promise.all(promessas);
    console.log(resposta);
    res.json(resposta);
  } else {
    return res.status(405).send({ message: "Only POST requests are allowed" });
  }
}
