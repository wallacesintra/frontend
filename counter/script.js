const product = document.getElementById("productItem")
const price = Number(product.dataset.price)
var countNode = document.getElementById("itemCount")
count = Number(countNode.dataset.count)
const btnIncrement = document.getElementById("increment")
const btnDecrement = document.getElementById("decrement")
const totalNode = document.getElementById("total")


console.log(`type is ${typeof count} value ${count}`)

var total = () => {
    var total = count * price
    console.log(total)
    totalNode.innerHTML = total
    // return total
}

const increment = async () => {
    count++
    countNode.innerHTML = count
    return count
}
const decrement = async () => {
    count--
    countNode.innerHTML = count
    return count
}

btnDecrement.addEventListener('click', async () => {
    if(count > 0)
    {
        await decrement();
        total()

    }
})

btnIncrement.addEventListener('click', async () => {
    await increment()
    total()

})
