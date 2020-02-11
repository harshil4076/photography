module.exports = (category) => {
    const returnedCategory = category.map(category => {
        return `
        
        `
    })

    return `
        <form method="POST">
        <input type="text" placeholder="add category" name="category" />
        <button>Submit</button>
        </form>        
    `
}