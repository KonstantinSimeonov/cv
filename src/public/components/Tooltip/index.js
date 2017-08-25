import $ from 'jquery';
import './jquery-tooltip.styl';

export default {
    render(data) {
        const {
            html: children,
            size,
            css = {},
            removeOn: { selector, eventName }
        } = data;

        const tooltipHtml = `<div class="tooltip opaque"><p></p></div>`;
        const $tooltip = $(tooltipHtml);

        $tooltip.find('p').append(children);

        $tooltip.width(size);

        $tooltip
            .css({ left: -$tooltip.outerWidth() - 30 + 'px' })
            .css(css);

        let remove = 'transparent',
            add = 'opaque';

        $tooltip.on('transitionend', () => {
            $tooltip.removeClass(remove).addClass(add);
            [add, remove] = [remove, add];
        });

        setTimeout(() => $tooltip.removeClass(add).addClass(remove), 1000);

        $(selector).one(eventName, () => $tooltip.remove());

        return $tooltip;
    }
};
