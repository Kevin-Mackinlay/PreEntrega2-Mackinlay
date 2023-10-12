import React from "react";

function LoadingComponent () {
    const  [loading, setLoading ] = useState(true);

    useEffect(() => {
        setTimeout(()=> {
            setLoading(false);

    }, 10000);

    }, [ ]);

return <>
{loading ? <h2>Loading </h2> : <h3>Loaded!</h3>}
</>
}

export default function App(){
return <LoadingComponent/>
}