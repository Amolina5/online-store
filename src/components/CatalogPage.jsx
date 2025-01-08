import React, { useState } from 'react';
import './styles/CatalogPage.css';
import Product from './Product';

const arcadeMachines = [
    {
        id: 1,
        name: 'Classic Arcade Machine',
        price: 499.99,
        description: 'All your favorite classic games in one machine',
        image: 'data:image/jpeg;base64,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',
        
    },
    {
        id: 2,
        name: 'Retro Racing Arcade',
        price: 599.99,
        description: 'Fast-paced racing games with a classic feel',
        image: 'https://th.bing.com/th/id/OIP.U6T4MnOqE4Q2YKhineFNBQHaLH?w=156&h=187&c=7&r=0&o=5&pid=1.7',
    },
    {
        id: 3,
        name: 'Fighting Game Machine',
        price: 699.99,
        effect: 'frozen',
        description: 'Battle your friends with all time favorite fighting game',
        image: 'https://th.bing.com/th/id/OIP.tuh0YLHfZGZM0BUM_uqjSQHaM6?w=189&h=330&c=7&r=0&o=5&pid=1.7',
    },
    {
        id: 4,
        name: 'Dance Dance Revolution',
        price: 799.99,
        effect: 'lights',
        description: 'Get your groove on with this dance game',
        image: 'https://th.bing.com/th/id/OIP.Nv3ySL5u-jsY4RJWvsH0AAHaIR?w=159&h=181&c=7&r=0&o=5&pid=1.7',
    },
    {
        id: 5,
        name: 'Pinball Machine',
        price: 899.99,
        description: 'Classic pinball fun for everyone',
        image: 'data:image/jpeg;base64,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',
    },
    {
        id: 6,
        name: 'punching machine',
        price: 999.99,
        description: 'Lets test that power and give it your best punch',
        image: 'https://th.bing.com/th/id/OIP.KuuedWPYiWHtuqGF89_pfQHaNJ?w=156&h=199&c=7&r=0&o=5&pid=1.7',
    },
    {
        id: 7,
        name: 'ski ball',
        price: 1799.99,
        description: 'Lets see those rolling skills in a classic game of ski ball',
        image: 'http://ts4.mm.bing.net/th?id=OIP.SFHWE1SrTvUIGA5HVEbxWQHaHa&pid=15.1',
    },
    
];

const machine =["Pacman", "moratal kombat", "retro racing", "dance dance","mario", "UFC Machine","Ski-Ball"];

const CatalogPage = () => {


    return (
        <div className="catalog-filter">
            <h1>Arcade Machines for Purchase</h1>

            { machine.map(cat => <button className='btn btn-sm btn-primary'>{cat}</button>)}
            <div className="machine-list">
                {arcadeMachines.map(machine => (
                    <Product data={machine} />
                ))}
            </div>
        </div>
    );
};

export default CatalogPage;