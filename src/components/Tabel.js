
import React from 'react';
import TableHead from './Table-Head';
import TableBody from './Table-Body';

export default function Tabel({data,hapusData}){
    return(
        <table border="3">
            <TableHead/>
            <TableBody data={data} hapusData={hapusData}/>
        </table>
    );
}