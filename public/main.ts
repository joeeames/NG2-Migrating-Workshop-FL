import { upgradeAdapter } from './app.module';

// this is done to make sure that typescript knows about all the rxjs operations
import './rxjsOperations';


upgradeAdapter.bootstrap(document.documentElement, ['app']);
