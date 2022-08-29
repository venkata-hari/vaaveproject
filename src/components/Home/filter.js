import React,{Fragment} from 'react';

function Homefilter({f1}) {
    return (
        <Fragment>
      <button className="btn btn-dark p-3 border border-white" onClick={()=>f1("welcomedrink")}>welcomedrink</button>
      <button className="btn btn-dark p-3 border border-white" onClick={()=>f1("soup")}>soup</button>
      <button className="btn btn-dark p-3 border border-white" onClick={()=>f1("salad")}>salad</button>
      <button className="btn btn-dark p-3 border border-white" onClick={()=>f1("starters")}>starters</button>
      <button className="btn btn-dark p-3 border border-white" onClick={()=>f1("maincourses")}>maincourses</button>
      <button className="btn btn-dark p-3 border border-white" onClick={()=>f1("dessert")}>dessert</button>
      <button className="btn btn-dark p-3 border border-white" onClick={()=>f1("Chinese")}>Chinese</button>
      <button className="btn btn-dark p-3 border border-white" onClick={()=>f1("mexican")}>mexican</button>
      <button className="btn btn-dark p-3 border border-white" onClick={()=>f1("Italian")}>Italian</button>
        </Fragment>
    );
}

export default Homefilter;