const bioData = require('./biometrics-data')

var args = process.argv.slice(2);
const [context] = args

// TODO: Select data set via hash using arg "context" as the key //

const usersSecureIds = ["a", "b", "c", "d"] // TODO: Replace with actual account secure ids //

const generateIdentifiers = (n) => 
    [...Array(n).keys()].map(num => [num, `prid:${num}`])

const identifiers = generateIdentifiers(100)

const getRandomElement = (array) => () => 
    array[Number.parseInt(Math.random() * array.length)]

const getRandomBioData = getRandomElement(bioData.biometricsData)
const getRandomSecureId = getRandomElement(usersSecureIds)
const getRandomIdentifiers = getRandomElement(identifiers)

const preparedData = identifiers.map(ids => {
    const [id, prid] = ids
    const item = getRandomBioData()
    item.id = id
    item.secureId = getRandomSecureId()
    item.source.meta.persistentRecordId = prid
    return item
})

const getCountsBySecureId = (dataArray) =>
    dataArray.reduce((a, v) => {
        a[v.secureId] = (a[v.secureId] === undefined) ? a[v.secureId] = 1 : a[v.secureId] + 1
        return a
    }, {})

const wrapInStatistics = (dataArray) => {
    dataArray.countsBySecureId = getCountsBySecureId(dataArray)
    return dataArray
}

// Use the wrapInStatistics data to call the API and .countsBySecureId to understand the input dataset
// Next we should likely generate requests from this set, and calculate the outcomes for the test to test against
// As noted up top, we can customize for each data type and use the context argument to switch the json data set

console.log(wrapInStatistics(preparedData).countsBySecureId)


