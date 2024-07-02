import TopRock from "./TopRock";

function collections ({collections}) {
        // console.log(collections);
    return ( 
        <div className="p-10">
            <h1 className="text-center">Collections</h1>
            <TopRock collections={collections}/>  
           
        </div>
     );
}

export default collections;
