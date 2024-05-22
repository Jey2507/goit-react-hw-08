import { DNA } from 'react-loader-spinner'

import css from "../Spiner/Spiner.module.css"

export default function Spiner() {
    return (
    <div className={css.spiner}>
            <DNA 
            visible={true}
            height="60"
            width="60"
            />
        </div>
            
        
    )
}