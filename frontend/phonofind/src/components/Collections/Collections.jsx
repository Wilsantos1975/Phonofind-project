import TopRock from "./TopRock";

function collections ({collections}) {
        
    return ( 
        <div className="p-10">
            <h1 className="text-center">Collections</h1>
            <TopRock collections={collections}/>  
           
        </div>
     );
}

export default collections;
