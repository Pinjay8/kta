import React, { useState, useRef, useEffect } from "react";
import { Inertia } from "@inertiajs/inertia";
import {
    useTable,
    useFilters,
    useGlobalFilter,
    useAsyncDebounce,
    useSortBy,
    usePagination,
} from "react-table";

import {
    ChevronDoubleLeftIcon,
    ChevronLeftIcon,
    ChevronRightIcon,
    ChevronDoubleRightIcon,
} from "@heroicons/react/solid";
import { Button, PageButton } from "@/Components/Button";
import { classNames } from "@/Components/Utils";
import PrimaryButton from "@/Components/PrimaryButton";
import SecondaryButton from "@/Components/SecondaryButton";
import TextInput from '@/Components/TextInput';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import DangerButton from "@/Components/DangerButton";
// import Modal from '@/Components/Modal';
import { Modal, Badge } from "flowbite-react";

// import RateStar from "@/Components/RateStar";

{/* <ChevronLeftIcon className="h-5 w-5 text-blue-500" />; */}


export function ModalAnggota({ row }) {
   
    const [confirmingUserDeletion, setConfirmingUserDeletion] = useState(false);
    const confirmUserDeletion = () => {
        setConfirmingUserDeletion(true);
    };

    const closeModal = () => {
        setConfirmingUserDeletion(false);

        reset();
    };
    return (
        <>
            <DangerButton onClick={confirmUserDeletion}>Delete Account</DangerButton>
            <Modal show={confirmingUserDeletion} onClose={closeModal}>

                    <h2 className="text-lg font-medium text-gray-900">
                        Are you sure you want to delete your account?
                    </h2>

                    <p className="mt-1 text-sm text-gray-600">
                        Once your account is deleted, all of its resources and data will be permanently deleted. Please
                        enter your password to confirm you would like to permanently delete your account.
                    </p>






                    <div className="mt-6 flex justify-end">
                        <SecondaryButton onClick={closeModal}>Cancel</SecondaryButton>

                        <DangerButton className="ml-3" >
                            Delete Account
                        </DangerButton>
                    </div>

            </Modal>
        </>
    );
}

