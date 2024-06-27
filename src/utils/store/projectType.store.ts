  
let sharedProjectType: any = {
  name: '',
};

const setSharedProjectType = (key: string, value: any): void => {
  sharedProjectType[key] = value;
};

const getSharedProjectType = (name: string): any => {
  return sharedProjectType[name];
};

export { setSharedProjectType, getSharedProjectType };