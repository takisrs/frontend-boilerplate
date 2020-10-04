import './scss/main.scss';
import { initToggleShow } from "./js/helpers";
import { initLazyLoad } from "./js/lazyload";

initToggleShow();

initLazyLoad("lazy");

// Font Awesome
import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { config } from '@fortawesome/fontawesome-svg-core';
config.keepOriginalSource = false;
config.observeMutations = false;

import { faGithub } from "@fortawesome/fontawesome-free-brands/faGithub";

library.add(faGithub);

dom.i2svg();