export default function ({ redirect, route }) {
    let password = route.query.password
    if(password != '1234') {
    return redirect('/');
    }
}