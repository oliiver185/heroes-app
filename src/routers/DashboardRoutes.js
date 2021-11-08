import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { DcScreen } from '../components/dc/DcScreen'
import { HeroScreen } from '../components/heros/HeroScreen'
import { MarvelScreen } from '../components/marvel/MarvelScreen'
import { SearchScreen } from '../components/search/SearchScreen'
import { Navbar } from '../components/ui/Navbar'

export const DashboardRoutes = () => {
    return (
        <>
           

          <Navbar />  
           <div className="marvel-background">

          <div className="container p-3 ">

              <Switch>
                  <Route exact path="/marvel" component={MarvelScreen}/>
                  <Route exact path="/hero/:heroId" component={HeroScreen}/>
                  {/* /:heroId, lo que significa que podemos usar el useParamsHook más adelante para obtener el parámetro de ruta. */}
                  <Route exact path="/dc" component={DcScreen}/>
                  <Route exact path="/search" component={SearchScreen}/>

                  <Redirect to="/marvel"/>
              </Switch>
          </div>
           </div>
        </>
    )
}

// the only difference between the first router is that this does not include <Router><Router>