import './style/Input-Form.css'
import React,{useState,useEffect} from 'react';

export default function InputForm({getData}){

    let [dataKeterangan,setDataKeterangan] = useState({});
    let [dataHargaSatuan,setDataHargaSatuan] = useState({});
    let [dataJumlah,setDataJumlah] = useState({});
    let [dataTotal,setDataTotal] = useState({});

    useEffect(()=>{

        setDataTotal({
            total : parseInt(dataHargaSatuan.hargaSatuan) * parseInt(dataJumlah.jumlah)
        });

    },[dataJumlah.jumlah,dataHargaSatuan.hargaSatuan]);

    function updateDataKeterangan(e){
        let nilai = e.target.value;
        let objek = {
            keterangan:nilai
        }
        setDataKeterangan(objek);
    }
    function updateDataHargaSatuan(e){
        let nilai = e.target.value;
        let objek = {
            hargaSatuan:nilai
        }
        setDataHargaSatuan(objek);
    }
    function updateDataJumlah(e){
        let nilai = e.target.value;
        let objek = {
            jumlah:nilai
        }
        setDataJumlah(objek);
    }

    function sendData(){
      
        let jointObject = {
            ...dataKeterangan,
            ...dataHargaSatuan,
            ...dataJumlah,
            ...dataTotal
        }
        getData(jointObject);
        clearValue();
    }

    function clearValue(){
        document.querySelector("[name='keterangan']").value = '';
        document.querySelector("[name='hargaSatuan']").value = '';
        document.querySelector("[name='jumlah']").value = '';
    }

    return(
        <React.Fragment>
            <div className="input-group">
                <section>
                    <label for="keterangan">Keterangan</label>
                    <input type="text" name="keterangan" onChange={updateDataKeterangan}/>
                </section>
                <section>
                    <label for="harga-satuan">Harga Satuan</label>
                    <input type="text" name="hargaSatuan" onChange={updateDataHargaSatuan}/>
                </section>
                <section>
                    <label for="jumlah">Jumlah</label>
                    <input name="jumlah" type="number" onChange={updateDataJumlah}/>
                </section>
                <button onClick={sendData}>Tambah Data</button>
            </div>
            
        </React.Fragment>
    );
}