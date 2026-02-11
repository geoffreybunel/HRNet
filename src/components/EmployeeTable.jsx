import { useReactTable, getCoreRowModel, getSortedRowModel, getFilteredRowModel, getPaginationRowModel, flexRender } from "@tanstack/react-table";
import { useMemo, useState } from "react";
import { format } from "date-fns";

function EmployeeTable({ data }) {
    const [sorting, setSorting] = useState([]);
    const [globalFilter, setGlobalFilter] = useState("");

    const columns = useMemo(
        () => [
            { accessorKey: "firstName", header: "First Name" },
            { accessorKey: "lastName", header: "Last Name" },
            { 
                accessorKey: "startDate", 
                header: "Start Date" ,
                cell: ({ getValue }) => {
                    const value = getValue();
                    return value ? format(new Date(value), "MM/dd/yyyy") : "";
                }
            },
            { accessorKey: "department", header: "Department" },
            { 
                accessorKey: "dateOfBirth", 
                header: "Date of Birth",
                cell: ({ getValue }) => {
                    const value = getValue();
                    return value ? format(new Date(value), "MM/dd/yyyy") : "";
                }
            },
            { accessorKey: "street", header: "Street" },
            { accessorKey: "city", header: "City" },
            { accessorKey: "state", header: "State" },
            { accessorKey: "zipCode", header: "Zip Code" },
        ],
        []
    );

    const table = useReactTable({
        data,
        columns,
        state: {
          sorting,
          globalFilter,
        },
        onSortingChange: setSorting,
        onGlobalFilterChange: setGlobalFilter,
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
    });

    const pageCount = table.getPageCount();
    const currentPage = table.getState().pagination.pageIndex;
    
    return (
        <div className="employee-table_wrapper">
            {/* Top controls */}
            <div className="table-controls">
                <div>
                    Show{" "}
                    <select
                        value={table.getState().pagination.pageSize}
                        onChange={(e) => table.setPageSize(Number(e.target.value))}
                        id="entries"
                    >
                        {[5, 10, 25, 50, 100].map((size) => (
                            <option key={size} value={size}>
                                {size}
                            </option>
                        ))}
                    </select>{" "}
                    entries
                </div>

                <div>
                    Search:{" "}
                    <input
                        value={globalFilter ?? ""}
                        onChange={(e) => setGlobalFilter(e.target.value)}
                        id="searchBar"
                    />
                </div>
            </div>

            {/* Table */}
            <table>
                <thead>
                    {table.getHeaderGroups().map((headerGroup) => (
                        <tr key={headerGroup.id}>
                            {headerGroup.headers.map((header) => (
                                <th
                                    key={header.id}
                                    onClick={header.column.getToggleSortingHandler()}
                                    style={{ cursor: "pointer" }}
                                >
                                    {flexRender(
                                        header.column.columnDef.header,
                                        header.getContext()
                                    )}
                                    {{
                                        asc: " 🔼",
                                        desc: " 🔽",
                                    }[header.column.getIsSorted()] ?? ""}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>

                <tbody>
                    {table.getRowModel().rows.map((row) => (
                        <tr key={row.id}>
                            {row.getVisibleCells().map((cell) => (
                                <td key={cell.id}>
                                    {flexRender(
                                        cell.column.columnDef.cell ??
                                        cell.column.columnDef.accessorKey,
                                        cell.getContext()
                                    )}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>

            <div className="table-lower-controls">
                {/* Entry counter */}
                <div>
                    Showing{" "}
                    {table.getState().pagination.pageIndex *
                    table.getState().pagination.pageSize +
                    1}{" "}
                    to{" "}
                    {Math.min(
                    (table.getState().pagination.pageIndex + 1) *
                        table.getState().pagination.pageSize,
                    data.length
                    )}{" "}
                    of {data.length} entries
                </div>

                {/* Pagination */}
                <div className="pagination">
                    <button onClick={() => table.previousPage()} disabled={!table.getCanPreviousPage()}>
                        Previous
                    </button>

                    {Array.from({ length: pageCount }, (_, index) => (
                        <button
                            key={index}
                            onClick={() => table.setPageIndex(index)}
                            disabled={index === currentPage}
                        >
                            {index + 1}
                        </button>
                    ))}

                    <button onClick={() => table.nextPage()} disabled={!table.getCanNextPage()}>
                        Next
                    </button>
                </div>
            </div>
        </div>
    )
}
export default EmployeeTable