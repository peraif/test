import {useEffect, useMemo, useState} from "react";
import {
    FIRST_PAGE,
    INITIAL_ITEM_ID,
    MAX_VISIBLE_BUTTONS, MINIMUM_THRESHOLD,
    NUMBER_OF_BUTTONS_LEFT,
    NUMBER_OF_BUTTONS_RIGHT,
    PAGINATION_GAP
} from "@core/constants/pagination";

interface IUsePaginate {
    maxLength: number;
    gap: number;
}

export function UsePaginate({maxLength = 0, gap = PAGINATION_GAP}: IUsePaginate) {
    const [showEndButton, setShowEndButton] = useState(false);
    const [showStartButton, setShowStartButton] = useState(false);
    const [ids, setIds] = useState({
        startId: INITIAL_ITEM_ID,
        endId: gap
    });
    const [activePage, setActivePage] = useState(FIRST_PAGE);
    const maxPages = maxLength / gap;

    const allPagesNumber = useMemo(() => {
        let result = [];
        for (let i = 0; i < maxLength / gap; i++) {
            result.push(i + FIRST_PAGE);
        }
        return result;
    }, [maxLength, gap]);

    const lastPage = allPagesNumber[allPagesNumber.length - FIRST_PAGE];

    const totalPages = useMemo(() => {
        if (maxPages > MAX_VISIBLE_BUTTONS && activePage >= MINIMUM_THRESHOLD) {
            if (activePage < (lastPage - NUMBER_OF_BUTTONS_RIGHT)) {
                return allPagesNumber.slice(activePage - NUMBER_OF_BUTTONS_LEFT, activePage + NUMBER_OF_BUTTONS_RIGHT);
            } else if (activePage === lastPage) {
                return allPagesNumber.slice(activePage - MAX_VISIBLE_BUTTONS);
            } else {
                return allPagesNumber.slice(activePage - (MAX_VISIBLE_BUTTONS - (maxPages - activePage + FIRST_PAGE)));
            }
        }
        return allPagesNumber.slice(0, MAX_VISIBLE_BUTTONS);
    }, [activePage, allPagesNumber]);

    useEffect(() => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    }, [activePage]);

    useEffect(() => {
        if (maxPages > MAX_VISIBLE_BUTTONS) {
            if (activePage <= (lastPage - NUMBER_OF_BUTTONS_LEFT)) {
                setShowEndButton(true);
            } else {
                setShowEndButton(false);
            }
            if (activePage > (allPagesNumber[0] + NUMBER_OF_BUTTONS_LEFT)) {
                setShowStartButton(true);
            } else {
                setShowStartButton(false);
            }
        }
    }, [activePage])

    const startFromTheFirstPage = () => {
        setIds({
            startId: INITIAL_ITEM_ID,
            endId: gap
        })
    }

    const toTheLastPage = (page: number) => {
        setIds({
            startId: (page * gap) - gap,
            endId: page * gap
        })
    }

    const handleClickPaginate = (page: number) => {
        if (page === FIRST_PAGE) {
            startFromTheFirstPage();
        } else {
            toTheLastPage(page);
        }
        setActivePage(page);
    }

    const goToStart = () => {
        startFromTheFirstPage();
        setActivePage(FIRST_PAGE);
    };
    const goToEnd = () => {
        setActivePage(lastPage);
        toTheLastPage(lastPage);
    };

    return {
        totalPages,
        handleClickPaginate,
        startId: ids.startId,
        endId: ids.endId,
        activePage,
        goToStart,
        goToEnd,
        showEndButton,
        showStartButton
    };
}