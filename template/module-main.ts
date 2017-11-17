import './module-common';
import * as fs from 'fs-extra';
import * as atomic from 'write-file-atomic';
import * as yargs from 'yargs';
import * as spawn from 'spawn-rx';
import * as persist from 'redux-persist';
import * as encrypt from 'redux-persist-transform-encrypt';
import * as filter from 'redux-persist-transform-filter';
import * as electronFetch from 'electron-fetch';
import * as archiver from 'archiver';
import * as temp from 'temp';

import { root } from 'getroot';
root.mainm = {
  fs,
  atomic,
  //yargs,
  //spawn,
  persist,
  encrypt,
  filter,
  electronFetch,
  archiver,
  temp
}