export function SelectColumnFilter({
    column: { filterValue, setFilter, preFilteredRows, id, render },
}) {
    // Calculate the options for filtering
    // using the preFilteredRows
    const options = React.useMemo(() => {
        const options = new Set();
        preFilteredRows.forEach((row) => {
            options.add(row.values[id]);
        });
        return [...options.values()];
    }, [id, preFilteredRows]);

    // Render a multi-select box
    return (
        <label className="flex gap-x-2 items-baseline">
            <span className="text-gray-700">{render("Header")}: </span>
            <select
                className="rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                name={id}
                id={id}
                value={filterValue}
                onChange={(e) => {
                    setFilter(e.target.value || undefined);
                }}
            >
                <option value="">All</option>
                {options.map((option, i) => (
                    <option key={i} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </label>
    );
}

function GlobalFilter({
    preGlobalFilteredRows,
    globalFilter,
    setGlobalFilter,
}) {
    const count = preGlobalFilteredRows.length;
    const [value, setValue] = React.useState(globalFilter);
    const onChange = useAsyncDebounce((value) => {
        setGlobalFilter(value || undefined);
    }, 200);

    return (
        <label className="flex gap-x-2 items-baseline">
            <span className="text-gray-700">Search: </span>
            <input
                type="text"
                className="rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                value={value || ""}
                onChange={(e) => {
                    setValue(e.target.value);
                    onChange(e.target.value);
                }}
                placeholder={`${count} records...`}
            />
        </label>
    );
}

function TableData({ columns, data }) {
    // Use the state and functions returned from useTable to build your UI
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
        page,
        canPreviousPage,
        canNextPage,
        pageOptions,
        pageCount,
        gotoPage,
        nextPage,
        previousPage,
        setPageSize,
        state,
        preGlobalFilteredRows,
        setGlobalFilter,
    } = useTable(
        {
            columns,
            data,
        },
        useGlobalFilter,
        useFilters,
        useSortBy,
        usePagination
    );

    // Render the UI for your table
    return (
        <>
            <div className="flex gap-x-2">
                <GlobalFilter
                    preGlobalFilteredRows={preGlobalFilteredRows}
                    globalFilter={state.globalFilter}
                    setGlobalFilter={setGlobalFilter}
                />
                {headerGroups.map((headerGroup) =>
                    headerGroup.headers.map((column) =>
                        column.Filter ? (
                            <div key={column.id}>
                                {/* <label htmlFor={column.id}></label> */}
                                {column.render("Filter")}
                            </div>
                        ) : null
                    )
                )}
            </div>
            <div className="mt-4 flex flex-col">
                <div className="-my-2 lg:overflow-x-auto -mx-4 sm:-mx-6 lg:-mx-8">
                    <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                        <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                            <table
                                {...getTableProps()}
                                className="min-w-full divide-y divide-gray-200"
                            >
                                <thead className="bg-gray-50">
                                    {headerGroups.map((headerGroup) => (
                                        <tr
                                            {...headerGroup.getHeaderGroupProps()}
                                        >
                                            {headerGroup.headers.map(
                                                (column) => (
                                                    // Add the sorting props to control sorting. For this example
                                                    // we can add them into the header props
                                                    <th
                                                        scope="col"
                                                        className="px-6 py-3 text-left text-xs font-bold text-black uppercase tracking-wider"
                                                        {...column.getHeaderProps(
                                                            column.getSortByToggleProps()
                                                        )}
                                                    >
                                                        {column.render(
                                                            "Header"
                                                        )}
                                                        {/* Add a sort direction indicator */}
                                                        <span>
                                                            {column.isSorted
                                                                ? column.isSortedDesc
                                                                    ? " ▼"
                                                                    : " ▲"
                                                                : ""}
                                                        </span>
                                                    </th>
                                                )
                                            )}
                                        </tr>
                                    ))}
                                </thead>
                                <tbody
                                    {...getTableBodyProps()}
                                    className="bg-white divide-y divide-gray-200"
                                >
                                    {page.map((row, i) => {
                                        // new
                                        prepareRow(row);
                                        return (
                                            <tr {...row.getRowProps()}>
                                                {row.cells.map((cell) => {
                                                    return (
                                                        <td
                                                            {...cell.getCellProps()}
                                                            className="px-6 py-4 text-black text-sm whitespace-nowrap"
                                                        >
                                                            {cell.render(
                                                                "Cell"
                                                            )}
                                                        </td>
                                                    );
                                                })}
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            <div className="py-3 flex items-center justify-between">
                <div className="flex-1 flex justify-between sm:hidden">
                    <Button
                        onClick={() => previousPage()}
                        disabled={!canPreviousPage}
                    >
                        Previous
                    </Button>
                    <Button onClick={() => nextPage()} disabled={!canNextPage}>
                        Next
                    </Button>
                </div>
                <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                    <div className="flex gap-x-2 items-baseline">
                        <span className="text-sm text-gray-700">
                            Page{" "}
                            <span className="font-medium">
                                {state.pageIndex + 1}
                            </span>{" "}
                            of{" "}
                            <span className="font-medium">
                                {pageOptions.length}
                            </span>
                        </span>
                        <label>
                            <span className="sr-only">Items Per Page</span>
                            <select
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                value={state.pageSize}
                                onChange={(e) => {
                                    setPageSize(Number(e.target.value));
                                }}
                            >
                                {[5, 10, 20].map((pageSize) => (
                                    <option key={pageSize} value={pageSize}>
                                        Show {pageSize}
                                    </option>
                                ))}
                            </select>
                        </label>
                    </div>
                    <div>
                        <nav
                            className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
                            aria-label="Pagination"
                        >
                            <PageButton
                                className="rounded-l-md"
                                onClick={() => gotoPage(0)}
                                disabled={!canPreviousPage}
                            >
                                <span className="sr-only">First</span>
                                {/* <ChevronDoubleLeftIcon
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                /> */}
                            </PageButton>
                            <PageButton
                                onClick={() => previousPage()}
                                disabled={!canPreviousPage}
                            >
                                <span className="sr-only">Previous</span>
                                {/* <ChevronLeftIcon
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                /> */}
                            </PageButton>
                            <PageButton
                                onClick={() => nextPage()}
                                disabled={!canNextPage}
                            >
                                <span className="sr-only">Next</span>
                                {/* <ChevronRightIcon
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                /> */}
                            </PageButton>
                            <PageButton
                                className="rounded-r-md"
                                onClick={() => gotoPage(pageCount - 1)}
                                disabled={!canNextPage}
                            >
                                <span className="sr-only">Last</span>
                                {/* <ChevronDoubleRightIcon
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                /> */}
                            </PageButton>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    );
}

export default TableData;