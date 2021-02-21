import { Suspense, lazy, useContext } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { NotificationContext } from '../context/notificationContext';
import ProtectedRoute from './ProtectedRoute';

const Login = lazy(() => import('../Auth').then(module => ({
  default: module.Login
})));

const Register = lazy(() => import('../Auth').then(module => ({
  default: module.Register
})));

const ResumeList = lazy(() => import('../Resumes').then(module => ({
  default: module.ResumeList
})));

const ResumeForm = lazy(() => import('../Resumes').then(module => ({
  default: module.ResumeForm
})));

const Resume = lazy(() => import('../Resumes').then(module => ({
  default: module.Resume
})));

library.add(fab)

function App() {
  const notificationContext = useContext(NotificationContext);

  return (
    <div className="md:container md:mx-auto">
      <Router>
        <header>
        </header>
        <main>
          {notificationContext.notification.message.length !== 0 &&
            <div className='md:w-2/4 mx-auto'>
              <div className='rounded-xl bg-secondary text-center m-2.5 p-2.5 text-red bg-white'>
                {notificationContext.notification.message}
              </div>
            </div>
          }
          <Suspense fallback={<div>Loading...</div>}>
            <Switch>
              <Route path='/register' component={Register} />
              <Route path='/login' component={Login} />
              <ProtectedRoute path='/resumes/:id/edit' component={ResumeForm} />
              <ProtectedRoute path='/resumes/new' component={ResumeForm} />
              <ProtectedRoute path='/resumes/:id' component={Resume} />
              <ProtectedRoute path='/resumes' component={ResumeList} />
            </Switch>
          </Suspense>
        </main>
      </Router>
      <footer>
      </footer>
    </div>
  );
}

export default App;
