import React from 'react';
import PaginationItem from "@components/ordinary/PaginationItem";

import s from "./styles.module.scss";
import Image from "next/image";

interface PaginationProps {
    totalPages: number[];
    activePage: number;
    handleClickPaginate: (page: number) => void;
    goToStart: () => void;
    goToEnd: () => void;
    showEndButton: boolean;
    showStartButton: boolean;
}

const Pagination = ({
                        totalPages,
                        handleClickPaginate,
                        activePage,
                        goToStart,
                        goToEnd,
                        showEndButton,
                        showStartButton
                    }: PaginationProps) => {
    return (
        <ul className={s["pagination"]}>
            {showStartButton && (
                <PaginationItem className={s["pagination__start-button"]} onClick={goToStart}>
                    <Image width={24} height={24} src="/icons/arrow-with-underline.svg" alt="arrow"/>
                </PaginationItem>
            )}
            {totalPages.map((page) => (
                <PaginationItem
                    key={page}
                    active={page === activePage}
                    onClick={() => handleClickPaginate(page)}
                >
                    {page}
                </PaginationItem>
            ))}
            {showEndButton && (
                <PaginationItem className={s["pagination__end-button"]} onClick={goToEnd}>
                    <Image width={24} height={24} src="/icons/arrow-with-underline.svg" alt="arrow"/>
                </PaginationItem>
            )}
        </ul>
    );
};

export default Pagination;