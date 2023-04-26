import React from 'react'
import Button from './Button'

//const list = ["all","live"];
//make a list and then map 

const ButtonList = () => {
  return (
    <div className='flex'>
        <Button name="All"/>
        <Button name="Live"/>
        <Button name="Songs"/>
        <Button name="Soccer"/>
        <Button name="Cricket"/>
        <Button name="News"/>
        <Button name="Gaming"/>
        <Button name="Anjunabeats"/>
        <Button name="DeepHouse"/>
        <Button name="Podcasts"/>
        <Button name="Coachella"/>
        <Button name="Comedy"/>
        <Button name="Dramedy"/>
        <Button name="Recents"/>
       

    </div>
  )
}

export default ButtonList