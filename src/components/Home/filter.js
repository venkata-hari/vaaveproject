import React,{Fragment} from 'react';

function Homefilter({f1}) {
    return (
        <Fragment>
      <button className="btn btn-dark p-3 border border-white" onClick={()=>f1("welcomedrink")}>Welcomedrink</button>
      <button className="btn btn-dark p-3 border border-white" onClick={()=>f1("soup")}>Soup</button>
      <button className="btn btn-dark p-3 border border-white" onClick={()=>f1("salad")}>Salad</button>
      <button className="btn btn-dark p-3 border border-white" onClick={()=>f1("starters")}>Starters</button>
      <button className="btn btn-dark p-3 border border-white" onClick={()=>f1("maincourses")}>Maincourses</button>
      <button className="btn btn-dark p-3 border border-white" onClick={()=>f1("dessert")}>dessert</button>
      <button className="btn btn-dark p-3 border border-white" onClick={()=>f1("Chinese")}>Chinese</button>
      <button className="btn btn-dark p-3 border border-white" onClick={()=>f1("mexican")}>mexican</button>
      <button className="btn btn-dark p-3 border border-white" onClick={()=>f1("Italian")}>Italian</button>
        </Fragment>
    );
}

export default Homefilter;