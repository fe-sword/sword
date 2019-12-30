/*
 * @Author: liupei
 * @Date: 2019-11-15 17:41:14
 * @Last Modified by: liupei
 * @Last Modified time: 2019-12-27 14:59:20
 */

// Component
import Aside from './components/aside/aside';
import Avatar from './components/avatar/avatar';
import Badge from './components/badge/badge';
import Button from './components/button/button';
import Col from './components/col/col';
import Container from './components/container/container';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import Link from './components/link/link';
import Main from './components/main/main';
import Row from './components/row/row';

// Directive
import wave from './directives/wave/wave';

const components = {
    Aside,
    Avatar,
    Badge,
    Button,
    Col,
    Container,
    Footer,
    Header,
    Link,
    Main,
    Row,
};

const directives = {
    wave,
};

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
