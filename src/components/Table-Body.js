
import React from 'react';
import Row from './Row';

export default function TableBody({data,hapusData}){
    return (
        <tbody>
            {data.map((el,index)=>(
                <Row data={el} index={index} key={index} hapusData={hapusData}/>
            ))}
        </tbody>
    );
}