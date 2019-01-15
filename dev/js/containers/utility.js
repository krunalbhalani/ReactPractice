
export default function (yourObject) {
    Object.keys(yourObject).map(function(key) {
    console.log(<div>Key: {key}, Value: {yourObject[key]}</div>);
    })

}