"use client"

import * as React from "react"
import {
  type ColumnDef,
  type ColumnFiltersState,
  type SortingState,
  type VisibilityState,
  flexRender,
  getCoreRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
  type OnChangeFn,
  type PaginationState,
  type RowSelectionState,
} from "@tanstack/react-table"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

import DataTablePagination from "./data-table-pagination"

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: {
    total: number
    data: TData[]
  }
  sorting?: SortingState
  setSorting?: OnChangeFn<SortingState>
  pagination: PaginationState
  setPagination: OnChangeFn<PaginationState>
  columnFilters?: ColumnFiltersState
  setColumnFilters?: OnChangeFn<ColumnFiltersState>
  DataTableToolbar?: any
  isLoading?: boolean
  rowSelection?: RowSelectionState
  setRowSelection?: OnChangeFn<RowSelectionState>
}

export default function DataTable<TData, TValue>({
  columns,
  data,
  DataTableToolbar,
  sorting,
  setSorting,
  setPagination,
  pagination,
  setColumnFilters,
  columnFilters,
  isLoading,
  setRowSelection,
  rowSelection,
}: DataTableProps<TData, TValue>) {
  const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({})

  const table = useReactTable({
    data: data?.data,
    columns,
    state: {
      sorting,
      pagination,
      columnVisibility,
      columnFilters,
      rowSelection: rowSelection || {},
    },

    enableRowSelection: !!rowSelection,
    onRowSelectionChange: setRowSelection,

    manualSorting: true,
    onSortingChange: setSorting,

    manualPagination: true,
    onPaginationChange: setPagination,
    rowCount: data?.total,

    manualFiltering: true,
    onColumnFiltersChange: setColumnFilters,

    onColumnVisibilityChange: setColumnVisibility,
    getCoreRowModel: getCoreRowModel(),

    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
  })

  return (
    <div className="space-y-4">
      {DataTableToolbar && <DataTableToolbar table={table} />}

      <div>
        <Table>
          <TableHeader className=" bg-[#F6F6F6] rounded-lg border-none" >
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id} className="border-none">
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id} colSpan={header.colSpan}>
                      {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {isLoading ? (
              <TableRow>
                <TableCell colSpan={columns.length} className="h-24 text-center text-slate-600">
                  Loading...
                </TableCell>
              </TableRow>
            ) : table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row, index) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                  className={`border-none ${index % 2 === 0 ? "bg-gray-50" : ""}`}
                 >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="h-24 text-center">
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <DataTablePagination table={table} />
    </div>
  )
}
