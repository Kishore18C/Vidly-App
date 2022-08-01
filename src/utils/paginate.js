import _ from 'lodash'

export function paginate(movies, pageNumber, pageSize){
    const startIndex = (pageNumber - 1 ) * pageSize
    // const slice = _.slice(movies, startIndex)
    // const take = _.take(slice, pageSize)
    // return take

    return _(movies).slice(startIndex).take(pageSize).value()

}