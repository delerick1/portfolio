import React from 'react';
import Cards from './Cards'

const AllCards = () => {
    return (
        <div>
             <Cards title= 'All about me' item1= 'friendly' item2= 'honest' item3='dedicated' bg="yellow"/>
    <Cards title= 'Hobbies' item1= 'gambeling' item2= 'sports' item3='gaming' bg='purple'/>
    <Cards title= 'Favorite Food' item1= 'All mexican food' item2= 'Chine food' item3='Sea food' bg="red"/>
    <Cards title= 'Favorite Music' item1= 'Rap' item2= 'Rancheras' item3='Cumbias' bg="lightblue"/>
    <Cards title= 'Favorite Movies' item1= 'Trainingday' item2= 'Hulk' item3='Anger Managment' bg="green"/>

        </div>
    );
};

export default AllCards;