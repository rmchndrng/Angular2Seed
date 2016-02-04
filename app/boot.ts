import {bootstrap} from 'angular2/platform/browser'
import {AppComponent} from './components/app.component'

import {Logger} from './services/logger'

bootstrap(AppComponent,[Logger]);