import { useState } from "react"

export const Qrcode = () => {
  const[img,setImage]=useState("");
  const[loading,setLoading]=useState(false);
  const [Qrdata,setQr]=useState("https://google.com/")
  const[qrsize,setsize]=useState("100")
  async function generate(){
    setLoading(true);
    try{
      const url=`https://api.qrserver.com/v1/create-qr-code/?size=${qrsize}x${qrsize}&data=${encodeURIComponent(Qrdata)}`
      setImage(url)
    } 
    catch(error){console.log(error)}
  
  finally{
    setLoading(false)
  }
}



  function download(){
    fetch(img).then((response)=>response.blob()).then((blob)=>{
      const link=document.createElement('a')
      link.href=URL.createObjectURL(blob);
      link.download="Qr.png"
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link).catch((error)=>{console.log("Error downloading QR code ",error)})
    })
  }
  return (
    <div className="container">
      <h1>QR-Code Generator</h1>
     {loading &&  <p>Loading...</p>}
      {img &&  <img src={img} alt="" />}
      <div>
        <label htmlFor="input" className="label">Data for Qrcode</label>
        <input type="text" id="input" placeholder="Enter Data for Qrcode" value={Qrdata} onChange={(e)=>setQr(e.target.value)} />
        <label htmlFor="size" className="label">Image size (eg.100)</label>
        <input type="text" id="size" placeholder="Enter Image Size" value={qrsize} onChange={(e)=>setsize(e.target.value)}/>
        <button className="generate" disabled={loading} onClick={generate} >Generate Qr Code</button>
        <button className="download" onClick={download}>Download QrCode</button>
      </div>
      
    </div>
  )


}

