export interface DataList<Data = any> {
  data: Data[];
  page: number;
  pageSize: number;
  totalItem: number;
  totalPage: number;
}
