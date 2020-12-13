type optionObject = {
  take?: number;
  where?: Object;
  skip?: number;
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

const makeSearchOption = (_query: any, _target: string): Object => {
  const { limit, filter, page } = _query;
  const optObj: optionObject = {};

  if (limit) {
    optObj.take = +limit;
  }
  if (filter) {
    optObj.where = {
      [_target]: { contains: filter },
    };
  }
  if (!limit && page) {
    optObj.skip = (+page - 1) * 10;
    optObj.take = 10;
  }
  return optObj;
};

export { makeOption, makeSearchOption };
