
import { CardCounter } from "@/shoping-cart";
import { Metadata } from "next";


export const metadata:Metadata = {
 title: 'CounterPage',
 description: 'CounterPage Descripcion',
};

export default function CounterPage() {

  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <h1>Counter page</h1>
        <CardCounter value={20} />
    </div>
  );
}