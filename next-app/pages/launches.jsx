import {useEffect, useState} from 'react'

export default function Launches({data}) {
    // const [data, setDate] = useState(null)
    // useEffect(()=>{
    //     const fetchLaunches = async() => {
    //         const res = await fetch('https://api.spacexdata.com/v3/launches')
    //         const data = await res.json();
    //         setDate(data);
    // }
    // fetchLaunches()
    // },[])
    if(data == null)return null
  return (
    <div>
        <ol>
            {data.map((launch,index)=>{
                return(<li key={index}>{launch.mission_name}</li>)
            })}
        </ol>
    </div>
  )
}

export async function getServerSideProps(context){
    const res = await fetch('https://api.spacexdata.com/v3/launches')
    const data = await res.json();

    console.log("getServerSideProps")
    return {
        props: {data},
    }
}


