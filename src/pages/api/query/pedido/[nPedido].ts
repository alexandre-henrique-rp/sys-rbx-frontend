/* eslint-disable no-undef */

import { NextApiRequest, NextApiResponse } from 'next';
import { GetPedido } from './request/db/get';
import { PostPedido } from './request/bling/Postpedido';

export default async function PedidoBling(
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<void> {
  if (req.method === 'POST') {
    // const data = JSON.parse(req.body);
    const { nPedido } = req.query;
    try {
      const infos = await GetPedido(nPedido);
      const [data]: any = infos;
      const getPedido = await PostPedido(data);
      console.log("🚀 ~ file: [nPedido].ts:18 ~ getPedido:", getPedido)

      res.status(200).send(getPedido)
    } catch (error: any) {
      res.status(error.status || 500).json(error);
    }
  } else {
    return res.status(405).send({ message: 'Only POST requests are allowed' });
  }
}
