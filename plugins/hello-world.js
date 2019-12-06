const $helloWorld = () => console.log('Hello world')

export default ({app}, inject) => {
    inject('helloWorld', $helloWorld);
}
