function newMessage(){
    
    const message = "Hola";
    const title = " un saludo";
    
    return (
        
        `${message} Luis se te escucha regulero,${title}.`
       
    )

}

export const SecondApp = ()=>{

    return(

    <>
        <h1>{newMessage()}</h1>
        <p> Soy un titulo muy guapo</p>
    
    
    </>
    )


}