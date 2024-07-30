import type { NextApiRequest, NextApiResponse} from "next";
import { BaseResponse, User } from "@/app/interfaces";
import api from "@/app/api/api";
import axios from "axios";


export default async function handler(req: NextApiRequest, res: NextApiResponse){
    const { method } = req;
    
    switch (method){
        case 'GET':
            try {
                const response = await api.get<BaseResponse<User[]>>("/user");
                res.status(200).json(response.data);
            }
            catch (error)
            {
                if (axios.isAxiosError(error)) {
                    res.status(error.response?.status || 500).json({
                        error: error.message,
                        details: error.response?.data,
                    });
                } else {
                    res.status(500).json({ error: 'Erro inesperado' });
                }
            }
            break;
            
            
        case 'POST':
            try {
                const response = await api.post("/user", req.body);
                res.status(201).json(response.data)
            }
            catch (error)
            {
                if (axios.isAxiosError(error)) {
                    res.status(error.response?.status || 500).json({
                        error: error.message,
                        details: error.response?.data,
                    });
                } else {
                    res.status(500).json({ error: 'Erro inesperado' });
                }
            }
            break;

        default:
            res.setHeader('Allow', ['GET', 'POST']);
            res.status(405).end(`Method ${method} Not Allowed`);    
    }
}

