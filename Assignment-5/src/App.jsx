import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import useFetch from './customHooks/useFetch.js'
import Card from "./components/Card.jsx";
function App() {
    const { data, loading, error } = useFetch('https://api.escuelajs.co/api/v1/products');

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    // return (
    //     <div>
    //         {data && data.map((item) => (
    //             <div key={item.id}>
    //                 <h3>{item.title}</h3>
    //                 <img src={item.images[0]} alt={item.title} width="100" />
    //                 <p>${item.price}</p>
    //             </div>
    //         ))}
    //     </div>
    // );
    return(
    <>
        <div className="bg-black">
            <header className="flex text-white align-items-center justify-center font-mono text-4xl p-4">
                <div >
                    Market Place
                </div>
            </header>
            <main className="grid grid-cols-4 p-4">
                {data && data.map((item) => (
                                <div key={item.id}>
                                    <Card title={item.title} image={item.images[0]} price={item.price} />
                                </div>
                            ))}
            </main>
        </div>
    </>
    )
}

export default App
