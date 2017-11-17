//shouldn't do this in production, just for test to give load
import * as uuid from 'uuid';
import * as Rx from 'rxjs';
import * as _ from 'lodash';
import * as circularJson from 'circular-json';
import * as cliTable from 'cli-table';
import * as connect from 'connect';
import * as debug from 'debug';
import * as electronRedux from 'electron-redux';
import * as stackparesr from 'error-stack-parser';
import * as fsa from 'flux-standard-action';
import * as hashid from 'hashids';
import * as jszip from 'jszip';
import * as cache from 'lru-cache';
import * as messageformat from 'message-format';
import * as redux from 'redux';
import * as reduxAct from 'redux-act';
import * as reduxObservable from 'redux-observable';
import * as serial from 'rxjs-serial-subscription';
import * as semver from 'semver';
import * as signals from 'signals';
import * as winston from 'winston';

import { root } from 'getroot';
root.common = {
  uuid,
  Rx,
  _,
  circularJson,
  cliTable,
  connect,
  debug,
  electronRedux,
  stackparesr,
  fsa,
  hashid,
  jszip,
  cache,
  messageformat,
  redux,
  reduxAct,
  reduxObservable,
  serial,
  semver,
  signals,
  winston
}