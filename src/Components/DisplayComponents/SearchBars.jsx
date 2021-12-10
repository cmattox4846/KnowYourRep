import BillsSearch from "./BillsSearch";
import NominationSearch from "./NominationSearch";


const SearchBars = (props)=>{

    return (
        <div className="container">
            <BillsSearch searchBills={props.searchBills}/>
            <NominationSearch searchNominations={props.searchNominations}/>
          </div>
    )
}

export default SearchBars;