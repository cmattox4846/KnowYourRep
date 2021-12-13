import { Link } from "react-router-dom"

const SenatorByStateTable =(props)=>{
    return(
        <div className=" Statetable2">
            <table className="Statewrapper">
                    
                                <thead>
                                    <tr >
                                        <td className="Statecellheader">Member ID </td>
                                        <td className="Statecellheader">First Name </td>
                                        <td className="Statecellheader">Last Name </td>
                                        <td className="Statecellheader">Party Abv.</td>
                                        <td className="Statecellheader">State </td>
                                        <td className="Statecellheader">Office Address </td>
                                        <td className="Statecellheader">Phone</td>
    
                                    </tr>
                                </thead>
                                <tbody><tr>
                                </tr>
                                {props.senatorByStateInput.map((senator) => {
                                 return(
                                    <tr key={senator.id}>
                                        <td className="Statecell1"><Link to='/Senators' state={{id: senator.id}}>{senator.id}</Link></td>
                                        <td className="Statecell1">{senator.first_name}</td>
                                        <td className="Statecell1">{senator.last_name}</td>
                                        <td className="Statecell1">{senator.party}</td>
                                        <td className="Statecell1">{senator.state}</td>
                                        <td className="Statecell1">{senator.office}</td>
                                        <td className="Statecell1">{senator.phone}</td>
                                        
                                        
                                        </tr>
                                        
                                 )
                                })}
                                </tbody>
                            </table>
                    </div>

    )
}
export default SenatorByStateTable