
import { CardCounter } from "@/shoping-cart";
import { useAppDispatch, useAppSelector } from "@/store";
import { Metadata } from "next";


export const metadata:Metadata = {
 title: 'CounterPage',
 description: 'CounterPage Descripcion',
};
interface Props{
  value?:number;
}

export default function CounterPage({value}:Props) {

 
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <h1>Counter page</h1>
        <CardCounter value={20} />
    </div>
  );
}