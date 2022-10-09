document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));
document.querySelector("button").addEventListener("click", function() {

    let key = document.querySelector("textarea").value;
    let rows = key.split("\n")
    for (const [i, row] of rows.entries()) {

        let [first, second] = row.toLowerCase().trim().split("_");
        let log = `${first}${second.replace(second[0],second[0].toUpperCase())+second.slice() }`
        console.log(`${log.padEnd(20)}${'🤞'.repeat(i+1)}`)

    }
})