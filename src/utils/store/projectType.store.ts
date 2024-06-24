interface SharedProjectType {
    [key: string]: any;
  }
  
  let sharedProjectType: SharedProjectType = {};
  
  const setSharedProjectType = (key: string, value: any): void => {
    sharedProjectType[key] = value;
  };
  
  const getSharedProjectType = (key: string): any => {
    return sharedProjectType[key];
  };
  
  export { setSharedProjectType, getSharedProjectType };