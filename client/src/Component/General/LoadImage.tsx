import React, { useRef } from 'react'

interface Prop {
    file: File | null,
    path: string,
    setPath: React.Dispatch<React.SetStateAction<string>>,
    setFile: React.Dispatch<React.SetStateAction<File | null>>,
}

export const LoadImage = ({file, path, setPath, setFile}: Prop) => {

    const imgRef = useRef<any>(null);
    const changeFile = (e: React.ChangeEvent<HTMLInputElement>) => {
        if(e.target.files && e.target.files.length > 0){
            const archivo = e.target.files[0];
            if(archivo.type.includes("image") && archivo.size < 4194304){
                const reader = new FileReader()
                reader.readAsDataURL(archivo)
               // console.log(reader.readAsDataURL(archivo))
                reader.onload = function load(){
                    
                    setPath(reader.result as string);
                }
                setFile(archivo)
            }
            
        }else{
            console.log('incorrecto')
        }
        
    }

    return (
        <div style={{width:"100%", height: '100%'}}>
            {file ? (
                <img 
                style={{width:"100%", height: '100%'}}
                src={path}
                alt= ''
                onClick={e =>  {
                    e.preventDefault()
                        imgRef.current.click()
                    }}
                    />
                ): (
                <button
                style={{width:"100%", height: '100%'}}
                onClick={(e) => {
                    e.preventDefault();
                    imgRef.current.click()
                }}>Elegir Foto</button>
                )
                }

            <input type="file" name="image" onChange={changeFile} style={{display:"none"}} ref={imgRef} />
        </div>
    ) 
}
