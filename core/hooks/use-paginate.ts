import {useEffect, useMemo, useState} from "react";

interface IUsePaginate {
    maxLength: number;
    gap: number;
}

export function UsePaginate({maxLength = 0, gap = 10}: IUsePaginate) {
    const [showEndButton, setShowEndButton] = useState(false);
    const [showStartButton, setShowStartButton] = useState(false);
    const [ids, setIds] = useState({
        startId: 0,
        endId: gap
    });
    const [activePage, setActivePage] = useState(1);

    const allPagesNumber = useMemo(() => {
        let result = [];
        for (let i = 0; i < maxLength / gap; i++) {
            result.push(i + 1);
        }
        return result;
    }, [maxLength, gap]);

    const lastPage = allPagesNumber[allPagesNumber.length - 1];

    const totalPages = useMemo(() => {
        if (maxLength / gap > 7 && activePage >= 5) {
            if (activePage < (lastPage - 3)) {
                return allPagesNumber.slice(activePage - 4, activePage + 3);
            } else if (activePage === lastPage) {
                return allPagesNumber.slice(activePage - 7);
            } else {
                return allPagesNumber.slice(activePage - (7 - ((maxLength / gap) - activePage + 1)));
            }
        }
        return allPagesNumber.slice(0, 7);
    }, [activePage, maxLength, gap, allPagesNumber]);

    useEffect(() => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    }, [activePage]);

    useEffect(() => {
        if (maxLength / gap > 7 && activePage < (lastPage - 3) && activePage >= 5) {
            setShowEndButton(true);
        } else {
            setShowEndButton(false);
        }
        if (maxLength / gap > 7 && activePage > (allPagesNumber[0] + 3)) {
            setShowStartButton(true);
        } else {
            setShowStartButton(false);
        }
    }, [maxLength, gap, activePage])

    const handleClickPaginate = (page: number) => {
        if (page === 1) {
            setIds({
                startId: 0,
                endId: gap
            })
        } else {
            setIds({
                startId: (page * gap) - gap,
                endId: page * gap
            })
        }
        setActivePage(page);
    }

    const goToStart = () => {
        setIds({
            startId: 0,
            endId: gap
        })
        setActivePage(1);
    };
    const goToEnd = () => {
        setActivePage(lastPage);
        setIds({
            startId: (lastPage * gap) - gap,
            endId: lastPage * gap
        })
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