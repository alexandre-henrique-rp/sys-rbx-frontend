import { NextApiRequest, NextApiResponse } from 'next';
import GetPedido from './requestPedido';

export default async function Get(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      const {pedido}: any = req.query;

      const PropostaVenda = await GetPedido(pedido)
      const PedidoBling = 

    } catch (error) {

    }

  } else {
    return res.status(405).send({ message: 'Only GET requests are allowed' });
  }
}
