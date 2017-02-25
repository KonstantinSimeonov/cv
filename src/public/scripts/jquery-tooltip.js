'use strict';

$.fn.tooltip = function (options) {

    const { 
        html,
        size,
        css = {},
        removeOn: { selector, eventName }
    } = options;

    const tooltipHtml =
`<div class="tooltip tooltip-opaque">
    <p>${html}</p>
</div>`,
        $tooltip = $(tooltipHtml),
        $this = this;

    $this.prepend($tooltip);

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

    $tooltip.removeClass(add).addClass(remove);

    console.log(selector, eventName);

    $(selector).one(eventName, () => {
        console.log('zdrkp');
        $tooltip.remove();
    });
};
