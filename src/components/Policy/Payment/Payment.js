import React from 'react'
import classes from './Payment.module.scss'

export const Payment = () => {
    return (
        <div className={classes.Payment}>
          <div className={classes.paymentTitle}>Оплата:</div>
          <div className={classes.paymentFeatures}> 
            <p>Оплата за послуги з прокату автомобіля здійснюється за допомогою банківських карт.</p>
            <p>До оплати приймається картки типу Visa або MasterCard. Не приймаються картки типу American Express, Visa Electron і Maestro.</p>
            <p>На момент підписання договору прокату автомобіля повністю оплачується вартість прокату автомобіля та блокується депозит.</p>
          </div>
            
        </div> 
    )
}     