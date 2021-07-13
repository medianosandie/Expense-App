
import React from 'react';

export default function Row({data,index,hapusData}){

    function hapusRow(e){
        e.preventDefault();
        hapusData(index);
    }
    return(
        <React.Fragment>
            <tr>
                <td style={{textAlign:"center"}}>{index+1}</td>
                <td>{data.keterangan}</td>
                <td>{data.hargaSatuan}</td>
                <td style={{textAlign:"center"}}>{data.jumlah}</td>
                <td style={{textAlign:"center"}}>{data.total}</td>
                <td><button onClick={hapusRow} id="delete-button">Hapus Data</button></td>
            </tr>                    
        </React.Fragment>
    );
}