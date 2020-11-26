type obtionObject = {
    take? : number
    where? : object
}
const makeOption = (_query:any, _target:any, _type:string) => {
    const {limit,filter} = _query
    let obtObj : obtionObject = {}

    if(limit) { 
        obtObj.take = +limit
    }
    if(filter){
        if(_type === 'string') { obtObj.where = {[_target] : filter } }
        if(_type === 'object') { obtObj.where = _target }
        if(_type === 'number') { obtObj.where = {[_target] : +filter } }
    }

    return obtObj
}

export default makeOption
