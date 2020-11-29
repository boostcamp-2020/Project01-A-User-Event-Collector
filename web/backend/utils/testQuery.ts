type optionObject = {
  take?: number;
  where?: Object;
};

const makeOption = (_query: any, _target?: any, _type?: string): Object => {
  const { limit, filter } = _query;
  const optObj: optionObject = {};

  if (limit) {
    optObj.take = +limit;
  }
  if (filter) {
    if (_type === "string") {
      optObj.where = { [_target]: filter };
    }
    if (_type === "object") {
      optObj.where = _target;
    }
    if (_type === "number") {
      optObj.where = { [_target]: +filter };
    }
  }

  return optObj;
};

export default makeOption;
