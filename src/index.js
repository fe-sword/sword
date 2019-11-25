/*
 * @Author: liupei
 * @Date: 2019-11-15 17:41:14
 * @Last Modified by: liupei
 * @Last Modified time: 2019-11-25 17:57:20
 */

import Badge from './components/badge/badge';
import Link from './components/link/link';

const components = {
    Badge,
    Link,
};

const directives = {};

const prototypes = {};

const filters = {};

function install(Vue, options = {}) {
    if (Vue.install) {
        return null;
    }

    Object.keys(components).forEach(key => {
        const component = components[key];

        Vue.component(key, component);
        Vue.component(`s-${key.toLocaleLowerCase()}`, component);

        if (key.indexOf('s') !== 0) {
            Vue.component(`s${key}`, component);
        }
    });

    Object.keys(filters).forEach(key => {
        Vue.filter(key, filters[key]);
    });

    Object.keys(directives).forEach(key => {
        Vue.directive(key, directives[key]);
    });

    Object.keys(prototypes).forEach(key => {
        Vue.prototype[key] = prototypes[key];
    });
};

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

const SwordUI = Object.assign(prototypes);

SwordUI.install = install;

export default SwordUI;
