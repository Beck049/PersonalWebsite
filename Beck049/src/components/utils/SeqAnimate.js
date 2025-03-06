import { ref } from "vue";

export function SeqAnimate(divRefs) {
    const observer = ref(null);
    const hasAnimated = ref(false);
    const hasAnimatedReverse = ref(false);

    const observeElements = () => {
        observer.value = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && entry.intersectionRatio >= 0.3) {
                    const delay = entry.target.dataset.index
                        ? Number(entry.target.dataset.index) * 300
                        : 0;
                    setTimeout(() => {
                        entry.target.classList.add("fade-in");
                        entry.target.classList.remove("fade-out");
                    }, delay);
                    hasAnimated.value = true;
                    hasAnimatedReverse.value = false;
                    } else if (!entry.isIntersecting) {
                    entry.target.classList.remove("fade-in");
                    entry.target.classList.add("fade-out");
                    hasAnimated.value = false;
                    hasAnimatedReverse.value = true;
                    }
                });
            },
            { threshold: 0.3 }
        );

        divRefs.value.forEach((el, index) => {
            el.dataset.index = index.toString();
            observer.value?.observe(el);
        });
    };

    const stopObserving = () => {
        observer.value?.disconnect();
    };

    const handleVisibilityChange = () => {
        if (document.visibilityState === "hidden") {
            divRefs.value.forEach((el) => {
                el.classList.remove("fade-in");
                el.classList.add("fade-out");
            });
            hasAnimated.value = false;
            hasAnimatedReverse.value = true;
        }
    };

    return {
        observeElements,
        stopObserving,
        handleVisibilityChange,
        hasAnimated,
        hasAnimatedReverse,
    };
}
