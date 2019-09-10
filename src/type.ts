// Data object interface
export interface IItem {
  _id: string,
  title: string,
  content: string,
  userId: string,
  creationDate: string,
};

export interface IPager {
  totalItemsNum: number,
  currentPage: number,
  pageSize: number,
  totalPages: number,
  startPage: number,
  endPage: number,
  startIndex: number,
  endIndex: number,
  pages: Array<number>,
};

// Reudcer interface
export interface IUserReducer {
  isLoggedIn: boolean,
  isCheckDuplicate: boolean,
  id: string,
  name: string,
};

export interface ITableReducer {
  totalItems: Array<IItem>,
  items: Array<IItem>,
  itemInfo: IItem,
};

// State interface
export interface IState {
  user: IUserReducer,
  table: ITableReducer,
};