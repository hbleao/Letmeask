import { Switch, Route } from 'react-router';

import { Home } from '../page/Home';
import { NewRoom } from '../page/NewRoom';
import { Room } from '../page/Room';
import { AdminRoom } from '../page/AdminRoom';

export const Routes = () => {

  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/rooms/new" exact component={NewRoom} />
      <Route path="/rooms/:id" component={Room} />
      <Route path="/admin/rooms/:id" component={AdminRoom} />
    </Switch>
  )
}