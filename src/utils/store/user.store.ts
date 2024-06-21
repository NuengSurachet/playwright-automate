interface SharedUser {
  [key: string]: any;
}

let sharedUser: SharedUser = {};

const setSharedUser = (key: string, value: any): void => {
  sharedUser[key] = value;
};

const getSharedUser = (key: string): any => {
  return sharedUser[key];
};

export { setSharedUser, getSharedUser };
