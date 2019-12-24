import React from 'react';
import styled, { css } from 'styled-components';
import { Skeleton, Table as AntdTable } from 'antd';

import { TableProps as AntdTableProps} from 'antd/lib/table';
import { PaginationProps as AntdPaginationProps } from 'antd/lib/pagination';

const StyledTable = (styled(AntdTable)`
  width: 100%;
  & > * ul li a.ant-pagination-item-link {
    line-height: 2.5;
  }
  & > * .ant-table-pagination {
    margin-bottom: 0 !important;
  }
` as React.ComponentType) as new <T>() => AntdTable<T>;

interface PaginationProps extends AntdPaginationProps {
  pageSize: number;
}

interface TableProps<T> extends AntdTableProps<T> {
  pagination: PaginationProps;
}

function Table<T>(props: TableProps<T>) {
  if (props.loading) {
    return <TableLoader<T> {...props} />;
  } else {
    return <StyledTable<T> {...props} />;
  }
}

function TableLoader<T>(props: TableProps<T>) {
  const dataCount = props.dataSource && props.dataSource.length;
  const paginationPageCount = props.pagination && props.pagination.pageSize;

  const loaderRowCount = dataCount || paginationPageCount || 0;

  return (
    <Table<T>
      style={{ width: '100%' }}
      pagination={props.pagination}
      rowKey={(index: any, i: number) => i.toString()}
      columns={[
        {
          title: '',
          key: 'key',
          render: (enrollmentAggregate: any) => (
            <Skeleton
              loading={true}
              active={true}
              paragraph={{ style: { margin: '0 auto' }, rows: 0 }}
            />
          ),
        },
      ]}
      dataSource={Array(loaderRowCount).fill({} as T)}
      // TODO I know this is bad. :) I gave it some default values because if I just map the props
      //  of the original table and it is empty then it won't display the loader
    />
  );
}

export default Table;
