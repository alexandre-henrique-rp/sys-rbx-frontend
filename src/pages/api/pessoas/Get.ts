import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";
import { Filtro } from "../controlers/filtroStatus";

export default async function GetEmpresa(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === 'GET') {
    const token = process.env.ATORIZZATION_TOKEN

    await axios({
      method: 'GET',
      url: process.env.NEXT_PUBLIC_STRAPI_API_URL + '/api/pessoas?filters[status][$eq]=true&populate=%2A',
      //? inicio de setup /filters[status][$eq]=true fazendo um filtro que traz todo com status = treu  /&populate=%2A  é para popular os relacionamentos
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    })
      .then(async Response => {
        console.log(Response.data.data)

      res.status(200).json(Response.data)
    })
    .catch(err => {
      res.status(400).json({
        "error": err.response.data,
        "mensage": err.response.data.error,
        "detalhe": err.response.data.error.details
      })
  })

  } else {
    return res.status(405).send({ message: 'Only GET requests are allowed' });
  }
}
