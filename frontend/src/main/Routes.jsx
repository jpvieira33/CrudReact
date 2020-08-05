import React from 'react'
import {Switch, Route} from 'react-router'

import Home from '../templates/home/Home'
import UserCrud from '../templates/user/UserCrud'

export default props =>
<Switch>
    <Route exact path='/' component={Home} />
    <Route path='/users' component={UserCrud} />
    <Route from='*' to='/' />
</Switch>