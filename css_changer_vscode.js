// I created this for another site and it worked relatively well just needs work on parsing RGB
// TODO implement HSL
// css_changer_vscode.js
// ms-vscode.vscode-typescript-next
var temp = [...document.querySelectorAll('*')].map(e=>e.style.backgroundColor)
// temp = temp.filter(f=>{return f.indexOf('rgb') == -1 || f.indexOf(' ') == -1 || f.indexOf('inherit') != -1 ? true : false})
temp = temp.filter(f=>{return f.indexOf('rgb') == -1 || f.indexOf(' ') == -1 || f.indexOf('inherit') == -1 ? true : false})
// temp.filter(f=>f.indexOf(' ') == -1)
// temp.filter(f=>f)
// temp.forEach(f=>{console.table(f.indexOf(' ') == -1)})
var background_colors = temp.filter(f=>f)
background_colors.map(e=>{try {
    // var pass_bool = e.indexOf('inherit') != -1 ? 'fail' : console.count("Not sure why the initial cleanse did not wipe that")
    var rgb_raw = e.split(', ')[0]
    // var rgb_removed = rgb_raw.replace('rgb(', '0063600')
    // var rgb_removed = rgb_raw.split('rgb(')[0]
    var rgb_removed = rgb_raw.split('rgb(')//[0]
    // var rgb_removed = rgb_removed.split(',')//[0]
    console.count(rgb_removed)
    return rgb_removed
} catch (error) {
    console.error(error)
}})
