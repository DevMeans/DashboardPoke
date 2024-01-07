import { SimpleWidget } from "@/components";


export const metadata = {
 title: 'Dashboard Seo',
 description: 'Dashboard Seo',
};

export default function MainPage() {
  return (
    <div className="text-black">
      <h1 className="mt-2 text-3xl">Dashboard</h1>
      <span className="text-xl">Informacion General</span>
      <div className="flex flex-wrap p-2 justify-center">
          <SimpleWidget />
      </div>
    </div>
  );
}