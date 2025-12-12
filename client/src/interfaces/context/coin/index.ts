import type { ICoinData, ICurrency } from "../../systems/crypto";

export interface ICoinContext {
    allCoin: ICoinData[];
    currency: ICurrency; 
    setCurrency: React.Dispatch<React.SetStateAction<ICurrency>>;
}