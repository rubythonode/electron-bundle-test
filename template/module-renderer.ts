import './module-common';
import * as react from 'react';
import * as formdata from 'form-data';
import * as hammerjs from 'hammerjs';
import * as css from 'react-addons-css-transition-group';
import * as dom from 'react-dom';
import * as motion from 'react-motion';
import * as reactstr from 'react-string-replace-recursively';
import * as recompose from 'recompose';
import * as idle from 'rxjs-requestidlecallback-scheduler';
import * as classnames from 'classnames';
import * as color from 'color';

import { root } from 'getroot';
root.renderer = {
  react,
  formdata,
  hammerjs,
  css,
  dom,
  motion,
  reactstr,
  recompose,
  idle,
  classnames,
  color
}