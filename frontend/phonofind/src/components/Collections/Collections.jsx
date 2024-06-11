import TopRock from "./TopRock";

function collections ({collections}) {
        // console.log(collections);
    return ( 
        <div>
            <h1>Collections</h1>
            <TopRock collections={collections}/>  
           
        </div>
     );
}

export default collections;
