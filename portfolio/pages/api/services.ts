import { NextApiRequest, NextApiResponse } from "next";

import {services} from '../../data'

export default (req:NextApiRequest, res:NextApiResponse)=>{
    // By default -> GET request

    res.status(200).json({services})
    
}