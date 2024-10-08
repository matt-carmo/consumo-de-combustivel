
'use client'
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { useState } from "react";



export default function Home() {
  const [fuelPrice, setFuelPrice] = useState('');
  const [consumption, setConsumption] = useState('');
  const [distance, setDistance] = useState('');
  const [totalCost, setTotalCost] = useState('');
 
  const [error, setError] = useState('');
  const calcularGasto = () => {

    if (!fuelPrice || !consumption || !distance) {
      setTotalCost('');
      setError('Por favor, preencha todos os campos.');
      return;
    }

    setError('');
    const totalLitros = parseFloat(distance) / parseFloat(consumption);
    const total: number = totalLitros * parseFloat(fuelPrice);
    setTotalCost(total.toFixed(2));
  };
  return (
    <>
    <main className="bg max-w-screen-md mx-auto px-10">
      <h1 className="font-semibold text-center mt-10 text-xl text-white">
        Calcular consumo de combustível
      </h1>
      <section className="mt-6 flex flex-col gap-3">
        <div>
          <Label htmlFor="fuelPrice" className="text-white">Preço do combustível (R$)</Label>
          <Input
            type="number"
            className="outline-none border-none bg-gray-800 bg-opacity-50 text-white placeholder-gray-300"
            id="fuelPrice"
            value={fuelPrice}
            onChange={(e) => setFuelPrice(e.target.value)}
            placeholder="Preço por litro ex: 5.49"
          />
        </div>
        <div>
          <Label htmlFor="consumption" className="text-white">Média de consumo</Label>
          <Input
            type="number"
            id="consumption"
            className="outline-none border-none bg-gray-800 bg-opacity-50 text-white placeholder-gray-300"
            value={consumption}
            onChange={(e) => setConsumption(e.target.value)}
            placeholder="Consumo ex: 10 (km/L)"
          />
        </div>
        <div>
          <Label htmlFor="distance" className="text-white">Distância percorrida (km)</Label>
          <Input
            type="number"
            className="outline-none border-none bg-gray-800 bg-opacity-50 text-white placeholder-gray-300"
            id="distance"
            value={distance}
            onChange={(e) => setDistance(e.target.value)}
            placeholder="Kilometragem ex: 150"
          />
        </div>
        <Button className="w-full mt-2 bg-yellow-500 hover:bg-yellow-600 text-black font-bold text-md" onClick={calcularGasto}>Calcular</Button>
  
        {error && <p className="text-red-400">{error}</p>}
  
        {totalCost && (
        <div className="result">
          <h2 className="text-md font-medium text-white">
            Você gastou: <span className="text-green-500 font-semibold text-lg">R$ {totalCost}</span> de combustível
          </h2>
        </div>
        )}
      </section>
    </main>
    <footer className="fixed bottom-4 w-full text-center border-t border-opacity-15 border-gray-600 pt-4">
      <p className="text-center text-sm font-light text-white">
        Make with ❤️ by <a className="underline text-white" href="https://github.com/matt-carmo">Matheus Carmo</a>
      </p>
    </footer>
  </>
  
  );
}
