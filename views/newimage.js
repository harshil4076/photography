const layout = require('./partials/layout')

module.exports = ()=>{

    return layout({
        content : `

                    <div class="d-flex justify-content-center">
                    <form action="/newimage" method="POST" class="">
                        <div class="form-group">
                            <input type="text" class="form-control"  placeholder="category" name="category">
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-control" placeholder="name" name="name">
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-control" placeholder="image url" name="image">
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-control" placeholder="Description" name="description">
                        </div>
                        <div class="form-group d-flex justify-content-center">
                            <button class="btn btn-primary">Save</button>
                        </div>
                    </form>
                </div> 
                `
    })

}

    