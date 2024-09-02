'use client'

import { WixClientContext } from "<gboutique>/context/wixContext";
import { useContext } from "react";

export const useWixClient = ()=>{
    return useContext(WixClientContext);
}

