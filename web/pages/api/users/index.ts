import { NextApiResponse } from "next";

interface SetHeaderOption<T, S> {
    res: NextApiResponse;
    name: string;
    value: string;
    options: Object;
}

const setHeader = ({ res, name, value, options }: SetHeaderOption) => {
    
}