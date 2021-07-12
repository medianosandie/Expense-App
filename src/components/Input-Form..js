import './style/Input-Form.css'
import React,{useState} from 'react';

export default function InputForm({getData}){

    let [dataKeterangan,setDataKeterangan] = useState({});
    let [dataHargaSatuan,setDataHargaSatuan] = useState({});
    let [dataJumlah,setDataJumlah] = useState({});
    let [dataTotal,setDataTotal] = useState({});

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
    function updateDataTotal(e){
        let nilai = e.target.value;
        let objek = {
            total:nilai
        }
        setDataTotal(objek);
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
        document.querySelector("[name='keterangan']").value = ''
        document.querySelector("[name='hargaSatuan']").value = ''
        document.querySelector("[name='jumlah']").value = ''
        document.querySelector("[name='total']").value = ''
    }

    return(
        <React.Fragment>
            <div className="input-group">
                <section>
                    <label for="keterangan">keterangan</label>
                    <input type="text" name="keterangan" onChange={updateDataKeterangan}/>
                </section>
                <section>
                    <label for="harga-satuan">harga-satuan</label>
                    <input type="text" name="hargaSatuan" onChange={updateDataHargaSatuan}/>
                </section>
                <section>
                    <label for="jumlah">jumlah</label>
                    <input name="jumlah" type="number" onChange={updateDataJumlah}/>
                </section>
                <section>
                    <label for="total">total</label>
                    <input type="text" name="total" onChange={updateDataTotal} />
                </section>
                <button onClick={sendData}>tambah data</button>
            </div>
            
        </React.Fragment>
    );
}