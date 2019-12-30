
import './wave.css';
import { handleEvenet } from '../../utils/directive';

const px = 'px';
const contextName = '@@waveContext';
const waveClassName = 'wave-ripple';
const waveActiveClassName = 'wave-active';

function handClick(params, e) {
    const { element, binding } = params;
    const customOptions = Object.assign({}, binding.value);
    const options = Object.assign({
        el: element,
        type: 'hit',
        color: 'rgba(255, 255, 255, 0.3)',
    }, customOptions);

    if (element) {
        element.style.overflow = 'hidden';
        element.style.position = 'relative';

        const rect = element.getBoundingClientRect();
        let ripple = element.querySelector(`.${waveClassName}`);

        if (!ripple) {
            ripple = document.createElement('span');
            ripple.className = waveClassName;
            ripple.style.height = ripple.style.width = Math.max(rect.width, rect.height) + px;
            element.appendChild(ripple);
        } else {
            ripple.className = waveClassName;
        }

        switch (options.type) {
            case 'center':
                ripple.style.top = rect.height / 2 - ripple.offsetHeight / 2 + px;
                ripple.style.left = rect.width / 2 - ripple.offsetWidth / 2 + px;
                break;
            default:
                const body = document.documentElement || document.body;

                ripple.style.top =
                    (e.pageY - rect.top - ripple.offsetHeight / 2 - body.scrollTop) + px;
                ripple.style.left =
                    (e.pageX - rect.left - ripple.offsetWidth / 2 - body.scrollLeft) + px;
                break;
        }

        ripple.style.backgroundColor = options.color;
        ripple.classList.add(waveActiveClassName);

        return false;
    }
}

export default {
    bind(element, binding, vnode) {
        const params = { element, binding, vnode };
        const handle = handleEvenet(contextName, params, handClick);

        element.addEventListener('click', handle, false);
    },
    update(element, binding, vnode) {
        const params = { element, binding, vnode };
        const handle = handleEvenet(contextName, params, handClick);

        element.removeEventListener('click', element[contextName].removeHandle, false);
        element.addEventListener('click', handle, false);
    },
    unbind(element) {
        element.removeEventListener('click', element[contextName].removeHandle, false);
        element[contextName] = null;
        delete element[contextName];
    }
};