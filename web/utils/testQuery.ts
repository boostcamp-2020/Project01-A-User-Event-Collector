type obtionObject = {
    take? : number
    where? : object
}
const makeOption = (_query:any, _target:any, _type:string) => {
    const {limit,filter} = _query
    let optObj : obtionObject = {}

    if(limit) { 
        optObj.take = +limit
    }
    if(filter){
        if(_type === 'string') { optObj.where = {[_target] : filter } }
        if(_type === 'object') { optObj.where = _target }
        if(_type === 'number') { optObj.where = {[_target] : +filter } }
    }

    return optObj
}

export default makeOption
