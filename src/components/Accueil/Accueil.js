import React, { Component } from 'react'

import './Accueil.css'
  
export class Accueil extends Component {
    render() {
        return (
            <div>
                <div className="Accueil">
                    <p>
                        <h2> DEJA UN COMPTE SEPHORA ? </h2>
                    </p>
                    <p>
                        Connectez-vous pour retrouver vos avantages. 
                    </p>
                    <form >
                        <label>
                            <input type="email" name="name" placeholder="Email*" className="champs" required/>
                        </label>
                        <p/>
                        <label>
                            <input type="password" name="password" placeholder ="Mot de passe*" className="champs" required/> 
                        </label>
                        <p/>
                        <input type="submit" value="Me connecter" className="button"/> <h6><a href="forgetPasswordController" className="forget">Mot de passe oublié ?</a> </h6>
                    </form>
                    <br/>
                    <h2> PAS ENCORE DE COMPTE ? </h2>
                    - Créez un compte pour profiter de tous les avantages.<br/>
                    - Rejoignez le <a href ="/">programme de fidélité</a> dès votre premier achat. <p/>

                    <input type="submit" value="Créer un compte" className="button"/>
                </div>

            </div>
        )
    }
}

export default Accueil