import { CarShop } from "@/contexts/carShop";
import { useContext } from "react";

export function useCarShop(){
 const data = useContext(CarShop)
 return {
  ...data
 }
}