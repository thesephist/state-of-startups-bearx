document.addEventListener('DOMContentLoaded', () => {

    const $$ = document.querySelectorAll.bind(document);

    const $blocks = $$('.block');

    const blockInViewport = bl => {
        const rects = bl.getBoundingClientRect();
        return rects.top < window.innerHeight;
    }

    const blockShouldReveal = bl => {
        const rects = bl.getBoundingClientRect();
        return rects.top < window.innerHeight * 0.75;
    }

    const revealVisibleBlocks = () => {
        requestAnimationFrame(() => {
            for (const bl of $blocks) {
                if (blockShouldReveal(bl)) {
                    bl.classList.remove('hidden');
                }
            }
        });
    }

    for (const bl of $blocks) {
        if (!blockInViewport(bl)) {
            bl.classList.add('hidden');
        }
    }

    window.addEventListener('scroll', () => {
        revealVisibleBlocks();
    }, {
        passive: true,
    });

});
