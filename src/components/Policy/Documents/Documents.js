import React from 'react'
import classes from './Documents.module.scss'

export const Documents = () => {
    return (
        <div className={classes.Documents}>
          <div className={classes.docTitle}> Необхідні документи</div>
          <div className={classes.docName}>  
            <p>1. Паспорт (вік особи, що орендує авто не менше 21 року);</p>
            <p>2. Водійські права (стаж водіння не менше 2 років);</p>
            <p>3. Банківська картка (іменна, особи що керуватиме авто).</p>
          </div>
        </div> 
    )
}     