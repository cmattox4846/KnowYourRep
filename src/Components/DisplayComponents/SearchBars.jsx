import BillsSearch from "./BillsSearch";
import NominationSearch from "./NominationSearch";


const SearchBars = (props)=>{

    return (
        <div className="container">
            <div className="row">
            <div className="col-md-6">
            <BillsSearch searchBills={props.searchBills}/>
            </div>
            <div className="col-md-6">
            <NominationSearch searchNominations={props.searchNominations}/>
            </div>
            </div>
          </div>
    )
}

export default SearchBars;