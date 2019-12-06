import axios from 'axios'

export default function () {
    let random = Math.floor(Math.random() * 255);
    axios.get(`http://numbersapi.com/${random}`).then(res => {
        console.log(res.data)
    })
}