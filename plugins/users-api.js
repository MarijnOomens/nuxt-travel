import axios from 'axios'
const $getUsers = async () => await axios.get('https://uinames.com/api/?amount=15')

export default ({app}, inject) => {
    inject('getUsers', $getUsers)
}